const { execSync } = require("child_process");
const { argv } = require("process");
const song=process.argv[2].replace(" ","\\ ");
const artist=process.argv[3].replace(" ","\\ ");

execSync('adb shell input text "'+artist+'\\ '+song+'"');
execSync('adb shell input keyevent KEYCODE_ENTER');
execSync('adb shell input keyevent KEYCODE_ENTER');

execSync('node click.js "node[resource-id=\\"com.mmm.trebelmusic:id/tabLayout\\"] node[text=\\"Songs\\"]"');
execSync('node clickSong.js "'+song+'" "'+artist+'"');