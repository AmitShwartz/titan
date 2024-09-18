import { Request, Response, Router } from "express";
import { asyncWrapper } from "../utils/asyncWrapper";
import { ServiceUnavailableError } from "../utils/ApiError";

const router = Router();

const getHealthCheck = asyncWrapper((_req: Request, res: Response) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(healthCheck);
  } catch (error) {
    throw new ServiceUnavailableError();
  }
});

/**
 * @swagger
 * /health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check endpoint
 *     description: Check the health of the API
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uptime:
 *                   type: number
 *                   description: Uptime of the API
 *                 message:
 *                   type: string
 *                   description: Health check message
 *                 timestamp:
 *                   type: number
 *                   description: Timestamp of the health check
 *       '503':
 *         description: Service unavailable
 */
router.get("/", getHealthCheck);

export default router;
