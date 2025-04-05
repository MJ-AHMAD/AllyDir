import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Matching Home Page */}
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
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-indigo-600/90 to-indigo-500/70 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/mentor1.png')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mentorship Program</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Connect with experienced developers and technology professionals who will guide you on your learning
              journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="font-medium text-indigo-600">
                Browse Mentors
              </Button>
              <Button variant="default" size="lg" className="font-medium bg-white text-indigo-600 hover:bg-gray-100">
                Apply for Mentorship
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Why Mentorship Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Mentorship?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accelerate Your Learning Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Having a mentor can significantly speed up your learning process and help you avoid common pitfalls. Our
              mentors provide personalized guidance tailored to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-indigo-500 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <CardTitle>Personalized Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive detailed code reviews and constructive feedback on your projects. Our mentors will help you
                  identify areas for improvement and suggest best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-indigo-500 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <CardTitle>Overcome Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get unstuck when facing difficult concepts or debugging issues. Your mentor will help you navigate
                  through challenges and build problem-solving skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-indigo-500 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get advice on career paths, job preparation, and industry insights from professionals who have been
                  where you want to go. Build your professional network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">The Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Mentorship Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured mentorship program is designed to provide you with consistent support while respecting both
              your and your mentor's time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Apply</h3>
              <p className="text-gray-600">
                Fill out our application form detailing your background, goals, and what you hope to achieve through
                mentorship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Match</h3>
              <p className="text-gray-600">
                We'll match you with a mentor whose expertise aligns with your learning goals and schedule
                compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-gray-600">
                Schedule regular one-on-one sessions with your mentor via video calls. Establish goals and expectations
                together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Grow</h3>
              <p className="text-gray-600">
                Work on projects, receive feedback, ask questions, and track your progress with your mentor's guidance.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Apply for Mentorship
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Experts</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Mentors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mentors are experienced professionals who are passionate about helping others learn and grow in the
              tech industry.
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full md:w-fit mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft Tech</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Dev</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Rahul Ahmed</CardTitle>
                    <CardDescription>Senior Frontend Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      5+ years of experience building modern web applications. Specializes in React ecosystem and
                      frontend architecture.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Fatima Begum</CardTitle>
                    <CardDescription>Full Stack Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      7+ years of experience in full stack development. Passionate about teaching backend concepts and
                      database design.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Mohammad Karim</CardTitle>
                    <CardDescription>UI/UX Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">UI Design</Badge>
                      <Badge variant="secondary">CSS/SCSS</Badge>
                      <Badge variant="secondary">Tailwind</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      Designer turned developer with 6+ years experience. Specializes in creating beautiful, accessible,
                      and responsive interfaces.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="microsoft" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Arif Rahman</CardTitle>
                    <CardDescription>Microsoft Certified Solutions Architect</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Azure</Badge>
                      <Badge variant="secondary">C#</Badge>
                      <Badge variant="secondary">.NET</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      10+ years of experience with Microsoft technologies. Specializes in cloud architecture and
                      enterprise solutions.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Nusrat Jahan</CardTitle>
                    <CardDescription>PowerShell & Azure DevOps Expert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">PowerShell</Badge>
                      <Badge variant="secondary">Azure DevOps</Badge>
                      <Badge variant="secondary">Automation</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      8+ years specializing in automation and DevOps practices with Microsoft technologies. Passionate
                      about teaching scripting.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Imran Hossain</CardTitle>
                    <CardDescription>Microsoft 365 & Power Platform Specialist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Power BI</Badge>
                      <Badge variant="secondary">Power Apps</Badge>
                      <Badge variant="secondary">SharePoint</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      Microsoft MVP with expertise in productivity tools and low-code development. Helps businesses
                      leverage Microsoft 365.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Tahmina Akter</CardTitle>
                    <CardDescription>React Native Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Mobile UI</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      6+ years building cross-platform mobile apps. Specializes in creating smooth, native-like
                      experiences with React Native.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Saiful Islam</CardTitle>
                    <CardDescription>Android Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Kotlin</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Android SDK</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      8+ years of native Android development. Passionate about teaching app architecture and performance
                      optimization.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Nasrin Khatun</CardTitle>
                    <CardDescription>iOS Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Swift</Badge>
                      <Badge variant="secondary">SwiftUI</Badge>
                      <Badge variant="secondary">iOS</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      7+ years developing for Apple platforms. Specializes in creating beautiful, intuitive iOS
                      applications with Swift.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Dr. Mahmud Hassan</CardTitle>
                    <CardDescription>Data Scientist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">TensorFlow</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      PhD in Computer Science with 10+ years experience in data science and machine learning. Loves
                      teaching complex concepts simply.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Sabina Yasmin</CardTitle>
                    <CardDescription>Data Engineer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">ETL</Badge>
                      <Badge variant="secondary">Big Data</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      8+ years building data pipelines and warehousing solutions. Specializes in data architecture and
                      processing at scale.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mentor"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle>Rafiqul Islam</CardTitle>
                    <CardDescription>Business Intelligence Analyst</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <Badge variant="secondary">Power BI</Badge>
                      <Badge variant="secondary">Tableau</Badge>
                      <Badge variant="secondary">Data Visualization</Badge>
                    </div>
                    <p className="text-gray-600 text-center">
                      9+ years turning data into actionable insights. Passionate about teaching data storytelling and
                      visualization techniques.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View All Mentors
            </Button>
          </div>
        </div>
      </section>

      {/* Mentorship Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Mentorship Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Mentorship Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer different mentorship options to fit your learning style, goals, and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Basic Mentorship</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Free</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Monthly group Q&A sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Learning path guidance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all border-2 border-indigo-500 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Standard Mentorship</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">৳1,500</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>2 one-on-one sessions per month</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Code reviews and feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Personalized learning plan</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Premium Mentorship</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">৳3,000</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Everything in Standard</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Weekly one-on-one sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Career coaching and job prep</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Mentees Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have transformed their skills and careers through our mentorship program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Student"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Anika Rahman</h3>
                    <p className="text-sm text-gray-600">Web Developer</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">
                  "My mentor helped me bridge the gap between tutorials and real-world projects. The personalized
                  feedback on my code was invaluable, and I landed my first developer job within 6 months of starting
                  the program!"
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Student"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Kamal Hossain</h3>
                    <p className="text-sm text-gray-600">Data Analyst</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">
                  "I was struggling with complex data concepts until I joined the mentorship program. My mentor broke
                  down difficult topics into manageable pieces and guided me through real-world projects that now form
                  the core of my portfolio."
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Student"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Sadia Islam</h3>
                    <p className="text-sm text-gray-600">Cloud Engineer</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">
                  "The Microsoft Azure certification seemed impossible until I connected with my mentor. Their practical
                  advice and hands-on guidance helped me pass the exam on my first attempt and transition into a cloud
                  role at my company."
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our mentorship program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="text-indigo-600 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  How are mentors and mentees matched?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We match mentors and mentees based on several factors including technical interests, career goals,
                  learning style, and availability. Our goal is to create partnerships that are beneficial for both
                  parties and lead to meaningful growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="text-indigo-600 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  What happens during mentorship sessions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mentorship sessions are tailored to your needs but typically include code reviews, problem-solving,
                  career guidance, and working through technical concepts. Your mentor will help set goals and track
                  progress throughout your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="text-indigo-600 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  How long does the mentorship program last?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our mentorship programs are flexible and can last as long as you need. Most mentees stay in the
                  program for 3-6 months, but some relationships continue for years. You can adjust or end your
                  mentorship at any time based on your goals and progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="text-indigo-600 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  What if the mentor-mentee match isn't working out?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We understand that not every match will be perfect. If you feel your mentorship isn't meeting your
                  needs, you can request a new mentor at any time. We'll work with you to find a better fit based on
                  your feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our mentorship program today and take your skills to the next level with personalized guidance from
            industry experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Apply for Mentorship
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-indigo-700">
              Browse Mentors
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

