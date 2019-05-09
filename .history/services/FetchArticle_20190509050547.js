'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};
var url = this.host + ':' + this.port;

// Connect
Fetch.prototype.getWeather = function(cb){
    this.fetch(url + '/api/weather')
    .then( res => {
        return res.json()
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}
    