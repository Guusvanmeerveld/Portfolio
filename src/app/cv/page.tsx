import { Cv } from "./Cv";

import { dataDirLocation } from "@utils/constants";
import { readCvJson } from "@utils/cv";

export default async function Page() {
	const cv = await readCvJson(dataDirLocation);

	return <Cv data={cv} />;
}

export const revalidate = 3600;
