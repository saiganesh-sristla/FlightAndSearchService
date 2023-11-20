const { AirportService } = require("../services/index");

const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "successfully created airport",
      err: {},
    });
  } catch (error) {
    console.log("error occured at controller");
    res.status(500).json({
      data: {},
      success: false,
      message: "error occured while creating a airport",
      err: error,
    });
  }
};
const getAirport = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "successfully fetch airport",
      err: {},
    });
  } catch (error) {
    console.log("error occured at controller");
    res.status(500).json({
      data: {},
      success: false,
      message: "error occured while reading a airport",
      err: error,
    });
  }
};
const updateAirport = async (req, res) => {
  try {
    const airport = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "successfully updated airport",
      err: {},
    });
  } catch (error) {
    console.log("error occured at controller");
    res.status(500).json({
      data: {},
      success: false,
      message: "error occured while updating a airport",
      err: error,
    });
  }
};
const destroyAirport = async (req, res) => {
  try {
    const airport = await airportService.delete(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "successfully deleted airport",
      err: {},
    });
  } catch (error) {
    console.log("error occured at controller");
    res.status(500).json({
      data: {},
      success: false,
      message: "error occured while deleting a airport",
      err: error,
    });
  }
};

module.exports = {
  createAirport,
  getAirport,
  updateAirport,
  destroyAirport,
};
