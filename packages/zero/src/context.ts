import {z} from 'zod';

export const contextSchema = z.object({
  userId: z.string(),
});

export type Context = z.infer<typeof contextSchema>;
