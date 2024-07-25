const express = require("express");
const apiRouter = express.Router();

const petRouter = require("./pet.router");
const foodRouter = require("./food.router");
const weightRouter = require("./weight.router");

apiRouter.use(express.json());

apiRouter.use("/pets", petRouter);
apiRouter.use("/food", foodRouter);
apiRouter.use("/weight", weightRouter);

module.exports = apiRouter;
