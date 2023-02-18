import z from "zod";

export const LoginCredentials = z.object({
	username: z.string().email(),
	password: z.string().min(8).max(128),
	rememberMe: z.boolean()
});
