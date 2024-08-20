import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().toLowerCase().trim().email(),
  password: z.string().min(6),
});
