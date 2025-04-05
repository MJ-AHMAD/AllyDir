"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Users,
  Leaf,
  Globe,
  Heart,
  BookMarked,
  Menu,
  X,
  Calendar,
  Code,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProgramsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
            <Link href="/programs-overview" className="font-medium text-primary transition-colors">
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
              <Link href="/programs-overview" className="font-medium text-primary">
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/edu1.png"
            alt="TRUSTED-ALLY Programs"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl mb-8">
              Empowering communities through education, social innovation, and environmental stewardship
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="#education">Education</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="#social">Social Initiatives</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="#environmental">Environmental Development</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Lives, Building Futures</h2>
            <p className="text-lg text-gray-700 mb-8">
              At TRUSTED-ALLY, we believe in the power of sustainable development through targeted programs that address
              the most pressing needs of communities. Our initiatives are designed to create lasting impact by
              empowering individuals, fostering collaboration, and promoting environmental responsibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-center text-gray-600">Empowering through knowledge and skills development</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Social Innovation</h3>
                <p className="text-center text-gray-600">Creating solutions for community challenges</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental</h3>
                <p className="text-center text-gray-600">Preserving our planet for future generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Program Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 text-sm bg-blue-100 text-blue-800 font-medium">Education Program</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Through Knowledge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our education initiatives bridge gaps in learning opportunities, providing resources and support to help
              individuals reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Technology Education Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-blue-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Education</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive programs in web development, programming languages, and digital skills to prepare
                  students for careers in technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-blue-50 text-blue-700">Web Development</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Programming</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Digital Skills</Badge>
                </div>
                <Link
                  href="/education-program"
                  className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Al-Quran Journey Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-emerald-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <BookMarked className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Al-Quran Journey</h3>
                <p className="text-gray-700 mb-4">
                  Islamic education programs that combine traditional Quranic studies with modern educational approaches
                  and research methodologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-emerald-50 text-emerald-700">Quranic Studies</Badge>
                  <Badge className="bg-emerald-50 text-emerald-700">Islamic Research</Badge>
                  <Badge className="bg-emerald-50 text-emerald-700">Distribution</Badge>
                </div>
                <Link
                  href="/projects/al-quran-journey"
                  className="text-emerald-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Free Learning Initiative Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-purple-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Free Learning Initiative</h3>
                <p className="text-gray-700 mb-4">
                  Accessible education for underserved communities, focusing on practical skills, digital literacy, and
                  academic support for all ages.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-purple-50 text-purple-700">After-School Programs</Badge>
                  <Badge className="bg-purple-50 text-purple-700">Digital Literacy</Badge>
                  <Badge className="bg-purple-50 text-purple-700">Vocational Skills</Badge>
                </div>
                <Link
                  href="/education-program/free-learning"
                  className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/education-program">Explore All Education Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Initiatives Section */}
      <section id="social" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 text-sm bg-red-100 text-red-800 font-medium">Social Initiatives</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our social initiatives focus on building stronger, more resilient communities through collaboration,
              support, and innovative solutions to social challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* T-Ally Umrah Service Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-amber-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">T-Ally Umrah Service</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive support for pilgrims traveling to Mecca and Medina, combining spiritual guidance with
                  modern travel services.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-amber-50 text-amber-700">Umrah Packages</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Spiritual Guidance</Badge>
                  <Badge className="bg-amber-50 text-amber-700">Travel Services</Badge>
                </div>
                <Link
                  href="/projects/ally-voyage/umrah-packages"
                  className="text-amber-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Community Support Programs Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-pink-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Support Programs</h3>
                <p className="text-gray-700 mb-4">
                  Essential resources and services for vulnerable populations, including food assistance, healthcare
                  access, and emergency relief.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-pink-50 text-pink-700">Food Distribution</Badge>
                  <Badge className="bg-pink-50 text-pink-700">Healthcare Access</Badge>
                  <Badge className="bg-pink-50 text-pink-700">Emergency Relief</Badge>
                </div>
                <Link
                  href="/social-initiatives"
                  className="text-pink-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Youth Empowerment Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-indigo-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Youth Empowerment</h3>
                <p className="text-gray-700 mb-4">
                  Programs that equip young people with skills, knowledge, and opportunities to build bright futures and
                  become agents of positive change.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-indigo-50 text-indigo-700">Leadership Development</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">Mentorship</Badge>
                  <Badge className="bg-indigo-50 text-indigo-700">Career Guidance</Badge>
                </div>
                <Link
                  href="/social-initiatives"
                  className="text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/social-initiatives">Explore All Social Initiatives</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Environmental Development Section */}
      <section id="environmental" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 text-sm bg-green-100 text-green-800 font-medium">
              Environmental Development
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Preserving Our Planet</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our environmental initiatives focus on conservation, sustainability, and raising awareness about
              ecological challenges to create a healthier planet for future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Tree Planting Campaigns Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-green-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tree Planting Campaigns</h3>
                <p className="text-gray-700 mb-4">
                  Initiatives to combat deforestation, improve air quality, and restore natural habitats through
                  strategic tree planting efforts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-green-50 text-green-700">Reforestation</Badge>
                  <Badge className="bg-green-50 text-green-700">Urban Greening</Badge>
                  <Badge className="bg-green-50 text-green-700">Carbon Sequestration</Badge>
                </div>
                <Link
                  href="/environmental-development"
                  className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Discover Cox's Bazar Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-blue-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover Cox's Bazar</h3>
                <p className="text-gray-700 mb-4">
                  Sustainable tourism that protects natural beauty while creating educational opportunities and economic
                  development for local communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-blue-50 text-blue-700">Sustainable Tourism</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Educational Trips</Badge>
                  <Badge className="bg-blue-50 text-blue-700">Local Economy</Badge>
                </div>
                <Link
                  href="/projects/ally-voyage/featured-packages"
                  className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Conservation Initiatives  />
                </Link>
              </CardContent>
            </Card>

            {/* Conservation Initiatives Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-teal-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Conservation Initiatives</h3>
                <p className="text-gray-700 mb-4">
                  Programs focused on protecting natural resources, promoting biodiversity, and implementing sustainable
                  practices in communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-teal-50 text-teal-700">Water Conservation</Badge>
                  <Badge className="bg-teal-50 text-teal-700">Waste Management</Badge>
                  <Badge className="bg-teal-50 text-teal-700">Environmental Education</Badge>
                </div>
                <Link
                  href="/environmental-development"
                  className="text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/environmental-development">Explore All Environmental Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 text-sm bg-gray-200 text-gray-800 font-medium">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our diverse programs, we've created meaningful change in communities across Bangladesh and beyond.
              Here are some of the ways our work has made an impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-700">Lives Impacted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">120+</div>
              <p className="text-gray-700">Communities Served</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-700">Trees Planted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-gray-700">Educational Initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-xl mb-8">
              Together, we can create lasting change and build a brighter future for communities across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-sm">©2025 Trusted Ally, All Rights Reserved.</p>
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
              <h3 className="text-xl font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education-program" className="hover:text-primary transition-colors">
                    Education Program
                  </Link>
                </li>
                <li>
                  <Link href="/social-initiatives" className="hover:text-primary transition-colors">
                    Social Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/environmental-development" className="hover:text-primary transition-colors">
                    Environmental Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-2">Email: info@trusted-ally.org</p>
              <p className="mb-2">Phone: +880 1234-567890</p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-primary transition-colors">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

