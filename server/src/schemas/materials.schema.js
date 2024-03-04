import { z } from "zod";

export const createMaterialSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  cost: z.number({ required_error: "Cost is required" }),
  weight: z.number().optional(),
});
