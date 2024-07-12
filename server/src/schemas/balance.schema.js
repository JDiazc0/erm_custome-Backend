import { z } from "zod";

export const createbalanceSchema = z.object({
  month: z.string({ required_error: "Date is required" }).optional(),
  income: z.number().optional(),
  expenses: z.number().optional(),
});
