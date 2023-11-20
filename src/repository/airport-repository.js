const {Airport} = require("../models/index");

class AirportRepository{
    async create(data){
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("somthing went wrong in repository layer");
            throw { error };
        }
    }

    async get(id){
        try {
            const airport = await Airport.findOne({
                where:{
                    id:id
                }
            })
            return airport;
        } catch (error) {
            console.log("something went wronng in repository layer");
            throw { error };
        }
    }

    async update(id, data){
        try {
            const airport = await Airport.findByPk(id);
            airport.name = data.name;
            airport.address = data.address;
            airport.cityId = data.cityId;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }

    async delete(id){
        try {
            const airport = await Airport.destroy({
                where:{
                    id:id
                }
            })
            return airport;
        } catch (error) {
            console.log("somthing went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository;