"use client";

import { formatDate } from "@/utils/format-date";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "./icons";

export default function Story({
	id,
	title,
	date,
	url,
	user,
	score,
	commentsCount,
}) {
	const { host } = url ? new URL(url) : { host: "#" };
	const [voted, setVoted] = useState(false);

	return (
		<div className="flex flex-row items-center">
			<div className="row-span-1">
				<Icons.triangle
					aria-hidden="true"
					onClick={() => setVoted(!voted)}
					className={clsx(
						voted ? "invisible" : "",
						"h-2.5 w-2.5 cursor-pointer",
					)}
				/>
			</div>
			<div className="row-span-2">
				<div className="row-span-1 ml-1">
					<a
						href={url}
						rel="noopener noreferrer nofollow"
						target="_blank"
						className="text-[10pt]"
					>
						{title}
					</a>
					{url && (
						<span className="text-[8pt] text-[#757575] hover:underline ml-px">
							{" ("}
							<a
								href={`http://${host}`}
								rel="noopener noreferrer nofollow"
								target="_blank"
							>
								{host.replace(/^www\./, "")}
							</a>
							{")"}
						</span>
					)}
				</div>
				<span className="flex flex-row text-[9pt] md:text-[7pt] text-[#757575]">
					{score} {plural(score, "point")}&nbsp;by&nbsp;
					<span className="hover:underline cursor-pointer">{user}</span>&nbsp;
					<Link href={`/item/${id}`}>
						<span suppressHydrationWarning className="hover:underline">
							{formatDate(new Date(date))} ago
						</span>
					</Link>
					<span className={clsx(voted ? "" : "hidden", "")}>
						&nbsp;|&nbsp;
						<button
							type="button"
							onClick={() => setVoted(!voted)}
							className="hover:underline"
						>
							unvote
						</button>
					</span>
					&nbsp;|&nbsp;
					<button type="button" className="hover:underline">
						hide
					</button>
					&nbsp;|&nbsp;
					<Link href={`/item/${id}`} className="hover:underline">
						{commentsCount} {plural(commentsCount, "comment")}
					</Link>
				</span>
			</div>
		</div>
	);
}

const plural = (n, s) => s + (n === 0 || n > 1 ? "s" : "");
