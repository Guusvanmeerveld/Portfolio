import axios from "axios";
import z from "zod";

import createConfigCatClient from "./createConfigCatClient";

import {
	RepositoryResponse,
	SearchResultsResponse,
	UserResponse
} from "@models/responses";
import { giteaServerUrl } from "./config";

const apiUrl = `https://${giteaServerUrl}/api/v1`;

export const fetchAvailability = async (): Promise<boolean> => {
	const configCatClient = createConfigCatClient();

	const isAvailable: boolean =
		(await configCatClient?.getValueAsync("amiavailable", true)) ?? true;

	return isAvailable;
};

export const fetchUser = async (
	giteaUsername: string
): Promise<z.infer<typeof UserResponse>> => {
	const { data: user } = await axios.get<unknown>(
		`${apiUrl}/users/${giteaUsername}`
	);

	return UserResponse.parse(user);
};

export const fetchRepositories = async (
	giteaUserUid: number
): Promise<z.infer<typeof RepositoryResponse>[]> => {
	const { data: repositories } = await axios.get<unknown>(
		`${apiUrl}/repos/search`,
		{
			params: {
				topic: true,
				q: "on-portfolio",
				id: giteaUserUid
			}
		}
	);

	const results = SearchResultsResponse.parse(repositories);

	if (results.ok) return results.data;
	else throw results.data;
};
