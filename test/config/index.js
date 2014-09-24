'use strict';

module.exports = {

  /*
   default logger is winston (https://github.com/flatiron/winston)
   by default, logs to console w/ coloring
   specify "file: <filename>" to send output to a file (JSON format)
   or specify "provider: <provider" to change/configure provider
   */
  logger: {
//    provider: winston
//    file: '/Users/sganyo/dev/phrixus/log/phrixus.log'
    level: 'debug'
  },

  /*
   default events provider is pubsub-js (https://github.com/mroderick/PubSubJS)
   specify "sendToLogger: <info>" to send all events to the logger at the specified level (omit to skip)
   specify "provider: <provider>" to change/configure provider
   */
  events: {
    sendToLogger: 'debug'
//    provider: pubsub-js
  },

  // https://apigee.com/usergrid/#!/getting-started/setup
  usergrid : {
    URI: 'http://localhost:8080',
    orgName: 'test-organization',
    appName: 'test-app',
    clientId: 'b3U6bFPqmh3BEeSJdgEmGqhCGA',
    clientSecret: 'b3U6ZefCkk5cZg8XzQOsqGtze9Psfhw',
    logging: true,
    buildCurl: true
  }
// Hosted
//  usergrid : {
//    URI: 'https://api.usergrid.com',
//    orgName: 'sganyo',
//    appName: 'phrixus-test',
//    clientId: 'YXA6V2s-IIlNEeOv2WMm48WQtA',
//    clientSecret: 'YXA6TX4UyHiBnNUGxmm8R-PxeAVkWsA',
//    logging: true,
//    buildCurl: true
//  },
};
