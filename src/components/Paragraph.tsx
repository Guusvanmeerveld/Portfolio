import styled from "styled-components";

const Paragraph = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 1.2rem;
	margin-bottom: ${(props) => (props.gutter ? ".5rem" : "0")};
`;

export default Paragraph;
