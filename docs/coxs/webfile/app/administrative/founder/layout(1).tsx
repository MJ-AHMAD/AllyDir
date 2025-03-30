"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Add meta viewport tag to ensure proper scaling on mobile
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    document.head.appendChild(meta)

    // Prevent body scrolling when modal is open
    document.body.style.overflowX = "hidden"

    return () => {
      document.body.style.overflowX = ""
      if (meta.parentNode) {
        meta.parentNode.removeChild(meta)
      }
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar completely removed for all devices */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

