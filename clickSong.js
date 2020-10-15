const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const { execSync } = require("child_process");
const { default: click } = require("./click");
const file = fs.readFileSync('CurrentlyDisplayed.xml').toString();
let song = process.argv[3];
const artist = process.argv[2];
if(!click('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*=\"' + song + '\"]~node[resource-id="com.mmm.trebelmusic:id/explicity"]~node[text="' + artist + '"]')){
     if(!click('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*="' + song + '"]~node[text="' + artist + '"]')){

     }
}
if (el) {
    let boundsarr = el.getAttribute('bounds').replace('][', ',').replace('[', '').replace(']', '').split(',');
    const [x,y]=getBounds(el)
    execSync('adb shell input tap '+x+' '+y)
    if(click('node[text="Download For Free"]')){
        console.log('Downloadable');
    };
} else {
    fs.appendFile('errorLog.txt', artist + ' ' + song + '\n', () => { });
    exec("echo '"+song+" by "+artist+"' >> errorLog.txt;adb shell input tap 908 322 # clear search bar;");
}