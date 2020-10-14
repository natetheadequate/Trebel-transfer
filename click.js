const { Console } = require("console");

function click(selector, attempt) {
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
    console.log('hih');
    if (el) {
        const [x, y] = getLocation(el);
        console.log('hi');
        execSync('adb shell input tap ' + x + ' ' + y);
        return 0;
    } else {
        if (attempt < 12) { console.log(attempt); setInterval(click(selector, ++attempt), 500); }
        else { throw new Error("No such element"); }
    }
}
click(process.argv[2], 0);