import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	palette: {
		background: {
			primary: "#FBF8F1",
			secondary: "#F7ECDE"
		},
		border: "#dcdcdc",
		primary: "#E9DAC1",
		secondary: "#54BAB9",
		text: {
			primary: "#111111",
			secondary: "#4d4d4d"
		}
	}
};

export const darkTheme: DefaultTheme = {
	palette: {
		background: {
			primary: "#000000",
			secondary: "#1d1d1d"
		},
		border: "#454545",
		primary: "#DC0067",
		secondary: "#00dc75",
		text: {
			primary: "#eee",
			secondary: "#ccc"
		}
	}
};
