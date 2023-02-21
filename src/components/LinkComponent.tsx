import Link from "next/link";
import z from "zod";

import styles from "./linkComponent.module.scss";

import { FC, useCallback, useState } from "react";

import axios from "axios";

import { Link as LinkType } from "@prisma/client";

import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";
import useUser from "@utils/hooks/useUser";
import multipleClassNames from "@utils/multipleClassNames";

const LinkComponent: FC<{ link: LinkType }> = ({ link }) => {
	const user = useUser();
	const [error, setError] = useState<string | null>(null);
	const [deleted, setDeleted] = useState(false);

	const deleteLink = useCallback(async (id) => {
		const parseUserInputResult = z.number().safeParse(id);

		if (!parseUserInputResult.success) {
			setError(parseUserInputResult.error.message);
			return;
		}

		const response = await axios
			.post("/api/link/delete", { id })
			.then(parseAxiosResponse)
			.catch(parseAxiosError);

		if (!response.ok) {
			setError(JSON.stringify(response.error));
			return;
		}

		setDeleted(true);
	}, []);

	if (deleted) return <></>;

	return (
		<div className={multipleClassNames("bg-gray", "s-rounded", styles.body)}>
			<div className="container">
				<div className="columns">
					<div className="col col-11">
						<Link href={link.remoteAddress}>
							<a>{link.location}</a>
						</Link>
					</div>
					{user !== null && (
						<div className="col col-1">
							<Link href="/link/edit">
								<a className="mr-2">edit</a>
							</Link>
							<a onClick={() => deleteLink(link.id)}>delete</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LinkComponent;
