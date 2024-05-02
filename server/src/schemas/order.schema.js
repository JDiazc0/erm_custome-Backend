import { z } from "zod";

const productValidator = z.object({
  product: z.string(),
  quantity: z.number().min(1, "quantity must be greater than zero"),
});

export const createOrderSchema = z.object({
  client: z.string(),
  products: z.array(productValidator),
  price: z.number().min(0),
  date: z.date().optional(),
});
