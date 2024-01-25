import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Hacker News Clone",
	description:
		"Hacker News (https://news.ycombinator.com) clone, built using Next.js.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
				<div className="w-[85%] mt-2 mx-auto">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
