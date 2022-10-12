import * as configcat from "configcat-node";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createConfigCatClient = () => {
	if (!process.env.CONFIG_CAT_SDK_KEY) return;

	const logger = configcat.createConsoleLogger(
		process.env.NODE_ENV == "production" ? 0 : 3
	);

	const configCatClient = configcat.createClient(
		process.env.CONFIG_CAT_SDK_KEY,
		{
			logger
		}
	);

	return configCatClient;
};

export default createConfigCatClient;
