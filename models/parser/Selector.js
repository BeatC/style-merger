'use strict';

var Selector = function (options) {
    options = options || {};
    
    this._selectors = options.selectors || [];
}

Selector.prototype.addSelector = function (selector) {
    this._selectors.push(selector);
}

Selector.prototype.toString = function () {
    return this._selectors.join(' ').trim();
}

module.exports = Selector;