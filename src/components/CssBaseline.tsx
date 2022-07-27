import { createGlobalStyle } from "styled-components";

const Baseline = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.primary};
    font-family: "Montserrat", sans-serif;

	  background-image: url("/topography.svg");
	  background-repeat: repeat;
  }

  a {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;

const CssBaseline = Baseline as () => JSX.Element;

export default CssBaseline;
