"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import CoreTeamAuthCheck from "@/components/core-team-auth-check"

interface CoreTeamUser {
  id: string
  name: string
  position: string
  email: string
}

export default function CoreTeamDashboard() {
  const [user, setUser] = useState<CoreTeamUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get user data from sessionStorage
    const userData = sessionStorage.getItem("coreTeamUser")
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem("coreTeamUser")
    window.location.href = "/admin/core-team/login"
  }

  return (
    <CoreTeamAuthCheck>
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
              <nav className="flex flex-wrap justify-center gap-4 items-center">
                <Link href="/" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
                <Link href="/admin" className="hover:text-blue-200 transition-colors">
                  Admin
                </Link>
                {user && (
                  <div className="flex items-center ml-4">
                    <span className="mr-2">{user.name}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">CoreTeam Dashboard</h1>
              <p className="text-xl max-w-3xl mx-auto">Director General's Core Team Management System</p>
              {user && (
                <div className="mt-6 inline-block bg-blue-800 px-6 py-3 rounded-lg border border-blue-700">
                  <p className="text-lg">
                    Welcome, <span className="font-bold">{user.name}</span>
                  </p>
                  <p className="text-sm text-blue-200">
                    {user.position} | ID: {user.id}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Director's Welcome */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    MJ
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Welcome to the Director General's CoreTeam Portal
                    </h2>
                    <p className="text-gray-700">
                      This dashboard provides you with the tools and information needed to support the Director
                      General's office efficiently. As a trusted member of the CoreTeam, you play a vital role in
                      ensuring TRUSTED-ALLY's mission is executed with excellence. Please use the navigation options
                      below to access your assigned responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">CoreTeam Overview</h2>

              <div className="max-w-6xl mx-auto mb-12">
                <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">About CoreTeam</h3>
                  <p className="text-gray-700 mb-4">
                    The CoreTeam serves as the primary support structure for the Director General, ensuring efficient
                    management and coordination of all TRUSTED-ALLY initiatives. This elite team of professionals works
                    around the clock to maintain operational excellence and strategic alignment across all projects and
                    departments.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="bg-white px-4 py-2 rounded-full text-blue-800 text-sm font-medium shadow-sm">
                      8 Key Positions
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full text-blue-800 text-sm font-medium shadow-sm">
                      10 Team Members
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full text-blue-800 text-sm font-medium shadow-sm">
                      24/7 Operations
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full text-blue-800 text-sm font-medium shadow-sm">
                      Direct DG Support
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">The 8 Key Positions</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* PA Team */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
                  <div className="bg-blue-800 text-white p-3">
                    <h3 className="font-bold">1. Personal Assistants</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">24/7 support through three shifts</p>
                    <div className="space-y-3">
                      <Link
                        href="/admin/core-team/profile/PA-MCB001"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">PA-MCB001</p>
                            <p className="text-xs text-gray-500">Day Shift</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/PA-MCB002"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">PA-MCB002</p>
                            <p className="text-xs text-gray-500">Evening Shift</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/PA-MCB003"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">PA-MCB003</p>
                            <p className="text-xs text-gray-500">Night Shift</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Operations & Finance */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
                  <div className="bg-blue-800 text-white p-3">
                    <h3 className="font-bold">2-3. Operations & Finance</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">Core operational management</p>
                    <div className="space-y-3">
                      <Link
                        href="/admin/core-team/profile/OM-MCB004"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">OM-MCB004</p>
                            <p className="text-xs text-gray-500">Operations Manager</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/FM-MCB005"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">FM-MCB005</p>
                            <p className="text-xs text-gray-500">Finance Manager</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Communication & Training */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
                  <div className="bg-blue-800 text-white p-3">
                    <h3 className="font-bold">4-5. Communication & Training</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">Messaging and development</p>
                    <div className="space-y-3">
                      <Link
                        href="/admin/core-team/profile/CC-MCB006"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">CC-MCB006</p>
                            <p className="text-xs text-gray-500">Communication Coordinator</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/TDM-MCB007"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">TDM-MCB007</p>
                            <p className="text-xs text-gray-500">Training Development Manager</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* IT, District & Project */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
                  <div className="bg-blue-800 text-white p-3">
                    <h3 className="font-bold">6-8. IT & Coordination</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">Technical and field support</p>
                    <div className="space-y-3">
                      <Link
                        href="/admin/core-team/profile/IT-MCB008"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">IT-MCB008</p>
                            <p className="text-xs text-gray-500">IT Support Member</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/DRC-MCB009"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">DRC-MCB009</p>
                            <p className="text-xs text-gray-500">District Coordinator</p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/admin/core-team/profile/PM-MCB010"
                        className="block p-2 hover:bg-gray-50 rounded border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">PM-MCB010</p>
                            <p className="text-xs text-gray-500">Project Manager</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Policies and Guidelines */}
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Team Policies and Guidelines</h3>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
                  <div className="bg-blue-800 text-white p-4">
                    <h4 className="text-lg font-bold">Core Responsibilities</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-4">
                          <span className="font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900">Direct Support to Director General</h5>
                          <p className="text-gray-700">
                            Provide immediate assistance to the Director General for all administrative, operational,
                            and strategic needs.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-4">
                          <span className="font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900">Project Coordination</h5>
                          <p className="text-gray-700">
                            Ensure seamless coordination between all projects and initiatives under TRUSTED-ALLY's
                            umbrella.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-4">
                          <span className="font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900">Communication Management</h5>
                          <p className="text-gray-700">
                            Maintain clear and effective communication channels between leadership, teams, and external
                            stakeholders.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-4">
                          <span className="font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900">Operational Excellence</h5>
                          <p className="text-gray-700">
                            Uphold the highest standards of operational efficiency and effectiveness across all
                            activities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-blue-800 text-white p-4">
                      <h4 className="text-lg font-bold">Working Hours & Shifts</h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Day Shift:</strong> 8:00 AM - 4:00 PM
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Evening Shift:</strong> 4:00 PM - 12:00 AM
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Night Shift:</strong> 12:00 AM - 8:00 AM
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Standard Hours:</strong> 40 hours per week
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Overtime:</strong> As required with appropriate compensation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-blue-800 text-white p-4">
                      <h4 className="text-lg font-bold">Benefits & Compensation</h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Competitive Salary:</strong> Based on position and experience
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Health Insurance:</strong> Comprehensive medical coverage
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Retirement Plan:</strong> Matching contributions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Paid Time Off:</strong> 20 days annual leave + holidays
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                          <span>
                            <strong>Professional Development:</strong> Training budget and opportunities
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
                  <div className="bg-blue-800 text-white p-4">
                    <h4 className="text-lg font-bold">Code of Conduct</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-blue-900 mb-3">Professional Standards</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Maintain highest level of professionalism at all times</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Respect confidentiality of all information</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Demonstrate integrity in all actions and decisions</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Uphold the organization's values and mission</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-900 mb-3">Communication Guidelines</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Clear, concise, and respectful communication</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Timely responses to all inquiries</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Proper documentation of all important communications</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                            <span>Appropriate escalation of critical issues</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <SimpleFooter />
      </div>
    </CoreTeamAuthCheck>
  )
}

