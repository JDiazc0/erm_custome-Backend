import { Router } from "express";
import {
  getMaterials,
  createMaterial,
  deleteMaterial,
  updateMaterial,
} from "../controllers/materials.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createMaterialSchema } from "../schemas/materials.schema.js";

const router = Router();

router.get("/rawMaterials", getMaterials);
router.post(
  "/rawMaterials",
  validateSchema(createMaterialSchema),
  createMaterial
);
router.delete("/rawMaterials/:id", deleteMaterial);
router.put("/rawMaterials/:id", updateMaterial);

export default router;
