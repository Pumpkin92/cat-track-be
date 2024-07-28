"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vaccine_controller_1 = require("../controllers/vaccine-controller");
const express = require("express");
const vaccineRouter = express.Router();
vaccineRouter.post("/:vaccineId", vaccine_controller_1.addVaccine);
vaccineRouter.delete("/:vaccineId", vaccine_controller_1.removeVaccine);
module.exports = vaccineRouter;
