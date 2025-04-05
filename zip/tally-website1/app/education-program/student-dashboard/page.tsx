"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  Clock,
  Award,
  Calendar,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Play,
  FileText,
  Lock,
} from "lucide-react"

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState("courses")

  // Mock data for the dashboard
  const studentData = {
    name: "Ahmed Rahman",
    id: "STU-2023-7845",
    email: "ahmed.rahman@example.com",
    enrolledCourses: [
      {
        id: "web-dev-101",
        title: "Web Development",
        progress: 35,
        nextLesson: "JavaScript Fundamentals: Functions",
        instructor: "MJ Ahmad",
        lastAccessed: "2 days ago",
        modules: [
          {
            title: "Module 1: Web Development Fundamentals",
            completed: true,
            lessons: [
              { title: "Introduction to Web Development", completed: true, duration: "45 min" },
              { title: "HTML5 Basics and Semantic Elements", completed: true, duration: "1.5 hrs" },
              { title: "CSS3 Fundamentals and Styling", completed: true, duration: "2 hrs" },
              { title: "Project: Building Your First Web Page", completed: true, duration: "3 hrs" },
            ],
          },
          {
            title: "Module 2: Advanced CSS and Responsive Design",
            completed: false,
            lessons: [
              { title: "Flexbox Layout System", completed: true, duration: "1.5 hrs" },
              { title: "CSS Grid Layout", completed: true, duration: "1.5 hrs" },
              { title: "Responsive Design Principles", completed: false, duration: "2 hrs" },
              { title: "Project: Responsive Portfolio Website", completed: false, duration: "4 hrs" },
            ],
          },
          {
            title: "Module 3: JavaScript Fundamentals",
            completed: false,
            lessons: [
              { title: "JavaScript Syntax and Variables", completed: false, duration: "1.5 hrs", locked: false },
              { title: "Functions, Objects, and Arrays", completed: false, duration: "2 hrs", locked: true },
              { title: "DOM Manipulation and Events", completed: false, duration: "2 hrs", locked: true },
              { title: "Project: Interactive Web Application", completed: false, duration: "4 hrs", locked: true },
            ],
          },
        ],
      },
      {
        id: "programming-101",
        title: "Programming Languages",
        progress: 15,
        nextLesson: "Python Basics: Data Types",
        instructor: "Sarah Johnson",
        lastAccessed: "5 days ago",
      },
    ],
    upcomingDeadlines: [
      { title: "Responsive Portfolio Project", course: "Web Development", dueDate: "May 15, 2023" },
      { title: "Python Functions Assignment", course: "Programming Languages", dueDate: "May 20, 2023" },
    ],
    certificates: [{ title: "HTML & CSS Fundamentals", issueDate: "April 10, 2023", id: "CERT-HTML-2023-1234" }],
    announcements: [
      {
        title: "New JavaScript Module Released",
        date: "May 2, 2023",
        content: "We've just released a new advanced JavaScript module. Check it out in your course materials!",
      },
      {
        title: "Upcoming Live Coding Session",
        date: "April 28, 2023",
        content: "Join us for a live coding session on React fundamentals on May 10th at 7 PM.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline-block">
              Welcome, {studentData.name} | Student ID: {studentData.id}
            </span>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {studentData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h2 className="text-lg font-bold">{studentData.name}</h2>
                <p className="text-sm text-gray-500">{studentData.id}</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "courses" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("courses")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Courses
                </Button>
                <Button
                  variant={activeTab === "progress" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("progress")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Progress
                </Button>
                <Button
                  variant={activeTab === "calendar" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("calendar")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
                <Button
                  variant={activeTab === "certificates" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("certificates")}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Certificates
                </Button>
                <Button
                  variant={activeTab === "messages" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("messages")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
              </nav>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium text-sm text-gray-500 mb-3">ENROLLED COURSES</h3>
                <div className="space-y-3">
                  {studentData.enrolledCourses.map((course) => (
                    <div key={course.id} className="group">
                      <Link
                        href={`/education-program/student-dashboard/courses/${course.id}`}
                        className="text-sm font-medium hover:text-blue-600 transition-colors"
                      >
                        {course.title}
                      </Link>
                      <div className="mt-1">
                        <Progress value={course.progress} className="h-1.5" />
                        <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              {/* Courses Tab */}
              <TabsContent value="courses" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studentData.enrolledCourses.map((course) => (
                    <Card key={course.id} className="border-blue-100 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>Instructor: {course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Play className="h-4 w-4 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Continue Learning</p>
                              <p className="text-gray-500">{course.nextLesson}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Last Accessed</p>
                              <p className="text-gray-500">{course.lastAccessed}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/education-program/student-dashboard/courses/${course.id}`}>
                            Continue Course
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {studentData.upcomingDeadlines.length > 0 ? (
                        <ul className="space-y-3">
                          {studentData.upcomingDeadlines.map((deadline, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Calendar className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">{deadline.title}</p>
                                <p className="text-sm text-gray-500">
                                  {deadline.course} • Due: {deadline.dueDate}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm">No upcoming deadlines</p>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">HTML & CSS Fundamentals</p>
                            <p className="text-sm text-gray-500">Certificate earned on April 10, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Module 1 Completed</p>
                            <p className="text-sm text-gray-500">Web Development Fundamentals</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Announcements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {studentData.announcements.length > 0 ? (
                        <ul className="space-y-3">
                          {studentData.announcements.map((announcement, index) => (
                            <li key={index} className="border-b pb-2 last:border-0 last:pb-0">
                              <p className="font-medium">{announcement.title}</p>
                              <p className="text-xs text-gray-500 mb-1">{announcement.date}</p>
                              <p className="text-sm text-gray-600">{announcement.content}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm">No announcements</p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Web Development Course Content</CardTitle>
                    <CardDescription>Your current progress through the course modules and lessons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studentData.enrolledCourses[0].modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                          <div
                            className={`p-4 flex items-center justify-between ${module.completed ? "bg-green-50" : "bg-blue-50"}`}
                          >
                            <div className="flex items-center gap-3">
                              {module.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <BookOpen className="h-5 w-5 text-blue-600" />
                              )}
                              <h3 className="font-bold">{module.title}</h3>
                            </div>
                            <Badge
                              variant={module.completed ? "outline" : "default"}
                              className={module.completed ? "border-green-500 text-green-700" : ""}
                            >
                              {module.completed ? "Completed" : "In Progress"}
                            </Badge>
                          </div>
                          <div className="divide-y">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                  ) : lesson.locked ? (
                                    <Lock className="h-5 w-5 text-gray-400" />
                                  ) : (
                                    <Play className="h-5 w-5 text-blue-600" />
                                  )}
                                  <div>
                                    <p className={`font-medium ${lesson.locked ? "text-gray-400" : ""}`}>
                                      {lesson.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{lesson.duration}</p>
                                  </div>
                                </div>
                                <Button
                                  variant={lesson.completed ? "outline" : lesson.locked ? "ghost" : "default"}
                                  size="sm"
                                  disabled={lesson.locked}
                                  className={lesson.completed ? "border-green-500 text-green-700" : ""}
                                >
                                  {lesson.completed ? "Review" : lesson.locked ? "Locked" : "Start"}
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Learning Progress</CardTitle>
                    <CardDescription>Track your progress across all enrolled courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-5xl font-bold text-blue-600 mb-2">2</div>
                              <p className="text-gray-500">Courses Enrolled</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-5xl font-bold text-green-600 mb-2">1</div>
                              <p className="text-gray-500">Modules Completed</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-5xl font-bold text-purple-600 mb-2">8</div>
                              <p className="text-gray-500">Lessons Completed</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-lg font-bold">Course Progress</h3>

                        {studentData.enrolledCourses.map((course) => (
                          <div key={course.id} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{course.title}</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-lg font-bold">Skills Progress</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">HTML</span>
                              <span>90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">CSS</span>
                              <span>85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">JavaScript</span>
                              <span>40%</span>
                            </div>
                            <Progress value={40} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">React</span>
                              <span>10%</span>
                            </div>
                            <Progress value={10} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Python</span>
                              <span>25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Database</span>
                              <span>5%</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Calendar Tab */}
              <TabsContent value="calendar">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Calendar</CardTitle>
                    <CardDescription>Your schedule and upcoming events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Calendar View Coming Soon</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We're working on a comprehensive calendar feature to help you manage your learning schedule more
                        effectively.
                      </p>
                    </div>

                    <div className="mt-8 border-t pt-6">
                      <h3 className="font-bold mb-4">Upcoming Events</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                          <Calendar className="h-10 w-10 text-blue-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Live Coding Session: React Fundamentals</h4>
                            <p className="text-sm text-gray-600 mb-1">May 10, 2023 • 7:00 PM - 8:30 PM</p>
                            <p className="text-sm text-gray-600">
                              Join instructor MJ Ahmad for a live coding session covering React fundamentals. Bring your
                              questions and code along!
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                          <Calendar className="h-10 w-10 text-purple-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Assignment Deadline: Responsive Portfolio</h4>
                            <p className="text-sm text-gray-600 mb-1">May 15, 2023 • 11:59 PM</p>
                            <p className="text-sm text-gray-600">
                              Submit your responsive portfolio project for the Web Development course. Make sure to
                              include all required components and responsive features.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                          <Calendar className="h-10 w-10 text-green-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Q&A Session: JavaScript Fundamentals</h4>
                            <p className="text-sm text-gray-600 mb-1">May 18, 2023 • 6:00 PM - 7:00 PM</p>
                            <p className="text-sm text-gray-600">
                              Got questions about JavaScript? Join this Q&A session to get help from instructors and
                              fellow students on any JavaScript topics you're struggling with.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Certificates</CardTitle>
                    <CardDescription>Certificates and achievements you've earned</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {studentData.certificates.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {studentData.certificates.map((certificate, index) => (
                          <Card key={index} className="border-blue-100">
                            <CardContent className="p-6">
                              <div className="flex flex-col items-center text-center">
                                <Award className="h-16 w-16 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                                <p className="text-gray-500 mb-4">Issued on {certificate.issueDate}</p>
                                <p className="text-sm text-gray-500 mb-6">Certificate ID: {certificate.id}</p>
                                <div className="flex gap-3">
                                  <Button variant="outline" size="sm">
                                    <FileText className="mr-2 h-4 w-4" />
                                    View
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mr-2"
                                    >
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        {/* Upcoming certificates */}
                        <Card className="border-gray-200 bg-gray-50">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                              <Award className="h-16 w-16 text-gray-400 mb-4" />
                              <h3 className="text-xl font-bold mb-2">JavaScript Fundamentals</h3>
                              <p className="text-gray-500 mb-4">In progress</p>
                              <div className="w-full mb-4">
                                <Progress value={40} className="h-2" />
                                <p className="text-sm text-gray-500 mt-2">40% completed</p>
                              </div>
                              <Button disabled>
                                <Lock className="mr-2 h-4 w-4" />
                                Locked
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No Certificates Yet</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                          Complete your courses to earn certificates that showcase your skills and achievements.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Messages Tab */}
              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communication with instructors and peers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <MessageSquare className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Messaging Coming Soon</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We're working on a messaging system to help you communicate with instructors and fellow
                        students. Stay tuned for updates!
                      </p>
                    </div>

                    <div className="mt-8 border-t pt-6">
                      <h3 className="font-bold mb-4">Contact Support</h3>
                      <p className="text-gray-600 mb-4">
                        Need help with your courses or have questions about the platform? Our support team is here to
                        help.
                      </p>
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                alt="TRUSTED-ALLY Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold">TRUSTED-ALLY</span>
            </div>
            <div className="flex gap-6">
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-sm hover:underline">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-sm hover:underline">
                Terms
              </Link>
              <Link href="/help" className="text-sm hover:underline">
                Help
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

