import z from "zod";

export const Post = z.object({
	title: z.string(),
	content: z.string(),
	tags: z.string(),
	published: z.literal("on").optional()
});
