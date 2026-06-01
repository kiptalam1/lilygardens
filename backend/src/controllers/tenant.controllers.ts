import { prisma } from "../lib/prisma";
import { asyncHandler } from "../middleware/async.middleware";

export const getAllTenants = asyncHandler(async (_req, res) => {
  const tenants = await prisma.tenant.findMany({
    include: {
      tenantTenancies: {
        select: {
          tenancy: {
            select: {
              status: true,
              room: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const formattedTenants = tenants.map((tenant) => ({
    id: tenant.id,
    fullName: tenant.fullName,
    nationalId: tenant.nationalId,
    email: tenant.email,
    phoneNumber: tenant.phoneNumber,
    created: tenant.createdAt,
    room: tenant.tenantTenancies[0]?.tenancy.room.name ?? null,
    status: tenant.tenantTenancies[0]?.tenancy.status,
  }));

  res.status(200).json({ data: formattedTenants });
});
