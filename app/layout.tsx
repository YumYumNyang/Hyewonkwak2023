import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/common/theme-provider'
import { getAllPosts } from '@/lib/notion/getAllPosts'
import CameraFrame from '@/components/common/camera-frame'

export const metadata: Metadata = {
  title: 'Hyewon Kwak 2023',
  description: 'welcome to my place',
  metadataBase: new URL('https://hyewon-kwak.xyz'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CameraFrame>{children}</CameraFrame>
      </body>
    </html>
  )
}
