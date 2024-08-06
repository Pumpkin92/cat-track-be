"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAppointment = exports.addAppointment = void 0;
const appointments_model_1 = require("../models/appointments-model");
const addAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appointmentId } = req.params;
    const { title, participant, date } = req.body;
    try {
        const newItem = yield (0, appointments_model_1.createAppoitnment)(title, participant, date, parseInt(appointmentId));
        if (newItem) {
            res.status(200).json({
                data: newItem,
                message: "New appointment Created Successfully!!!",
            });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Errorr");
    }
});
exports.addAppointment = addAppointment;
const removeAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { appointmentId } = req.params;
        const deleted = yield (0, appointments_model_1.deleteAppointment)(parseInt(appointmentId));
        if (deleted) {
            res.status(200).send("Appointment deleted successfully!!!");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.removeAppointment = removeAppointment;
