import { FC } from "react";

const Tags: FC<{ tags: string[] }> = ({ tags }) => {
	return (
		<>
			{tags.map((tag) => (
				<span key={tag} className="chip">
					{tag}
				</span>
			))}
		</>
	);
};

export default Tags;
