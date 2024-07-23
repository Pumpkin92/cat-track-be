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
exports.addPet = exports.getPetById = exports.getPets = void 0;
const pet_model_1 = require("../models/pet-model");
const getPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPets = yield (0, pet_model_1.getAllPets)();
        if (allPets) {
            res.status(200).json({ data: allPets, message: "All Pets" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getPets = getPets;
const getPetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pet = yield (0, pet_model_1.fetchPetbyId)(parseInt(id));
        if (pet) {
            res.status(200).json({ data: pet, message: "Pet data found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getPetById = getPetById;
const addPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, petType, breed } = req.body;
    try {
        const newPet = yield (0, pet_model_1.createPet)(name, petType, breed);
        if (newPet) {
            res
                .status(200)
                .json({ data: newPet, message: "New Pet Created Successfully!!!" });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.addPet = addPet;
