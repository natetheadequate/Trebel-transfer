const { execSync } = require("child_process");
//const { click } = require('./click.js');

execSync('adb shell am start -n com.mmm.trebelmusic/.activity.MainActivity');
execSync(`node click.js 'node[text="Search"]'`,{stdio:'inherit'});
console.log("Trebel Started, at search bar");