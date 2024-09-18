import { Router } from "express";
import ordersController from "../controllers/orders.ctrl";

const router = Router();

/**
 * @swagger
 * /api/orders/{userId}:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Get orders
 *     description: Retrieve orders based on search parameters
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user assigned to the orders
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/:userId", ordersController.getOrdersByUserId);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     tags:
 *       - Orders
 *     summary: Create a new order
 *     description: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post("/", ordersController.createNewOrder);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         fullAddress:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         frameColor:
 *           type: string
 *         userId:
 *           type: number
 */
