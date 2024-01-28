"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
	const router = useRouter();
	return (
		<header className="flex items-center bg-[#FF6600] w-full text-[10pt] leading-6">
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
			<span className="flex flex-row space-x-2">
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
			<a href="/" className="ml-auto mr-1">
				login
			</a>
		</header>
	);
}

export function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center border-t-2 border-[#FF6600] w-full h-24 mb-8">
			<span className="flex flex-row space-x-2 text-[8pt] *:visited:text-neutral-500">
				<a href="/newsguidelines.html">Guidelines</a>
				<DividerBorder />
				<a href="/newsfaq.html">FAQ</a>
				<DividerBorder />
				<a href="/">Lists</a>
				<DividerBorder />
				<a href="https://github.com/HackerNews/API">API</a>
				<DividerBorder />
				<a href="/security.html">Security</a>
				<DividerBorder />
				<a href="http://www.ycombinator.com/legal">Legal</a>
				<DividerBorder />
				<a href="http://www.ycombinator.com/apply">Apply to YC</a>
				<DividerBorder />
				<a href="mailto:hn@ycombinator.com">Contact</a>
			</span>
			<div>
				<form method="get" action="hn.algolia.com" className="my-2 text-[12pt]">
					<span className="pr-1 text-neutral-500">Search:</span>
					<input
						type="text"
						name="search"
						id="search"
						className="border border-neutral-500 w-36 font-mono pl-1 text-[10pt]"
						autoCorrect="off"
						spellCheck={false}
						autoCapitalize="off"
						autoComplete="false"
					/>
				</form>
			</div>
		</footer>
	);
}

export function DividerBorder() {
	return <span className="bg-black w-px h-3.5 self-center"> </span>;
}
