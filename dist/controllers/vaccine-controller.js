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
exports.removeVaccine = exports.addVaccine = void 0;
const vaccine_model_1 = require("../models/vaccine-model");
const addVaccine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { vaccineId } = req.params;
    const { title } = req.body;
    try {
        const newItem = yield (0, vaccine_model_1.createVaccine)(title, parseInt(vaccineId));
        if (newItem) {
            res.status(200).json({
                data: newItem,
                message: "New vaccine Created Successfully!!!",
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
exports.addVaccine = addVaccine;
const removeVaccine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vaccineId } = req.params;
        const deleted = yield (0, vaccine_model_1.deleteVaccineItem)(parseInt(vaccineId));
        if (deleted) {
            res.status(200).send("Food item deleted successfully!!!");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.removeVaccine = removeVaccine;
