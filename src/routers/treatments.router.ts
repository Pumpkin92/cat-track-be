import {
  addTreatments,
  removeTreatments,
} from "../controllers/treatments-controller";

const express = require("express");
const treatmentsRouter = express.Router();

treatmentsRouter.post("/:treatmentsId", addTreatments);
treatmentsRouter.delete("/:treatmentsId", removeTreatments);

module.exports = treatmentsRouter;
