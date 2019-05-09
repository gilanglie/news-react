import axios from 'axios';

class Fetch {
  constructor(config){
    config = config || {};
    this.host = config.host;
    this.port = config.port || 80;
  }
  async getWeather(cb){
    await axios.get(this.host + ':' + this.port + '/api/weather')
    .then( res => { 
      cb(res.data);
    }) 
    .catch(error => { cb(error)}) 
  }
}

module.exports = Fetch; 
