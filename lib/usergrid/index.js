/*
  Module wraps the Usergrid SDK to enable Rails-style typed models and mixins.
 */
'use strict';

var usergrid_sdk = require('usergrid');
require('./monkeypatch');

var _ = require('lodash');
var validators = require('./validators');
var ValidationErrors = require('./validation_errors');
var usergridStatics = require('./class_statics');
var UsergridError = require('./usergrid_error');
var expressMiddleware = require('./express_middleware');

var client;

var exports = {
  validators: validators,
  ValidationErrors: ValidationErrors,
  UsergridError: UsergridError,
  expressMiddleware: expressMiddleware
};

function configure(config) {
  var authType = usergrid_sdk.AUTH_NONE;
  if (config.clientId && config.clientSecret) { authType = usergrid_sdk.AUTH_CLIENT_ID }
  else if (config.token) { authType = usergrid_sdk.AUTH_APP_USER; }
  client = new usergrid_sdk.client(_.assign({ authType: authType}, config));
  exports.client = client;
  exports.define = define;
  exports.User = require('./user');
  exports.Controller = require('./controller');
}

// "Class" is optional. if omitted, a Class object will be created and returned.
// "type" is optional. if omitted, constructor name is used as the usergrid type.
function define(Class, constructor, type) {
  if (!client) { throw new Error('Usergrid not configured'); }
  if (typeof Class === 'function') {
    type = constructor;
    constructor = Class;
    Class = {};
  }
  Class._usergrid = {
    constructor: constructor,
    type: (type) ? type : constructor.name.toLowerCase()
  };
  _.mixin(Class, usergridStatics(client));
  return Class;
}

module.exports = function(config) {
  if (config) { configure(config); }
  return exports;
};
