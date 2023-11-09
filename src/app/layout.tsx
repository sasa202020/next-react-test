import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'MEGa title solving mystery',
  description: 'amazing description for the website',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <head>
    <meta name="og:title" content="Vercel Edge NetworkASDASDA12321312312321" />
    <meta name="og:description" content="Vercel Edge NetworkASDASDASD312132312321321" />
    <meta
      name="og:url"
      content="https://vercel.com/docs/edge-network/overview"
    />
  </head>
    </html>
  )
}
