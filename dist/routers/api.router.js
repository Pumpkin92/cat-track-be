"use strict";
const express = require("express");
const apiRouter = express.Router();
const petRouter = require("./pet.router");
const foodRouter = require("./food.router");
apiRouter.use(express.json());
apiRouter.use("/pets", petRouter);
apiRouter.use("/food", foodRouter);
module.exports = apiRouter;
