import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
	subsets: ["latin"],
	display: "fallback",
});

const verdana = localFont({
	src: [
		{
			path: "../assets/fonts/verdana/verdana.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/verdana/verdana-bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../assets/fonts/verdana/verdana-bold-italic.ttf",
			weight: "700",
			style: "italic",
		},
	],
});

const geneva = localFont({
	src: [
		{
			path: "../assets/fonts/geneva/geneva-normal.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/geneva/geneva-normal-italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../assets/fonts/geneva/geneva-medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/geneva/geneva-bold-italic.ttf",
			weight: "700",
			style: "italic",
		},
	],
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
		<html lang="en">
			<body
				className={`${verdana.className} ${geneva.className} ${notoSerifDisplay.className}`}
			>
				{children}
			</body>
		</html>
	);
}
