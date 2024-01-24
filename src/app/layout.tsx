import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

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
		<html lang="en" className={`${ptSans.className}`}>
			<body>
				<div className="w-[85%] mt-2 mx-auto">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
