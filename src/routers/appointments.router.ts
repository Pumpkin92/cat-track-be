import {
  addAppointment,
  removeAppointment,
} from "../controllers/appointments-contoller";

const express = require("express");
const appointmentsRouter = express.Router();

appointmentsRouter.post("/:appointmentId", addAppointment);
appointmentsRouter.delete("/:appointmentId", removeAppointment);

module.exports = appointmentsRouter;
