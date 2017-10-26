# _build/ml/tests.byte: ml/*.ml
# 	ocamlbuild -use-ocamlfind -plugin-tag "package(js_of_ocaml.ocamlbuild)" ml/tests.byte

# _build/ml/js_export.js: ml/*.ml
# 	ocamlbuild -use-ocamlfind -plugin-tag "package(js_of_ocaml.ocamlbuild)" ml/js_export.js

# builddirs:
# 	mkdir -p build/ml
# 	mkdir -p build/web

# build.ml/tests.byte: builddirs _build/ml/tests.byte

# all: _build/ml/tests.byte _build/ml/js_export.js
# build: all

# clean:
# 	ocamlbuild -clean

# .PHONY: all clean
# .DEFAULT_GOAL := all

export PATH := node_modules/.bin:$(PATH)

npm:
	npm install

bucklescript:
	bsb

prepare-bundle:
	mkdir -p build/bundle/js
	cp -r web/* build/bundle
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/bundle.html" web/index.html > build/bundle/index.html

build-bundle: prepare-bundle
	webpack

watch-bundle: prepare-bundle
	node_modules/.bin/chokidar "web/**" -c './chokidar.sh "{event}" "{path}" bundle' & \
	bsb -w & webpack -w

serve-bundle: prepare-bundle
	node_modules/.bin/chokidar "web/**" -c './chokidar.sh "{event}" "{path}" bundle' & \
	bsb -w & webpack -w & (cd build/bundle && python3 -m http.server)

prepare-require:
	mkdir -p build/require
	cp -r web/* build/require
	sed -e "/^\\s*<\!-- js includes -->\$$/r web/head/require.html" web/index.html > build/require/index.html
	ln -sf $$(find "$(CURDIR)/node_modules/" -maxdepth 1 -mindepth 1 -type d -not -name ".bin") build/require
	ln -sf "$(CURDIR)/lib/amdjs/src" build/require

build-require: prepare-require bucklescript

watch-require: prepare-require
	node_modules/.bin/chokidar "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	bsb -w

serve-require: prepare-require
	node_modules/.bin/chokidar "web/**" -c './chokidar.sh "{event}" "{path}" require' & \
	bsb -w & (cd build/require && python3 -m http.server)

build: build-bundle build-require
all: npm build

clean:
	rm -rf lib build

.PHONY: npm bucklescript prepare-bundle build-bundle watch-bundle serve-bundle prepare-require build-require watch-require serve-require build all clean
.DEFAULT_GOAL := all
