'use strict';

var Usergrid = require('usergrid-objects')();
var is = Usergrid.validators;

var DogClass = {};
Usergrid.define(DogClass, Dog);
module.exports = DogClass;

DogClass.validates({
  name:  [ is.required ]
});

function Dog() {
}
