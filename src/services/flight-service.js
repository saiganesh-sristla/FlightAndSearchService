const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async create(data) {
    try {
      const seats = await this.airplaneRepository.getAirplane(
        data.AirplaneId
      );
      const updatedData = { ...data, seats };
      const result = await this.flightRepository.create(updatedData);
      return result;
    } catch (error) {
      console.log("somthing went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService
