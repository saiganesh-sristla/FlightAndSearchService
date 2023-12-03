const {flight} = require("../models/index");

class FlightRepository{
    
    async create(data){
        try {
            const result = await flight.create(data);
            return result;
        } catch (error) {
            console.log("somthing went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = FlightRepository;