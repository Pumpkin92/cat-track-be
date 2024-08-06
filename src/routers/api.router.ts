const express = require("express");
const apiRouter = express.Router();

const petRouter = require("./pet.router");
const foodRouter = require("./food.router");
const weightRouter = require("./weight.router");
const vaccineRouter = require("./vaccine.router");
const treatmentsRouter = require("./treatments.router");
const appointmentsRouter = require("./appointments.router");

apiRouter.use(express.json());

apiRouter.use("/pets", petRouter);
apiRouter.use("/food", foodRouter);
apiRouter.use("/weight", weightRouter);
apiRouter.use("/vaccine", vaccineRouter);
apiRouter.use("/treatments", treatmentsRouter);
apiRouter.use("/appointments", appointmentsRouter);

module.exports = apiRouter;
