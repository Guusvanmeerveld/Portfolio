import Landing from "@models/landing";

import { readLandingJson } from "@utils/landing";

const getLanding = async (): Promise<Landing> => {
	return await readLandingJson();
};

export default async function Page() {
	const landing = await getLanding();

	return <div>{/* <Button color="primary">Click me</Button> */}</div>;
}

export const revalidate = 3600;
