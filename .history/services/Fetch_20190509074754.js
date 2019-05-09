import axios from 'axios';

class Fetch {
  constructor(config){
    config = config || {};
    this.host = config.host;
    this.port = config.port || 80;
  }
  getWeather(){
    axios.get(this.host + ':' + this.port + '/api/weather')
    .then( res => { 
      return res.data;
    }) 
    .catch(error=> { return error}) 
  }
}

module.exports = Fetch; 
