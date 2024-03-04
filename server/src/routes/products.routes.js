import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createProductSchema } from "../schemas/products.schema.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", validateSchema(createProductSchema), createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;
