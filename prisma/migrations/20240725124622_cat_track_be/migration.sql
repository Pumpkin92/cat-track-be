-- CreateTable
CREATE TABLE "Weight" (
    "id" SERIAL NOT NULL,
    "weightId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_weightId_fkey" FOREIGN KEY ("weightId") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
