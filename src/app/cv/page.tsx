import { Cv } from "./Cv";

import { dataDirLocation } from "@utils/constants";
import { readCvJson } from "@utils/cv";
import { readAvatarFile } from "@utils/landing";

export default async function Page() {
	const cv = await readCvJson(dataDirLocation);
	const avatar = await readAvatarFile(dataDirLocation);

	return <Cv data={cv} avatar={avatar} />;
}

export const revalidate = 3600;
