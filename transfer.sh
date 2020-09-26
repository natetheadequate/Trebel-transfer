#!/bin/sh

adb shell input text "$1\ $2 \n";
sleep 2;
adb exec-out uiautomator dump /dev/tty | sed 's/<\/hierarchy>.*/<\/hierarchy>/g' | sed 2d > /home/natetheadequate/Documents/Programs/Trebel-transfer/CurrentlyDisplayed.xml
sleep 2;
node getBounds.js $1 $2


