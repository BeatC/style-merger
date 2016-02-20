'use strict';

var Rule = require('../object-model/Rule.js');
var Element = require('../object-model/Element.js');
var Selector = require('../object-model/Selector.js');

var ElementParser = function (options) {
    options = options || {};
    
    this._elementPattern = /(.*)\{([\w\-:;!%\(\)\,\.#\s]+)\}/gi;
};

ElementParser.prototype.parseElement = function (elementString) {
    var result = this._elementPattern.exec(elementString);
    
    console.log(result);
    if (result !== null) {
        // Divide by elements
        var selectors = result[1].split(/\s/).filter(function (el) { return el !== ''; });
        
        var selector = new Selector({
            selectors: selectors
        })
        
        var selectorList = [];
        selectorList.push(selector);
        
        // Divide by rules
        var rules = result[2].trim()
        .split(/;/)
        .filter(function (el) { 
            return el !== ''; 
        }).map(function (rule) {
            var pair = rule.split(/[:]+/gi)
            .map(function (el) {
                return el.trim();
            })
            .filter(function (el) { 
                return el !== '';
            });
            
            return new Rule(pair[0], pair[1]);
        });
        
        return new Element({
            selectors: selectorList,
            rules: rules
        })   
    }
    
    return null;
};

module.exports = ElementParser;