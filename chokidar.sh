#!/bin/sh

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
