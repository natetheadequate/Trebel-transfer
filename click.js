function click(selector,attempt=0) {
    const jsdom = require("jsdom");
    const getLocation = require("./getLocation");
    const { JSDOM } = jsdom;
    const fs = require("fs");
    const { exec } = require("child_process");
    const file = exec('adb exec-out uiautomator dump /dev/tty',(a,stdout,z)=>stdout);
    const dom = new JSDOM(file, {
        contentType: 'text/xml'
    });
    const el = dom.window.document.querySelector(selector);
    if (el) {
        const [x, y] = getLocation(el);
        exec('adb shell input tap' + x + y);
        return 0;
    } else {
        if(attempt<12) {console.log(attempt);setInterval(click(selector,++attempt),500);}
        else {throw new Error("No such element");}
    }
}


module.exports={click};