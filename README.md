Usergrid Objects for Node.js
============================

A persistence library inspired by Ruby on Rails for accessing the Apache Usergrid database from Node.js.

Defining an entity in Usergrid is as simple as:
 
```
var Usergrid = require('usergrid-objects')(config);
var is = Usergrid.validators;

var PersonClass = Usergrid.define(Person);
PersonClass.attrs('name');
PersonClass.validates({
 name: [ is.required ]
});
Person() { }
```
 
Using it is just as simple. This creates (and deletes) a new Person in Usergrid:

```
PersonClass.findOrCreate({ name: 'Scott' }, function(err, scott) {
  assert(scott.name === 'Scott');
  scott.delete();
});

```

And it even supports entity relationships (see HasMany methods below):

```
var DogClass = Usergrid.define(Dog);
DogClass.attrs('name');
DogClass.validates({
 name: [ is.required ]
});
function Dog() { }

PersonClass.hasMany('dogs', DogClass);

PersonClass.create({ name: 'Scott' }, function(err, scott) {

  var lassie = Dog.new({ name: 'Lassie' });

  scott.addDog(lassie, function(err) {

    scott.deleteAllDogs();
    
  });
});
```

And much, much more! Currently supports all the following Rails-like methods:

Class methods
-------------
- all
- attrs
- create
- defaults
- delete
- deleteAll
- destroyAll
- find
- findBy
- findOrCreate
- first
- hasMany
- isInstance
- new
- update
- validates

Instance Methods
----------------
- getUUID
- isPersisted
- save
- delete
- update
- assignAttributes
- getConnectedEntities
- getConnectingPaths
- getConnectionPaths
- addError
- clearErrors
- getErrors
- validate
- isValid

Validators
----------
- email
- url
- alpha
- numeric
- alphanumeric
- date
- boolean

HasMany Methods (eg. Dog)
----------------
- addDog
- removeDog
- findDog
- getDogs
- deleteDog
- deleteAllDogs
- findDogsBy
- fetchDogs


Example
=======

[index.js](./example/index.js)

[person.js](./example/person.js)

[dog.js](./example/dog.js)
