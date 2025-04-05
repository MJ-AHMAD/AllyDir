"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Users, Target, Heart, Award, Globe } from "lucide-react"

export default function AboutUsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("mission")
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  // Counter animation for statistics
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    communities: 0,
    volunteers: 0,
  })

  const targetStats = {
    years: 5,
    projects: 120,
    communities: 75,
    volunteers: 1500,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds for the animation
      const steps = 50 // Number of steps in the animation
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setStats({
          years: Math.floor(targetStats.years * progress),
          projects: Math.floor(targetStats.projects * progress),
          communities: Math.floor(targetStats.communities * progress),
          volunteers: Math.floor(targetStats.volunteers * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  // Team members data
  const teamMembers = [
    {
      name: "MJ AHMAD",
      role: "Founder & Executive Director",
      bio: "Visionary leader with over 15 years of experience in community development and education initiatives.",
      image: "https://mj-ahmad.github.io/mja2025/img/logo.png",
    },
    {
      name: "Sarah Rahman",
      role: "Director of Education Programs",
      bio: "Education specialist dedicated to creating accessible learning opportunities for underserved communities.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Mohammed Ali",
      role: "Head of Social Initiatives",
      bio: "Community organizer with extensive experience in developing impactful social programs across Bangladesh.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Fatima Khan",
      role: "Environmental Programs Lead",
      bio: "Environmental scientist committed to sustainable development and conservation efforts.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2020",
      title: "Foundation of TRUSTED-ALLY",
      description:
        "Established with a vision to bridge educational gaps and empower communities through sustainable initiatives.",
    },
    {
      year: "2020",
      title: "Launch of Al-Quran Journey",
      description:
        "Initiated the printing and distribution of high-quality Qurans to Islamic educational institutions.",
    },
    {
      year: "2021",
      title: "Expansion of Educational Programs",
      description: "Extended our reach to provide educational resources to more communities across Bangladesh.",
    },
    {
      year: "2022",
      title: "Introduction of Umrah Services",
      description:
        "Launched services to facilitate trips to Mecca and Medina while building relationships with traditional communities.",
    },
    {
      year: "2023",
      title: "Cox's Bazar Tourism Initiative",
      description:
        "Developed sustainable tourism projects to showcase Cox's Bazar globally while creating local employment opportunities.",
    },
    {
      year: "2024",
      title: "Technology Integration Programs",
      description:
        "Introduced TechAlly Ventures to bridge the gap between traditional education and modern technology.",
    },
  ]

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
            <Link href="/about-us" className="font-medium text-primary transition-colors">
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
            <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
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
              <Link href="/about-us" className="font-medium text-primary">
                About Us
              </Link>
              <Link href="/programs-overview" className="font-medium hover:text-primary">
                Programs
              </Link>
              <Link href="/impact" className="font-medium hover:text-primary">
                Impact
              </Link>
              <Link href="/get-involved" className="font-medium hover:text-primary">
                Get Involved
              </Link>
              <Button asChild className="mt-2" variant="default">
                <Link href="/donate">Donate</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/edu1.png')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Building a brighter future through education, empowerment, and sustainable development
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-medium text-primary"
                  onClick={() => scrollToSection("mission")}
                >
                  Our Mission
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="font-medium bg-white text-primary hover:bg-gray-100"
                  onClick={() => scrollToSection("team")}
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => {
                  setActiveSection("mission")
                  scrollToSection("mission")
                }}
                className={`px-4 py-2 font-medium rounded-full transition-colors ${
                  activeSection === "mission" ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                Mission & Vision
              </button>
              <button
                onClick={() => {
                  setActiveSection("values")
                  scrollToSection("values")
                }}
                className={`px-4 py-2 font-medium rounded-full transition-colors ${
                  activeSection === "values" ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                Our Values
              </button>
              <button
                onClick={() => {
                  setActiveSection("journey")
                  scrollToSection("journey")
                }}
                className={`px-4 py-2 font-medium rounded-full transition-colors ${
                  activeSection === "journey" ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                Our Journey
              </button>
              <button
                onClick={() => {
                  setActiveSection("team")
                  scrollToSection("team")
                }}
                className={`px-4 py-2 font-medium rounded-full transition-colors ${
                  activeSection === "team" ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                Leadership Team
              </button>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" /> Our Mission
                    </h3>
                    <p className="text-gray-700">
                      At TRUSTED-ALLY, our mission is to empower individuals and communities by providing access to
                      quality education, fostering community development, and promoting sustainable practices. We are
                      dedicated to creating a platform that leverages cutting-edge tools and technologies to drive
                      positive change and societal advancement.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" /> Our Vision
                    </h3>
                    <p className="text-gray-700">
                      We envision a world where every individual has equal access to education, resources, and
                      opportunities. A society where traditional values harmoniously blend with modern advancements,
                      creating sustainable communities that thrive in harmony with nature and technology.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                  <p className="text-gray-700 mb-4">
                    We believe in the power of collective effort to shape a brighter tomorrow. This is your opportunity
                    to be part of a movement that inspires, educates, and uplifts. Whether you dream of empowering young
                    minds through education, driving impactful social initiatives, or protecting our planet for future
                    generations—your contribution matters.
                  </p>
                  <p className="text-gray-700">
                    Together, we can break barriers, ignite hope, and create lasting change. TRUSTED-ALLY is dedicated
                    to building a brighter future for all through education, empowerment, and innovation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden h-64 md:h-80 relative shadow-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/edu2.png"
                    alt="Education Initiative"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden h-40 relative shadow-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/com1.png"
                      alt="Community Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-40 relative shadow-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/env1.png"
                      alt="Environmental Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="values" className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide our work and define our organizational culture as we strive to create meaningful
                impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Compassion</h3>
                  <p className="text-gray-600 text-center">
                    We approach our work with empathy and understanding, recognizing the unique challenges faced by the
                    communities we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Inclusivity</h3>
                  <p className="text-gray-600 text-center">
                    We embrace diversity and ensure that our programs are accessible to all, regardless of background or
                    circumstance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Excellence</h3>
                  <p className="text-gray-600 text-center">
                    We strive for the highest standards in all our endeavors, continuously improving our methods and
                    approaches.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
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
                      className="h-8 w-8 text-primary"
                    >
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
                  <p className="text-gray-600 text-center">
                    We embrace creative solutions and new technologies to address complex social challenges effectively.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
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
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Sustainability</h3>
                  <p className="text-gray-600 text-center">
                    We design our programs with long-term impact in mind, ensuring they create lasting positive change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section ref={statsRef} className="py-20 bg-primary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stats.years}+</div>
                  <p className="text-lg">Years of Impact</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stats.projects}+</div>
                  <p className="text-lg">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stats.communities}+</div>
                  <p className="text-lg">Communities Served</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stats.volunteers}+</div>
                  <p className="text-lg">Volunteers Engaged</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section id="journey" className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600">
                From our humble beginnings to our current impact, explore the key milestones that have shaped
                TRUSTED-ALLY.
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <div
                        className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-primary relative ${
                          index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                        }`}
                      >
                        <div
                          className="absolute top-6 md:top-1/2 md:transform md:translate-y-[-50%] w-4 h-4 rounded-full bg-primary border-4 border-white 
                          ${index % 2 === 0 ? 'left-[-34px] md:left-[-34px]' : 'left-[-34px] md:right-[-34px] md:left-auto'}"
                        ></div>
                        <div className="font-bold text-primary mb-1">{event.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the dedicated individuals who guide our organization's vision and drive our mission forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-64 relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl mb-8">
                Together, we can create lasting change and build a brighter future for communities across Bangladesh.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="font-medium text-primary">
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="font-medium bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/donate">Support Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                  alt="TRUSTED-ALLY Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl">TRUSTED-ALLY</span>
              </div>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">
                ©2025{" "}
                <a
                  href="https://v0-hero-geometric-background-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Trusted Ally
                </a>
                , All Rights Reserved.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-primary transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:t-ally@outlook.com" className="hover:text-primary transition-colors">
                    t-ally@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:mjahmad2024@outlook.com" className="hover:text-primary transition-colors">
                    mjahmad2024@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/MJ-AHMAD/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
                    className="h-6 w-6 hover:text-primary transition-colors"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/jafor-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
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
                    className="h-6 w-6 hover:text-primary transition-colors"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-700"
                />
                <Button type="submit" size="icon">
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
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

