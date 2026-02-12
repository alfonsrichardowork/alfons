import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio | Next.js, React & TypeScript Expert",
    template: "%s | Developer Portfolio",
  },
  description:
    "Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern, performant, and scalable web applications with cutting-edge technologies.",
  keywords: [
    "Next.js developer",
    "React developer",
    "TypeScript expert",
    "Prisma ORM",
    "Full-stack developer",
    "Web development",
    "Frontend developer",
    "Backend developer",
    "JavaScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Developer Portfolio | Next.js, React & TypeScript Expert",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern, performant web applications.",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Next.js, React & TypeScript Expert",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Prisma. Building modern web applications.",
    creator: "@yourusername",
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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
