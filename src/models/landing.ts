import z from "zod";

import { FooterPropsModel } from "./footer";
import { HeaderPropsModel } from "./header";
import { ProjectPropsModel } from "./project";

export const LandingModel = z.object({
	header: HeaderPropsModel,
	projects: ProjectPropsModel.array(),
	footer: FooterPropsModel
});

export type Landing = z.infer<typeof LandingModel>;

export default Landing;
