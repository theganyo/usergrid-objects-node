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
      Dog.deleteAll(function(err) {
        cb(err);
      });
    },

    // add a dog
    function(cb) {
      var calli = Dog.new({ name: 'Calli' });
      // saves and creates connection
      scott.addDog(calli, function(err) {
        if (err) { return cb(err); }

        scott.fetchDogs(function(err) {
          if (err) { return cb(err); }

          assert(scott.dogs);
          var dog = scott.dogs[0];
          assert(dog.uuid);
          assert(dog.name === 'Calli');
          cb();
        });
      });
    },

    // delete the Person (and it's dogs)
    function(cb) {
      scott.deleteAllDogs(function(err) {
        if (err) { return cb(err); }

        scott.delete(function(err) {
          cb(err);
        });
      });
    },

    // verify Person is gone
    function(cb) {
      Person.find('Scott', function(err, person) {
        assert(err);
        cb();
      })
    },

    // verify dog is gone
    function(cb) {
      Dog.find('Calli', function(err, person) {
        assert(err);
        cb();
      })
    }

  ],
    function cb(err) {
      if (err) {
        console.log(err.stack);
      }
    }
);
