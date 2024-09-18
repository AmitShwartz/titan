import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

export class ErrorHandler {
  static handle = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).send({
      success: false,
      message: err.message,
    });
  };
}
