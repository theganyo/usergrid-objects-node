'use strict';

var config = require('../test/config');
var Usergrid = require('usergrid-objects')(config);
var async = require('async');
var assert = require('assert');

var Person = require('./person');
var Dog = require('./dog');

var scott;

async.series(
  [
    // create a Person (note: create = Person.new + Person.save)
    function(cb) {
      Person.findOrCreate({ name: 'Scott' }, function(err, person) {
        assert(Person.isInstance(person));
        assert(person.uuid);
        assert(person.name === 'Scott');
        cb();
      });
    },

    // find the Person by name
    function(cb) {
      Person.find('Scott', function(err, person) {
        if (err) { return cb(err); }

        assert(person.uuid);
        assert(person.name === 'Scott');
        scott = person;
        cb();
      });
    },

    // ensure no Dogs
    function(cb) {
      scott.deleteAllDogs(function(err) {
        cb(err);
      });
    },

    // add a dog
    function(cb) {
      var calli = Dog.new({ name: 'Calli' });
      // saves and creates connection
      scott.addDog(calli, function(err, scott) {
        if (err) { return cb(err); }

        assert(scott.dogs);
        assert(dog.uuid);
        assert(dog.name === 'Calli');
      });
    },

    // delete the Person
    function(cb) {
      scott.delete(function(err) {
        cb(err);
      });
    }

  ],
    function cb(err) {
      if (err) {
        console.log(err.stack);
      }
    }
);
