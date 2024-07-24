import { Request, Response } from "express";
import { createFood, deleteFoodItem } from "../models/food-model";

export const addFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { title } = req.body;
  try {
    const newItem = await createFood(title, parseInt(foodId));
    if (newItem) {
      res
        .status(200)
        .json({ data: newItem, message: "New item Created Successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const deleted = await deleteFoodItem(parseInt(foodId));
    if (deleted) {
      res.status(200).send("Food item deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
