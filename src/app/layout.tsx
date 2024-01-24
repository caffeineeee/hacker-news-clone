import { Header } from "@/components/root/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
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
		<html lang="en" className={`${inter.className}`}>
			<body>
				<div className="w-[85%] mt-2 mx-auto">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
