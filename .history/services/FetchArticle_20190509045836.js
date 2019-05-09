'use strict';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
Fetch.prototype.getWeather = function(cb){
    this.fetch(this.host + ':' + this.port)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    
}