import styled from "styled-components";

const Image = styled.img.attrs(() => ({ draggable: false }))`
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;
`;

export default Image;
