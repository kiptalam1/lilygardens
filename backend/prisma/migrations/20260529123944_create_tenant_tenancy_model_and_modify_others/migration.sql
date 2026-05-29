/*
  Warnings:

  - A unique constraint covering the columns `[nationalId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "TenantTenancy" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "tenancyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantTenancy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TenantTenancy_tenancyId_tenantId_key" ON "TenantTenancy"("tenancyId", "tenantId");

-- CreateIndex
CREATE INDEX "Tenancy_roomId_status_idx" ON "Tenancy"("roomId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_nationalId_key" ON "Tenant"("nationalId");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_phoneNumber_key" ON "Tenant"("phoneNumber");

-- AddForeignKey
ALTER TABLE "TenantTenancy" ADD CONSTRAINT "TenantTenancy_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantTenancy" ADD CONSTRAINT "TenantTenancy_tenancyId_fkey" FOREIGN KEY ("tenancyId") REFERENCES "Tenancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
