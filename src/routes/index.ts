import express from "express";
import ordersRouter from "./orders.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/orders",
    route: ordersRouter,
  },
];
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
