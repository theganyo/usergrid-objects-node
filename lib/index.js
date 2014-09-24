'use strict';

var setup = {
};

var configure = function(config) {
  setup.usergrid = require('./usergrid')(config);
  setup.logger = require('./logger')(config);
  setup.events = require('./events')(config);
  setup.intents = require('./intents');
};

module.exports = function(config) {
  if (config) { configure(config); }
  if (!setup.usergrid) { throw new Error('Usergrid was not configured!'); }
  return setup.usergrid;
};
