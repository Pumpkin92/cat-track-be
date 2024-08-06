/*
  Warnings:

  - You are about to drop the column `Participant` on the `Appointments` table. All the data in the column will be lost.
  - Added the required column `participant` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "Participant",
ADD COLUMN     "participant" TEXT NOT NULL;
