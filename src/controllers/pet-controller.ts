import { Request, Response } from "express";
import { createPet, fetchPetbyId, getAllPets } from "../models/pet-model";

export const getPets = async (req: Request, res: Response) => {
  try {
    const allPets = await getAllPets();
    if (allPets) {
      res.status(200).json({ data: allPets, message: "All Pets" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getPetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pet = await fetchPetbyId(parseInt(id));
    if (pet) {
      res.status(200).json({ data: pet, message: "Pet data found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addPet = async (req: Request, res: Response) => {
  const { name, petType, breed } = req.body;

  try {
    const newPet = await createPet(name, petType, breed);
    if (newPet) {
      res
        .status(200)
        .json({ data: newPet, message: "New Pet Created Successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
