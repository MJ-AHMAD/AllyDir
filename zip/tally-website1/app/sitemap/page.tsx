"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SimpleFooter } from "@/components/simple-footer"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SitemapPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userType, setUserType] = useState<"board" | "coreTeam" | "">("")
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [userIds, setUserIds] = useState<string[]>([])
  const router = useRouter()

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is logged in as core team member or board member
        const session = localStorage.getItem("sitemapSession")
        if (session) {
          const sessionData = JSON.parse(session)
          if (sessionData && sessionData.isLoggedIn) {
            setIsAuthenticated(true)
          }
        }
      } catch (error) {
        console.error("Authentication check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Fetch user IDs based on selected user type
  useEffect(() => {
    const fetchUserIds = async () => {
      if (!userType) return

      try {
        const response = await fetch("/api/get-user-ids", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userType }),
        })

        const data = await response.json()
        if (data.success) {
          setUserIds(data.userIds)
        } else {
          setError("Failed to fetch user IDs")
        }
      } catch (error) {
        console.error("Error fetching user IDs:", error)
        setError("Failed to fetch user IDs")
      }
    }

    fetchUserIds()
  }, [userType])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!userId || !password) {
      setError("Please select a user ID and enter your password")
      return
    }

    try {
      const response = await fetch("/api/core-team-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId, password }),
      })

      const data = await response.json()

      if (data.success) {
        localStorage.setItem(
          "sitemapSession",
          JSON.stringify({
            isLoggedIn: true,
            role: data.role,
            user: data.user,
          }),
        )
        setIsAuthenticated(true)
      } else {
        setError("Invalid credentials. Please try again.")
      }
    } catch (error) {
      console.error("Authentication failed:", error)
      setError("Authentication failed. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container py-12 flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Restricted Access</h1>
              <p className="mt-2 text-gray-600">
                This page is only accessible to Board of Directors and Core Team members.
              </p>
            </div>
            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  Select User Type
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={userType}
                  onChange={(e) => {
                    setUserType(e.target.value as "board" | "coreTeam" | "")
                    setUserId("")
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select User Type</option>
                  <option value="board">Board of Directors</option>
                  <option value="coreTeam">Core Team</option>
                </select>
              </div>

              {userType && (
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    Select User ID
                  </label>
                  <select
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select User ID</option>
                    {userIds.map((id) => (
                      <option key={id} value={id}>
                        {id}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Access Sitemap
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <Link href="/" className="text-sm text-blue-600 hover:underline">
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <SimpleFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Complete Sitemap</h1>
          <button
            onClick={() => {
              localStorage.removeItem("sitemapSession")
              setIsAuthenticated(false)
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-500 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-500 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-blue-500 hover:underline">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-blue-500 hover:underline">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/invest" className="text-blue-500 hover:underline">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="/schedule-consultation" className="text-blue-500 hover:underline">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/news-and-media" className="text-blue-500 hover:underline">
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Al-Quran Journey Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Al-Quran Journey</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/al-quran-journey" className="text-blue-500 hover:underline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/quraner-fariwala" className="text-blue-500 hover:underline">
                  Quraner Fariwala
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/al-quran-journey/quraner-fariwala/quran-distribution"
                      className="text-blue-500 hover:underline"
                    >
                      Quran Distribution
                    </Link>
                    <ul className="pl-4 space-y-1 mt-1">
                      <li>
                        <Link
                          href="/projects/al-quran-journey/quraner-fariwala/quran-distribution/donate"
                          className="text-blue-500 hover:underline"
                        >
                          Donate
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/al-quran-journey/quraner-fariwala/quran-distribution/donate/thank-you"
                          className="text-blue-500 hover:underline"
                        >
                          Thank You
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/projects/al-quran-journey/quraner-fariwala/advance-printing"
                      className="text-blue-500 hover:underline"
                    >
                      Advance Printing
                    </Link>
                    <ul className="pl-4 space-y-1 mt-1">
                      <li>
                        <Link
                          href="/projects/al-quran-journey/quraner-fariwala/advance-printing/action"
                          className="text-blue-500 hover:underline"
                        >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/al-quran-journey/quraner-fariwala/advance-printing/become-member"
                          className="text-blue-500 hover:underline"
                        >
                          Become Member
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/research" className="text-blue-500 hover:underline">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/printing" className="text-blue-500 hover:underline">
                  Printing
                </Link>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/distribution" className="text-blue-500 hover:underline">
                  Distribution
                </Link>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/donation" className="text-blue-500 hover:underline">
                  Donation
                </Link>
              </li>
              <li>
                <Link href="/projects/al-quran-journey/administration" className="text-blue-500 hover:underline">
                  Administration
                </Link>
              </li>
            </ul>
          </div>

          {/* TechAlly Ventures Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">TechAlly Ventures</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/techally-ventures" className="text-blue-500 hover:underline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/projects/techally-ventures/web-development" className="text-blue-500 hover:underline">
                  Web Development
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/techally-ventures/web-development/get-started"
                      className="text-blue-500 hover:underline"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/web-development/basic"
                      className="text-blue-500 hover:underline"
                    >
                      Basic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/web-development/professional"
                      className="text-blue-500 hover:underline"
                    >
                      Professional
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/web-development/enterprise"
                      className="text-blue-500 hover:underline"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/techally-ventures/payment-integration" className="text-blue-500 hover:underline">
                  Payment Integration
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/techally-ventures/payment-integration/starter"
                      className="text-blue-500 hover:underline"
                    >
                      Starter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/payment-integration/business"
                      className="text-blue-500 hover:underline"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/payment-integration/enterprise"
                      className="text-blue-500 hover:underline"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/techally-ventures/seo-optimization" className="text-blue-500 hover:underline">
                  SEO Optimization
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/techally-ventures/seo-optimization/basic"
                      className="text-blue-500 hover:underline"
                    >
                      Basic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/seo-optimization/professional"
                      className="text-blue-500 hover:underline"
                    >
                      Professional
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/seo-optimization/enterprise"
                      className="text-blue-500 hover:underline"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/techally-ventures/ecommerce-solutions" className="text-blue-500 hover:underline">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/projects/techally-ventures/technical-support" className="text-blue-500 hover:underline">
                  Technical Support
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/techally-ventures/technical-support/basic"
                      className="text-blue-500 hover:underline"
                    >
                      Basic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/technical-support/business"
                      className="text-blue-500 hover:underline"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/technical-support/enterprise"
                      className="text-blue-500 hover:underline"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/techally-ventures/microsoft-solutions" className="text-blue-500 hover:underline">
                  Microsoft Solutions
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/techally-ventures/microsoft-solutions/basic"
                      className="text-blue-500 hover:underline"
                    >
                      Basic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/microsoft-solutions/business"
                      className="text-blue-500 hover:underline"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/techally-ventures/microsoft-solutions/enterprise"
                      className="text-blue-500 hover:underline"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Ally Voyage Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Ally Voyage</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/ally-voyage" className="text-blue-500 hover:underline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/projects/ally-voyage/umrah-packages" className="text-blue-500 hover:underline">
                  Umrah Packages
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/ally-voyage/umrah-packages/essential"
                      className="text-blue-500 hover:underline"
                    >
                      Essential
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/ally-voyage/umrah-packages/premium" className="text-blue-500 hover:underline">
                      Premium
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/ally-voyage/umrah-packages/luxury" className="text-blue-500 hover:underline">
                      Luxury
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/umrah-packages/custom-inquiry"
                      className="text-blue-500 hover:underline"
                    >
                      Custom Inquiry
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/ally-voyage/featured-packages" className="text-blue-500 hover:underline">
                  Featured Packages
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/domestic-getaways"
                      className="text-blue-500 hover:underline"
                    >
                      Domestic Getaways
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/european-adventures"
                      className="text-blue-500 hover:underline"
                    >
                      European Adventures
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/tropical-escapes"
                      className="text-blue-500 hover:underline"
                    >
                      Tropical Escapes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/coxs-bazar-sunset-bliss"
                      className="text-blue-500 hover:underline"
                    >
                      Cox's Bazar Sunset Bliss
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/coxs-bazar-adventure-week"
                      className="text-blue-500 hover:underline"
                    >
                      Cox's Bazar Adventure Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ally-voyage/featured-packages/coxs-bazar-luxury-retreat"
                      className="text-blue-500 hover:underline"
                    >
                      Cox's Bazar Luxury Retreat
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Programs</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/education-program" className="text-blue-500 hover:underline">
                  Education Program
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link href="/education-program/get-involved" className="text-blue-500 hover:underline">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link href="/education-program/free-learning" className="text-blue-500 hover:underline">
                      Free Learning
                    </Link>
                    <ul className="pl-4 space-y-1 mt-1">
                      <li>
                        <Link
                          href="/education-program/free-learning/register"
                          className="text-blue-500 hover:underline"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/social-initiatives" className="text-blue-500 hover:underline">
                  Social Initiatives
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link href="/social-initiatives/support-our-initiatives" className="text-blue-500 hover:underline">
                      Support Our Initiatives
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/environmental-development" className="text-blue-500 hover:underline">
                  Environmental Development
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link
                      href="/environmental-development/join-our-eco-efforts"
                      className="text-blue-500 hover:underline"
                    >
                      Join Our Eco Efforts
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Admin Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Admin</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/admin" className="text-blue-500 hover:underline">
                  Admin Home
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-blue-500 hover:underline">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link href="/admin/management" className="text-blue-500 hover:underline">
                  Management
                </Link>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link href="/admin/management/board" className="text-blue-500 hover:underline">
                      Board
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/management/team" className="text-blue-500 hover:underline">
                      Team
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/admin/core-team/login" className="text-blue-500 hover:underline">
                  Core Team Login
                </Link>
              </li>
              <li>
                <Link href="/admin/core-team/dashboard" className="text-blue-500 hover:underline">
                  Core Team Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/activity-areas" className="text-blue-500 hover:underline">
                  Activity Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Help Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Legal & Help</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-blue-500 hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-500 hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-500 hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  )
}

