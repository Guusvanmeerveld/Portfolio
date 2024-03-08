"use client";

import { Link } from "@nextui-org/react";
import { ErrorPage } from "@typings/errorPage";

import { useEffect } from "react";

const MainErrorPage: ErrorPage = ({ error, reset }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="container min-h-screen text-center">
			<p className="text-3xl">Something went loading the page!</p>
			<p className="text-xl">{error.toString()}</p>
			<div>
				<Link href="#" onClick={() => reset()}>
					Try again
				</Link>
			</div>
		</div>
	);
};

export default MainErrorPage;
