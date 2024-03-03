import z from "zod";

import { OwnerModel } from "./owner";

export const LandingModel = z.object({
	owner: OwnerModel
});

export type Landing = z.infer<typeof LandingModel>;

export default Landing;
