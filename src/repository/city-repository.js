const {City} = require("../models/index");

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({ name });
            return city;
        }
        catch(error){
            console.log("error occured while creating a city");
        }
    }

    async deleteCity(CityId){
        try{
            await City.destroy({
                where: {
                    id : CityId
                }
            })
        }
        catch(error){
            console.log("error occured while deleting city");
        }
    }
}

module.exports = CityRepository;