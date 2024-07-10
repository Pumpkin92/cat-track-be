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
describe("User", () => {
    it("should create a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prismaTest.user.create({
            data: {
                username: "John Doe",
            },
        });
        expect(user).toHaveProperty("id");
        expect(user.username).toBe("John Doe");
    }));
    it("should fetch all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield prismaTest.user.findMany();
        expect(users.length).toBeGreaterThan(0);
    }));
});
