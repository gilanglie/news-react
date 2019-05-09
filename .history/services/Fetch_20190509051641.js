'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(cb){
  console.log(this)
    fetch(this.host + ':' + this.port + '/api/weather')
    .then( res => {
        cb(res.json())
    })
    .catch(error=> {return error}) //to catch the errors if any
}

module.exports = Fetch;