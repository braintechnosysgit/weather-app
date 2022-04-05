const Service = require('../services/service');



class Controller {
    constructor(){
        this.service = new Service() 
        this.locationAPi = this.locationAPi.bind(this);
    }

    
    async locationAPi(req,res) {
        let json = {}
        try {
            let zipcode = req.body.zipCode;
            let result;
            if(zipcode){
                let apiKey = req.body.apiKey;
                let zipCode = zipcode;
                 result = await this.service.locationZipcode(zipCode,apiKey);
            } else {
                let cityName = req.body.cityName;
                let apiKey = req.body.apiKey;
                 result = await this.service.location(cityName,apiKey);
            }
            
            let data = {               
                "temperature": result.main.temp,
                "description":result.weather[0].description,
                "humidity":result.main.humidity,
                "wind_speed":result.wind.speed,
                "icon": result.weather[0].icon
            }
            json = {
                "response" : "SUCCESS",
                "data": data
            }
            res.send(json);
            
        }catch(e){
            console.log(e);
            json ={
                "response":"FAILURE",
                "message":"Internal Server Error."
            };

            res.send(json)
        }

    }

   
}

module.exports = Controller;