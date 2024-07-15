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

  it("should fetch all users", async () => {
    const users = await prismaTest.pet.findMany();
    expect(users.length).toBeGreaterThan(0);
  });
});
