import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NotFound from "./404";
import Index from "./index";

import useLocalStorageState from "use-local-storage-state";

import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FunctionalComponent } from "preact";

import { lightTheme, darkTheme } from "@utils/theme";

import CssBaseline from "@components/CssBaseline";

const queryClient = new QueryClient();

const App: FunctionalComponent = () => {
	const [darkMode] = useLocalStorageState("darkMode", { defaultValue: true });

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export default App;
