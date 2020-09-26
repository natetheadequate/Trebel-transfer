#!/bin/sh

cat $1 | sed 's/"//g' | sed 's/([^)]*)//g' | sed 's/\[.*\]//g' | sed -E 's/ +/ /g' | sed 's/ *, */,/g'
