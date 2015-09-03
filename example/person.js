'use strict';

var Usergrid = require('usergrid-objects')();
var is = Usergrid.validators;

var PersonClass = Usergrid.define(Person);
module.exports = PersonClass;

PersonClass.attrs('name', 'email');

var Dog = require('./dog');
PersonClass.hasMany('dogs', Dog);

PersonClass.validates({
  name:  [ is.required ],
  email: [ is.email ]
});

function Person() {
}
