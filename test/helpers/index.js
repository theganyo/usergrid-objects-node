'use strict';

var config = require('../config');
var usergrid = require('../../lib')(config);
var User = require('../../lib/usergrid/user');
var intents = require('../../lib/intents');

module.exports = {
  config: config,
  usergrid: usergrid,
  User: User,
  intents: intents
};
