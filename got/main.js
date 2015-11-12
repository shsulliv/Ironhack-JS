'use strict';

var fs = require('fs');
var actions = require('./actions.js')
fs.readFile("./episodes.JSON", 'utf8', actions);


