import z from "zod";

interface Error {
	ok: false;
	error?: unknown;
}

export const ErrorModel: z.ZodType<Error> = z.object({
	ok: z.literal(false),
	error: z.unknown()
});

interface Ok {
	ok: true;
	data?: unknown;
}

export const OkModel: z.ZodType<Ok> = z.object({
	ok: z.literal(true),
	data: z.unknown()
});

export type Response = Ok | Error;

const ResponseModel: z.ZodType<Response> = ErrorModel.or(OkModel);

export default ResponseModel;
