import "@fontsource/montserrat";
import "@fontsource/prompt";
import "bootstrap/dist/css/bootstrap.min.css";
import "reset-css";

import App from "./pages/app";

import { render } from "preact";

render(<App />, document.getElementById("app") as HTMLElement);
