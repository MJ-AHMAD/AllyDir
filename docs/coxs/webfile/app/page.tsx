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
} from "lucide-react"
import HeroSlideshow from "@/components/hero-slideshow"
import VisionProjectsSection from "@/components/vision-projects-section"
import StatisticsSection from "@/components/statistics-section"
import FeaturedProject from "@/components/featured-project"
import HomeTestimonials from "@/components/home-testimonials"
import NewsUpdates from "@/components/news-updates"
import NewsletterSubscription from "@/components/newsletter-subscription"
import LanguageSelector from "@/components/language-selector"

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
      <HeroSlideshow />

      <StatisticsSection />

      <VisionProjectsSection />

      <FeaturedProject />

      <div className="container mx-auto">
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Specialized Development Centers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives working together to transform Cox's Bazar into a model district
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

      <NewsletterSubscription />

      <LanguageSelector />
    </div>
  )
}

