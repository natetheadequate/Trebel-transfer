const { execSync } = require("child_process");
const { click } = require('./click.js')

execSync('adb shell am start -n com.mmm.trebelmusic/.activity.MainActivity');
click('node[content-desc="Navigate up"]');
click('node[text="Search"]');
click('node[resource-id="com.mmm.trebelmusic:id/searchEt"]');
console.log("Trebel Started, at search bar");