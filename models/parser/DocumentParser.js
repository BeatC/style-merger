'use strict';

var ElementParser = require('./ElementParser.js');
var Document = require('../object-model/Document.js');

var DocumentParser = function (options) {
    options = options || {};
    
    this.documentPattern = /([#\.\-\w\s:]+\{[\s\w:\-%!\(\)\.\,#;"']*\})/gi;
}

DocumentParser.prototype.parseDocument = function (documentStr) {
    var element;
    var elementsRawList = [];
    
    while (true) {
        element = this.documentPattern.exec(documentStr);
        
        if (element === null) {
            break;
        }
        
        element = element[0];
        elementsRawList.push(element.trim()); 
    }
    
    var elementsList = elementsRawList.map(function (element) {
        var parser = new ElementParser();
        return parser.parseElement(element);
    }).filter(function (el) { return el !== null });
    
    return new Document({
        elements: elementsList
    });
};

module.exports = DocumentParser;