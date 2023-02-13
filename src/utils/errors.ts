const baseError = <T>(error: T) => ({ error, ok: false });

export const methodNotAllowed = baseError("Method not allowed");

export const unauthorized = {
	ok: false,
	error: "Could not login; incorrect email or password"
};
