import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	console.error(err);

	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			error: err.message,
		});
	}

	// fallback for completely unknown values
	return res.status(500).json({
		error: "Internal Server Error",
	});
}
