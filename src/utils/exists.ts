import { stat } from "fs-extra";

export const exists = async (fileName: string): Promise<boolean> => {
	return await stat(fileName)
		.then(() => true)
		.catch(() => false);
};
