import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/order.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/order", getOrders);
router.get("/order/:id", getOrder);
router.post("/order", validateSchema(createOrderSchema), createOrder);
router.delete("/order/:id", deleteOrder);
router.put("/order/:id", updateOrder); 

export default router;
