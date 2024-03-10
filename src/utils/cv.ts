import { readJson } from "fs-extra";
import path from "path";

import { readAndParseJsonFile } from "./json";

import { cache } from "react";

import CvProps, { CvPropsModel } from "@models/cv";

export const readCvJson = cache(
	async (dataDirLocation: string): Promise<CvProps> => {
		const cvJsonLocation = path.join(dataDirLocation, "cv.json");

		return await readAndParseJsonFile(cvJsonLocation, CvPropsModel);
	}
);
