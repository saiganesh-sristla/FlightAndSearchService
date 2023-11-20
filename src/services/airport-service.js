const {AirportRepository} = require("../repository/index");

const airportRepository = new AirportRepository();

class AirportService{
    async create(data){
        try {
            const airport = await airportRepository.create(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async get(id){
        try {
           const airport = await airportRepository.get(id);
           return airport; 
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async update(id, data){
        try {
            const airport = await airportRepository.update(id, data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async delete(id){
        try {
            const airport = await airportRepository.delete(id);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;