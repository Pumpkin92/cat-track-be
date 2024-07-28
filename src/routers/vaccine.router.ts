import { addVaccine, removeVaccine } from "../controllers/vaccine-controller";

const express = require("express");
const vaccineRouter = express.Router();

vaccineRouter.post("/:vaccineId", addVaccine);
vaccineRouter.delete("/:vaccineId", removeVaccine);

module.exports = vaccineRouter;
