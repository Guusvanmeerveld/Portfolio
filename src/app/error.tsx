"use client";

import { Link, Spacer } from "@nextui-org/react";

// Error components must be Client Components
import { useEffect } from "react";

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
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
}
