import express, { type Router } from "express";
import { createTenancy } from "../controllers/tenancy.controllers";

const router: Router = express.Router();

router.post("/", createTenancy);

export default router;
