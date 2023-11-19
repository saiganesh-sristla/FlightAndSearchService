const { PORT } = require("./config/serverConfig");

const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api/index");

const { City, Airport } = require("./models/index");
const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);

    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }

    const city = await City.findOne({
      where: {
        id: 12,
      },
    });

    const airports = await city.getAirports();
    // console.log(airports);
  });
};

setupAndStartServer();
