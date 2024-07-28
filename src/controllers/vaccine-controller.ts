import { Request, Response } from "express";
import { createVaccine, deleteVaccineItem } from "../models/vaccine-model";

export const addVaccine = async (req: Request, res: Response) => {
  const { vaccineId } = req.params;
  const { title } = req.body;
  try {
    const newItem = await createVaccine(title, parseInt(vaccineId));
    if (newItem) {
      res.status(200).json({
        data: newItem,
        message: "New vaccine Created Successfully!!!",
      });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeVaccine = async (req: Request, res: Response) => {
  try {
    const { vaccineId } = req.params;
    const deleted = await deleteVaccineItem(parseInt(vaccineId));
    if (deleted) {
      res.status(200).send("Vaccine entry deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
