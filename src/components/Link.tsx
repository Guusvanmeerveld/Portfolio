import styled, { DefaultTheme } from "styled-components";

const Link = styled.a`
	color: ${({ theme }: { theme: DefaultTheme }) => theme.palette.primary};
`;

export default Link;
