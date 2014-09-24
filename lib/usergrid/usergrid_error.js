'use strict';

function UsergridError(data) {
  this.name = data.error;
//  this.message = data.error_description;
  this.message = JSON.stringify(data); // extended output
  this.statusCode = data.statusCode;
  this.request = data.request;
}
UsergridError.prototype = new Error();
UsergridError.prototype.constructor = UsergridError;


module.exports = UsergridError;
