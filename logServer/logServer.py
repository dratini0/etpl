#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# logServer.py
# Copyright 2017-2018 Balint Kovacs

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from uuid import uuid4
import datetime
import os
import json
import apsw
from flask import request, g
from flask_api import FlaskAPI, status, exceptions
import jsonschema
import jwt
from flask_cors import CORS

class DefaultConfig(object):
    JWT_VALIDITY = datetime.timedelta(days=1)
    JWT_LEEWAY = datetime.timedelta(seconds=10)
    DATABASE = 'database.sqlite'
    RECORD_SCHEMA = "record.schema.json"

    CORS_ALLOW_HEADERS = "*"
    CORS_MAX_AGE = 3600
    CORS_SEND_WILDCARD = True

CREATE_STATEMENT = '''
CREATE TABLE IF NOT EXISTS records (
    sessionID TEXT NOT NULL,
    received REAL NOT NULL,
    timestamp REAL NOT NULL,
    json TEXT NOT NULL
)
'''
INSERT_STATEMENT = '''
INSERT INTO records (sessionID, received, timestamp, json)
VALUES (?, ?, ?, ?)
'''

app = FlaskAPI(__name__)
app.config.from_object(DefaultConfig)
app.config.from_object('settings')
app.config.from_envvar('SETTINGS_FILE', silent=True)
CORS(app)

RECORD_SCHEMA = json.load(open(app.config['RECORD_SCHEMA'], "r"))

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = apsw.Connection(app.config['DATABASE'])
        cursor = db.cursor()
        cursor.execute(CREATE_STATEMENT)
    return db

def wrap_error(e, code):
    return ({"error": e, "code": code}, code)

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route("/token")
def issue_token():
    now = datetime.datetime.utcnow()
    message = {
        "iat": now,
        "exp": now + app.config['JWT_VALIDITY'],
        "aud": uuid4().urn
    }
    message["token"] = jwt.encode(message, app.config['JWT_SECRET']).decode("ascii")
    return message

@app.route("/record", methods=["GET", "POST"])
def record():
    if request.method == "GET":
        return wrap_error("Method only allowed to show interface", status.HTTP_405_METHOD_NOT_ALLOWED)
    try:
        jsonschema.validate(request.data, RECORD_SCHEMA)
    except jsonschema.exceptions.ValidationError as e:
        return wrap_error(str(e), status.HTTP_400_BAD_REQUEST)

    try:
        jwt.decode(request.data["token"], app.config['JWT_SECRET'], leeway=app.config['JWT_LEEWAY'], audience=request.data["aud"])
    except jwt.exceptions.InvalidTokenError as e:
        return wrap_error("Invalid token: " + str(e), status.HTTP_403_FORBIDDEN)

    now = datetime.datetime.utcnow().timestamp()
    result = []
    allgood = True
    db = get_db()
    cursor = db.cursor()
    for line in request.data["data"]:
        data = json.dumps(line)
        if len(data) > 10240:
            allgood = False
            result.append(wrap_error("Object to large", status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)[0])
            continue
        try:
            cursor.execute(INSERT_STATEMENT, (request.data["aud"], now, line["timestamp"], data))
            result.append({"code": 200})
        except apsw.Error as e:
            allgood = False
            result.append(wrap_error("Database error", status.HTTP_500_INTERNAL_SERVER_ERROR)[0])
    if allgood:
        return {"code": 200}
    else:
        return {"statuses": result, "code": status.HTTP_400_BAD_REQUEST}, status.HTTP_400_BAD_REQUEST

if __name__ == "__main__":
    app.run(debug=True)
