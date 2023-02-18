import z from "zod";

export const Post = z.object({
	title: z.string(),
	content: z.string().min(100),
	tags: z.string(),
	publish: z.boolean()
});
