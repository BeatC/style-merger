'use strict';

const css = require('css');
const _ = require('lodash');
const Logger = {
  log: console.log,
};
const fs = require('fs');

let readFile = (src, options) => (
  new Promise((resolve, reject) => {
    fs.readFile(src, options, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  })
);

let createAST = (file) => {
  let ast = css.parse(file, { silent: true }).stylesheet;

  let rules = ast.rules;
  let parsingErrors = ast.parsingErrors;
  if (parsingErrors.length) {
    parsingErrors.forEach(err => Logger.log(err));
    return Promise.reject();
  } else {
    return Promise.resolve(rules);
  }
};

let parseAST = (fileSrc) => (
  new Promise((resolve, reject) => (
    readFile(fileSrc, 'utf-8')
      .then(createAST)
      .then(resolve)
      .catch(reject)
  ))
);

module.exports = parseAST;
