const express = require("express");
const router = express.Router();
const {
  create,
  get,
  destroy,
  update,
  getAll,
  createMultiple,
  getAllAirport
} = require("../../controllers/city-controller");

const {createAirport, getAirport, updateAirport, destroyAirport} = require("../../controllers/airport-controller");

const flightController = require("../../controllers/flight-controller");

router.post("/city", create);
router.get("/city/:id", get);
router.delete("/city/:id", destroy);
router.patch("/city/:id", update);
router.get("/city", getAll);
router.post("/city/multiple", createMultiple);
router.get("/city/getAirport/:id", getAllAirport);


router.post("/airport", createAirport);
router.get("/airport/:id", getAirport);
router.delete("/airport/:id", destroyAirport);
router.patch("/airport/:id", updateAirport);


router.post("/flight", flightController.create);

module.exports = router;
