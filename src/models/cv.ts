import z from "zod";

const SkillModel = z.object({
	name: z.string(),
	year: z.coerce.date(),
	value: z.number().min(0).max(1)
});

export type Skill = z.infer<typeof SkillModel>;

const EducationModel = z.object({
	title: z.string(),
	timeFrame: z.string(),
	institution: z.string(),
	location: z.string(),
	skills: z.string().array()
});

export type Education = z.infer<typeof EducationModel>;

const ExperienceModel = z.object({
	title: z.string(),
	timeFrame: z.string(),
	role: z.string(),
	description: z.string()
});

export type Experience = z.infer<typeof ExperienceModel>;

export const CvPropsModel = z.object({
	fullName: z.string(),
	role: z.string(),
	description: z.string(),
	contact: z.object({
		website: z.string(),
		email: z.string().email(),
		linkedIn: z.string().url(),
		git: z.string().url()
	}),
	skills: SkillModel.array(),
	programmingLanguages: SkillModel.array(),
	education: EducationModel.array(),
	experience: ExperienceModel.array()
});

export type CvProps = z.infer<typeof CvPropsModel>;

export default CvProps;
