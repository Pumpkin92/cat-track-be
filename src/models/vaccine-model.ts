import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createVaccine = async (title: string, vaccineId: number) => {
  return await prisma.vaccine.create({
    data: {
      title,
      vaccineId,
    },
  });
};

export const deleteVaccineItem = async (vaccineId: number) => {
  return await prisma.vaccine.delete({
    where: { id: vaccineId },
  });
};
