'use strict';

var usergrid  = require('../helpers').usergrid;

var BarClass = {};
usergrid.define(BarClass, Bar);
module.exports = BarClass;

function Bar() {
}
