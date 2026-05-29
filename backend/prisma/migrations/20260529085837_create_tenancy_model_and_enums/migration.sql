-- CreateEnum
CREATE TYPE "HouseHoldType" AS ENUM ('FAMILY', 'SHARED');

-- CreateEnum
CREATE TYPE "TenancyStatus" AS ENUM ('ACTIVE', 'ENDED', 'TERMINATED');

-- CreateTable
CREATE TABLE "Tenancy" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "householdType" "HouseHoldType" NOT NULL,
    "status" "TenancyStatus" NOT NULL,
    "notes" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenancy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tenancy" ADD CONSTRAINT "Tenancy_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
