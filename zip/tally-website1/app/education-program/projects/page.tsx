import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
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
            <Link href="/programs-overview" className="font-medium hover:text-primary transition-colors">
              Programs
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
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Project-Based Learning</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Learn by building real-world projects that solve actual problems and build your portfolio
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Learn By Doing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Project-Based Learning Works</h2>
          <p className="text-gray-600">
            Project-based learning is one of the most effective ways to master programming skills. By working on real
            projects, you&apos;ll apply theoretical knowledge to practical problems, build a portfolio to showcase your
            skills, and develop the problem-solving abilities that employers value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Build a Portfolio</h3>
            <p className="text-gray-600">
              Create projects you can showcase to potential employers or clients. A strong portfolio demonstrates your
              skills more effectively than any resume.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Practical Experience</h3>
            <p className="text-gray-600">
              Apply theoretical knowledge to solve real-world problems. Learn to debug, optimize, and implement best
              practices in actual coding scenarios.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
            <p className="text-gray-600">
              Work with peers and mentors on team projects. Develop collaboration skills, learn version control, and
              practice code reviews in a supportive environment.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Student working on project"
                width={400}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Our Project-Based Approach</h3>
              <p className="text-gray-600 mb-4">
                At TRUSTED-ALLY, we believe in learning by doing. Our project-based curriculum is designed to help you
                build practical skills through hands-on experience with real-world projects.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
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
                    className="text-green-600 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Start with guided projects that teach fundamental concepts</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="text-green-600 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Progress to more complex projects with increasing independence</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="text-green-600 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Receive feedback and code reviews from experienced mentors</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="text-green-600 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Collaborate with peers on team projects to build collaboration skills</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="text-green-600 flex-shrink-0 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Complete capstone projects that showcase your skills to potential employers</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/education-program/projects/methodology">Learn About Our Methodology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects You&apos;ll Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the exciting projects you&apos;ll build in our courses. These projects are designed to
              reinforce key concepts while creating something useful and impressive for your portfolio.
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full md:w-fit mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft Technologies</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="E-commerce Website"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>E-commerce Website</CardTitle>
                    <CardDescription>Full-stack web application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Build a complete e-commerce platform with product listings, shopping cart, user authentication,
                      and payment processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/web/ecommerce">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Social Media Dashboard"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Social Media Dashboard</CardTitle>
                    <CardDescription>Data visualization application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Create an interactive dashboard that visualizes social media metrics and analytics with real-time
                      updates.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Chart.js</Badge>
                      <Badge variant="secondary">API Integration</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/web/dashboard">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Content Management System"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Content Management System</CardTitle>
                    <CardDescription>Admin panel and blog platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Develop a custom CMS with user roles, content creation tools, media management, and a
                      public-facing blog.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/web/cms">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/education-program/projects/web">View All Web Development Projects</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="microsoft" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Azure Cloud Migration"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Azure Cloud Migration</CardTitle>
                    <CardDescription>Infrastructure as Code project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Migrate an on-premises application to Azure using Infrastructure as Code principles and best
                      practices.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Azure</Badge>
                      <Badge variant="secondary">Terraform</Badge>
                      <Badge variant="secondary">PowerShell</Badge>
                      <Badge variant="secondary">CI/CD</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/microsoft/azure-migration">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="PowerShell Automation Suite"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>PowerShell Automation Suite</CardTitle>
                    <CardDescription>System administration toolkit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Build a comprehensive PowerShell module for automating common system administration tasks in
                      Windows environments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">PowerShell</Badge>
                      <Badge variant="secondary">Active Directory</Badge>
                      <Badge variant="secondary">Windows Server</Badge>
                      <Badge variant="secondary">Module Development</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/microsoft/powershell-suite">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Microsoft 365 Integration"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Microsoft 365 Integration</CardTitle>
                    <CardDescription>Business productivity solution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Develop a custom application that integrates with Microsoft 365 services including Teams,
                      SharePoint, and Power Automate.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Microsoft Graph API</Badge>
                      <Badge variant="secondary">SharePoint</Badge>
                      <Badge variant="secondary">Teams</Badge>
                      <Badge variant="secondary">Power Platform</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/microsoft/m365-integration">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/education-program/projects/microsoft">View All Microsoft Technology Projects</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Fitness Tracking App"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Fitness Tracking App</CardTitle>
                    <CardDescription>Cross-platform mobile application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Build a fitness tracking app that monitors workouts, tracks progress, and provides personalized
                      recommendations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                      <Badge variant="secondary">Health APIs</Badge>
                      <Badge variant="secondary">Authentication</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/mobile/fitness-app">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Food Delivery App"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Food Delivery App</CardTitle>
                    <CardDescription>Location-based service app</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Create a food delivery application with restaurant listings, order processing, real-time tracking,
                      and payment integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Flutter</Badge>
                      <Badge variant="secondary">Google Maps API</Badge>
                      <Badge variant="secondary">State Management</Badge>
                      <Badge variant="secondary">Payment Gateway</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/mobile/food-delivery">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Language Learning App"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <CardTitle>Language Learning App</CardTitle>
                    <CardDescription>Educational mobile application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Develop an interactive language learning app with lessons, quizzes, pronunciation practice, and
                      progress tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Audio Processing</Badge>
                      <Badge variant="secondary">Gamification</Badge>
                      <Badge variant="secondary">Cloud Database</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education-program/projects/mobile/language-app">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/education-program/projects/mobile">View All Mobile Development Projects</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Student Showcase</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Built By Our Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our students have created through our project-based learning approach. These projects demonstrate
              the real-world skills and creativity our students develop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-100 relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Student Project: E-commerce Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Sustainable Marketplace</h3>
                    <p className="text-gray-500">By Rahima Akter</p>
                  </div>
                  <Badge>Web Development</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  An e-commerce platform focused on sustainable and eco-friendly products, featuring product
                  verification, carbon footprint tracking, and community engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/education-program/projects/showcase/sustainable-marketplace">View Project</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-100 relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Student Project: Healthcare App"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">MediConnect</h3>
                    <p className="text-gray-500">By Mohammad Karim</p>
                  </div>
                  <Badge>Mobile Development</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  A healthcare application that connects patients with doctors for virtual consultations, medication
                  reminders, and health tracking in rural areas with limited healthcare access.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">WebRTC</Badge>
                  <Badge variant="outline">Google Maps API</Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/education-program/projects/showcase/mediconnect">View Project</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/education-program/projects/showcase">View All Student Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Project-Based Learning Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures you gain practical skills while building impressive projects for your
              portfolio.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-100 -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">1. Project Introduction</h3>
                  <p className="text-gray-600">
                    Each project begins with a comprehensive brief outlining the objectives, requirements, and
                    technologies you&apos;ll use. You&apos;ll understand the real-world problem your project will solve.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 order-3">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Project Introduction"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Guided Learning"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                    priority
                  />
                </div>
                <div className="md:w-16 flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-2xl font-bold mb-3">2. Guided Learning</h3>
                  <p className="text-gray-600">
                    Learn the necessary skills and concepts through targeted lessons, tutorials, and examples. Our
                    instructors provide guidance on best practices and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">3. Project Development</h3>
                  <p className="text-gray-600">
                    Work on your project with regular checkpoints and feedback. You&apos;ll apply what you&apos;ve
                    learned to build a functional solution, with mentors available to help when you get stuck.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 order-3">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Project Development"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Code Review and Refinement"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                    priority
                  />
                </div>
                <div className="md:w-16 flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-2xl font-bold mb-3">4. Code Review and Refinement</h3>
                  <p className="text-gray-600">
                    Receive detailed feedback on your code from experienced developers. Learn how to improve your
                    solution&apos;s performance, security, and maintainability.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">5. Portfolio Presentation</h3>
                  <p className="text-gray-600">
                    Finalize your project and prepare it for your portfolio. Learn how to document your work, create a
                    compelling presentation, and showcase your solution to potential employers.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                </div>
                <div className="md:w-1/2 order-3">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Portfolio Presentation"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-purple-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have transformed their skills and careers through our project-based learning
              approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-2">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="font-bold">Tahmid Hassan</h3>
                  <p className="text-sm text-gray-600">Web Developer</p>
                </div>
                <p className="italic text-gray-700 mb-4">
                  &quot;The project-based approach was exactly what I needed. Instead of just learning theory, I built
                  real applications that I could show to employers. Within three months of completing the program, I
                  landed a job as a junior developer.&quot;
                </p>
                <div className="flex justify-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-2">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="font-bold">Nusrat Jahan</h3>
                  <p className="text-sm text-gray-600">Mobile App Developer</p>
                </div>
                <p className="italic text-gray-700 mb-4">
                  &quot;The mentorship during project development was invaluable. Whenever I got stuck, there was always
                  someone to help me understand the problem and guide me toward a solution. The projects in my portfolio
                  helped me start my freelance career.&quot;
                </p>
                <div className="flex justify-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-2">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="font-bold">Imran Khan</h3>
                  <p className="text-sm text-gray-600">System Administrator</p>
                </div>
                <p className="italic text-gray-700 mb-4">
                  &quot;The PowerShell automation projects completely transformed how I approach my work as a system
                  administrator. I now have a toolkit of scripts that save me hours every week, and I&apos;ve become the
                  go-to automation expert in my company.&quot;
                </p>
                <div className="flex justify-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our project-based learning programs and start building real-world projects that showcase your skills to
            employers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
              <Link href="/education-program/enroll">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-purple-600" asChild>
              <Link href="/education-program/free-learning">Explore Free Resources</Link>
            </Button>
          </div>
        </div>
      </section>

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
                  <Link href="/about" className="hover:underline">
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

