const { PORT } = require("./config/serverConfig");

const express = require("express");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();
  const PORT = 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
