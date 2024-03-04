import { z } from "zod";

export const createInventorySchema = z.object({
  amount: z.number({ required_error: "Amount is required" }),
});
