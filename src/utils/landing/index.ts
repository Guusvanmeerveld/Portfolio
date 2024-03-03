import { readJson } from "fs-extra";

import Landing, { LandingModel } from "@models/landing";

import { landingJsonLocation } from "@utils/config";
import { exists } from "@utils/exists";

export const readLandingJson = async (): Promise<Landing | null> => {
	const location = landingJsonLocation;

	const fileExists = await exists(location);

	if (!fileExists) {
		console.log(`Could not find landing json file at: ${location}`);

		return null;
	}

	const rawJson: unknown = await readJson(location);

	const landingResult = LandingModel.safeParse(rawJson);

	if (!landingResult.success) {
		console.log(`Failed to parse landing json: ${landingResult.error}`);

		return null;
	}

	return landingResult.data;
};
