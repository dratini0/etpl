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
	sed -i~ -e "s_SCRIPTPATH_js/bundle.js_" build/bundle/index.html

build-bundle: prepare-bundle
	webpack

watch-bundle: prepare-bundle
	bsb -w & webpack -w

serve-bundle: prepare-bundle
	bsb -w & webpack -w & (cd build/bundle && python3 -m http.server)

prepare-es6:
	mkdir -p build/es6
	cp -r web/* build/es6
	sed -i~ -e "s_SCRIPTPATH_src/frontend/frontend.js_" build/es6/index.html
	ln -sf $$(find "$(CURDIR)/node_modules/" -maxdepth 1 -mindepth 1 -type d -not -name ".bin") build/es6
	ln -sf "$(CURDIR)/lib/es6/src" build/es6

build-es6: prepare-es6 bucklescript

watch-es6: prepare-es6
	bsb -w

serve-es6: prepare-es6
	bsb -w & (cd build/es6 && python3 -m http.server)

build: build-bundle build-es6
all: npm build

clean:
	rm -rf lib build
