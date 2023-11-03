const { PORT } = require("./config/serverConfig");

const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api/index");

const setupAndStartServer = async () => {
  const app = express();
  const router = express.Router();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
