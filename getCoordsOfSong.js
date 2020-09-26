var fs = require('fs'),
    xml2js = require('xml2js');
var util = require('util');
var parser = new xml2js.Parser();
fs.readFile(__dirname + '/CurrentlyDisplayed.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        r=result.getElementsByTagName('node');
        console.dir(r);
        console.log(util.inspect(JSON.stringify(result), false, null));
        console.log('Done');
    });
});