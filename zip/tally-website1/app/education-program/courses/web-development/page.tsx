"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, Award, BookOpen, Users, Star } from "lucide-react"

export default function WebDevelopmentCoursePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white">
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
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary transition-colors">
              Education Program
            </Link>
            <Link href="/impact" className="font-medium hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="/get-involved" className="font-medium hover:text-primary transition-colors">
              Get Involved
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex" variant="default">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/web-dev-bg.jpg')] bg-cover bg-center opacity-20"></div>
          {/* Animated code particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-2xl font-mono">&lt;div&gt;</div>
            <div className="absolute top-1/3 right-1/4 text-xl font-mono">function()</div>
            <div className="absolute bottom-1/4 left-1/3 text-2xl font-mono">&lt;/&gt;</div>
            <div className="absolute top-2/3 right-1/3 text-xl font-mono">const app = ()</div>
            <div className="absolute bottom-1/3 left-1/5 text-2xl font-mono">{"{}"}</div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white border-none">Web Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master Modern <span className="text-yellow-300">Web Development</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Learn to build beautiful, responsive websites and web applications with our comprehensive web development
              program
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-medium bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/education-program/courses/web-development/register">Register Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-medium bg-transparent border-white text-white hover:bg-white/20"
              >
                <Link href="#curriculum">View Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum" id="curriculum">
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger value="instructors">Instructors</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Overview</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Our Web Development course is designed to take you from a complete beginner to a confident web
                      developer. You'll learn the fundamentals of HTML, CSS, and JavaScript before diving into modern
                      frameworks like React and Next.js. By the end of this course, you'll have the skills to build
                      professional, responsive websites and web applications.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      This course combines theoretical knowledge with practical, hands-on projects that simulate
                      real-world scenarios. You'll build a portfolio of projects that demonstrate your skills to
                      potential employers or clients.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">HTML5 semantic markup and best practices</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">CSS3, Flexbox, Grid, and responsive design</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">JavaScript fundamentals and ES6+ features</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">DOM manipulation and event handling</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">React.js components, hooks, and state management</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Next.js for server-side rendering and static generation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">API integration and data fetching techniques</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Deployment and hosting on platforms like Vercel</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Course Features</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-blue-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Clock className="h-10 w-10 text-blue-600 mb-3" />
                            <h4 className="font-bold text-lg mb-2">12 Weeks</h4>
                            <p className="text-gray-600">Comprehensive curriculum with flexible learning options</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-blue-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <BookOpen className="h-10 w-10 text-blue-600 mb-3" />
                            <h4 className="font-bold text-lg mb-2">50+ Lessons</h4>
                            <p className="text-gray-600">Detailed video lessons with practical exercises</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-blue-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Award className="h-10 w-10 text-blue-600 mb-3" />
                            <h4 className="font-bold text-lg mb-2">Certificate</h4>
                            <p className="text-gray-600">Receive a certificate upon successful completion</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* Curriculum Tab */}
                <TabsContent value="curriculum" className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Curriculum</h2>

                  <div className="space-y-6">
                    <div className="border border-blue-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-4">
                        <h3 className="text-xl font-bold text-blue-800">Module 1: Web Development Fundamentals</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Introduction to Web Development</span>
                          </div>
                          <span className="text-gray-500 text-sm">45 min</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">HTML5 Basics and Semantic Elements</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">CSS3 Fundamentals and Styling</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Building Your First Web Page</span>
                          </div>
                          <span className="text-gray-500 text-sm">3 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-blue-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-4">
                        <h3 className="text-xl font-bold text-blue-800">
                          Module 2: Advanced CSS and Responsive Design
                        </h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Flexbox Layout System</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">CSS Grid Layout</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Responsive Design Principles</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Responsive Portfolio Website</span>
                          </div>
                          <span className="text-gray-500 text-sm">4 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-blue-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-4">
                        <h3 className="text-xl font-bold text-blue-800">Module 3: JavaScript Fundamentals</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">JavaScript Syntax and Variables</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Functions, Objects, and Arrays</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">DOM Manipulation and Events</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Interactive Web Application</span>
                          </div>
                          <span className="text-gray-500 text-sm">4 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-blue-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-4">
                        <h3 className="text-xl font-bold text-blue-800">Module 4: Modern JavaScript (ES6+)</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Arrow Functions and Template Literals</span>
                          </div>
                          <span className="text-gray-500 text-sm">1 hr</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Destructuring and Spread Operator</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Promises and Async/Await</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Data Fetching Application</span>
                          </div>
                          <span className="text-gray-500 text-sm">3 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-blue-100 rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-4">
                        <h3 className="text-xl font-bold text-blue-800">Module 5: Introduction to React</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">React Fundamentals and JSX</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Components and Props</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">State and Lifecycle</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <BookOpen className="text-blue-600 h-5 w-5" />
                            <span className="text-gray-700">Project: React Single Page Application</span>
                          </div>
                          <span className="text-gray-500 text-sm">5 hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Instructors Tab */}
                <TabsContent value="instructors" className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Your Instructors</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=160&width=160"
                          alt="Instructor"
                          width={160}
                          height={160}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">MJ Ahmad</h3>
                      <p className="text-blue-600 font-medium mb-3">Lead Web Development Instructor</p>
                      <p className="text-gray-600 mb-4">
                        Full-stack developer with 10+ years of experience building web applications for startups and
                        enterprises. Passionate about teaching and helping others succeed in tech.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=160&width=160"
                          alt="Instructor"
                          width={160}
                          height={160}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                      <p className="text-blue-600 font-medium mb-3">Frontend Specialist</p>
                      <p className="text-gray-600 mb-4">
                        UI/UX expert with a background in design and frontend development. Specializes in creating
                        beautiful, intuitive interfaces with React and modern CSS frameworks.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Student Reviews</h2>

                  <div className="flex items-center mb-8">
                    <div className="mr-4">
                      <div className="text-5xl font-bold text-blue-600">4.9</div>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Based on 128 reviews</div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-sm w-8">5 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">85%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">4 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">10%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">3 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "3%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">3%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">2 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "1%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">1%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">1 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "1%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">1%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Student"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Ahmed Rahman</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">2 months ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This course completely transformed my career prospects. I went from knowing nothing about web
                        development to building complex applications in just a few months. The instructors are
                        incredibly knowledgeable and supportive. I've already landed my first freelance gig thanks to
                        the portfolio I built during this course!
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Student"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Fatima Begum</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">1 month ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The curriculum is extremely well-structured and up-to-date with the latest industry standards. I
                        especially appreciated the hands-on projects that helped me apply what I learned in real-world
                        scenarios. The React and Next.js modules were particularly valuable for my current job. Highly
                        recommended!
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Student"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Karim Hossain</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star, index) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${index < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">3 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Great course overall. The content is comprehensive and the instructors are knowledgeable. I
                        would have liked more advanced topics on state management and backend integration, but the
                        fundamentals are covered extremely well. The community support was also very helpful whenever I
                        got stuck on a project.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <Card className="border-blue-100 overflow-hidden">
                  <div className="bg-blue-600 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
                    <p className="opacity-90">Join our Web Development course today and transform your career</p>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Course Fee</span>
                        <span className="font-bold">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span>12 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Skill Level</span>
                        <span>Beginner to Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certificate</span>
                        <span>Yes, upon completion</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-bold mb-3">This course includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-blue-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>50+ video lessons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-blue-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-blue-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Hands-on projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-blue-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Community support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-blue-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Certificate of completion</span>
                        </li>
                      </ul>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link href="/education-program/courses/web-development/register">Register Now</Link>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>1,245 students already enrolled</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Related Courses You Might Like</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Programming Languages"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Programming</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
                <p className="text-gray-600 mb-4">
                  Master the most in-demand programming languages and open doors to countless opportunities in tech.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  <Link href="/education-program/courses/programming-languages">View Course</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="PowerShell Automation"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Automation</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">PowerShell Automation</h3>
                <p className="text-gray-600 mb-4">
                  Learn to automate Windows, Azure, and cloud platforms with Microsoft PowerShell.
                </p>
                <Button asChild variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  <Link href="/education-program/courses/powershell-automation">View Course</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="API Development"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">APIs</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">API Development</h3>
                <p className="text-gray-600 mb-4">
                  Build, consume, and document APIs that connect applications and enable seamless data exchange.
                </p>
                <Button asChild variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Link href="/education-program/courses/api-development">View Course</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUSTED-ALLY</h3>
              <p>
                We work to build a better society through education, social development, and environmental improvement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: info@trusted-ally.org</p>
              <p>Phone: +880 1234-567890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

