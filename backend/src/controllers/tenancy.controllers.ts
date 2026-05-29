import { HouseHoldType, TenancyStatus } from "../generated/prisma/enums";
import { prisma } from "../lib/prisma";
import { asyncHandler } from "../middleware/async.middleware";

interface Tenant {
  fullName: string;
  nationalId?: string;
  phone?: string;
  email?: string;
}

interface TenancyFields {
  roomId: string;
  householdType: HouseHoldType;
  tenants: Tenant[];
  startDate: string;
  endDate?: string;
}

export const createTenancy = asyncHandler(async (req, res) => {
  const { roomId, householdType, tenants, startDate, endDate }: TenancyFields =
    req.body;

  // form validations
  if (!roomId) {
    res.status(400).json({
      error: "Room must not be empty!",
    });
    return;
  }

  if (!startDate) {
    res.status(400).json({
      error: "Provide the Starting Date!",
    });
    return;
  }

  const parsedStartDate = new Date(startDate);

  if (isNaN(parsedStartDate.getTime())) {
    res.status(400).json({
      error:
        "Invalid startDate format. Use ISO 8601 (e.g. 2026-05-29T00:00:00Z)",
    });
    return;
  }

  let parsedEndDate: Date | null = null;
  if (endDate) {
    parsedEndDate = new Date(endDate);
    if (isNaN(parsedEndDate.getTime())) {
      res.status(400).json({
        error:
          "Invalid endDate format. Use ISO 8601 (e.g. 2026-05-29T00:00:00Z)",
      });
      return;
    }
  }
  if (!Object.values(HouseHoldType).includes(householdType)) {
    res.status(400).json({
      error: `Household must be one of ${Object.values(HouseHoldType).join(", ")}`,
    });
    return;
  }

  if (!Array.isArray(tenants) || tenants.length === 0) {
    res.status(400).json({
      error: "At least one tenant is required",
    });
    return;
  }

  for (let tenant of tenants) {
    if (!tenant.fullName || !tenant.fullName.trim()) {
      res.status(400).json({
        error: "Tenant names must be provided",
      });
      return;
    }
  }
  // check if room exists or is already occupied
  const roomExists = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
  });

  if (!roomExists) {
    res.status(404).json({
      error: "This room does not exist!",
    });
    return;
  }

  const roomOccupied = await prisma.tenancy.findFirst({
    where: {
      roomId: roomId,
      status: TenancyStatus.ACTIVE,
    },
  });
  if (roomOccupied) {
    res.status(400).json({
      error: "This room is already occupied!",
    });
    return;
  }
  const result = await prisma.$transaction(async (tx) => {
    const tenancy = await tx.tenancy.create({
      data: {
        householdType,
        roomId: roomExists.id,
        status: TenancyStatus.ACTIVE,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
      },
    });

    for (const tenant of tenants) {
      const newTenant = await tx.tenant.create({
        data: {
          fullName: tenant.fullName,
          email: tenant.email?.trim() || null,
          phoneNumber: tenant.phone?.trim() || null,
          nationalId: tenant.nationalId?.trim() || null,
        },
      });

      await tx.tenantTenancy.create({
        data: {
          tenancyId: tenancy.id,
          tenantId: newTenant.id,
        },
      });
    }

    return { tenancy };
  });

  res.status(201).json({
    message: "Tenancy created successfully",
    data: result,
  });
});
