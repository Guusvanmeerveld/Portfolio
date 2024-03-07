import { readJson } from "fs-extra";

import Landing, { LandingModel } from "@models/landing";

import { landingJsonLocation } from "@utils/constants";
import exists from "@utils/fileExists";

export const readLandingJson = async (): Promise<Landing> => {
	const location = landingJsonLocation;

	const fileExists = await exists(location);

	if (!fileExists) {
		throw new Error(`Could not find landing json file at: ${location}`);
	}

	const rawJson: unknown = await readJson(location);

	const landingResult = LandingModel.safeParse(rawJson);

	if (!landingResult.success)
		throw new Error(`Failed to parse landing json: ${landingResult.error}`);

	return landingResult.data;
};
