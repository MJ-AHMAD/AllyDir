"use client"

import { useState } from "react"
import { Menu, X, ArrowRight, BarChart3, Users, TreePine, GraduationCap, Globe, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ImpactPage() {
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
            <Link href="/programs-overview" className="font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/impact" className="font-medium text-primary transition-colors">
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
              <Link href="/programs-overview" className="font-medium hover:text-primary">
                Programs
              </Link>
              <Link href="/impact" className="font-medium text-primary">
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
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute w-full h-full bg-[url('https://mj-ahmad.github.io/mja2025/img/edu1.png')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Making A Difference</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Measuring our success through lives changed, communities transformed, and sustainable futures created.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="font-medium text-primary"
                onClick={() => document.getElementById("impact-statistics")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Our Impact
              </Button>
              <Button variant="default" size="lg" className="font-medium bg-white text-primary hover:bg-gray-100">
                <Link href="/donate">Support Our Cause</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Impact Statistics */}
      <section id="impact-statistics" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Our Reach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Impact By The Numbers</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our work has created meaningful change across multiple areas, touching thousands of lives and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-primary/5 rounded-xl border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 text-primary">50,000+</div>
              <h3 className="text-xl font-semibold mb-2">Lives Impacted</h3>
              <p className="text-gray-600">
                Through education, healthcare, and community development initiatives across multiple regions.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-50 rounded-xl border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-emerald-500" />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 text-emerald-500">10,000+</div>
              <h3 className="text-xl font-semibold mb-2">Trees Planted</h3>
              <p className="text-gray-600">
                Contributing to environmental sustainability and combating climate change in vulnerable areas.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-500">200+</div>
              <h3 className="text-xl font-semibold mb-2">Educational Initiatives</h3>
              <p className="text-gray-600">
                Providing quality education and skills development to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Focus Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact Areas</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We focus our efforts on key areas where we can create the most significant and sustainable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-t-4 border-blue-500">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-gray-600 mb-4">
                  Providing access to quality education, skills development, and learning resources to empower
                  individuals and communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Tech Education
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Al-Quran Journey
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Free Learning
                  </Badge>
                </div>
                <Link
                  href="/education-program"
                  className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden border-t-4 border-emerald-500">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Environment</h3>
                <p className="text-gray-600 mb-4">
                  Protecting and restoring natural ecosystems, promoting sustainable practices, and combating climate
                  change.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                    Tree Planting
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                    Conservation
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                    Eco-Tourism
                  </Badge>
                </div>
                <Link
                  href="/environmental-development"
                  className="text-emerald-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden border-t-4 border-amber-500">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600 mb-4">
                  Building stronger, more resilient communities through social empowerment, healthcare, and
                  infrastructure development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    Social Support
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    Youth Programs
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    Healthcare
                  </Badge>
                </div>
                <Link
                  href="/social-initiatives"
                  className="text-amber-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Impact Stories</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real stories of transformation and change from our programs and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/edu2.png"
                  alt="Education Impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 hover:bg-blue-600">Education</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transforming Education in Rural Areas</h3>
                <p className="text-gray-600 mb-4">
                  Our educational initiatives have reached over 10,000 children in rural areas, providing them with
                  access to quality education, learning materials, and skilled teachers.
                </p>
                <Link
                  href="/education-program"
                  className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/env1.png"
                  alt="Environmental Impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">Environment</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Environmental Restoration Projects</h3>
                <p className="text-gray-600 mb-4">
                  Our reforestation efforts have led to the planting of over 10,000 trees, restoring ecosystems and
                  providing sustainable livelihoods for local communities.
                </p>
                <Link
                  href="/environmental-development"
                  className="text-emerald-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/com1.png"
                  alt="Community Impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-500 hover:bg-amber-600">Community</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Community Development Initiatives</h3>
                <p className="text-gray-600 mb-4">
                  We've helped establish sustainable community development projects that have improved the quality of
                  life for over 20,000 people in underserved areas.
                </p>
                <Link
                  href="/social-initiatives"
                  className="text-amber-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/sos1.png"
                  alt="Social Impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 hover:bg-purple-600">Social</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Social Empowerment Programs</h3>
                <p className="text-gray-600 mb-4">
                  Our social empowerment programs have helped over 5,000 individuals gain skills, confidence, and
                  opportunities to improve their lives and contribute to their communities.
                </p>
                <Link
                  href="/social-initiatives/support-our-initiatives"
                  className="text-purple-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Transparency
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Impact Reports</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Detailed assessments of our programs and their impact on communities and the environment.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Annual Impact Report 2024</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A comprehensive overview of our achievements, challenges, and impact across all programs in 2024.
                </p>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Education Program Evaluation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Detailed assessment of our educational initiatives and their impact on student outcomes.
                </p>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-emerald-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TreePine className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Environmental Impact Assessment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Analysis of our environmental programs and their contribution to sustainability goals.
                </p>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-amber-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Development Report</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Evaluation of our community development initiatives and their social impact.
                </p>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Map */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Global Reach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Our Global Impact</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our work spans across multiple regions, creating positive change around the world.
            </p>
          </div>
          <div className="max-w-5xl mx-auto relative">
            <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Global Impact Map</h3>
                  <p className="text-gray-600 mb-4">
                    Our initiatives span across 15+ countries, with a focus on regions where our support can create the
                    most significant impact.
                  </p>
                  <Button>Explore Our Reach</Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-primary">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-primary">100+</div>
                <div className="text-gray-600">Communities</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-primary">30+</div>
                <div className="text-gray-600">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              Voices of Change
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed by our programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4 flex-grow">
                  "The educational program has completely transformed my daughter's future. She now has access to
                  quality education and resources that were previously unavailable in our community."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Rahima K.</div>
                    <div className="text-sm text-gray-500">Parent, Education Program</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4 flex-grow">
                  "The tree planting initiative has not only restored our local environment but has also created
                  sustainable livelihoods for many in our community. We're seeing real change."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Kamal H.</div>
                    <div className="text-sm text-gray-500">Community Leader, Environmental Program</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4 flex-grow">
                  "The skills I gained through the social empowerment program have allowed me to start my own business
                  and support my family. I'm grateful for the opportunity to build a better future."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Fatima J.</div>
                    <div className="text-sm text-gray-500">Participant, Social Empowerment Program</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Join Our Mission</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Create More Impact</h2>
            <p className="text-xl mb-8">
              Join our mission to create lasting change in communities around the world. Your support can help us expand
              our impact and reach more people in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Heart Icon */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <p className="text-gray-600 max-w-xl">
              Every donation, volunteer hour, and act of support helps us create meaningful impact in communities around
              the world. Thank you for being part of our journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

