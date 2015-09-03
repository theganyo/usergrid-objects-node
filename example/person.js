'use strict';

var Usergrid = require('usergrid-objects')();
var is = Usergrid.validators;

var Persons = Usergrid.define(Person);
module.exports = Persons;

Persons.attrs('name', 'email');

var Dogs = require('./dog');
Persons.hasMany(Dogs);

Persons.validates({
  name:  [ is.required ],
  email: [ is.email ]
});

function Person() {
}
