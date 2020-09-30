const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const { exec } = require("child_process");
const file = fs.readFileSync('CurrentlyDisplayed.xml').toString();
let song = process.argv[3];
function getBounds(el){
    let boundsarr = el.getAttribute('bounds').replace('][', ',').replace('[', '').replace(']', '').split(',');
    const x = (+boundsarr[0] + +boundsarr[1]) / 2;
    const y = (+boundsarr[2] + +boundsarr[3]) / 2;
    return [x,y];
}
const artist = process.argv[2];
const dom = new JSDOM(file, {
    contentType: 'text/xml'
});
const el = (dom.window.document.querySelector('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*=\"' + song + '\"]~node[resource-id="com.mmm.trebelmusic:id/explicity"]~node[text="' + artist + '"]'))
    || (dom.window.document.querySelector('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*="' + song + '"]~node[text="' + artist + '"]'))
if (el) {
    let boundsarr = el.getAttribute('bounds').replace('][', ',').replace('[', '').replace(']', '').split(',');
    const [x,y]=getBounds(el)
    exec('adb shell input tap '+x+' '+y+';sleep 2;adb shell input tap 600 750; #Download for free');
} else {
    fs.writeFile(__dirname + '/errorLog.txt', artist + ' ' + song + '\n', () => { });
    exec("echo '"+song+" by "+artist+"' >> errorLog.txt;adb shell input tap 908 322 # clear search bar;");
}
///getbounds needs to be separate function ads move the page so we need to be able to get the position dynamically
