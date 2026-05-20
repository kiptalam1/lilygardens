import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.middleware";
const app = express();
const PORT = process.env["PORT"] || 5001;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`);
});