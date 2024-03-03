import z from "zod";

export const LinkId = z.number().int().positive();

export const LinkIdFromString = z.preprocess(
	(a) => parseInt(z.string().parse(a)),
	LinkId
);

const Link = z.object({
	remoteAddress: z.string().url(),
	location: z.string()
});

export default Link;
