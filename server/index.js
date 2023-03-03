const express = require("express");
const { PORT } = require("./config");
const sequelize = require("./db");
const models = require("./model/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandllingMiddleware");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use("/api", router);

app.use(errorHandler);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
