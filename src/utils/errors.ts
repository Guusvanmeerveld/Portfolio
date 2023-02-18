import z from "zod";

import { Response } from "@models/response";

const baseError = (error: string): Response => ({
	error,
	ok: false
});

export const methodNotAllowed: Response = baseError("Method not allowed");

export const unauthorized: Response = baseError(
	"Could not login; incorrect email or password"
);

export const parseUserInputError: (error: unknown) => string = (error) =>
	"Failed to parse user input: ".concat(error);
