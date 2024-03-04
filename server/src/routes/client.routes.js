import { Router } from "express";
import {
  getClients,
  getClient,
  createClient,
  deleteClient,
  updateClient,
} from "../controllers/client.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createClientSchema } from "../schemas/client.schema.js";

const router = Router();

router.get("/client", getClients);
router.get("/client/:id", getClient);
router.post("/client", validateSchema(createClientSchema), createClient);
router.delete("/client/:id", deleteClient);
router.put("/client/:id", updateClient);

export default router;
