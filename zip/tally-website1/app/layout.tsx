import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TRUSTED-ALLY",
  description:
    "TRUSTED-ALLY is dedicated to creating a peaceful and equitable world where everyone thrives through education, social innovation, and sustainable development.",
  icons: {
    icon: "https://mj-ahmad.github.io/mja2025/img/icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'