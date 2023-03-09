const express = require("express");
const cors = require("cors");

const ttnsRouter = require("./ttn.router");
const { globalErrorHandler } = require("./middlewares");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ttn", ttnsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalErrorHandler);

module.exports = app;
