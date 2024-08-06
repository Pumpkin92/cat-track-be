-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "Participant" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
