import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createWeight = async (title: string, weightId: number) => {
  return await prisma.weight.create({
    data: {
      title,
      weightId,
    },
  });
};

export const deleteWeight = async (weightId: number) => {
  return await prisma.weight.delete({
    where: { id: weightId },
  });
};
