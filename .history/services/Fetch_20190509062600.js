import axios from 'axios';

class Fetch {
  constructor(config){
    config = config || {};
    this.host = config.host;
    this.port = config.port || 80;
  }
}
var Fetch = function (config) {

};

// Connect
Fetch.prototype.getWeather = function(){
  axios.get(this.host + ':' + this.port + '/api/weather')
    .then( res => {
      console.log(res)
      return res.data;
    }) 
    .catch(error=> { return error}) 
}

module.exports = Fetch; 
