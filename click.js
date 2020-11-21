function click(selector, attempt) {
    console.warn('clicking '+selector+' , attempt='+attempt);
    const jsdom = require("jsdom");
    const getLocation = require("./getLocation.js");
    const { JSDOM } = jsdom;
    const { execSync } = require("child_process");
    const file = execSync('adb exec-out uiautomator dump /dev/tty');
    const filexml=file.toString().replace(/<\/hierarchy>.*/m,'</hierarchy>');
    const dom = new JSDOM(filexml, {
        contentType: 'text/xml'
    });
    const el = dom.window.document.querySelector(selector);
    if (el) {
        const [x, y] = getLocation(el);
        console.warn('location found ('+x+','+y+')');
        execSync('adb shell input tap ' + x + ' ' + y);
        return true;
    } else {
        if (attempt < 5) { console.warn(attempt); setInterval(()=>{click(selector, ++attempt)}, 500); }
        else { console.warn("No such element"); }
        return false;
    }
}
click(process.argv[2], 0);

module.exports={
    click: click
}