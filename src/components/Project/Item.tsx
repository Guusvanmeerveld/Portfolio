import { useQuery } from "@tanstack/react-query";

import styled, { DefaultTheme } from "styled-components";

import { Spinner } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

import { FunctionalComponent } from "preact";

import axios, { AxiosError } from "axios";

import Repo from "@interfaces/repo";

import Header from "@components/Header";
import Link from "@components/Link";
import Paragraph from "@components/Paragraph";

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProjectItem = styled(Row)`
	margin-bottom: 5rem;
`;

const Hero = styled.div`
	padding: 2rem;
	background-color: ${({ theme }: { theme: DefaultTheme }) =>
		theme.palette.background.secondary};

	border-radius: 3px;
	border: 2px solid
		${({ theme }: { theme: DefaultTheme }) => theme.palette.border};
`;

const Heading = styled(Header)`
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;

const Leading = styled.div`
	margin-bottom: 1rem;
`;

const Subtitle = styled.h4`
	color: ${({ theme }: { theme: DefaultTheme }) =>
		theme.palette.text.secondary};
`;

const IconsTray = styled.div`
	display: flex;
	margin-top: 1rem;
	font-size: 1.5rem;
`;

const IconItem = styled(Paragraph)`
	margin-right: 1rem;
`;

const Icon = styled.span`
	margin-left: 0.5rem;
	color: ${({ theme }: { theme: DefaultTheme }) => theme.palette.primary};
`;

const TopicsTray = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Topic = styled.div`
	background-color: ${({ theme }: { theme: DefaultTheme }) =>
		theme.palette.primary};

	border-radius: 1.25rem;

	margin-top: 0.5rem;
	margin-left: 0.5rem;
	padding: 0.75rem;
`;

const ListItem: FunctionalComponent<{
	repoFullName: string;
	rtl?: boolean;
}> = ({ repoFullName, rtl }) => {
	const { data, isLoading, error } = useQuery<Repo, AxiosError>(
		["repo", repoFullName],
		() =>
			axios
				.get(`https://api.github.com/repos/${repoFullName}`)
				.then((res) => res.data)
	);

	const body = [
		<Col md={8}>
			<Hero>
				{isLoading && !data && (
					<SpinnerContainer>
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading {repoFullName}</span>
						</Spinner>
					</SpinnerContainer>
				)}
				{data && !isLoading && (
					<>
						<Leading>
							<Heading>
								<a href={data.html_url}>{data.full_name}</a>
							</Heading>
							{data.homepage && (
								<Subtitle>
									Website: <Link href={data.homepage}>{data.homepage}</Link>
								</Subtitle>
							)}
						</Leading>
						<Paragraph gutter>{data.description}</Paragraph>
						<IconsTray>
							<IconItem>
								{data.stargazers_count}
								<Icon>
									<AiOutlineStar />
								</Icon>
							</IconItem>
							<IconItem>
								{data.forks_count}
								<Icon>
									<AiOutlineFork />
								</Icon>
							</IconItem>
						</IconsTray>
						<TopicsTray>
							<Paragraph>Tags:</Paragraph>
							{data.topics.map((topic) => (
								<Topic>{topic}</Topic>
							))}
						</TopicsTray>
					</>
				)}
			</Hero>
		</Col>,
		<Col md={4}></Col>
	];

	return <ProjectItem>{rtl ? body.reverse() : body}</ProjectItem>;
};

export default ListItem;
