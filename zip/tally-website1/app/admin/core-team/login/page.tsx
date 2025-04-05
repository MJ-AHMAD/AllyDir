"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import { PasswordPolicyNotice } from "@/components/password-policy-notice"

export default function CoreTeamLoginPage() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/core-team-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      })

      const data = await response.json()

      if (data.success) {
        // Store user data in sessionStorage
        sessionStorage.setItem("coreTeamUser", JSON.stringify(data.user))
        // Redirect to dashboard
        router.push(`/admin/core-team/dashboard`)
      } else {
        setError(data.message || "Invalid credentials")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <span className="mr-2">TRUSTED-ALLY</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/admin" className="hover:text-blue-200 transition-colors">
                Admin
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-800 text-white py-6 px-8 text-center">
              <h1 className="text-2xl font-bold">CoreTeam Login</h1>
              <p className="text-blue-100 mt-2">Director General's Core Team Access</p>
            </div>

            <div className="p-8">
              <div className="mb-6 text-center">
                <div className="inline-block rounded-full bg-blue-100 p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600">Please enter your CoreTeam ID and password</p>
              </div>

              {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                    CoreTeam ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., PA-MCB001"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <PasswordPolicyNotice />

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Protected area. Unauthorized access is prohibited.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

