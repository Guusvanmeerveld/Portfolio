import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { User } from "@prisma/client";

import { User as UserModel } from "@models/user";

import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";

const useUser = (): User | null => {
	const { data } = useQuery(
		["user"],
		async () => {
			const response = await axios
				.get("/api/user")
				.then(parseAxiosResponse)
				.catch(parseAxiosError);

			if (response.ok) return response.data;
			else throw response.error;
		},
		{ retry: () => false, enabled: typeof window !== "undefined" }
	);

	if (typeof window === "undefined") return null;

	const parseUserResult = UserModel.safeParse(data);

	if (parseUserResult.success) {
		return parseUserResult.data;
	} else return null;
};

export default useUser;
