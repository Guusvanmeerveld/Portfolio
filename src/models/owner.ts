import z from "zod";

export const OwnerModel = z.object({
	fullName: z.string(),
	name: z.string(),
	avatar: z.string().optional(),
	description: z.string(),
	contact: z.object({
		email: z.string().email(),
		linkedin: z.string().url(),
		git: z.string().url()
	})
});

export type Owner = z.infer<typeof OwnerModel>;

export default Owner;
