import z from "zod";

export const Post = z.object({
	title: z.string().trim(),
	content: z.string().min(100).trim(),
	tags: z.string().trim(),
	publish: z.boolean()
});
