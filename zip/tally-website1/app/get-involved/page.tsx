"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Heart,
  Gift,
  Briefcase,
  MessageSquare,
  Menu,
  X,
  Clock,
  Lightbulb,
  HandHeart,
  Sparkles,
  ChevronRight,
  Calendar,
  MapPin,
  GraduationCap,
} from "lucide-react"

export default function GetInvolvedPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("volunteer")
  const [animatedStats, setAnimatedStats] = useState({
    volunteers: 0,
    countries: 0,
    projects: 0,
    lives: 0,
  })

  // Animate stats on page load
  useEffect(() => {
    const targetStats = {
      volunteers: 500,
      countries: 15,
      projects: 35,
      lives: 10000,
    }

    const duration = 2000 // 2 seconds
    const steps = 50
    const interval = duration / steps

    let step = 0

    const timer = setInterval(() => {
      step++

      setAnimatedStats({
        volunteers: Math.ceil((targetStats.volunteers / steps) * Math.min(step, steps)),
        countries: Math.ceil((targetStats.countries / steps) * Math.min(step, steps)),
        projects: Math.ceil((targetStats.projects / steps) * Math.min(step, steps)),
        lives: Math.ceil((targetStats.lives / steps) * Math.min(step, steps)),
      })

      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Sticky and Modern */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
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
            <Link href="/get-involved" className="font-medium text-primary transition-colors">
              Get Involved
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex" variant="default">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col gap-4 p-4 bg-background border-t">
              <Link href="/" className="font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/about-us" className="font-medium hover:text-primary">
                About Us
              </Link>
              <Link href="/programs-overview" className="font-medium hover:text-primary">
                Programs
              </Link>
              <Link href="/impact" className="font-medium hover:text-primary">
                Impact
              </Link>
              <Link href="/get-involved" className="font-medium text-primary">
                Get Involved
              </Link>
              <Button asChild className="mt-2" variant="default">
                <Link href="/donate">Donate</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Parallax Effect */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/volunteer-bg.jpg"
            alt="Volunteers working together"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-white font-medium">Join our global community of changemakers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Skills Can <span className="text-yellow-300">Change Lives</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Every contribution matters. Discover how you can make a meaningful impact through volunteering, donations,
              partnerships, and advocacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="font-medium text-primary"
                onClick={() => document.getElementById("impact-stats")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Our Impact
              </Button>
              <Button variant="default" size="lg" className="font-medium bg-white text-primary hover:bg-gray-100">
                <Link href="/volunteer/apply">Apply to Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact-stats" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together with our volunteers and supporters, we're creating meaningful change around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{animatedStats.volunteers}+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{animatedStats.countries}</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{animatedStats.projects}</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {animatedStats.lives.toLocaleString()}+
              </div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved - Tabbed Interface */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Make an Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everyone has something valuable to contribute. Find the perfect way for you to get involved.
            </p>
          </div>

          <Tabs defaultValue="volunteer" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="volunteer" className="text-base py-3">
                <Heart className="h-5 w-5 mr-2" />
                Volunteer
              </TabsTrigger>
              <TabsTrigger value="donate" className="text-base py-3">
                <Gift className="h-5 w-5 mr-2" />
                Donate
              </TabsTrigger>
              <TabsTrigger value="partner" className="text-base py-3">
                <Briefcase className="h-5 w-5 mr-2" />
                Partner
              </TabsTrigger>
              <TabsTrigger value="advocate" className="text-base py-3">
                <MessageSquare className="h-5 w-5 mr-2" />
                Advocate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Volunteer Your Skills</h3>
                    <p className="text-gray-600 mb-4">
                      Our volunteers are the heart of our organization. Whether you have a few hours a week or want to
                      make a longer commitment, your skills and passion can make a real difference in communities around
                      the world.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Flexible opportunities to match your schedule and interests</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Virtual and in-person positions available</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Training and support provided for all volunteers</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Opportunities to develop new skills and gain experience</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="mt-2">
                      <Link href="/volunteer/apply" className="flex items-center gap-2">
                        Apply to Volunteer <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/volunteer-group.jpg"
                      alt="Volunteers working together"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4">Volunteer Opportunities</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <h5 className="text-lg font-semibold mb-2">Education Programs</h5>
                      <p className="text-gray-600 mb-4">
                        Help provide quality education to children and adults in underserved communities.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4 mr-1" /> 5-10 hours/week
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/education-program/get-involved">Learn More</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <h5 className="text-lg font-semibold mb-2">Environmental Projects</h5>
                      <p className="text-gray-600 mb-4">
                        Join our efforts to protect and restore the environment through various initiatives.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4 mr-1" /> Flexible hours
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/environmental-development/join-our-eco-efforts">Learn More</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <HandHeart className="h-6 w-6 text-primary" />
                      </div>
                      <h5 className="text-lg font-semibold mb-2">Community Support</h5>
                      <p className="text-gray-600 mb-4">
                        Provide essential support to vulnerable individuals and families in communities.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4 mr-1" /> 3-8 hours/week
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/social-initiatives/support-our-initiatives">Learn More</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donate" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                      Your financial support enables us to continue and expand our work in communities around the world.
                      Every donation, no matter the size, makes a meaningful difference.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>100% transparency in how your donation is used</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Choose specific programs or donate to our general fund</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>One-time, monthly, and annual giving options</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Special religious donation options (Zakat, Mannat/Nazr)</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="mt-2">
                      <Link href="/donate" className="flex items-center gap-2">
                        Donate Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/donation-impact.jpg"
                      alt="Donation impact"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4">Ways to Give</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">One-Time Donation</h5>
                      <p className="text-gray-600 mb-4">
                        Make an immediate impact with a one-time contribution to support our work.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/donate">Donate Now</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Monthly Giving</h5>
                      <p className="text-gray-600 mb-4">
                        Join our sustainer circle with a recurring monthly donation to provide ongoing support.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/donate">Become a Monthly Donor</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Religious Giving</h5>
                      <p className="text-gray-600 mb-4">
                        Fulfill your religious obligations with Zakat, Sadaqah, or Mannat/Nazr donations.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/donate">Religious Giving</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partner" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
                    <p className="text-gray-600 mb-4">
                      Strategic partnerships help us expand our reach and impact. We collaborate with businesses,
                      organizations, and institutions that share our vision for a better world.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Corporate social responsibility partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Cause marketing campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Event sponsorships and co-branding opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>In-kind donations and pro bono services</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="mt-2">
                      <Link href="/contact" className="flex items-center gap-2">
                        Discuss Partnership <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/partnership.jpg"
                      alt="Partnership meeting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4">Partnership Opportunities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Corporate Partnerships</h5>
                      <p className="text-gray-600 mb-4">
                        Engage your company and employees in meaningful social impact initiatives that align with your
                        values.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Institutional Partnerships</h5>
                      <p className="text-gray-600 mb-4">
                        Collaborate with us on research, program development, and implementation to maximize impact.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advocate" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Become an Advocate</h3>
                    <p className="text-gray-600 mb-4">
                      Use your voice and platform to raise awareness about important issues and inspire others to take
                      action. Advocacy is a powerful way to create systemic change.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Share our mission and impact on social media</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Host awareness events in your community</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Engage with policymakers on issues that matter</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Join our ambassador program</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="mt-2">
                      <Link href="/news-and-media" className="flex items-center gap-2">
                        Advocacy Resources <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/advocacy.jpg"
                      alt="Advocacy event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4">Advocacy Tools</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Social Media Kit</h5>
                      <p className="text-gray-600 mb-4">
                        Access ready-to-share content to help spread awareness about our mission and impact.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/news-and-media">Download Kit</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Host an Event</h5>
                      <p className="text-gray-600 mb-4">
                        Get resources and support to organize awareness and fundraising events in your community.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">Event Guide</Link>
                      </Button>
                    </div>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold mb-2">Ambassador Program</h5>
                      <p className="text-gray-600 mb-4">
                        Join our network of dedicated advocates who amplify our message and mission.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/volunteer/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Volunteer Journey */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Volunteer Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to impact, we're with you every step of the way.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -ml-0.5"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Apply</h3>
                      <p className="text-gray-600">
                        Fill out our simple application form to tell us about your interests, skills, and availability.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white order-1 md:order-2 mb-4 md:mb-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-1" /> 10-15 minutes
                        </div>
                        <Button asChild size="sm" variant="outline">
                          <Link href="/volunteer/apply">Start Application</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 order-2">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" /> Within 1 week
                        </div>
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white order-1 md:order-2 mb-4 md:mb-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="flex-1 md:text-left md:pl-8 order-3 md:order-3">
                      <h3 className="text-xl font-bold text-primary mb-2">Interview</h3>
                      <p className="text-gray-600">
                        Connect with our volunteer coordinator to discuss opportunities that match your skills and
                        interests.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Orientation & Training</h3>
                      <p className="text-gray-600">
                        Receive comprehensive orientation and training to prepare you for your volunteer role.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white order-1 md:order-2 mb-4 md:mb-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-1" /> 2-3 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 order-2">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="h-4 w-4 mr-1" /> Virtual or In-person
                        </div>
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white order-1 md:order-2 mb-4 md:mb-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="flex-1 md:text-left md:pl-8 order-3 md:order-3">
                      <h3 className="text-xl font-bold text-primary mb-2">Start Volunteering</h3>
                      <p className="text-gray-600">
                        Begin your volunteer journey with ongoing support from our dedicated staff.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Make an Impact</h3>
                      <p className="text-gray-600">
                        See the difference your contribution makes in the lives of others and in communities.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white order-1 md:order-2 mb-4 md:mb-0">
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Sparkles className="h-4 w-4 mr-1" /> Ongoing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced the joy and impact of volunteering with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <div className="w-full h-full relative">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-gray-500 text-sm">Education Program Volunteer</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Volunteering with TRUSTED-ALLY has been one of the most rewarding experiences of my life. Seeing
                    the direct impact of our work on children's education has been truly inspiring."
                  </p>
                </div>
                <div className="text-sm text-gray-500">Volunteer since 2021</div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <div className="w-full h-full relative">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-gray-500 text-sm">Environmental Conservation Volunteer</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "As an environmental conservation volunteer, I've had the opportunity to contribute to meaningful
                    projects that are making a real difference in protecting our planet for future generations."
                  </p>
                </div>
                <div className="text-sm text-gray-500">Volunteer since 2022</div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <div className="w-full h-full relative">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Aisha Rahman"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Aisha Rahman</div>
                    <div className="text-gray-500 text-sm">Community Support Volunteer</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "The sense of community and purpose I've found through volunteering with TRUSTED-ALLY has been
                    incredible. I've developed new skills while making a real difference in people's lives."
                  </p>
                </div>
                <div className="text-sm text-gray-500">Volunteer since 2020</div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/volunteer/apply">Join Our Volunteer Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-white font-medium">Join our mission today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8">
              Whether you volunteer your time, make a donation, or become an advocate, your contribution helps create a
              better world for all. Join our community of changemakers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="/volunteer/apply">Become a Volunteer</Link>
              </Button>
              <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

