'use strict';

var Article = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

