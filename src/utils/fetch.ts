import { AxiosError, AxiosResponse } from "axios";

import ResponseModel, { ErrorModel, Response } from "@models/response";

export const parseAxiosResponse = (res: AxiosResponse<unknown>): Response => {
	const parseResponseResult = ResponseModel.safeParse(res.data);

	if (!parseResponseResult.success) {
		return { ok: false, error: parseResponseResult.error };
	}

	return parseResponseResult.data;
};

export const parseAxiosError = (e: AxiosError<unknown>): Response => {
	const parseErrorResult = ErrorModel.safeParse(e.response?.data);

	if (!parseErrorResult.success) {
		return { ok: false, error: parseErrorResult.error };
	}

	return parseErrorResult.data;
};
