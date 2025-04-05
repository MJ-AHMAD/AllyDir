"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  Calendar,
  CheckCircle,
  FileText,
  Users,
  Briefcase,
  Star,
  ArrowUpRight,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"
import { CoreTeamAuthCheck } from "@/components/core-team-auth-check"

export default function ShintiyaRahmanProfile() {
  const [currentMonth, setCurrentMonth] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const date = new Date()
    setCurrentMonth(date.toLocaleString("en-US", { month: "long", year: "numeric" }))
  }, [])

  // Work hours data
  const workData = {
    scheduledHours: 160,
    completedHours: 152,
    missedHours: 8,
    overtimeHours: 12,
    attendanceRate: 95,
    currentProjects: 4,
    tasksCompleted: 37,
    tasksInProgress: 8,
  }

  // Daily responsibilities
  const dailyResponsibilities = [
    "Manage Director General's calendar and schedule appointments",
    "Handle incoming calls, emails, and correspondence",
    "Prepare and organize documents for meetings and presentations",
    "Coordinate with CoreTeam members on behalf of the Director General",
    "Maintain confidential files and records",
    "Arrange travel and accommodation for official trips",
    "Take minutes during important meetings",
    "Follow up on action items from meetings",
    "Assist with administrative tasks for Al-Quran Journey project",
    "Support TechAlly Ventures administrative requirements",
  ]

  // Work links
  const workLinks = [
    { name: "Calendar Management System", url: "#calendar-system", icon: Calendar },
    { name: "Document Repository", url: "#document-repository", icon: FileText },
    { name: "Meeting Minutes Portal", url: "#meeting-minutes", icon: MessageSquare },
    { name: "Travel Arrangement System", url: "#travel-system", icon: Briefcase },
    { name: "CoreTeam Communication Hub", url: "#communication-hub", icon: Users },
  ]

  // Benefits
  const benefits = [
    "Monthly stipend of 25,000 BDT",
    "Health insurance coverage",
    "Flexible working hours",
    "Professional development allowance",
    "Annual performance bonus",
    "Paid time off for religious observances",
    "Transportation allowance",
    "Meal allowance during extended work hours",
  ]

  // CoreTeam positions overview
  const coreTeamPositions = [
    { title: "Chief Operating Officer", id: "COO-MCB001", filled: true },
    { title: "Chief Financial Officer", id: "CFO-MCB001", filled: true },
    { title: "Project Director (Al-Quran Journey)", id: "PD-AQJ001", filled: true },
    { title: "Project Director (TechAlly Ventures)", id: "PD-TAV001", filled: true },
    { title: "Project Director (Ally Voyage)", id: "PD-AV001", filled: false },
    { title: "Head of Education Programs", id: "HEP-MCB001", filled: true },
    { title: "Head of Social Initiatives", id: "HSI-MCB001", filled: false },
    { title: "Personal Assistant (Night Shift)", id: "PA-MCB002", filled: false },
  ]

  // Skill development plan
  const skillDevelopmentPlan = [
    {
      skill: "Advanced Microsoft Office Suite",
      currentLevel: 3,
      targetLevel: 5,
      resources: "LinkedIn Learning Course: Advanced Office Suite Mastery",
      deadline: "June 2025",
    },
    {
      skill: "Professional Communication",
      currentLevel: 4,
      targetLevel: 5,
      resources: "Communication Skills for Administrative Professionals Workshop",
      deadline: "April 2025",
    },
    {
      skill: "Time Management",
      currentLevel: 3,
      targetLevel: 5,
      resources: "Time Management for Executive Assistants Course",
      deadline: "May 2025",
    },
    {
      skill: "Project Coordination",
      currentLevel: 2,
      targetLevel: 4,
      resources: "Project Management Fundamentals for Assistants",
      deadline: "July 2025",
    },
    {
      skill: "Data Analysis",
      currentLevel: 1,
      targetLevel: 3,
      resources: "Basic Data Analysis with Excel Course",
      deadline: "August 2025",
    },
  ]

  return (
    <CoreTeamAuthCheck>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-blue-100">
                {isClient && (
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/111.png"
                    alt="Shintiya Rahman"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Shintiya Rahman</h1>
                <p className="text-md text-blue-600">Personal Assistant (Day Shift)</p>
                <p className="text-sm text-gray-500">ID: PA-MCB001</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admin/core-team/dashboard"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Back to Dashboard
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Work Hours & Performance Section */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Work Hours & Performance</h2>
                  <p className="mt-1 text-sm text-gray-500">Current Month: {currentMonth}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hours */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-4">Hours Breakdown</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Scheduled Hours</span>
                            <span className="text-sm font-medium text-gray-900">{workData.scheduledHours} hours</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Completed Hours</span>
                            <span className="text-sm font-medium text-gray-900">{workData.completedHours} hours</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(workData.completedHours / workData.scheduledHours) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Missed Hours</span>
                            <span className="text-sm font-medium text-gray-900">{workData.missedHours} hours</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: `${(workData.missedHours / workData.scheduledHours) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Overtime Hours</span>
                            <span className="text-sm font-medium text-gray-900">{workData.overtimeHours} hours</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${(workData.overtimeHours / workData.scheduledHours) * 25}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-4">Performance Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-blue-100">
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-xs font-medium text-blue-800">Attendance Rate</p>
                              <p className="text-lg font-bold text-blue-900">{workData.attendanceRate}%</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-green-100">
                              <Briefcase className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-xs font-medium text-green-800">Current Projects</p>
                              <p className="text-lg font-bold text-green-900">{workData.currentProjects}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-purple-100">
                              <CheckCircle className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-xs font-medium text-purple-800">Tasks Completed</p>
                              <p className="text-lg font-bold text-purple-900">{workData.tasksCompleted}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-yellow-100">
                              <Clock className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-xs font-medium text-yellow-800">Tasks In Progress</p>
                              <p className="text-lg font-bold text-yellow-900">{workData.tasksInProgress}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Daily Responsibilities Section */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Daily Responsibilities</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {dailyResponsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Work Resources & Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {workLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-200 transition-colors"
                        >
                          <link.icon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-gray-700">{link.name}</span>
                          <ArrowUpRight className="h-4 w-4 text-gray-400 ml-auto" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Director General's Statement */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Statement from Director General</h2>
                </div>
                <div className="p-6">
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                    "Shintiya Rahman has been an exceptional Personal Assistant since joining our CoreTeam. Her
                    dedication, attention to detail, and proactive approach have significantly improved our
                    administrative efficiency. She demonstrates remarkable organizational skills and has been
                    instrumental in coordinating between different departments. Her commitment to our mission and values
                    makes her an invaluable member of our team."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <p className="text-sm font-medium text-gray-900">MJ AHMAD</p>
                    <span className="mx-2 text-gray-500">•</span>
                    <p className="text-sm text-gray-500">Director General</p>
                  </div>
                </div>
              </section>

              {/* Skill Development Plan */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Skill Development Plan</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {skillDevelopmentPlan.map((skill, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-medium text-gray-900">{skill.skill}</h3>
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            Deadline: {skill.deadline}
                          </span>
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">Current Level: {skill.currentLevel}/5</span>
                            <span className="text-xs text-gray-500">Target Level: {skill.targetLevel}/5</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(skill.currentLevel / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="text-sm text-gray-700">
                          <strong className="text-gray-900">Recommended Resources:</strong> {skill.resources}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">shintiya.rahman@trustedally.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">+880 1XXX-XXXXXX</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">Working Hours: 9:00 AM - 5:00 PM (Sun-Thu)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Benefits</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CoreTeam Overview */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">CoreTeam Overview</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {coreTeamPositions.map((position, index) => (
                      <div key={index} className={`p-3 rounded-md ${position.filled ? "bg-green-50" : "bg-gray-50"}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{position.title}</p>
                            <p className="text-xs text-gray-500">ID: {position.id}</p>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              position.filled ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {position.filled ? "Filled" : "Vacant"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Role-Specific Rules */}
              <section className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Role-Specific Rules</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Confidentiality</h3>
                      <p className="text-sm text-gray-700">
                        As Personal Assistant to the Director General, you must maintain strict confidentiality
                        regarding all sensitive information, communications, and documents you handle.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Communication Protocol</h3>
                      <p className="text-sm text-gray-700">
                        All official communications on behalf of the Director General must follow the established
                        protocol and be approved before distribution.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Calendar Management</h3>
                      <p className="text-sm text-gray-700">
                        The Director General's calendar must be updated in real-time, with proper categorization of
                        meetings and appointments according to priority levels.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Document Handling</h3>
                      <p className="text-sm text-gray-700">
                        All documents must be properly filed in both physical and digital formats according to the
                        organization's document management system.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Reporting</h3>
                      <p className="text-sm text-gray-700">
                        Weekly activity reports must be submitted by Thursday 4:00 PM, summarizing key activities,
                        pending tasks, and upcoming priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </CoreTeamAuthCheck>
  )
}

