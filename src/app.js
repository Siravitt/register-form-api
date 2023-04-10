// const { sequelize } = require("./models");

// sequelize.sync({ force: true });
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const formRoute = require("./routes/form-route");

const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/notFound");

app.use(cors());
app.use(express.json());

app.use("/", formRoute);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`Server run on port ${process.env.PORT}`)
);
