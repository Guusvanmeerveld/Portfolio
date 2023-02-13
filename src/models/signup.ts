import z from "zod";

export const SignupCredentials = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(128),
	name: z.string().max(32)
});
