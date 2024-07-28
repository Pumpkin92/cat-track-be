import { Request, Response } from "express";
import { createTreatments, deletetreatments } from "../models/treatments-model";

export const addTreatments = async (req: Request, res: Response) => {
  const { treatmentsId } = req.params;
  const { title } = req.body;
  try {
    const newItem = await createTreatments(title, parseInt(treatmentsId));
    if (newItem) {
      res.status(200).json({
        data: newItem,
        message: "New treatment added Successfully!!!",
      });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeTreatments = async (req: Request, res: Response) => {
  try {
    const { treatmentsId } = req.params;
    const deleted = await deletetreatments(parseInt(treatmentsId));
    if (deleted) {
      res.status(200).send("Treatment deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
