import { Router } from "express";
import {
  getBalances,
  getBalance,
  createBalance,
  updateBalance,
} from "../controllers/balance.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createbalanceSchema } from "../schemas/balance.schema.js";

const router = Router();

router.get("/balance", getBalances);
router.get("/balance/:id", getBalance);
router.post("/balance", validateSchema(createbalanceSchema), createBalance);
router.put("/balance/:id", updateBalance);

export default router;
