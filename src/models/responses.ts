import z from "zod";

export const RepositoryResponse = z.object({
	full_name: z.string(),
	html_url: z.string(),
	language: z.string(),
	website: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	forks_count: z.number(),
	open_issues_count: z.number(),
	description: z.string(),
	size: z.number()
});

export const SearchResultsResponse = z.object({
	ok: z.boolean(),
	data: RepositoryResponse.array()
});

export const UserResponse = z.object({
	id: z.number(),
	login: z.string(),
	email: z.string(),
	avatar_url: z.string(),
	full_name: z.string(),
	description: z.string()
});
