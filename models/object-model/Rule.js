'use strict';

var Rule = function (rule, value) {
    this.rule = rule;
    this.value = value;
}

Rule.prototype.toString = function () {
    return '\t' + this.rule + ': ' + this.value + ';';
}

module.exports = Rule;