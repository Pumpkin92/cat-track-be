import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTreatments = async (title: string, treatmentsId: number) => {
  return await prisma.treatments.create({
    data: {
      title,
      treatmentsId,
    },
  });
};

export const deletetreatments = async (treatmentsId: number) => {
  return await prisma.treatments.delete({
    where: { id: treatmentsId },
  });
};
