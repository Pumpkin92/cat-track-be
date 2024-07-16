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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPet = exports.getAllPets = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPets = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.pet.findMany();
});
exports.getAllPets = getAllPets;
const createPet = (name, petType, breed) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.pet.create({
        data: {
            name,
            petType,
            breed,
        },
    });
});
exports.createPet = createPet;
