const {Airplane} = require("../models/index");

class AirplaneRepository{
    async getAirplane(AirplaneId){
        try {
            const airplane = await Airplane.findByPk(AirplaneId);
            return airplane.capacity;
        } catch (error) {
            console.log("somthing went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = AirplaneRepository;