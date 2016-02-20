'use strict';

var extend = function (Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    
    Child.prototype.super = Parent.prototype;
    Child.prototype.constructor = Child;
};

module.exports = extend;