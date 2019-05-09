'use strict';
import axios from 'axios';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(){
  // axios.get(this.host + ':' + this.port + '/api/weather')
  axios.get('http://localhost:8000/api/weather')
    .then( res => {
      console.log(res);
    })
    .catch(error=> {console.log(error)})
}

module.exports = Fetch;