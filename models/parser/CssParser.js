'use strict';

var extend = require('../util/extend.js');
var Rule = require('./Rule.js');
var Element = require('./Element.js');
var Selector = require('./Selector.js');

var CssParser = function (options) {
    options = options || {};
    
    this._elementPattern = /(.*)\{\s(\s*.*\s)*\}/gi;
};

CssParser.prototype.parseElement = function (elementString) {
    var result = this._elementPattern.exec(elementString);
    
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
        var pair = rule.split(/[\:\s]+/)
        .filter(function (el) { 
            return el !== '';
        });
        
        return new Rule(pair[0], pair[1]);
    });
    
    return new Element({
        selectors: selectorList,
        rules: rules
    })
};

module.exports = CssParser;