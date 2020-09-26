const { fstat } = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const song = process.argv[3];
const artist = process.argv[2];
const dom = new JSDOM(``, {
    url: "file:///home/Documents/Programs/Trebel-transfer/CurrentlyDisplayed.xml",
    contentType: "text/xml",
    storageQuota: 10000000
});
el = (dom.window.document.querySelector('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*="' + song + '"]~node[resource-id="com.mmm.trebelmusic:id/explicity"]~node[text="' + artist + '"]'))
    || (dom.window.document.querySelector('node[resource-id="com.mmm.trebelmusic:id/recyclerView"] node[text*="' + song + '"]~node[text="' + artist + '"]'))
if (el) {
    boundsarr = el.getAttribute('bounds').replace('][', ',').toArray();
    console.log((boundsarr[0] + boundsarr[1]) / 2 + ' ' + (boundsarr[3] + boundsarr[4]) / 2)
} else {
    fs.writeFile(__dirname+'/errorLog.txt', {artist, song});
    console.log('Cant find song');
}

