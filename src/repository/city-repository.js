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
      const city = await City.update(data, {
        where: {
          id: CityId,
        },
      });
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
}

module.exports = CityRepository;
