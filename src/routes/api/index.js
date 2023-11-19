const express = require("express");
const router = express.Router();
const {
  create,
  get,
  destroy,
  update,
  getAll,
  createMultiple,
} = require("../../controllers/city-controller");

router.post("/city", create);
router.get("/city/:id", get);
router.delete("/city/:id", destroy);
router.patch("/city/:id", update);
router.get("/city", getAll);
router.post("/city/multiple", createMultiple);

module.exports = router;
