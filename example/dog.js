'use strict';

var Usergrid = require('usergrid-objects')();
var is = Usergrid.validators;

var Dogs = Usergrid.define(Dog);
module.exports = Dogs;

Dogs.attrs('name');

Dogs.validates({
  name:  [ is.required ]
});

function Dog() {
}
