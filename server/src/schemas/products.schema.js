import { z } from "zod";

const materialValidator = z.object({
  material: z.string(),
  quantity: z.number().min(1, "quantity must be greater than zero"),
});

export const createProductSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  price: z.number({ required_error: "Price is required" }),
  materials: z.array(materialValidator),
});
