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
			<body className="min-h-full flex flex-col">
				<main className="mx-auto w-full max-w-5xl px-4">{children}</main>
			</body>
		</html>
	);
}
