"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treatments_controller_1 = require("../controllers/treatments-controller");
const express = require("express");
const treatmentsRouter = express.Router();
treatmentsRouter.post("/:treatmentsId", treatments_controller_1.addTreatments);
treatmentsRouter.delete("/:treatmentsId", treatments_controller_1.removeTreatments);
module.exports = treatmentsRouter;
