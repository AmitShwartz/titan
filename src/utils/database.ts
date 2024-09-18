import { ORDERS_DATA } from "../config/db/orders_data";

const db = require("../models");

export const initDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log(db.orders);
    await db.orders.bulkCreate(ORDERS_DATA);
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
};

export default db;
