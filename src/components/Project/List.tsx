import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";

import { Spinner } from "react-bootstrap";

import { FunctionalComponent } from "preact";

import axios, { AxiosError } from "axios";

import PinnedRepo from "@interfaces/pinnedRepo";

import Paragraph from "@components/Paragraph";
import ListItem from "@components/Project/Item";

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ErrorText = styled(Paragraph)`
	text-align: center;
`;

const List: FunctionalComponent = () => {
	const { data, isLoading, error } = useQuery<PinnedRepo[], AxiosError>(
		["pinnedRepos"],
		() =>
			axios
				.get(
					`https://gh-pinned-repos.egoist.sh/?username=${
						import.meta.env.VITE_GITHUB_USERNAME
					}`
				)
				.then((res) => res.data)
	);

	if (isLoading)
		return (
			<SpinnerContainer>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading pinned repos...</span>
				</Spinner>
			</SpinnerContainer>
		);

	if (error)
		return (
			<ErrorText>
				Status {error.response?.status ?? "Unknown"} - {error.response?.data}
			</ErrorText>
		);

	if (!error && data) {
		if (Array.isArray(data))
			return (
				<>
					{data.map((repo, i) => {
						const repoFullName = `${repo.owner}/${repo.repo}`;
						return (
							<ListItem
								key={repoFullName}
								rtl={!(i % 2)}
								repoFullName={repoFullName}
							/>
						);
					})}
				</>
			);
		else return <ErrorText>Unknown data returned from api</ErrorText>;
	}

	return <></>;
};

export default List;
