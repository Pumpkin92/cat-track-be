"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointments_contoller_1 = require("../controllers/appointments-contoller");
const express = require("express");
const appointmentsRouter = express.Router();
appointmentsRouter.post("/:appointmentId", appointments_contoller_1.addAppointment);
appointmentsRouter.delete("/:appointmentId", appointments_contoller_1.removeAppointment);
module.exports = appointmentsRouter;
