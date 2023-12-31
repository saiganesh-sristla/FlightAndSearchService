const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("error occured while creating a city");
      throw { error };
    }
  }

  async deleteCity(CityId) {
    try {
      await City.destroy({
        where: {
          id: CityId,
        },
      });
    } catch (error) {
      console.log("error occured while deleting city");
      throw { error };
    }
  }

  async updateCity(CityId, data) {
    try {
      //below approach will not return the json object after success
      // const city = await City.update(data, {
      //   where: {
      //     id: CityId,
      //   },
      // });

      // this approach will return the json object
      const city = await City.findByPk(CityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("error occured while updating data");
      throw { error };
    }
  }

  async getCity(CityId) {
    try {
      const city = await City.findByPk(CityId);
      return city;
    } catch (error) {
      console.log("error occured while reading city");
      throw { error };
    }
  }

  async getAllCity() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("error occured while reading city");
      throw { error };
    }
  }

  async CreateMultipleCities(cities) {
    try {
      const result = await City.bulkCreate(cities);
      return result;
    } catch (error) {
      console.log("error occured while creating multiple cities");
      throw { error };
    }
  }

  async getAllAirport(id) {
    try {
      const city = await City.findByPk(id);
      const airports = city.getAirports();
      return airports;
    } catch (error) {
      console.log("error occured while fetching airports of a city");
      throw { error };
    }
  }
}

module.exports = CityRepository;
