const express = require("express");
const apiRouter = express.Router();

const petRouter = require("./pet.router");

apiRouter.use(express.json());

apiRouter.use("/pets", petRouter);

module.exports = apiRouter;
