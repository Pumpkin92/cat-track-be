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
exports.removeWeight = exports.addWeight = void 0;
const weight_model_1 = require("../models/weight-model");
const addWeight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { weightId } = req.params;
    const { title } = req.body;
    try {
        const newWeight = yield (0, weight_model_1.createWeight)(title, parseInt(weightId));
        if (newWeight) {
            res
                .status(200)
                .json({ data: newWeight, message: "New weight added successfully!!!" });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Errorr");
    }
});
exports.addWeight = addWeight;
const removeWeight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { weightId } = req.params;
        const deleted = yield (0, weight_model_1.deleteWeight)(parseInt(weightId));
        if (deleted) {
            res.status(200).send("Weight deleted successfully!!!");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.removeWeight = removeWeight;
