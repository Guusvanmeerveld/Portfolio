import { stat } from "fs-extra";

const fileExists = async (fileName: string): Promise<boolean> => {
	return await stat(fileName)
		.then(() => true)
		.catch(() => false);
};

export default fileExists;
