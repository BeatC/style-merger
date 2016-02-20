var CssParser = require('./models/parser/ElementParser.js');

var parser = new CssParser();
var result = parser.parseElement("#footer a { font-size: 10px; color: red; }");

console.log(result);