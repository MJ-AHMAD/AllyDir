import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Building,
  Cloud,
  Heart,
  Stethoscope,
  Anchor,
  RouteIcon as Road,
  BookOpen,
  Droplet,
  Users,
  Leaf,
  Github,
  Coffee,
  Mail,
  Star,
  GitFork,
  Code,
  FileText,
  BookOpenCheck,
} from "lucide-react"
import HeroSlideshow from "@/components/hero-slideshow"
import VisionProjectsSection from "@/components/vision-projects-section"
import StatisticsSection from "@/components/statistics-section"
import FeaturedProject from "@/components/featured-project"
import HomeTestimonials from "@/components/home-testimonials"
import NewsUpdates from "@/components/news-updates"
import NewsletterSubscription from "@/components/newsletter-subscription"
import LanguageSelector from "@/components/language-selector"
import { Badge } from "@/components/ui/badge"
import { InfinityNexusVision } from "@/components/infinity-nexus-vision"

export default function Home() {
  const hubs = [
    {
      name: "Tourist Hub",
      icon: Compass,
      href: "/tourist-hub",
      description: "Explore the beautiful beaches and attractions",
    },
    {
      name: "Education Hub",
      icon: GraduationCap,
      href: "/education-hub",
      description: "Educational institutions and initiatives",
    },
    { name: "Economic Hub", icon: Building, href: "/economic-hub", description: "Economic activities and development" },
    { name: "Climate Hub", icon: Cloud, href: "/climate-hub", description: "Climate information and initiatives" },
    { name: "Social Initiatives", icon: Heart, href: "/social-initiatives", description: "Community welfare programs" },
    { name: "Health Hub", icon: Stethoscope, href: "/health-hub", description: "Healthcare facilities and services" },
    {
      name: "Marine Resource Hub",
      icon: Anchor,
      href: "/marine-resource-hub",
      description: "Marine resources and conservation",
    },
    {
      name: "Infrastructure Hub",
      icon: Road,
      href: "/infrastructure-hub",
      description: "Infrastructure development projects",
    },
    { name: "Research Hub", icon: BookOpen, href: "/research-hub", description: "Research activities and findings" },
    {
      name: "Water Resources Hub",
      icon: Droplet,
      href: "/water-resources-hub",
      description: "Water management and conservation",
    },
    { name: "Community Hub", icon: Users, href: "/community-hub", description: "Community engagement and activities" },
    {
      name: "Sustainable Development Hub",
      icon: Leaf,
      href: "/sustainable-development-hub",
      description: "Sustainable development initiatives",
    },
  ]

  return (
    <div>
      {/* Open Source Project Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2">
            <Code className="h-4 w-4" />
            <span>Open Source Innovation Hub - Join the Knowledge Revolution</span>
            <Link href="https://github.com/MJ-AHMAD" className="underline ml-2 hover:text-blue-100">
              Contribute on GitHub
            </Link>
          </p>
        </div>
      </div>

      <HeroSlideshow />

      {/* Open Source Project Info */}
      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            Open Source
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Infinity Nexus
          </h1>
          <p className="text-xl text-gray-700 mb-4 font-medium">Empowering Knowledge, Transforming Futures</p>
          <p className="text-lg text-gray-600 mb-8">
            A global-standard data hub originating in Cox's Bazar, designed to collect, process, analyze, and secure
            data for scientific research, climate action, socio-economic progress, and AI-driven knowledge innovation.
            This open-source initiative aims to reshape global data accessibility and pioneer research in sustainability
            and future technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="gap-2">
              <Link href="https://github.com/MJ-AHMAD">
                <Github className="h-4 w-4" />
                GitHub Repository
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://github.com/Sponsors/MJ-AHMAD">
                <Heart className="h-4 w-4 text-red-500" />
                Sponsor Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://ko-fi.com/mjahmad">
                <Coffee className="h-4 w-4 text-amber-600" />
                Support on Ko-fi
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Star
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1.2k</p>
                <p className="text-sm text-muted-foreground">GitHub Stars</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GitFork className="h-5 w-5 text-blue-500" />
                  Fork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">350</p>
                <p className="text-sm text-muted-foreground">GitHub Forks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">42</p>
                <p className="text-sm text-muted-foreground">Active Contributors</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/docs">
                <FileText className="h-4 w-4" />
                Documentation
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contributing">
                <BookOpenCheck className="h-4 w-4" />
                Contribution Guide
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="mailto:mjahmad2024@outlook.com">
                <Mail className="h-4 w-4" />
                Contact Maintainer
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <StatisticsSection />

      <InfinityNexusVision />

      <VisionProjectsSection />

      <FeaturedProject />

      <div className="container mx-auto">
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              Knowledge & Innovation Hubs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interconnected data ecosystems working together to transform Cox's Bazar into a global center for research
              and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <Card key={hub.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <hub.icon className="h-5 w-5" />
                    {hub.name}
                  </CardTitle>
                  <CardDescription>{hub.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={hub.href} className="flex items-center justify-center gap-2">
                      Explore <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <HomeTestimonials />

      <NewsUpdates />

      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Open Source License</h2>
            <p className="text-gray-600">
              This project is licensed under the MIT License - see the LICENSE file in the repository for details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-sm font-mono overflow-auto max-h-48">
            <p>MIT License</p>
            <p className="mt-4">Copyright (c) 2025 MJ Ahmad</p>
            <p className="mt-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
              associated documentation files (the "Software"), to deal in the Software without restriction, including
              without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
              following conditions:
            </p>
            <p className="mt-4">
              The above copyright notice and this permission notice shall be included in all copies or substantial
              portions of the Software.
            </p>
            <p className="mt-4">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
              EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
              IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
              THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </div>

      <NewsletterSubscription />

      <LanguageSelector />
    </div>
  )
}
