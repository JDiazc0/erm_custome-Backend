import { z } from "zod";

export const createClientSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  animalname: z.string({ required_error: "Animal name is required" }),
  address: z.string({ required_error: "Address is required" }),
  contact: z.string({ required_error: "Contact is required" }),
});
