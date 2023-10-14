import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/common/theme-provider";
import Header from "@/components/common/header";
import { getAllPosts } from "@/lib/notion/getAllPosts";

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return Object.values(posts).map((categorizedPosts) => {
		categorizedPosts.map((post) => ({
			category: post.category,
			slug: [...post.slug],
		}));
	});
}

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="w-full h-full overflow-scroll  pt-14 box-border bg-neutral-50 dark:bg-neutral-950 bg-[url('../public/grain.svg')] ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
