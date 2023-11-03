const express = require("express");
const router = express.Router();
const {
  create,
  get,
  destroy,
  update,
} = require("../../controllers/city-controller");

router.post("/create", create);
router.get("/get/:id", get);
router.delete("/delete/:id", destroy);
router.patch("/update/:id", update);

module.exports = router;
