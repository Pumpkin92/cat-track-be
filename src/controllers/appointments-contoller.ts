import { Request, Response } from "express";
import {
  createAppoitnment,
  deleteAppointment,
} from "../models/appointments-model";

export const addAppointment = async (req: Request, res: Response) => {
  const { appointmentId } = req.params;
  const { title, participant, date } = req.body;
  try {
    const newItem = await createAppoitnment(
      title,
      participant,
      date,
      parseInt(appointmentId)
    );
    if (newItem) {
      res.status(200).json({
        data: newItem,
        message: "New appointment Created Successfully!!!",
      });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeAppointment = async (req: Request, res: Response) => {
  try {
    const { appointmentId } = req.params;
    const deleted = await deleteAppointment(parseInt(appointmentId));
    if (deleted) {
      res.status(200).send("Appointment deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
