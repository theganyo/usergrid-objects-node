Usergrid Objects for Node.js
============================

Creates an Object wrapper similar to Ruby on Rails for simplified access to the Usergrid database from Node.js.
Supports the following methods:

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