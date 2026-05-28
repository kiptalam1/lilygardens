import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

// functions
import { errorHandler } from "./middleware/error.middleware";
import roomRoutes from "./routes/rooms.routes"
const app = express();
const PORT = process.env["PORT"] || 5001;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/rooms/", roomRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`);
});
