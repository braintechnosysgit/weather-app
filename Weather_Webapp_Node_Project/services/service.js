const MongoDB = require('../common/mongo-util');
const axios = require('axios');

class Service {
    constructor(){        
        this.mongoDb = new MongoDB('mongodb://localhost:27017/WebApp')
        
    }

//    location = await `https://api.openweathermap.org/data/2.5/weather?id='${cityId}'&appid='${apiKey}'`;

async location(cityName,apiKey) {
    try{
        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
          return result.data;
                 

    }catch(e){
        console.log(e);
    }
}
 async locationZipcode(zipCode,apiKey){
     try{
        let result_ = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`);
        return result_.data;
     }catch{

     }
 }


  
   

}

module.exports = Service;

