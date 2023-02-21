import { z } from "zod";

import { SignupCredentials } from "./signup";

export const User = SignupCredentials.extend({
	id: z.number(),
	admin: z.boolean()
});
