import express, { type Router } from "express";
import { createRoom, getAllRooms } from "../controllers/rooms.controllers";

const router: Router = express.Router();

router.post("/create", createRoom);
router.get("/", getAllRooms);

export default router;
