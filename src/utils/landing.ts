import { readJson } from "fs-extra";
import path from "path";

import Landing, { LandingModel } from "@models/landing";

import exists from "@utils/fileExists";

export const readLandingJson = async (
	dataDirLocation: string
): Promise<Landing> => {
	const landingJsonLocation = path.join(dataDirLocation, "landing.json");

	const fileExists = await exists(landingJsonLocation);

	if (!fileExists) {
		throw new Error(
			`Could not find landing json file at: ${landingJsonLocation}`
		);
	}

	const rawJson: unknown = await readJson(landingJsonLocation);

	const landingResult = LandingModel.safeParse(rawJson);

	if (!landingResult.success)
		throw new Error(`Failed to parse landing json: ${landingResult.error}`);

	return landingResult.data;
};

// const readPfpFile = async (location: string): Promise<> => {};
