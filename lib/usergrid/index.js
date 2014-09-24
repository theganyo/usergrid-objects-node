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
  client = new usergrid_sdk.client(_.assign({ authType: usergrid_sdk.AUTH_CLIENT_ID}, config));
  exports.client = client;
  exports.define = define;
  exports.User = require('./user');
  exports.Controller = require('./controller');
}

// "type" is optional. if omitted, constructor name is used as the usergrid type.
function define(Class, constructor, type) {
  if (!client) { throw new Error('Usergrid not configured'); }
  Class._usergrid = {
    constructor: constructor,
    type: (type) ? type : constructor.name.toLowerCase()
  };
  _.mixin(Class, usergridStatics(client));
  return Class;
}

module.exports = function(config) {
  if (config && config.usergrid) { configure(config.usergrid); }
  return exports;
};
