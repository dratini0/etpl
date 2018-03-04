#!/bin/sh

# chokidar.sh
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

realfilename="$(echo "$2" | cut -d/ -f2-)"

if [ "$1" = "unlink" ]; then
    echo rm "build/$3/$realfilename"
    rm "build/$3/$realfilename"
    exit
fi

echo cp "$2" "build/$3/$realfilename"
cp "$2" "build/$3/$realfilename"

case "$realfilename" in
    index.html | head/*.html)
        echo sed -e "/^\\s*<!-- js includes -->\$/r web/head/$3.html" web/index.html ">" "build/$3/index.html"
        sed -e "/^\\s*<!-- js includes -->\$/r web/head/$3.html" web/index.html > "build/$3/index.html"
        ;;
esac
