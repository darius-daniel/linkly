import { z } from 'zod';

export const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
});

export const linkSchema = z.object({
  url: z
    .string({
      required_error: 'Field cannot be empty',
    })
    .url({ message: 'Enter a valid URL' }),
});

// export const signInSchema = z.object({
//   email: z.string().toLowerCase().trim().email(),
//   password: z.string().min(6),
// });
