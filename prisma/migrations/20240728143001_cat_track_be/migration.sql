-- CreateTable
CREATE TABLE "Treatments" (
    "id" SERIAL NOT NULL,
    "treatmentsId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Treatments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Treatments" ADD CONSTRAINT "Treatments_treatmentsId_fkey" FOREIGN KEY ("treatmentsId") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
