import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPets = async () => {
  return await prisma.pet.findMany();
};

export const fetchPetbyId = async (id: number) => {
  return await prisma.pet.findUnique({
    where: { id: id },
  });
};

export const createPet = async (
  name: string,
  petType: string,
  breed: string
) => {
  return await prisma.pet.create({
    data: {
      name,
      petType,
      breed,
    },
  });
};
