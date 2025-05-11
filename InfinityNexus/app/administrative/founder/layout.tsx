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
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Navbar completely removed for all devices */}
      {children}
      <Footer />
    </>
  )
}
