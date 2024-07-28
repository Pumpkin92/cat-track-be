-- CreateTable
CREATE TABLE "Vaccine" (
    "id" SERIAL NOT NULL,
    "vaccineId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vaccine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_vaccineId_fkey" FOREIGN KEY ("vaccineId") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
