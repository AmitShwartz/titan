import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

export class NotFoundError extends ApiError {
  constructor(path: string) {
    super(StatusCodes.NOT_FOUND, `The requested path ${path} was not found`);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export class ServiceUnavailableError extends ApiError {
  constructor() {
    super(StatusCodes.SERVICE_UNAVAILABLE, "Service Unavailable");
  }
}

export class InternalServerError extends ApiError {
  constructor(error: unknown) {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Internal Server Error: ${JSON.stringify(error)}`
    );
  }
}

export const handleZodError = (error: unknown) => {
  if (error instanceof ZodError) {
    const errorMessages = error.errors.map(
      (issue: any) => `${issue.path.join(".")} is ${issue.message}`
    );
    const errorMessage = `Invalid data: ${errorMessages.join(". ")}.`;
    throw new BadRequestError(errorMessage);
  }
};
