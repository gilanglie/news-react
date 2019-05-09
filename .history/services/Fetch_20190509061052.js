'use strict';
import axios from 'axios';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(){
  axios.get(this.host + ':' + this.port + '/api/weather')
    .then( res => {
      return res.data;
    }) 
    .catch(error=> { return error})
}

module.exports = Fetch;