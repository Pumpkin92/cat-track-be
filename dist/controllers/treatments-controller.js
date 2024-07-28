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
exports.removeTreatments = exports.addTreatments = void 0;
const treatments_model_1 = require("../models/treatments-model");
const addTreatments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { treatmentsId } = req.params;
    const { title } = req.body;
    try {
        const newItem = yield (0, treatments_model_1.createTreatments)(title, parseInt(treatmentsId));
        if (newItem) {
            res.status(200).json({
                data: newItem,
                message: "New treatment added Successfully!!!",
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
exports.addTreatments = addTreatments;
const removeTreatments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { treatmentsId } = req.params;
        const deleted = yield (0, treatments_model_1.deletetreatments)(parseInt(treatmentsId));
        if (deleted) {
            res.status(200).send("Treatment deleted successfully!!!");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.removeTreatments = removeTreatments;
