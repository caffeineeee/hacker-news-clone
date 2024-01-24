"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";

export function Header() {
	const router = useRouter();
	return (
		<header className="flex items-center bg-[#FF6600] w-full text-sm leading-6">
			<Link
				href="/"
				onClick={() => {
					router.refresh();
				}}
			>
				<Icons.yc
					className="h-4 w-4 border border-white m-0.5"
					aria-hidden="true"
				/>
			</Link>
			<span className="flex flex-row space-x-3">
				<a href="/" className="font-bold px-2">
					Hacker News
				</a>
				<a href="/">new</a>
				<DividerBorder />
				<a href="/">past</a>
				<DividerBorder />
				<a href="/">comments</a>
				<DividerBorder />
				<a href="/">ask</a>
				<DividerBorder />
				<a href="/">show</a>
				<DividerBorder />
				<a href="/">jobs</a>
				<DividerBorder />
				<a href="/">submit</a>
			</span>
			<a href="/" className="ml-auto">
				login
			</a>
		</header>
	);
}

function DividerBorder() {
	return <span className="bg-black w-px h-3.5 self-center"> </span>;
}
