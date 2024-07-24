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
exports.removeFood = exports.addFood = void 0;
const food_model_1 = require("../models/food-model");
const addFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodId } = req.params;
    const { title } = req.body;
    try {
        const newItem = yield (0, food_model_1.createFood)(title, parseInt(foodId));
        if (newItem) {
            res
                .status(200)
                .json({ data: newItem, message: "New item Created Successfully!!!" });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Errorr");
    }
});
exports.addFood = addFood;
const removeFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const deleted = yield (0, food_model_1.deleteFoodItem)(parseInt(foodId));
        if (deleted) {
            res.status(200).send("Food item deleted successfully!!!");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.removeFood = removeFood;
