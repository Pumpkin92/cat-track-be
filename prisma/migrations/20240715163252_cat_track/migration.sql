/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `breed` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petType` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_ownerId_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "ownerId",
ADD COLUMN     "breed" TEXT NOT NULL,
ADD COLUMN     "petType" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
