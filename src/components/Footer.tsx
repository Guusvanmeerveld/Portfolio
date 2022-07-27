import styled, { DefaultTheme } from "styled-components";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FunctionalComponent } from "preact";

import socials from "@utils/socials";

import Header from "@components/Header";

const Body = styled.div`
	background-color: ${({ theme }: { theme: DefaultTheme }) =>
		theme.palette.background.secondary};

	border-top: 2px solid
		${({ theme }: { theme: DefaultTheme }) => theme.palette.border};
	padding: 2rem;
`;

const ListHeader = styled(Header)`
	font-size: 2rem;
`;

const ListItem = styled.li`
	font-size: 1.25rem;
	margin-top: 1rem;
`;

const ListItemIcon = styled.span`
	margin-right: 1rem;
`;

const Footer: FunctionalComponent = () => {
	return (
		<Body>
			<Container>
				<Row>
					<Col md={4}>
						<Header gutter>Guus van Meerveld</Header>
					</Col>
					<Col md={4}>
						<ul>
							<ListHeader>Socials</ListHeader>
							{socials.map((social) => (
								<ListItem>
									<a href={social.url}>
										<ListItemIcon>{social.icon}</ListItemIcon>
										{social.name}
									</a>
								</ListItem>
							))}
						</ul>
					</Col>
				</Row>
			</Container>
		</Body>
	);
};

export default Footer;
