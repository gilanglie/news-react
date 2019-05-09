'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(){
    fetch(this.host + '/api/weather')
    .then( res => {
      console.log(res);
    })
    .catch(error=> {console.log(error)})
}

module.exports = Fetch;