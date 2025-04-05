"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, Droplets, Recycle, Wind, Globe, Users, Menu, X } from "lucide-react"

export default function EnvironmentalDevelopmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/env1.png"
            alt="Environmental Development"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Environmental Development</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Creating a sustainable future through conservation, education, and community action.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
                <Link href="#initiatives">Our Initiatives</Link>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-green-600 border-0">
                <Link href="/environmental-development/join-our-eco-efforts">Join Our Eco-Efforts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Environmental Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TRUSTED-ALLY, we believe that environmental sustainability is not just a goal but a responsibility.
                Our environmental development programs focus on creating lasting positive change through conservation,
                education, and community engagement.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work to protect natural resources, promote sustainable practices, and empower communities to become
                stewards of their environment. Through collaborative efforts, we aim to build a greener, healthier
                planet for current and future generations.
              </p>
              <div className="flex items-center gap-4 text-green-600">
                <Leaf className="h-8 w-8" />
                <span className="text-xl font-medium">Nurturing our planet, one initiative at a time</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/env2.png"
                    alt="Tree Planting"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-32 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/eco2.png"
                    alt="Sustainable Practices"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-32 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/eco1.png"
                    alt="Community Engagement"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/env3.png"
                    alt="Conservation Efforts"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section id="initiatives" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Key Initiatives</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We focus on high-impact environmental initiatives that create sustainable change and empower communities to
            protect their natural resources.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-green-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tree Planting Campaigns</h3>
                <p className="text-gray-700 mb-4">
                  Our tree planting initiatives combat deforestation, improve air quality, and restore natural habitats.
                  We've planted over 10,000 trees across various regions, creating green spaces and carbon sinks.
                </p>
                <Link
                  href="/environmental-development/tree-planting"
                  className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-blue-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Water Conservation</h3>
                <p className="text-gray-700 mb-4">
                  We implement water conservation projects that protect freshwater resources, restore watersheds, and
                  provide clean water access to communities. Our efforts include rainwater harvesting and water
                  management education.
                </p>
                <Link
                  href="/environmental-development/water-conservation"
                  className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-amber-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Waste Management</h3>
                <p className="text-gray-700 mb-4">
                  Our waste reduction and recycling programs help communities minimize waste, implement proper disposal
                  methods, and create value from recyclable materials. We've established recycling centers in multiple
                  communities.
                </p>
                <Link
                  href="/environmental-development/waste-management"
                  className="text-amber-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-teal-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Wind className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Energy Advocacy</h3>
                <p className="text-gray-700 mb-4">
                  We promote renewable energy adoption through education, policy advocacy, and demonstration projects.
                  Our initiatives include solar panel installations in schools and community centers.
                </p>
                <Link
                  href="/environmental-development/clean-energy"
                  className="text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-purple-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Environmental Education</h3>
                <p className="text-gray-700 mb-4">
                  Our educational workshops and programs raise awareness about environmental issues and sustainable
                  practices. We've reached thousands of students and community members through our curriculum.
                </p>
                <Link
                  href="/environmental-development/education"
                  className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow">
              <div className="h-3 bg-pink-600"></div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Gardens</h3>
                <p className="text-gray-700 mb-4">
                  We establish community gardens that promote food security, sustainable agriculture, and community
                  bonding. These gardens serve as educational spaces and sources of fresh produce.
                </p>
                <Link
                  href="/environmental-development/community-gardens"
                  className="text-pink-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Environmental Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <p className="text-lg">Trees Planted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Community Gardens</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <p className="text-lg">Students Educated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <p className="text-lg">Clean Water Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Our environmental initiatives have created lasting positive change in communities around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/eco1.png"
                  alt="Green School Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Green School Initiative</h3>
                <p className="text-gray-700 mb-4">
                  We transformed 5 schools into eco-friendly learning environments with solar panels, rainwater
                  harvesting systems, and organic gardens. These schools now serve as environmental education hubs.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/env2.png"
                  alt="Urban Reforestation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Urban Reforestation</h3>
                <p className="text-gray-700 mb-4">
                  Our urban tree planting campaign transformed concrete-dominated neighborhoods into green spaces,
                  improving air quality and creating community gathering areas.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/env3.png"
                  alt="Watershed Restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Watershed Restoration</h3>
                <p className="text-gray-700 mb-4">
                  We restored a critical watershed that provides clean water to three communities, implementing erosion
                  control measures and replanting native vegetation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Get Involved</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Join us in our mission to create a sustainable future. There are many ways you can contribute to our
            environmental initiatives.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Join our tree planting events, community clean-ups, and educational workshops. Your time and energy make
                a difference.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-0">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">
                Support our environmental initiatives with a donation. Your contribution funds tree planting, water
                conservation, and educational programs.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-0">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
              <p className="text-gray-700 mb-6">
                Organizations and businesses can partner with us on environmental projects. Together, we can create
                greater impact.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-0">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Eco-Efforts Today</h2>
            <p className="text-xl mb-8">
              Together, we can create a sustainable future for generations to come. Every action, no matter how small,
              contributes to a healthier planet.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-white/90">
              <Link href="/environmental-development/join-our-eco-efforts">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                alt="TRUSTED-ALLY Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">TRUSTED-ALLY</span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">Together Towards a Brighter Future</p>
              <p className="text-sm">©2025 Trusted Ally, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

