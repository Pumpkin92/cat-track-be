const prismaTest = require("../jest.setup");

describe("User", () => {
  it("should create a new user", async () => {
    const user = await prismaTest.user.create({
      data: {
        username: "John Doe",
      },
    });
    expect(user).toHaveProperty("id");
    expect(user.username).toBe("John Doe");
  });

  it("should fetch all users", async () => {
    const users = await prismaTest.user.findMany();
    expect(users.length).toBeGreaterThan(0);
  });
});
