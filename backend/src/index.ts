import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

// functions
import { errorHandler } from "./middleware/error.middleware";
import roomRoutes from "./routes/rooms.routes";
import tenancyRoutes from "./routes/tenancy.routes";
import tenantRoutes from "./routes/tenant.routes";

const app = express();
const PORT = process.env["PORT"] || 5001;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/rooms", roomRoutes);
app.use("/api/tenancies", tenancyRoutes);
app.use("/api/tenants", tenantRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
