#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# dbToJSON.py
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

import json
import apsw
from sys import stdout
import itertools

DATABASE = "database.sqlite"
QUERY = "SELECT sessionID, received, timestamp, json FROM records"

def jsonPreproc(cursor):
    for sessionID, received, timestamp, jsonData in cursor:
        try:
            decoded = json.loads(jsonData)
            yield {
                "sessionID": sessionID,
                "received": received,
                "timestamp": timestamp,
                "json": decoded,
            }
        except json.JSONDecodeError:
            pass

def main():
    db = apsw.Connection(DATABASE)
    cursor = db.cursor()
    data = list(jsonPreproc(cursor.execute(QUERY)))
    key = lambda i: i["sessionID"]
    data.sort(key=key)
    data = dict((k, list(v)) for k, v in itertools.groupby(data, key=key))
    json.dump(data, stdout)

if __name__ == "__main__":
    main()
