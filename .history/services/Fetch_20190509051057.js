'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};
var url = this.host + ':' + this.port;

// Connect
Fetch.prototype.getWeather = function(){
    this.fetch(url + '/api/weather')
    .then( res => {
        return res.json()
    })
    .catch(error=> {return error}) //to catch the errors if any
}

module.exports = Fetch;