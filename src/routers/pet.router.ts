import { addPet, getPets } from "../controllers/pet-controller";
const express = require("express");
const petRouter = express.Router();

petRouter.get("/", getPets);
petRouter.post("/create", addPet);

module.exports = petRouter;
