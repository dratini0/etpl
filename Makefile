export PATH := node_modules/.bin:$(PATH)

npm:
	npm install

revision:
	./revision.sh

bucklescript: revision
	bsb -make-world

prepare-bundle:
	mkdir -p build/bundle/js
	cp -r web/* build/bundle
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/bundle.html" web/index.html > build/bundle/index.html

build-bundle: bucklescript prepare-bundle
	webpack

watch-bundle: prepare-bundle
	chokidar "web/**" "src/**" -c './revision.sh "{path}"' & \
	chokidar "web/**" -c './chokidar.sh "{event}" "{path}" bundle' & \
	bsb -make-world -w & webpack -w

serve-bundle: prepare-bundle
	chokidar "web/**" "src/**" -c './revision.sh "{path}"' & \
	chokidar "web/**" -c './chokidar.sh "{event}" "{path}" bundle' & \
	bsb -make-world -w & webpack -w & (cd build/bundle && python3 -m http.server)

prepare-require: revision
	mkdir -p build/require
	cp -r web/* build/require
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/require.html" web/index.html > build/require/index.html
	ln -sf $$(find "$(CURDIR)/node_modules/" -maxdepth 1 -mindepth 1 \( -type d -o -type l \) -not -name ".bin") build/require
	ln -sf "$(CURDIR)/lib/amdjs/src" build/require

build-require: prepare-require bucklescript

watch-require: prepare-require
	chokidar "web/**" "src/**" -c './revision.sh "{path}"' & \
	chokidar "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	bsb -make-world -w

serve-require: prepare-require
	chokidar "web/**" "src/**" -c './revision.sh "{path}"' & \
	chokidar "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	bsb -make-world -w & (cd build/require && python3 -m http.server)

test: bucklescript
	node_modules/infinite-jest/node_modules/.bin/jest

watch-test: revision
	bsb -make-world -w > /dev/null & \
	node_modules/infinite-jest/node_modules/.bin/jest --watchAll

build: build-bundle build-require
all: npm build

clean:
	bsb -clean-world
	rm -vrf lib build

.PHONY: npm bucklescript prepare-bundle build-bundle watch-bundle serve-bundle prepare-require build-require watch-require serve-require test watch-test build all clean
.DEFAULT_GOAL := all
