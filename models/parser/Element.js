'use strict';

var Element = function (options) {
    options = options || {};
    this._selectors = options.selectors || [];
    this._rules = options.rules || [];
};

Element.prototype.getRules = function () {
    return this._rules;
};

Element.prototype.getSelectors = function () {
    return this._selectors;
}

Element.prototype.toString = function () {
    
    var result = this._selectors.reduce(function (acc, selector, index, array) {
        var str = acc + selector.toString();
        if (index < (array.length - 1)) {
           str += ', ';
        }
        return str;
    }, '');
    
    result += ' {\n';
    result += this._rules.reduce(function (acc, el, index, arr) {
        acc += el.toString();
        
        if (index < (arr.length - 1)) {
            acc += '\n';
        }
        
        return acc;
        
    }, '');
    result += '\n}';
    
    
    return result;
}

module.exports = Element;