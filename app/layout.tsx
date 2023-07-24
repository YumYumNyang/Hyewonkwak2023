import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/common/theme-provider";
import Header from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hyewon Kwak",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					<Header />
					<main className="container"> {children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
