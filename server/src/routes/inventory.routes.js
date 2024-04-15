import { Router } from "express";
import {
  getInventories,
  getInventory,
  createInventory,
  deleteInventory,
  updateInventory,
} from "../controllers/inventory.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createInventorySchema } from "../schemas/inventory.schema.js";

const router = Router();

router.get("/inventory", getInventories);
router.get("/inventory/:id", getInventory);
router.post(
  "/inventory",
  validateSchema(createInventorySchema),
  createInventory
);
router.delete("/inventory/:id", deleteInventory);
router.put("/inventory", updateInventory);

export default router;
