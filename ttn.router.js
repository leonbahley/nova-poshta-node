const express = require("express");
const ttnsController = require("./controllers");
const { controllerExceptionWrapper } = require("./helpers");

const router = express.Router();

router
  .post("/", controllerExceptionWrapper(ttnsController.addTtn))
  .delete("/", controllerExceptionWrapper(ttnsController.removeTtns))
  .get("/", controllerExceptionWrapper(ttnsController.getTtns));

module.exports = router;
