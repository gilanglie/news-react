import axios from 'axios';

var Fetch = function (config) {
  config = config || {};

  this.host = config.host;
  this.port = config.port || 80;
};

// Connect
async getWeather(){
  axios.get(this.host + ':' + this.port + '/api/weather')
    .then( res => {
      console.log(res)
      return res.data;
    }) 
    .catch(error=> { return error}) 
}

module.exports = Fetch; 
