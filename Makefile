BSB = "$$(npm bin)/bsb"
WEBPACK = "$$(npm bin)/webpack"
CHOKIDAR = "$$(npm bin)/chokidar"

npm:
	npm install

revision:
	./revision.sh

bucklescript: revision
	$(BSB) -make-world

prepare-bundle:
	mkdir -p build/bundle/js
	cp -r web/* build/bundle
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/bundle.html" web/index.html > build/bundle/index.html

build-bundle: bucklescript prepare-bundle
	$(WEBPACK)

watch-bundle: prepare-bundle
	$(CHOKIDAR) "web/**" "src/**" -c './revision.sh "{path}"' & \
	$(CHOKIDAR) "web/**" -c './chokidar.sh "{event}" "{path}" bundle' & \
	$(BSB) -make-world -w & $(WEBPACK) -w

prepare-require: revision
	mkdir -p build/require
	cp -r web/* build/require
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/require.html" web/index.html > build/require/index.html
	ln -sf $$(find "$(CURDIR)/node_modules/" -maxdepth 1 -mindepth 1 \( -type d -o -type l \) -not -name ".bin") build/require
	ln -sf "$(CURDIR)/lib/amdjs/src" build/require

build-require: prepare-require bucklescript

watch-require: prepare-require
	$(CHOKIDAR) "web/**" "src/**" -c './revision.sh "{path}"' & \
	$(CHOKIDAR) "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	$(BSB) -make-world -w

serve-require: prepare-require
	$(CHOKIDAR) "web/**" "src/**" -c './revision.sh "{path}"' & \
	$(CHOKIDAR) "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	$(BSB) -make-world -w & (cd build/require && python3 -m http.server)

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

build: build-bundle build-require
all: npm build

clean:
	$(BSB) -clean-world
	rm -vrf lib build

.PHONY: npm bucklescript prepare-bundle build-bundle watch-bundle serve-bundle prepare-require build-require watch-require serve-require test watch-test build all clean
.DEFAULT_GOAL := all
