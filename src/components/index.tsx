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
					className="h-[18px] w-[18px] border border-white m-0.5"
					aria-hidden="true"
				/>
			</Link>
			<span className="flex flex-col md:flex-row space-x-2 -space-y-[8px] md:-space-y-0">
				<a href="/" className="font-bold px-2 text-[15px] md:text-[10pt]">
					Hacker News
				</a>
				<span className="text-[12px] md:text-[10pt]">
					<a href="/">new</a>
					&nbsp;|&nbsp;
					<a href="/">past</a>
					&nbsp;|&nbsp;
					<a href="/">comments</a>
					&nbsp;|&nbsp;
					<a href="/">ask</a>
					&nbsp;|&nbsp;
					<a href="/">show</a>
					&nbsp;|&nbsp;
					<a href="/">jobs</a>
					&nbsp;|&nbsp;
					<a href="/">submit</a>
				</span>
			</span>
			<a href="/" className="ml-auto mr-2">
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
				&nbsp;|&nbsp;
				<a href="/newsfaq.html">FAQ</a>
				&nbsp;|&nbsp;
				<a href="/">Lists</a>
				&nbsp;|&nbsp;
				<a href="https://github.com/HackerNews/API">API</a>
				&nbsp;|&nbsp;
				<a href="/security.html">Security</a>
				&nbsp;|&nbsp;
				<a href="http://www.ycombinator.com/legal">Legal</a>
				&nbsp;|&nbsp;
				<a href="http://www.ycombinator.com/apply">Apply to YC</a>
				&nbsp;|&nbsp;
				<a href="mailto:hn@ycombinator.com">Contact</a>
			</span>
			<div>
				<form method="get" action="hn.algolia.com" className="my-2 text-[10pt]">
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
