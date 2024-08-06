import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAppoitnment = async (
  title: string,
  participant: string,
  date: string,
  appointmentId: number
) => {
  return await prisma.appointments.create({
    data: {
      title,
      participant,
      date,
      appointmentId,
    },
  });
};

export const deleteAppointment = async (appointmentId: number) => {
  return await prisma.appointments.delete({
    where: { id: appointmentId },
  });
};
