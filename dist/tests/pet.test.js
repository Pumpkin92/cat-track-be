"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const prismaTest = require("../jest.setup");
describe("Pets", () => {
    it("should create a new pet", () => __awaiter(void 0, void 0, void 0, function* () {
        const pet = yield prismaTest.pet.create({
            data: {
                name: "Jean",
                petType: "cat",
                breed: "Tortie",
            },
        });
        expect(pet).toHaveProperty("id");
        expect(pet.name).toBe("Jean");
    }));
    it("should fetch all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield prismaTest.pet.findMany();
        expect(users.length).toBeGreaterThan(0);
    }));
});
