import { addPet, getPetById, getPets } from "../controllers/pet-controller";
const express = require("express");
const petRouter = express.Router();

petRouter.get("/", getPets);
petRouter.get("/:id", getPetById);
petRouter.post("/create", addPet);

module.exports = petRouter;
