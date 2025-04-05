"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, Award, Users, Star, Code, Database, Globe } from "lucide-react"

export default function ApiDevelopmentCoursePage() {
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
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/api-bg.jpg')] bg-cover bg-center opacity-20"></div>
          {/* Animated API particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-2xl font-mono">GET /api/users</div>
            <div className="absolute top-1/3 right-1/4 text-xl font-mono">POST /api/data</div>
            <div className="absolute bottom-1/4 left-1/3 text-2xl font-mono">{"{ status: 200 }"}</div>
            <div className="absolute top-2/3 right-1/3 text-xl font-mono">DELETE /api/resource</div>
            <div className="absolute bottom-1/3 left-1/5 text-2xl font-mono">PUT /api/update</div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white border-none">API Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-teal-300">API Development</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Learn to build, consume, and document APIs that connect applications and enable seamless data exchange
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-medium bg-white text-teal-700 hover:bg-teal-50">
                <Link href="/education-program/courses/api-development/register">Register Now</Link>
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
                      Our API Development course is designed to teach you how to build robust, scalable, and secure APIs
                      that power modern applications. You'll learn the fundamentals of API design, implementation best
                      practices, and how to document your APIs for other developers to consume.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      This course covers RESTful API design principles, GraphQL, authentication and authorization, rate
                      limiting, and other essential concepts. You'll build APIs using industry-standard tools and
                      frameworks, and learn how to test and document them effectively.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">RESTful API design principles and best practices</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Building APIs with Node.js, Express, and MongoDB</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Authentication and authorization strategies</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">API security best practices and common vulnerabilities</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">GraphQL API development and implementation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">API documentation with Swagger/OpenAPI</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">API testing and quality assurance</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">API versioning, rate limiting, and caching</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Course Features</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-teal-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Clock className="h-10 w-10 text-teal-600 mb-3" />
                            <h4 className="font-bold text-lg mb-2">8 Weeks</h4>
                            <p className="text-gray-600">Comprehensive curriculum with flexible learning options</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-teal-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Code className="h-10 w-10 text-teal-600 mb-3" />
                            <h4 className="font-bold text-lg mb-2">30+ Exercises</h4>
                            <p className="text-gray-600">Hands-on coding exercises and real-world projects</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-teal-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Award className="h-10 w-10 text-teal-600 mb-3" />
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
                    <div className="border border-teal-100 rounded-lg overflow-hidden">
                      <div className="bg-teal-50 p-4">
                        <h3 className="text-xl font-bold text-teal-800">Module 1: API Fundamentals</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Globe className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Introduction to APIs and Their Importance</span>
                          </div>
                          <span className="text-gray-500 text-sm">1 hr</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Globe className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">API Architectures: REST, GraphQL, SOAP</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Globe className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">HTTP Methods and Status Codes</span>
                          </div>
                          <span className="text-gray-500 text-sm">1 hr</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <Globe className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Analyzing API Architectures</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-teal-100 rounded-lg overflow-hidden">
                      <div className="bg-teal-50 p-4">
                        <h3 className="text-xl font-bold text-teal-800">Module 2: RESTful API Design</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">RESTful API Design Principles</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Resource Naming and URL Structure</span>
                          </div>
                          <span className="text-gray-500 text-sm">1 hr</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Request/Response Formats and JSON</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Designing a RESTful API</span>
                          </div>
                          <span className="text-gray-500 text-sm">3 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-teal-100 rounded-lg overflow-hidden">
                      <div className="bg-teal-50 p-4">
                        <h3 className="text-xl font-bold text-teal-800">Module 3: Building APIs with Node.js</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Setting Up a Node.js and Express Environment</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Database className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Connecting to MongoDB with Mongoose</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Creating CRUD API Endpoints</span>
                          </div>
                          <span className="text-gray-500 text-sm">2.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Building a Complete RESTful API</span>
                          </div>
                          <span className="text-gray-500 text-sm">4 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-teal-100 rounded-lg overflow-hidden">
                      <div className="bg-teal-50 p-4">
                        <h3 className="text-xl font-bold text-teal-800">Module 4: API Authentication and Security</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Authentication Strategies (JWT, OAuth)</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Implementing Role-Based Access Control</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">API Security Best Practices</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Securing Your API</span>
                          </div>
                          <span className="text-gray-500 text-sm">3 hrs</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-teal-100 rounded-lg overflow-hidden">
                      <div className="bg-teal-50 p-4">
                        <h3 className="text-xl font-bold text-teal-800">Module 5: GraphQL API Development</h3>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Introduction to GraphQL</span>
                          </div>
                          <span className="text-gray-500 text-sm">1.5 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Schema Definition and Resolvers</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Queries, Mutations, and Subscriptions</span>
                          </div>
                          <span className="text-gray-500 text-sm">2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <Code className="text-teal-600 h-5 w-5" />
                            <span className="text-gray-700">Project: Building a GraphQL API</span>
                          </div>
                          <span className="text-gray-500 text-sm">4 hrs</span>
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
                      <h3 className="text-xl font-bold mb-2">Alex Rodriguez</h3>
                      <p className="text-teal-600 font-medium mb-3">Senior API Architect</p>
                      <p className="text-gray-600 mb-4">
                        Alex has over 12 years of experience designing and building APIs for startups and enterprise
                        companies. He specializes in RESTful API design, GraphQL, and API security best practices.
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
                      <h3 className="text-xl font-bold mb-2">Maya Patel</h3>
                      <p className="text-teal-600 font-medium mb-3">Backend Developer & API Specialist</p>
                      <p className="text-gray-600 mb-4">
                        Maya is a backend developer with expertise in Node.js, Express, and MongoDB. She has built APIs
                        for various industries including fintech, healthcare, and e-commerce. She's passionate about
                        teaching API development best practices.
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
                      <div className="text-5xl font-bold text-teal-600">4.7</div>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Based on 84 reviews</div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-sm w-8">5 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-teal-600 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">78%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">4 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-teal-600 rounded-full" style={{ width: "16%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">16%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">3 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-teal-600 rounded-full" style={{ width: "4%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">4%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">2 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-teal-600 rounded-full" style={{ width: "1%" }}></div>
                          </div>
                          <span className="text-sm w-8 text-right">1%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm w-8">1 ★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                            <div className="h-2 bg-teal-600 rounded-full" style={{ width: "1%" }}></div>
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
                          <h4 className="font-bold">Imran Khan</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">3 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This course provided exactly what I needed to level up my API development skills. The
                        instructors explain complex concepts in a way that's easy to understand, and the hands-on
                        projects helped me apply what I learned immediately. I've already implemented several of the
                        security best practices in my company's APIs.
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
                          <h4 className="font-bold">Nadia Ahmed</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">1 month ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The GraphQL section of this course was particularly valuable for me. I had been working with
                        REST APIs for years but was new to GraphQL. The course provided a comprehensive introduction and
                        by the end, I was able to build a fully functional GraphQL API. The instructors are
                        knowledgeable and responsive to questions.
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
                          <h4 className="font-bold">Tariq Rahman</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            {[5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-gray-300" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">2 months ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        A solid course that covers all the essentials of API development. I would have liked more
                        advanced content on API performance optimization and microservices architecture, but the
                        fundamentals are covered very well. The authentication and security module was particularly
                        useful for my current project.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <Card className="border-teal-100 overflow-hidden">
                  <div className="bg-teal-600 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ready to Build Powerful APIs?</h3>
                    <p className="opacity-90">Join our API Development course today and enhance your backend skills</p>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Course Fee</span>
                        <span className="font-bold">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span>8 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Skill Level</span>
                        <span>Intermediate</span>
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
                          <CheckCircle2 className="text-teal-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>30+ video lessons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-teal-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Downloadable code examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-teal-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Hands-on projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-teal-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Community support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-teal-600 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Certificate of completion</span>
                        </li>
                      </ul>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link href="/education-program/courses/api-development/register">Register Now</Link>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>720 students already enrolled</span>
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
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Web Development"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Web</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Learn to build beautiful, responsive websites and web applications with modern frameworks.
                </p>
                <Button asChild variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/education-program/courses/web-development">View Course</Link>
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

