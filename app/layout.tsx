import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alfons Portfolio | Next.js, Node.js, React, TypeScript",
    template: "%s | Alfons Portfolio",
  },
  description:
    "Alfons is a Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern, performant, and scalable web applications.",
  keywords: [
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Prisma ORM",
    "Full-stack developer",
    "Web development",
    "Frontend developer",
    "Backend developer",
    "JavaScript",
    "Node.js",
    "Alfons Portfolio",
  ],
  authors: [{ name: "Alfons Richardo" }],
  creator: "Alfons Richardo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfonsrichardo.com/",
    title: "Alfons Portfolio | Next.js, Node.js, React, TypeScript",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern, performant web applications.",
    siteName: "Alfons Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfons Portfolio | Next.js, Node.js, React, TypeScript",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern web applications.",
    creator: "@alfonsrichardo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
