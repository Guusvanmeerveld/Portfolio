import z from "zod";

const Link = z.object({
	remoteAddress: z.string().url(),
	location: z.string()
});

export default Link;
