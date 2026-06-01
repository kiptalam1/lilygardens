import express, { Router } from "express";
import { getAllTenants } from "../controllers/tenant.controllers";

const router:Router = express.Router();

router.get("/", getAllTenants);

export default router;
