import { z } from "zod";

export const MerchantInputSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  price_cad: z.coerce.number().min(0),
  description: z.string().optional(),
  brand: z.string().optional(),
  stock: z.coerce.number().min(0),
  n_reviews: z.number().min(0).default(0),
  image_url: z.string().optional(),
  date_created: z.string().datetime().default(new Date().toISOString()),
  reviews: z
    .array(
      z.object({
        rating: z.number().min(0).max(5),
        title: z.string().optional(),
        content: z.string().optional(),
      })
    )
    .optional()
    .default([]),
});

export const MerchantSchema = MerchantInputSchema.extend({
  rating: z.number().min(0).max(5).optional(),
  id: z.string(),
});

export type Merchant = z.infer<typeof MerchantSchema>;
export type MerchantInput = z.input<typeof MerchantInputSchema>;
