"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_controller_1 = require("../controllers/food-controller");
const express = require("express");
const foodRouter = express.Router();
foodRouter.post("/:foodId", food_controller_1.addFood);
foodRouter.delete("/:foodId", food_controller_1.removeFood);
module.exports = foodRouter;
