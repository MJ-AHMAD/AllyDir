"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, BookOpen, Users } from "lucide-react"

export default function ProgrammingLanguagesCoursePage() {
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
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/programming-bg.jpg')] bg-cover bg-center opacity-20"></div>
          {/* Animated code particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-2xl font-mono">def main():</div>
            <div className="absolute top-1/3 right-1/4 text-xl font-mono">function sum(a, b) &#123;</div>
            <div className="absolute bottom-1/4 left-1/3 text-2xl font-mono">print("Hello World")</div>
            <div className="absolute top-2/3 right-1/3 text-xl font-mono">const result = [];</div>
            <div className="absolute bottom-1/3 left-1/5 text-2xl font-mono">if __name__ == "__main__":</div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white border-none">Programming Languages</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-yellow-300">Multiple Languages</span> for Versatile Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Learn the most sought-after programming languages that will open doors to countless opportunities in the
              tech industry
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-medium bg-white text-purple-700 hover:bg-purple-50">
                <Link href="/education-program/courses/programming-languages/register">Register Now</Link>
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

      {/* Course Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Learn Multiple Programming Languages?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In today's diverse tech landscape, versatility is key. Our comprehensive programming languages course
              equips you with the skills to work across different platforms, paradigms, and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Adaptability</h3>
                  <p className="text-gray-600">
                    Learn to adapt to different programming paradigms and approaches, making you a more flexible and
                    valuable developer.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Market Demand</h3>
                  <p className="text-gray-600">
                    Increase your employability by mastering languages that are in high demand across various industries
                    and sectors.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Problem Solving</h3>
                  <p className="text-gray-600">
                    Develop stronger problem-solving skills by understanding different approaches to solving the same
                    problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-gray-50" id="curriculum">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Comprehensive Curriculum</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Languages You'll Master</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our curriculum covers the most in-demand programming languages in the industry, giving you a well-rounded
              skill set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* JavaScript Card */}
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-yellow-100 bg-yellow-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-600">JS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">JavaScript</h3>
                    <p className="text-sm text-gray-500">Web & Beyond</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  The language of the web and beyond. Learn to create interactive websites, server-side applications,
                  and even mobile apps with JavaScript.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ES6+ features and syntax</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">DOM manipulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Asynchronous programming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Node.js fundamentals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Python Card */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-blue-100 bg-blue-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">PY</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Python</h3>
                    <p className="text-sm text-gray-500">Versatile & Powerful</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A versatile language used in web development, data science, AI, automation, and more. Python's
                  readability makes it perfect for beginners.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Python syntax and data types</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Functions and modules</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Object-oriented programming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Data analysis with pandas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TypeScript Card */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-blue-100 bg-blue-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">TS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">TypeScript</h3>
                    <p className="text-sm text-gray-500">Typed JavaScript</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A superset of JavaScript that adds static typing, making your code more robust and maintainable for
                  large-scale applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Type annotations and interfaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced types and generics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">TypeScript with React</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Type-safe API integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* C# Card */}
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-purple-100 bg-purple-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">C#</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">C#</h3>
                    <p className="text-sm text-gray-500">Microsoft Ecosystem</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A versatile language for building Windows applications, games with Unity, web applications with
                  ASP.NET, and more.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">C# syntax and fundamentals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Object-oriented programming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ASP.NET Core basics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Introduction to Unity development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Java Card */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-red-100 bg-red-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">JV</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Java</h3>
                    <p className="text-sm text-gray-500">Enterprise & Android</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A robust language used in enterprise applications, Android development, and large-scale systems. Learn
                  once, run anywhere.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Java syntax and core concepts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Object-oriented programming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Collections framework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Introduction to Android development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PHP Card */}
            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b border-indigo-100 bg-indigo-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600">PHP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">PHP</h3>
                    <p className="text-sm text-gray-500">Web Development</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A server-side scripting language designed for web development. Power popular platforms like WordPress
                  and Laravel.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">PHP syntax and basics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Working with databases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Introduction to Laravel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">WordPress development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/education-program/courses/programming-languages/register">Start Your Learning Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Course Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Makes Our Course Special</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our programming languages course is designed to give you a comprehensive understanding of multiple
              languages while focusing on practical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">
                    Our curriculum covers not just syntax, but also best practices, design patterns, and real-world
                    applications for each language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Hands-on Projects</h3>
                  <p className="text-gray-600">
                    Apply what you learn through practical projects that simulate real-world scenarios, building a
                    portfolio that showcases your skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Support</h3>
                  <p className="text-gray-600">
                    Join a community of learners and instructors who are passionate about programming and ready to help
                    you succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Interactive Learning</h3>
                  <p className="text-gray-600">
                    Learn through interactive lessons, coding challenges, and quizzes that reinforce your understanding
                    of each language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Industry-Relevant Skills</h3>
                  <p className="text-gray-600">
                    Focus on the skills that employers are looking for, with curriculum designed based on industry
                    trends and job market demands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Certification</h3>
                  <p className="text-gray-600">
                    Earn certificates for each language you master, demonstrating your proficiency to potential
                    employers or clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Multiple Programming Languages?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join our comprehensive course today and take the first step toward becoming a versatile, in-demand
              developer.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
              <Link href="/education-program/courses/programming-languages/register">Register Now</Link>
            </Button>
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

