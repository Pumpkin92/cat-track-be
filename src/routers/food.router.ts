import { addFood, removeFood } from "../controllers/food-controller";

const express = require("express");
const foodRouter = express.Router();

foodRouter.post("/:foodId", addFood);
foodRouter.delete("/:foodId", removeFood);

module.exports = foodRouter;
