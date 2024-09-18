import { Order } from "../types";
import db from "../utils/database";

type CreateNewOrderBody = {
  fullName: string;
  email: string;
  fullAddress: string;
  images: string[];
  frameColor: string;
  userId: number;
};

class OrdersService {
  async getOrdersByUserId(user_id: number): Promise<Order[]> {
    const userOrders = await db.orders.findAll({
      where: { user_id },
      raw: true,
    });

    return userOrders.map(
      (order: {
        full_name: string;
        email: string;
        full_address: string;
        images_urls: string;
        frame_color: string;
        user_id: number;
      }) => ({
        ...order,
        images_urls: JSON.parse(order.images_urls),
      })
    );
  }

  async createNewOrder(body: CreateNewOrderBody): Promise<CreateNewOrderBody> {
    await db.orders.create({
      full_name: body.fullName,
      email: body.email,
      full_address: body.fullAddress,
      images_urls: JSON.stringify(body.images),
      frame_color: body.frameColor,
      user_id: body.userId,
    });
    return body;
  }
}

const ordersService = new OrdersService();

export default ordersService;
