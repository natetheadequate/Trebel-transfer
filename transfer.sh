#!/bin/sh

adb shell input text '"'$1 $2'"';
adb shell input tap 945 2041; #hit enter
sleep 1;
adb shell input tap 316 476; #hit songs
adb exec-out uiautomator dump /dev/tty | sed 's/<\/hierarchy>.*/<\/hierarchy>/g' | sed 2d > /home/natetheadequate/Documents/Programs/Trebel-transfer/CurrentlyDisplayed.xml
node getBounds.js "$1" "$2";



