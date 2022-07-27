import useLocalStorageState from "use-local-storage-state";

import styled, { DefaultTheme } from "styled-components";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { animated, useSpring } from "react-spring";

import { FunctionalComponent } from "preact";

import socials from "@utils/socials";

import Dots from "@components/Dots";
import Header from "@components/Header";
import Image from "@components/Image";
import Layout from "@components/Layout";
import Paragraph from "@components/Paragraph";
import ProjectsList from "@components/Project/List";

const Presentation = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
`;

const Projects = styled.div`
	margin-top: 5rem;
	padding: 5rem 0;
`;

const Hero = styled.div`
	/* background-color: ${({ theme }: { theme: DefaultTheme }) =>
		theme.palette.background.secondary}; */
	justify-content: ${(props) => (props.right ? "right" : "left")};
	display: flex;
	align-items: center;
	height: 100%;
`;

const Logo = styled.div`
	margin: 2rem 0;
	display: flex;
	justify-content: center;
	width: 100%;
`;

const ProjectsHeader = styled(Header)`
	text-align: center;
	margin-bottom: 5rem;
`;

const IconsTray = styled.div`
	display: flex;
	justify-content: right;
	margin-top: 1rem;
`;

const Icon = styled.div`
	margin-left: 1.5rem;
	font-size: 2rem;
`;

const Index: FunctionalComponent = () => {
	const [darkMode] = useLocalStorageState("darkMode");

	const fadeIn = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: {
			mass: 5
		}
	});

	return (
		<Layout>
			<Presentation>
				<Container>
					<animated.div style={fadeIn}>
						<Row>
							<Col md={8}>
								<Hero>
									<div>
										<Header gutter>Welcome</Header>
										<Paragraph gutter>
											My name is Guus van Meerveld, and I am a web developer.
										</Paragraph>
										<Paragraph>
											This is my portfolio website, to showcase my projects.
										</Paragraph>
									</div>
								</Hero>
							</Col>
							<Col md={4}>
								<Dots />
							</Col>
						</Row>
						<Row>
							<Logo>
								<Image
									// onClick={() => setDarkMode(!darkMode)}
									// style={{ cursor: "pointer" }}
									height={64}
									src={darkMode ? "logo-dark.png" : "logo-light.png"}
									alt=""
								/>
							</Logo>
						</Row>
						<Row>
							<Col md={4}>
								<Dots left />
							</Col>
							<Col md={8}>
								<Hero right>
									<div>
										<Header>Follow me:</Header>
										<IconsTray>
											{socials.map((social) => (
												<Icon>
													<a href={social.url}>{social.icon}</a>
												</Icon>
											))}
										</IconsTray>
									</div>
								</Hero>
							</Col>
						</Row>
					</animated.div>
				</Container>
			</Presentation>

			<Projects>
				<Container>
					<Row>
						<ProjectsHeader>Projects</ProjectsHeader>
					</Row>
					<Row>
						<ProjectsList />
					</Row>
				</Container>
			</Projects>
		</Layout>
	);
};

export default Index;
