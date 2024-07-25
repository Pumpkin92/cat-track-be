import { addWeight, removeWeight } from "../controllers/weight-controller";

const express = require("express");
const weightRouter = express.Router();

weightRouter.post("/:weightId", addWeight);
weightRouter.delete("/:weightId", removeWeight);

module.exports = weightRouter;
