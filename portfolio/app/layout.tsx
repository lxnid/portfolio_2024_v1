import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

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
			<body className={`${fontPop.className}`}>{children}</body>
		</html>
	);
}
