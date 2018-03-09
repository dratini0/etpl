# Makefile
# Copyright 2017-2018 Balint Kovacs

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

# 	http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

BSB = "$$(npm bin)/bsb"
WEBPACK = "$$(npm bin)/webpack"
WEBPACK-DEV-SERVER = "$$(npm bin)/webpack-dev-server"
CHOKIDAR = "$$(npm bin)/chokidar"

npm:
	npm install

revision:
	./revision.sh

build: revision
	$(BSB) -make-world
	mkdir -p build/bundle/js
	cp -r web/* build/bundle
	$(WEBPACK)

serve: revision
	$(CHOKIDAR) "web/**" "src/**" -c './revision.sh "{path}"' & \
	$(WEBPACK-DEV-SERVER) --config webpack.config.dev.js & \
	$(BSB) -make-world -w

test: bucklescript
	node_modules/infinite-jest/node_modules/.bin/jest

buildtest:
	temp=$$(mktemp -d); \
	pwd=$$(pwd); \
	cd $$temp; \
	git clone $$pwd etpl; \
	cd etpl; \
	make; \
	make test; \
	rm -rf $$temp

watch-test: revision
	$(BSB) -make-world -w > /dev/null & \
	node_modules/infinite-jest/node_modules/.bin/jest --watchAll

all: npm build

build/bundle.zip: build
	rm -f build/bundle.zip
	cd build && zip -r bundle.zip bundle

release: build/bundle.zip
	cp -rT build/bundle ../etpl-pages/demo/$(shell git describe --dirty | tr -d "\n")
	cp -T build/bundle.zip ../etpl-releases/$(shell git describe --dirty | tr -d "\n").zip


clean:
	$(BSB) -clean-world
	rm -vrf lib build

.PHONY: npm bucklescript revision build serve test watch-test all release clean
.DEFAULT_GOAL := all
