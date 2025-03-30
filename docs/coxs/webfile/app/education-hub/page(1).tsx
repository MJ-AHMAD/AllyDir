"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EducationProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/edu1.png')] bg-cover bg-center opacity-20"></div>
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
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white border-none">Transform Your Future</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Become a <span className="text-yellow-300">Developer</span> in Weeks, Not Years
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Our accelerated learning programs will take you from complete beginner to job-ready developer with
              practical skills that employers are desperately seeking
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="font-medium text-primary">
                Start Learning Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium bg-transparent border-white text-white hover:bg-white/20"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/edu2.png"
                  alt="Students learning to code"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-800 leading-tight">
                Empowering Minds <span className="text-purple-600">One Click at a Time</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We believe that education is the most powerful tool to change the world. Our programs are designed to
                empower individuals with the skills they need to thrive in the digital age, regardless of their
                background or previous experience.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
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
                    className="text-indigo-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-800">
                  Join over 5,000+ students who have transformed their lives through our programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Educational Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Comprehensive Learning</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Educational Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of technology and development programs designed to equip you with the skills
              needed in today's digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
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
                    className="text-blue-600"
                  >
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Master the art of creating beautiful, responsive websites and web applications with our comprehensive
                  web development program.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-blue-50 text-blue-700">HTML5</Badge>
                  <Badge className="bg-blue-50 text-blue-700">CSS3</Badge>
                  <Badge className="bg-blue-50 text-blue-700">JavaScript</Badge>
                  <Badge className="bg-blue-50 text-blue-700">React</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Node.js</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Next.js</Badge>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/education-program/courses/web-development">Start Now</Link>
                </Button>
              </div>
            </div>

            {/* Programming Languages Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-purple-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
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
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
                    <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-800">Programming Languages</h3>
                <p className="text-gray-600 mb-6">
                  Learn the most sought-after programming languages that will open doors to countless opportunities in
                  the tech industry.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-purple-50 text-purple-700">JavaScript</Badge>
                  <Badge className="bg-purple-50 text-purple-700">Python</Badge>
                  <Badge className="bg-purple-50 text-purple-700">TypeScript</Badge>
                  <Badge className="bg-purple-50 text-purple-700">C#</Badge>
                  <Badge className="bg-purple-50 text-purple-700">Java</Badge>
                  <Badge className="bg-purple-50 text-purple-700">PHP</Badge>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/education-program/courses/programming-languages">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Server Automation Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-green-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4">
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
                    className="text-green-600"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-800">PowerShell Automation</h3>
                <p className="text-gray-600 mb-6">
                  Learn how to automate Windows, Azure, and cloud platforms with Microsoft PowerShell - the powerful
                  scripting language for IT professionals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-green-50 text-green-700">PowerShell 7</Badge>
                  <Badge className="bg-green-50 text-green-700">Azure</Badge>
                  <Badge className="bg-green-50 text-green-700">Windows Admin</Badge>
                  <Badge className="bg-green-50 text-green-700">DevOps</Badge>
                  <Badge className="bg-green-50 text-green-700">Cloud</Badge>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/education-program/courses/powershell-automation">Begin Learning</Link>
                </Button>
              </div>
            </div>

            {/* Operating Systems Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-indigo-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
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
                    className="text-indigo-600"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Operating Systems</h3>
                <p className="text-gray-600 mb-6">
                  Gain proficiency in multiple operating systems and learn how to effectively manage and troubleshoot
                  them for optimal performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-indigo-50 text-indigo-700">Windows</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">Linux</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">macOS</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">Ubuntu</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">CentOS</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">Debian</Badge>
                </div>
                <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/education-program/courses/operating-systems">Enroll Now</Link>
                </Button>
              </div>
            </div>

            {/* Version Control Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-orange-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
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
                    className="text-orange-600"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="12" cy="4" r="2"></circle>
                    <circle cx="12" cy="20" r="2"></circle>
                    <circle cx="4" cy="12" r="2"></circle>
                    <circle cx="20" cy="12" r="2"></circle>
                    <line x1="12" y1="6" x2="12" y2="10"></line>
                    <line x1="12" y1="14" x2="12" y2="18"></line>
                    <line x1="6" y1="12" x2="10" y2="12"></line>
                    <line x1="14" y1="12" x2="18" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-800">Version Control</h3>
                <p className="text-gray-600 mb-6">
                  Master Git and GitHub to track changes, collaborate with others, and manage your code projects
                  efficiently and professionally.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-orange-50 text-orange-700">Git</Badge>
                  <Badge className="bg-orange-50 text-orange-700">GitHub</Badge>
                  <Badge className="bg-orange-50 text-orange-700">Git Bash</Badge>
                  <Badge className="bg-orange-50 text-orange-700">GitHub Actions</Badge>
                  <Badge className="bg-orange-50 text-orange-700">GitHub Pages</Badge>
                  <Badge className="bg-orange-50 text-orange-700">GitLab</Badge>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/education-program/courses/version-control">Join Course</Link>
                </Button>
              </div>
            </div>

            {/* API Development Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-teal-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
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
                    className="text-teal-600"
                  >
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                    <path d="M2 20h20"></path>
                    <path d="M14 12v.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-800">API Development</h3>
                <p className="text-gray-600 mb-6">
                  Learn to build, consume, and document APIs that connect applications and services, enabling seamless
                  data exchange and integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-teal-50 text-teal-700">REST</Badge>
                  <Badge className="bg-teal-50 text-teal-700">GraphQL</Badge>
                  <Badge className="bg-teal-50 text-teal-700">Swagger</Badge>
                  <Badge className="bg-teal-50 text-teal-700">Postman</Badge>
                  <Badge className="bg-teal-50 text-teal-700">OAuth</Badge>
                  <Badge className="bg-teal-50 text-teal-700">JWT</Badge>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/education-program/courses/api-development">Start Learning</Link>
                </Button>
              </div>
            </div>

            {/* Database Management Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-red-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-red-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-4">
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
                    className="text-red-600"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-800">Database Management</h3>
                <p className="text-gray-600 mb-6">
                  Master the art of designing, implementing, and managing databases to store, retrieve, and manipulate
                  data efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-red-50 text-red-700">SQL</Badge>
                  <Badge className="bg-red-50 text-red-700">MongoDB</Badge>
                  <Badge className="bg-red-50 text-red-700">PostgreSQL</Badge>
                  <Badge className="bg-red-50 text-red-700">MySQL</Badge>
                  <Badge className="bg-red-50 text-red-700">Firebase</Badge>
                  <Badge className="bg-red-50 text-red-700">Redis</Badge>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/education-program/courses/database-management">Begin Now</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Development Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-amber-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
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
                    className="text-amber-600"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-800">Mobile Development</h3>
                <p className="text-gray-600 mb-6">
                  Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS
                  and Android devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-amber-50 text-amber-700">React Native</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Flutter</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Swift</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Kotlin</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Expo</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Firebase</Badge>
                </div>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <Link href="/education-program/courses/mobile-development">Start Journey</Link>
                </Button>
              </div>
            </div>

            {/* Cloud Computing Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100 hover:shadow-xl transition-all">
              <div className="h-2 bg-sky-600"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
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
                    className="text-sky-600"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sky-800">Cloud Computing</h3>
                <p className="text-gray-600 mb-6">
                  Master cloud platforms and services to deploy, scale, and manage applications in the cloud with
                  efficiency and reliability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-sky-50 text-sky-700">AWS</Badge>
                  <Badge className="bg-sky-50 text-sky-700">Azure</Badge>
                  <Badge className="bg-sky-50 text-sky-700">Google Cloud</Badge>
                  <Badge className="bg-sky-50 text-sky-700">Docker</Badge>
                  <Badge className="bg-sky-50 text-sky-700">Kubernetes</Badge>
                  <Badge className="bg-sky-50 text-sky-700">Serverless</Badge>
                </div>
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/education-program/courses/cloud-computing">Enroll Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Al-Quran Journey Section - Scholarly Research Focus */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Islamic Scholarship</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Al-Quran Journey: Depths of Divine Knowledge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embark on a profound scholarly journey into the depths of Quranic wisdom, where ancient divine revelation
              meets modern scientific understanding and transforms lives through timeless guidance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/quran-journey.jpg"
                  alt="Al-Quran Journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Unveiling Quranic Miracles</h3>
                  <p className="text-white/90 max-w-md">
                    Our research-focused program invites scholars and seekers to explore the miraculous nature of the
                    Quran through rigorous academic study and spiritual reflection.
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-emerald-800">The Imperative of Quranic Research</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Holy Quran stands as humanity's most profound source of knowledge—a divine text whose depths
                  remain inexhaustible after 1400 years of study. Our mission is to inspire Muslims to dedicate
                  themselves to serious, life-long engagement with this miraculous text, recognizing that superficial
                  understanding fails to capture its transformative power.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Through our scholarly programs, we aim to elevate Quranic literacy beyond basic recitation to deep
                  comprehension, critical analysis, and practical application—revealing how apparent contradictions
                  dissolve into perfect harmony when approached with proper methodological rigor.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Join Our Research Programs</Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Access Scholarly Resources
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
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
                  className="text-emerald-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Modern Science & Quranic Revelations</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Quran contains numerous scientific facts that were revealed 1400 years ago, long before modern
                scientific discoveries confirmed them. Our research explores these remarkable correlations between
                Quranic verses and contemporary scientific understanding.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From embryology to cosmology, from oceanography to geology, the Quran's descriptions of natural
                phenomena demonstrate a precision that was impossible for human knowledge at the time of revelation.
                This convergence of ancient text with modern discovery stands as compelling evidence of the Quran's
                divine origin.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our scholarly programs examine these scientific miracles through rigorous academic methodology, bringing
                together experts in both Islamic studies and various scientific disciplines to illuminate how the Quran
                anticipated discoveries that humanity would only make centuries later.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-2">Research Focus Areas:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Cosmological references and the Big Bang theory in Surah Al-Anbiya (21:30)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Embryological development described with precision in Surah Al-Mu'minun (23:12-14)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Oceanographic phenomena and underwater barriers in Surah Ar-Rahman (55:19-20)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
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
                  className="text-emerald-600"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Advanced Quranic Research Methodologies</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our program develops scholars who can navigate the intricate layers of Quranic meaning through mastery
                of classical and contemporary interpretive methodologies. We emphasize the importance of understanding
                the Quran's internal coherence, linguistic miracles, and historical context.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Participants learn to engage with primary Arabic sources, apply principles of usul al-tafsir (principles
                of interpretation), and synthesize insights from various disciplines to uncover the Quran's guidance for
                contemporary challenges. This rigorous approach reveals how the Quran's wisdom transcends time and
                cultural boundaries.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through this scholarly journey, students develop the analytical tools to distinguish authentic
                interpretations from misrepresentations, recognizing how superficial readings have led to
                misunderstandings that obscure the Quran's true message of justice, compassion, and intellectual
                engagement.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-2">Research Approaches:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Thematic analysis across surahs to reveal conceptual unity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Linguistic analysis of Quranic Arabic's unique rhetorical features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                    <span>Comparative study of classical tafsir traditions and contemporary approaches</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
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
                  className="text-emerald-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Quranic Printing & Distribution Excellence</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our program includes specialized training in the sacred art and science of Quranic printing, preserving
                the integrity of the divine text through meticulous attention to detail. We uphold the highest standards
                of accuracy, clarity, and beauty in Mushaf production.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Participants learn the principles of Quranic orthography, typography, and manuscript preservation,
                combining traditional calligraphic knowledge with modern printing technologies. This ensures that each
                copy of the Quran we produce maintains the authenticity of the revelation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our distribution initiatives focus on making high-quality copies of the Quran accessible to communities
                worldwide, particularly in underserved regions. We coordinate with local scholars to ensure proper
                handling and respectful distribution of the sacred text.
              </p>
              <div className="mt-6">
                <Button asChild className="mt-4">
                  <Link href="/al-quran-journey">Learn About Our Printing Standards</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
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
                  className="text-emerald-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Global Quranic Research Network</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are building an international network of Quranic researchers, scholars, and institutions dedicated to
                advancing our collective understanding of the Quran's depths. This collaborative approach brings
                together diverse perspectives and expertise.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our research initiatives span continents and disciplines, creating opportunities for meaningful dialogue
                between traditional Islamic scholarship and contemporary academic approaches. This cross-pollination of
                ideas generates fresh insights into the Quran's timeless wisdom.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through conferences, publications, and digital platforms, we facilitate the sharing of research findings
                and methodological innovations. This global community of scholars works together to address
                misconceptions about the Quran and illuminate its relevance to modern challenges.
              </p>
              <div className="mt-6">
                <Button asChild className="mt-4">
                  <Link href="/al-quran-journey">Join Our Research Network</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-emerald-900 text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full -ml-32 -mb-32 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-center">The Call to Profound Quranic Engagement</h3>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-4xl mx-auto text-center leading-relaxed">
                We invite all Muslims to recognize that superficial engagement with the Quran falls short of our
                responsibility toward divine revelation. True understanding requires dedicated study, critical thinking,
                and spiritual reflection that transforms knowledge into action.
              </p>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-4xl mx-auto text-center leading-relaxed">
                Through our comprehensive research programs, we aim to cultivate a generation of scholars and seekers
                who approach the Quran with both intellectual rigor and spiritual humility—recognizing that its depths
                can never be fully exhausted, yet committing themselves to the lifelong journey of exploration.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild className="mt-4 bg-white text-emerald-900 hover:bg-emerald-100 text-lg px-8 py-3">
                  <Link href="/al-quran-journey">Begin Your Scholarly Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

