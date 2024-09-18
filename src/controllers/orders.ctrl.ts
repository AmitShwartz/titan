import { Request, Response } from "express";
import ordersService from "../services/orders.service";
import { InternalServerError, handleZodError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/asyncWrapper";
import {
  GetOrdersBodySchema,
  PostOrderBodySchema,
} from "../validators/order.schema";

class OrdersController {
  getOrdersByUserId = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse params parameters
      const { userId } = GetOrdersBodySchema.parse(req.params);

      const orders = await ordersService.getOrdersByUserId(userId);

      return res.status(200).json(orders);
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError(error);
    }
  });

  createNewOrder = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse body parameters
      const body = PostOrderBodySchema.parse(req.body);
      const order = await ordersService.createNewOrder(body);

      return res.status(201).json(order);
    } catch (error) {
      throw new InternalServerError(error);
    }
  });
}

const ordersController = new OrdersController();

export default ordersController;
