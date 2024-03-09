import z from "zod";

export const ProjectPropsModel = z.object({
	name: z.string(),
	avatarUrl: z.string().url(),
	description: z.string(),
	url: z.string().url()
});

export type ProjectProps = z.infer<typeof ProjectPropsModel>;

export default ProjectProps;
