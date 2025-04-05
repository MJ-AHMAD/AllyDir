import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FreeLearningPage() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary">
              Education Program
            </Link>
            <Link href="/social-initiatives" className="font-medium hover:text-primary">
              Social Initiatives
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              Environmental Development
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Student Resources</h1>
          <p className="text-xl mb-8">
            The home for students to explore how to jumpstart a career in technology and stay connected with the
            TRUSTED-ALLY student developer community. Learn new skills through interactive learning paths and modules
            and find out about skilling events and resources.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Learn HTML, CSS, JavaScript and more</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Learn HTML, CSS, JavaScript, React, Node.js, and more in our web development courses. Through
                  project-based learning, you'll gain real-world experience and build a strong portfolio that showcases
                  your skills to potential employers.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>Build Android, iOS, and cross-platform apps</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Mobile App Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Learn mobile app development using Flutter, React Native, Swift, and Kotlin. Our hands-on training
                  will help you build real apps that you can add to your portfolio and prepare you for a career in
                  mobile development.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Data Science & AI</CardTitle>
                <CardDescription>Python, Machine Learning, and Data Analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Data Science and AI"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Learn data science and machine learning using Python, Pandas, NumPy, TensorFlow, and PyTorch. Work
                  with real datasets and learn to build AI models that can solve real-world problems in various
                  industries.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>PowerShell</CardTitle>
                <CardDescription>Master Windows PowerShell automation</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="PowerShell" fill className="object-cover" />
                </div>
                <p>
                  Learn PowerShell from the ground up and master Windows automation. This course covers PowerShell
                  basics, scripting techniques, working with objects, managing Windows systems, and creating advanced
                  automation solutions for enterprise environments.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Command Prompt</CardTitle>
                <CardDescription>Essential Windows command line skills</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Command Prompt"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Master the Windows Command Prompt and learn essential commands for file management, system
                  administration, networking, and batch scripting. This course provides practical examples and exercises
                  to build your command line proficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Git Bash</CardTitle>
                <CardDescription>Git version control and Bash commands</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Git Bash" fill className="object-cover" />
                </div>
                <p>
                  Learn Git version control using Git Bash on Windows. This course covers Git fundamentals, branching
                  and merging, remote repositories, collaboration workflows, and essential Bash commands for efficient
                  development.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Node.js CLI</CardTitle>
                <CardDescription>Build command line applications with Node.js</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Node.js CLI" fill className="object-cover" />
                </div>
                <p>
                  Learn to build powerful command line applications using Node.js. This course covers creating CLI
                  tools, parsing arguments, interactive prompts, progress bars, and publishing your own CLI packages to
                  npm for others to use.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Linux Terminal</CardTitle>
                <CardDescription>Essential Linux command line skills</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Linux Terminal"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Master the Linux terminal and command line interface. Learn file system navigation, user management,
                  permissions, package management, shell scripting, and system administration tasks to become proficient
                  in Linux environments.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Docker CLI</CardTitle>
                <CardDescription>Container management from the command line</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Docker CLI" fill className="object-cover" />
                </div>
                <p>
                  Learn to use Docker from the command line to build, manage, and deploy containerized applications.
                  This course covers Docker CLI commands, container lifecycle, image management, networking, volumes,
                  and Docker Compose.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Visual Studio Code</CardTitle>
                <CardDescription>Master the popular code editor and its extensions</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Visual Studio Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Learn to use Visual Studio Code like a professional developer. This course covers essential features,
                  keyboard shortcuts, debugging, Git integration, extensions, customization, and productivity tips to
                  enhance your coding workflow and efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>.NET Development</CardTitle>
                <CardDescription>Build applications with Microsoft's .NET platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt=".NET Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Learn .NET development from the ground up. This comprehensive course covers C#, ASP.NET Core, Blazor,
                  Entity Framework, Web APIs, and desktop application development. Build real-world projects and prepare
                  for a career as a .NET developer.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>GitHub Actions</CardTitle>
                <CardDescription>Automate your software workflows with CI/CD</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="GitHub Actions"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Master GitHub Actions for continuous integration and deployment (CI/CD). Learn to create workflows,
                  automate testing, build and deploy applications, and implement advanced CI/CD pipelines to streamline
                  your development process and improve code quality.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Now</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Benefits of Our Education Program</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Completely free access to all courses and resources</li>
              <li>High-quality educational content created by experienced instructors</li>
              <li>Hands-on, project-based learning</li>
              <li>24/7 online support and community forums</li>
              <li>Certificates of completion</li>
              <li>Career support and job placement assistance</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Learning Journey Today</h2>
            <p className="mb-6">
              Join our free learning platform and gain the skills you need to advance your career. No fees, no
              obligations - just learn and grow.
            </p>
            <Button size="lg" asChild>
              <Link href="/education-program/free-learning/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </main>

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

