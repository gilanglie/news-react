'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(){
    fetch(this.host + ':' + this.port + '/api/weather')
    .then( res => {
        res.json()
      })
    .then((responseJson)=>{
      console.log(responseJson)
      return responseJson;
    })
    .catch(error=> {console.log(error)}) //to catch the errors if any
}

module.exports = Fetch;