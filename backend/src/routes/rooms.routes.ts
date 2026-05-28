import express, { type Router } from "express";
import { createRoom } from "../controllers/rooms.controllers";

const router: Router = express.Router();

router.post("/create", createRoom);

export default router;
