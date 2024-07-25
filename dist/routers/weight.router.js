"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weight_controller_1 = require("../controllers/weight-controller");
const express = require("express");
const weightRouter = express.Router();
weightRouter.post("/:weightId", weight_controller_1.addWeight);
weightRouter.delete("/:weightId", weight_controller_1.removeWeight);
module.exports = weightRouter;
