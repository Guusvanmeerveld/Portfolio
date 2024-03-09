import { Component } from "./component";

export type ErrorPage = Component<{
	error: Error & { digest?: string };
	reset: () => void;
}>;
