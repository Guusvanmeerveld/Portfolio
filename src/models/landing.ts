import z from "zod";

import { FooterPropsModel } from "./footer";
import { HeaderPropsModel } from "./header";

export const LandingModel = z.object({
	header: HeaderPropsModel,
	footer: FooterPropsModel
});

export type Landing = z.infer<typeof LandingModel>;

export default Landing;
