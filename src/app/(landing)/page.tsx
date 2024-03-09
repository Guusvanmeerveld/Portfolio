import { Footer } from "../Footer";
import { Header } from "./Header";

import Landing from "@models/landing";

import { dataDirLocation } from "@utils/constants";
import { readLandingJson } from "@utils/landing";

const getLanding = async (): Promise<Landing> => {
	// Any error will get handled by the `error.tsx` file.
	return await readLandingJson(dataDirLocation);
};

export default async function Page() {
	const landing = await getLanding();

	return (
		<>
			<Header header={landing.header} />
			<Footer />
		</>
	);
}

export const revalidate = 3600;
