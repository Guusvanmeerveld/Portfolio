import z from "zod";

export const HeaderPropsModel = z.object({
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

export type HeaderProps = z.infer<typeof HeaderPropsModel>;

export default HeaderProps;
