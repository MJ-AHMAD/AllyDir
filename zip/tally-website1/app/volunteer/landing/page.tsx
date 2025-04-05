import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Calendar, Award, Clock, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VolunteerLanding() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b">
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
          <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-12 space-y-16">
        {/* Hero Section with Background Image */}
        <section className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Volunteers working together"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto py-20 px-4">
            <Badge className="px-4 py-1 bg-primary/20 text-white border-primary/40 mb-4">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Make a <span className="text-primary-foreground">Difference</span> as a Volunteer
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our community of dedicated volunteers who are changing lives and building a better future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/volunteer/apply">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="#volunteer-roles">Explore Roles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-muted-foreground">Active Volunteers</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-orange-500">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-orange-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-4xl font-bold">10,000+</h3>
              <p className="text-muted-foreground">Volunteer Hours</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-green-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Communities Served</p>
            </CardContent>
          </Card>
        </section>

        {/* Why Volunteer */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="px-4 py-1 bg-orange-500/10 text-orange-500 border-orange-500/20 mb-4">
              Why Volunteer
            </Badge>
            <h2 className="text-3xl font-bold">The Impact You'll Make</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Volunteering with TRUSTED-ALLY offers unique opportunities to grow while making a meaningful difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Transform Lives</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Your time and skills directly impact individuals and communities in need. From education to
                  environmental initiatives, your contribution creates lasting change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-green-500" />
                  </div>
                  <CardTitle>Develop New Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Gain valuable experience and develop new skills that enhance your personal and professional growth
                  while working alongside dedicated professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle>Build Connections</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Join a community of like-minded individuals who share your passion for making a difference. Create
                  meaningful relationships that last a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <CardTitle>Global Perspective</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Gain a broader understanding of global challenges and contribute to solutions that have far-reaching
                  impacts across different communities and cultures.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Volunteer Roles */}
        <section id="volunteer-roles" className="max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <Badge className="px-4 py-1 bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">Volunteer Roles</Badge>
            <h2 className="text-3xl font-bold">Find Your Perfect Role</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer various volunteer opportunities to match your skills, interests, and availability.
            </p>
          </div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Education Mentor</CardTitle>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">High Impact</Badge>
                  </div>
                  <CardDescription>Share your knowledge and inspire the next generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    As an Education Mentor, you'll work directly with students to provide academic support, career
                    guidance, and personal development mentoring.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">4-6 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">In-person & Remote</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Quran Education Assistant</CardTitle>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Flexible</Badge>
                  </div>
                  <CardDescription>Support our Al-Quran Journey program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Help with our Al-Quran Journey program by assisting instructors, organizing materials, and providing
                    administrative support for classes and events.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2-4 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">In-person</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="environment" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Environmental Activist</CardTitle>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Outdoor</Badge>
                  </div>
                  <CardDescription>Participate in conservation and sustainability initiatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Join our environmental conservation efforts through tree planting, beach cleanups, and community
                    education about sustainable practices.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Weekend events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Various locations</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Sustainability Educator</CardTitle>
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Training Provided</Badge>
                  </div>
                  <CardDescription>Educate communities about environmental conservation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Lead workshops and educational sessions about environmental conservation, sustainable living
                    practices, and the importance of protecting natural resources.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">3-5 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Schools & Community Centers</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Community Organizer</CardTitle>
                    </div>
                    <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">Leadership</Badge>
                  </div>
                  <CardDescription>Coordinate community events and initiatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Help plan and execute community events, fundraisers, and awareness campaigns that bring people
                    together and address local needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">5-8 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Various locations</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle>Social Media Advocate</CardTitle>
                    </div>
                    <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">Remote</Badge>
                  </div>
                  <CardDescription>Amplify our message through digital channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Use your digital skills to help spread awareness about our initiatives, create engaging content, and
                    build our online community.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2-4 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Remote</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/volunteer/apply">Apply for This Role</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Testimonials */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="px-4 py-1 bg-purple-500/10 text-purple-500 border-purple-500/20 mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold">Hear From Our Volunteers</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Discover how volunteering with TRUSTED-ALLY has impacted the lives of our dedicated team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic">
                    "Volunteering with the education program has been one of the most rewarding experiences of my life.
                    Seeing the students grow and develop new skills gives me immense joy and purpose."
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                      <span className="font-semibold text-primary">SA</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Ahmed</h4>
                      <p className="text-sm text-muted-foreground">Education Mentor, 2 years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic">
                    "The environmental initiatives have allowed me to contribute to meaningful change while connecting
                    with nature and like-minded individuals. I've learned so much about sustainability and community
                    action."
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center">
                      <span className="font-semibold text-green-500">RK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Rahim Khan</h4>
                      <p className="text-sm text-muted-foreground">Environmental Activist, 1.5 years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="px-4 py-1 bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold">Common Questions</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  How much time do I need to commit?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We offer flexible volunteering opportunities ranging from one-time events to regular weekly
                  commitments. You can choose roles that fit your schedule and availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Do I need special skills or qualifications?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  While some roles may require specific skills or experience, many opportunities are open to anyone with
                  enthusiasm and dedication. We provide training and support for all volunteers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Can I volunteer remotely?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes! We offer several remote volunteering opportunities, including social media advocacy, content
                  creation, and virtual mentoring. These roles allow you to make an impact from anywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-none">
            <CardContent className="pt-10 pb-10 text-center">
              <Badge className="px-4 py-1 bg-background text-primary border-primary/20 mb-6">
                Ready to Make a Difference?
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Join Our Volunteer Community Today</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Take the first step toward making a meaningful impact. Complete our volunteer application and begin your
                journey with TRUSTED-ALLY.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/volunteer/apply">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              TRUSTED-ALLY is committed to creating positive change through the power of community action and dedicated
              volunteers.
            </p>
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/about-us">About Us</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

