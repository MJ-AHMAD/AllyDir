"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Github, Linkedin, Mail, Send, Menu, X, ChevronRight, ArrowRight } from "lucide-react"

export default function Home() {
  // All the state and other code remains the same
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const [currentSlide, setCurrentSlide] = useState(0)

  // Image slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Counter animation for statistics
  const [stats, setStats] = useState({
    lives: 0,
    trees: 0,
    initiatives: 0,
  })

  const targetStats = {
    lives: 50000,
    trees: 10000,
    initiatives: 200,
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
          lives: Math.floor(targetStats.lives * progress),
          trees: Math.floor(targetStats.trees * progress),
          initiatives: Math.floor(targetStats.initiatives * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      const data = await response.json()
      if (data.success) {
        alert("Thank you for subscribing to our newsletter!")
        setNewsletterEmail("")
      } else {
        alert("There was an error subscribing to the newsletter. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting newsletter form:", error)
      alert("There was an error subscribing to the newsletter. Please try again.")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Testimonials data
  const testimonials = [
    {
      quote: "TRUSTED-ALLY has transformed lives and empowered communities to dream bigger.",
      author: "Sarah Johnson",
      role: "Volunteer",
      image: "/images/testimonial1.jpg",
    },
    {
      quote: "Their dedication to education and sustainability is a beacon of hope for future generations.",
      author: "Michael Chen",
      role: "Community Partner",
      image: "/images/testimonial2.jpg",
    },
    {
      quote:
        "The impact TRUSTED-ALLY has made in our community is immeasurable. They truly care about making a difference.",
      author: "Amina Patel",
      role: "Program Beneficiary",
      image: "/images/testimonial3.jpg",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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
            <Link href="https://v0-microservices-project.vercel.app/" className="font-medium hover:text-primary transition-colors">
              Trusted Ally - Cox's Bazar 
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
              <Link href="/about-us" className="font-medium hover:text-primary">
                About Us
              </Link>
              <Link href="/programs-overview" className="font-medium hover:text-primary">
                Programs
              </Link>
              <Link href="/impact" className="font-medium hover:text-primary">
                Impact
              </Link>
              <Link href="https://v0-microservices-project.vercel.app/" className="font-medium hover:text-primary transition-colors">
                Trusted Ally - Cox's Bazar 
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Dynamic with Image Animation */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Image background with animation - Improved for mobile */}
            <div className="relative h-full w-full">
              {[
                { img: "https://mj-ahmad.github.io/mja2025/img/eco1.png", text: "Equality" },
                { img: "https://mj-ahmad.github.io/mja2025/img/edu1.png", text: "Education" },
                { img: "https://mj-ahmad.github.io/mja2025/img/coop1.png", text: "and Cooperation" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.text}
                      fill
                      className="object-cover md:object-cover brightness-50"
                      sizes="100vw"
                      style={{
                        objectPosition: "center center", // Center the image for all devices
                      }}
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="container relative z-10 text-center text-white">
            <div className="max-w-3xl mx-auto px-4">
              <div className="mb-6 h-16 flex items-center justify-center">
                {[
                  { text: "Equality", index: 0 },
                  { text: "Education", index: 1 },
                  { text: "and Cooperation", index: 2 },
                ].map((item, index) => (
                  <h2
                    key={index}
                    className={`text-2xl md:text-4xl font-bold transition-all duration-1000 absolute ${
                      currentSlide === item.index ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {item.text}
                  </h2>
                ))}
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">Together Towards a Brighter Future</h1>
              {/* Increased the height from h-12 to h-20 to ensure the text is fully visible */}
              <div className="overflow-visible mb-8 md:mb-12">
                <p className="text-lg md:text-2xl animate-fade-in-up">
                  Empowering communities. Inspiring leaders. Transforming tomorrow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-white text-primary hover:bg-white/90"
                >
                  <Link href="#get-started">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                >
                  <Link href="#join-movement">Join the Movement</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="h-8 w-8 md:h-10 md:w-10 text-white rotate-90" />
          </div>
        </section>

        {/* About TRUSTED-ALLY - Two Column Layout */}
        <section id="get-started" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About TRUSTED-ALLY</h2>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  At TRUSTED ALLY, we are driven by the unwavering belief in equality, cooperation, and the power of
                  collective action. Through our impactful programs, we're building a brighter and inclusive future for
                  all.
                </p>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  Our mission extends beyond immediate relief—we aim to create sustainable change through education,
                  social innovation, and environmental initiatives that empower communities to thrive independently.
                </p>
                <Button asChild className="font-semibold">
                  <Link href="/about-us" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden h-48 relative">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/edu2.png"
                      alt="Education Initiative"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-32 relative">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/com1.png"
                      alt="Community Support"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden h-32 relative">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/env1.png"
                      alt="Environmental Project"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-48 relative">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/sos1.png"
                      alt="Social Innovation"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals and Objectives - Interactive Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Goals and Objectives</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Education</h3>
                <p className="text-gray-600 text-center">
                  Expanding opportunities for learning and growth through accessible educational initiatives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Social Innovation</h3>
                <p className="text-gray-600 text-center">
                  Fostering creativity and collaboration for meaningful community transformation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="M16.5 9.4 7.55 4.24" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Environmental Development</h3>
                <p className="text-gray-600 text-center">
                  Securing the future of our planet through sustainable practices and conservation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Communal Harmony</h3>
                <p className="text-gray-600 text-center">
                  Building unity and understanding among diverse communities for a cohesive society.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Social Responsibility</h3>
                <p className="text-gray-600 text-center">
                  Ensuring justice, safety, and equal rights for all members of society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact and Statistics - Counter Animation */}
        <section ref={statsRef} className="py-20 bg-primary text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">{stats.lives.toLocaleString()}+</div>
                <p className="text-xl">Lives Impacted</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">{stats.trees.toLocaleString()}+</div>
                <p className="text-xl">Trees Planted</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">{stats.initiatives.toLocaleString()}+</div>
                <p className="text-xl">Educational Initiatives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Overview - Cards with Hover Effects */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Programs</h2>
            <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Discover how TRUSTED-ALLY is making a difference through our diverse range of programs designed to address
              critical needs in communities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
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
                      className="text-primary h-16 w-16 group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Education Program</h3>
                  <p className="text-gray-600 mb-4">
                    Empowering children with knowledge and opportunities to succeed, regardless of their background.
                  </p>
                  <Link
                    href="/education-program"
                    className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
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
                      className="text-primary h-16 w-16 group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Social Initiatives</h3>
                  <p className="text-gray-600 mb-4">
                    Supporting underprivileged communities with resources and hope for a better quality of life.
                  </p>
                  <Link
                    href="/social-initiatives"
                    className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
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
                      className="text-primary h-16 w-16 group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                      <path d="M16.5 9.4 7.55 4.24" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" y1="22" x2="12" y2="12" />
                      <circle cx="18.5" cy="15.5" r="2.5" />
                      <path d="M20.27 17.27 22 19" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Environmental Development</h3>
                  <p className="text-gray-600 mb-4">
                    Creating a sustainable future through eco-friendly practices and natural resource preservation.
                  </p>
                  <Link
                    href="/environmental-development"
                    className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials - Dynamic Carousel */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Voices of Gratitude</h2>

            <div className="max-w-4xl mx-auto relative">
              <div className="overflow-hidden">
                <div
                  className="transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)`, display: "flex" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full px-4">
                      <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            <div className="w-full h-full relative">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                  // Fallback for image error
                                  const target = e.target as HTMLImageElement
                                  target.src = "https://mj-ahmad.github.io/mja2025/img/logo.png"
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-gray-500">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${currentTestimonial === index ? "bg-primary" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Be the Change */}
        <section id="join-movement" className="py-20 bg-primary text-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Join Us in Making a Difference</h2>
              <p className="text-xl mb-12">
                Your contribution can help us create lasting change in communities around the world. Together, we can
                build a brighter future for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                  <Link href="/volunteer" className="flex items-center gap-2">
                    <i className="fas fa-hands-helping"></i>
                    Become a Volunteer
                  </Link>
                </Button>
                <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                  <Link href="/donate" className="flex items-center gap-2">
                    <i className="fas fa-hand-holding-heart"></i>
                    Donate Now
                  </Link>
                </Button>
                <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    <i className="fas fa-handshake"></i>
                    Collaborate With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Redesigned */}
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
                  <Mail className="h-5 w-5" />
                  <a href="mailto:t-ally@outlook.com" className="hover:text-primary transition-colors">
                    t-ally@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:mjahmad2024@outlook.com" className="hover:text-primary transition-colors">
                    mjahmad2024@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/MJ-AHMAD/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/jafor-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://facebook.com/mj.ahmad.768732/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
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

