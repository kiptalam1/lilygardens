import { Capacity } from "../generated/prisma/enums";
import { prisma } from "../lib/prisma";
import { asyncHandler } from "../middleware/async.middleware";

interface RoomProps {
  name: string;
  capacity: Capacity;
  rentAmount?: number;
  description?: string;
}

export const getAllRooms = asyncHandler(async (_req, res) => {
  const rooms = await prisma.room.findMany();
  res.status(200).json({ data: rooms });
});

export const createRoom = asyncHandler(async (req, res) => {
  const { name, capacity, rentAmount, description }: RoomProps = req.body;
  if (!name || !capacity) {
    res.status(400).json({
      error: "Missing name or room capacity!",
    });
    return;
  }
  if (!Object.values(Capacity).includes(capacity as Capacity)) {
    res.status(400).json({
      error: `Room must be one of ${Object.values(Capacity).join(", ")}`,
    });
    return;
  }
  // check if the room already exists;
  const room = await prisma.room.findUnique({
    where: {
      name: name,
    },
  });
  if (room) {
    res.status(400).json({
      error: "This room already exists",
    });
    return;
  }

  // now create the room;
  const newRoom = await prisma.room.create({
    data: {
      name,
      capacity,
      rentAmount: rentAmount !== null ? Number(rentAmount) : null,
      description: description ?? "",
    },
  });

  res.status(201).json({
    message: `${newRoom.name} created successfully`,
    data: newRoom,
  });
});
