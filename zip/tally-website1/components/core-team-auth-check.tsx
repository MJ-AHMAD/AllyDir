"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function CoreTeamAuthCheck({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const user = sessionStorage.getItem("coreTeamUser")

    if (!user) {
      router.push("/admin/core-team/login")
    } else {
      setIsAuthenticated(true)
    }

    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
      </div>
    )
  }

  return isAuthenticated ? <>{children}</> : null
}

// Also export as a named export for components that might be using it that way
export { CoreTeamAuthCheck }

