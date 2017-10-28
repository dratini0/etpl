#!/bin/sh

# Does well as a post-commit hook too
# This is used with Chokidar, so avoid tasty infinite loops
if [ "x$1" = "xsrc/revision.ml" ]; then exit; fi

(
    echo -n 'let gitRevision = "'
    git describe --dirty | tr -d "\n"
    echo "\""
) | tee "src/revision.ml"
