import { FC } from "react";

import Link from "next/link";

import { Post, User } from "@prisma/client";

import multipleClassNames from "@utils/multipleClassNames";

import styles from "./post.module.scss";

const Post: FC<{
	post: Post & {
		author: User;
	};
}> = ({ post }) => {
	return (
		<div className="columns mt-2">
			<div
				className={multipleClassNames(
					"column col-4 col-md-6 col-ml-auto bg-gray",
					styles.body
				)}
			>
				<h3>{post.title}</h3>

				{post.tags.map((tag) => (
					<span key={tag} className="chip">
						{tag}
					</span>
				))}
				{post.content && (
					<p className="mt-2 mb-0">
						{post.content?.length > 300
							? post.content.slice(0, 300)
							: post.content}{" "}
						<Link href={`/blog/${post.id}`}>Continue reading</Link>
					</p>
				)}
			</div>
			<div
				className={multipleClassNames(
					"column col-4 col-md-6 col-mr-auto bg-gray",
					styles.body,
					styles.info
				)}
			>
				<h5>Posted on {new Date(post.createdAt).toLocaleDateString()}</h5>
				<h6>By {post.author.name}</h6>
			</div>
		</div>
	);
};

export default Post;
