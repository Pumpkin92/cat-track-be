import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createFood = async (title: string, foodId: number) => {
  return await prisma.food.create({
    data: {
      title,
      foodId,
    },
  });
};

export const deleteFoodItem = async (foodId: number) => {
  return await prisma.food.delete({
    where: { id: foodId },
  });
};
