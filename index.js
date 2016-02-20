var DocumentParser = require('./models/parser/DocumentParser.js');
var fs = require('fs');

fs.readFile('./test/bootstrap.min.css', function (err, data) {
    
    var p = new DocumentParser();
    var doc = p.parseDocument(data.toString());
    
    fs.writeFile('test/bootstrap.beauty.css', doc.toString(), function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });


});