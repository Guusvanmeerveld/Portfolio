import Theme from "./interfaces/theme";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			primary: string;
			secondary: string;
			background: {
				primary: string;
				secondary: string;
			};
			text: {
				primary: string;
				secondary: string;
			};
			border: string;
		};
	}
}
