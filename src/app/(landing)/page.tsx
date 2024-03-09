import { Footer } from "../Footer";
import { Header } from "./Header";

import { dataDirLocation } from "@utils/constants";
import { readAvatarFile, readLandingJson } from "@utils/landing";

export default async function Page() {
	// Any error will get handled by the `error.tsx` file.
	const landing = await readLandingJson(dataDirLocation);
	const avatar = await readAvatarFile(dataDirLocation);

	return (
		<>
			<Header header={landing.header} avatar={avatar} />
			<Footer />
		</>
	);
}

export const revalidate = 3600;
