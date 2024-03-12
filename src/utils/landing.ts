import { readFile, readJson } from "fs-extra";
import path from "path";

import { avatarFileFormat } from "./constants";
import { readAndParseJsonFile } from "./json";

import { cache } from "react";

import Landing, { LandingModel } from "@models/landing";

export const readLandingJson = cache(
	async (dataDirLocation: string): Promise<Landing> => {
		const landingJsonLocation = path.join(dataDirLocation, "landing.json");

		return await readAndParseJsonFile(landingJsonLocation, LandingModel);
	}
);

export const readAvatarFile = cache(
	async (dataDirLocation: string): Promise<string> => {
		const avatarFileLocation = path.join(
			dataDirLocation,
			`avatar.${avatarFileFormat}`
		);

		const imageData = await readFile(avatarFileLocation);

		const base64Image = Buffer.from(imageData).toString("base64");

		return `data:image/${avatarFileFormat};base64,${base64Image}`;
	}
);
