import { CityRepository } from "../repository/index";

class CityService {
  constructor() {
    this.cityService = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityService.createCity({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityService.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong in the service layer");
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityService.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityService.getCity(cityId);
    } catch (error) {
      console.log("something went wrong in the service layer");
    }
  }
}

module.exports = CityService;
