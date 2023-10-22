import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/common/theme-provider';
import { getAllPosts } from '@/lib/notion/getAllPosts';
import CameraFrame from '@/components/common/camera-frame';

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
  title: 'Hyewon Kwak',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CameraFrame>{children}</CameraFrame>
        </ThemeProvider>
      </body>
    </html>
  );
}
