"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pet_controller_1 = require("../controllers/pet-controller");
const express = require("express");
const petRouter = express.Router();
petRouter.get("/", pet_controller_1.getPets);
petRouter.post("/create", pet_controller_1.addPet);
module.exports = petRouter;
