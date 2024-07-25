import { Request, Response } from "express";
import { createWeight, deleteWeight } from "../models/weight-model";

export const addWeight = async (req: Request, res: Response) => {
  const { weightId } = req.params;
  const { title } = req.body;
  try {
    const newWeight = await createWeight(title, parseInt(weightId));
    if (newWeight) {
      res
        .status(200)
        .json({ data: newWeight, message: "New weight added successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeWeight = async (req: Request, res: Response) => {
  try {
    const { weightId } = req.params;
    const deleted = await deleteWeight(parseInt(weightId));
    if (deleted) {
      res.status(200).send("Weight deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
