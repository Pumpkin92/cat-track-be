const prismaTest = require("../jest.setup");

describe("Pets", () => {
  it("should create a new pet", async () => {
    const pet = await prismaTest.pet.create({
      data: {
        name: "Jean",
        petType: "cat",
        breed: "Tortie",
      },
    });
    expect(pet).toHaveProperty("id");
    expect(pet.name).toBe("Jean");
  });

  it("should fetch all pets", async () => {
    const pets = await prismaTest.pet.findMany();
    expect(pets.length).toBeGreaterThan(0);
  });

  it.only("should fetch a specific pet by its id", async () => {
    const pet = await prismaTest.pet.findUnique({
      where: { id: 2 },
    });
    console.log(pet);
    expect(pet).toMatchObject({
      id: 2,
      name: "Jean",
      petType: "cat",
      breed: "Tortie",
    });
  });
});
