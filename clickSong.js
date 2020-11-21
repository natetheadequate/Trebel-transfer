const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const { execSync } = require("child_process");
const { click } = require("./click");
const file = fs.readFileSync('CurrentlyDisplayed.xml').toString();
let song = process.argv[2];
const artist = process.argv[3];
console.warn("Clicking "+song+" by "+artist);
const selectorprefix='node[resource-id="com.mmm.trebelmusic:id/recyclerView"] ';
const selectors=[
    'node[text="' + song + '"]~node[resource-id="com.mmm.trebelmusic:id/explicity"]~node[text="' + artist + '"]',
    'node[text="' + song + '"]~node[text="' + artist + '"]',
]
if(click(selectorprefix+selectors[0])||click(selectorprefix+selectors[1])){
    fs.appendFile("succesfulTransfer.txt", song+","+artist+"\n",() => { });
} else {
    fs.appendFile('errorLog.txt', song + ',' + artist + '\n', () => { });
}