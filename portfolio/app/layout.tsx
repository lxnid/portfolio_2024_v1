import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./components/Footer";

const fontPop = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	style: ["normal", "italic"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Dinil Rubasinghe",
	description: "Personal Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/veritablestudios/colored-icons@1.7.8/src/app/ci.min.css"
				/>
			</head>
			<body className={`${fontPop.className}`}>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
