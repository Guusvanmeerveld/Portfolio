import { readJson } from "fs-extra";
import z from "zod";

import exists from "@utils/fileExists";

export const readAndParseJsonFile = async <T>(
	location: string,
	model: z.ZodType<T>
): Promise<T> => {
	const fileExists = await exists(location);

	if (!fileExists) {
		throw new Error(`Could not find json file at: ${location}`);
	}

	const rawJson: unknown = await readJson(location);

	const result = model.safeParse(rawJson);

	if (!result.success) throw new Error(`Failed to parse json: ${result.error}`);

	return result.data;
};
