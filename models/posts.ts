import { z } from "zod";

// export const PostSchema = z.object({
//   id: z.number().optional(),
//   createdAt: z.string().date().optional(),
//   title: z.string(),
//   thumbnail: z.string(),
//   video: z.string(),
//   prompt: z.string(),
// });

export const PostSchema = z.object({
  id: z.number().optional(),
});

export type TPost = z.infer<typeof PostSchema>