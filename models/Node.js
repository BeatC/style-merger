'use strict';

function Node (name)
{
	this.name = name;
	this.nodeData = "";
	this.parent = null;
	this.children = [];
};

Node.prototype.add = function (node) {
	this.children.push(node);
	node.parent = this;
};
Node.prototype.remove = function(node) {
	var removeNode = this.find(node.name);
	if (removeNode !== null)
	{
		var parent = removeNode.getParent();
		parent.getChildren(removeNode);
		parent.children = parent.children.filter(function (el) {
			return el !== removeNode;
		});

		node.parent = null;
	}
	throw new Error("BLA BLA")
};
Node.prototype.find = function(name) {
	var node = null;
	var list =  this.children.filter(function (el) {
		return el.name === name;
	});

	if (list.length !== 0) {
		node = list.shift();
	}

	return node;
};
Node.prototype.getChildren = function(name) {
	var name = null;
	var list = this.children.filter(function (el) {
		return el.name === name;
	});

	if (list.length !== 0) 
	{
		name = list.shift();
	} 

	return name;

};
Node.prototype.getParent = function() {
	return this.parent;
};
module.exports = Node