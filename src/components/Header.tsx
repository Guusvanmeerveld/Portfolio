import styled from "styled-components";

const Header = styled.h1`
	font-family: "Prompt", sans-serif;
	margin-bottom: 1rem;
	font-size: 3rem;
	margin-bottom: ${(props) => (props.gutter ? "1rem" : "0")};
`;

export default Header;
