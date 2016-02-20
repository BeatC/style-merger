'use strict';

var Document = function (options) {
    options = options || {};
    
    this._elements = options.elements || [];
}

Document.prototype.toString = function () {
   
    var result = this._elements.reduce(function (acc, el, index, arr) {
        acc += el.toString();
        
        if (index < (arr.length - 1)) {
            acc += '\n\n';
        }
        
        return acc;
    }, '');
    
    return result;
};


module.exports = Document;