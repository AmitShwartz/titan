import { z } from "zod";
// email, full name, full
// address, images URLs, frame color, user
export const PostOrderBodySchema = z.object({
  fullName: z.string(),
  email: z.string(),
  fullAddress: z.string(),
  images: z.array(z.string()),
  frameColor: z.string(),
  userId: z.number(),
});

export const GetOrdersBodySchema = z.object({
  userId: z
    .string()
    .regex(/^\d+$/, "must be a number")
    .transform((val) => parseFloat(val)),
});
