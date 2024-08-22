import { z } from 'zod';

export const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
});

// export const signInSchema = z.object({
//   email: z.string().toLowerCase().trim().email(),
//   password: z.string().min(6),
// });
