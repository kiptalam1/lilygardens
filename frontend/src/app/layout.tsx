import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
	variable: "--font-josefin-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home",
	description: "Landing page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${josefinSans.variable} h-full antialiased`}>
			<body className="h-screen bg-bg text-text flex flex-col">
				<main className="flex-1 w-full">
					<div className="mx-auto w-full h-full max-w-5xl px-4">{children}</div>
				</main>
			</body>
		</html>
	);
}
