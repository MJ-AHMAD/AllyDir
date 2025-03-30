import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  FileText,
  Globe,
  Terminal,
  CircleIcon as AdCircle,
  Archive,
  User,
} from "lucide-react"

export default function Sitemap() {
  const sections = [
    {
      title: "Main Hubs",
      links: [
        { name: "Home", href: "/", icon: Globe },
        { name: "Tourist Hub", href: "/tourist-hub", icon: Compass },
        { name: "Education Hub", href: "/education-hub", icon: GraduationCap },
        { name: "Economic Hub", href: "/economic-hub", icon: Building },
        { name: "Climate Hub", href: "/climate-hub", icon: Cloud },
        { name: "Social Initiatives", href: "/social-initiatives", icon: Heart },
      ],
    },
    {
      title: "Additional Hubs",
      links: [
        { name: "Health Hub", href: "/health-hub", icon: Stethoscope },
        { name: "Marine Resource Hub", href: "/marine-resource-hub", icon: Anchor },
        { name: "Infrastructure Hub", href: "/infrastructure-hub", icon: Road },
        { name: "Research Hub", href: "/research-hub", icon: BookOpen },
        { name: "Water Resources Hub", href: "/water-resources-hub", icon: Droplet },
        { name: "Community Hub", href: "/community-hub", icon: Users },
        { name: "Sustainable Development Hub", href: "/sustainable-development-hub", icon: Leaf },
      ],
    },
    {
      title: "Support Services",
      links: [
        { name: "Administrative", href: "/administrative", icon: FileText },
        { name: "CLI", href: "/cli", icon: Terminal },
        { name: "Ads", href: "/ads", icon: AdCircle },
        { name: "Archive", href: "/archive", icon: Archive },
        { name: "MJ Ahmad", href: "/mjahmad", icon: User },
      ],
    },
    {
      title: "Languages",
      links: [
        { name: "English", href: "/english", icon: Globe },
        { name: "Bangla", href: "/bangla", icon: Globe },
        { name: "Arabic", href: "/arabic", icon: Globe },
      ],
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap - Trusted Ally</h1>
      <p className="text-lg mb-8">
        Navigate through all sections of the Trusted Ally platform for Cox's Bazar district management. This
        comprehensive sitemap provides links to all available resources and information.
      </p>

      <div className="grid gap-8">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{link.name}</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/tourist-hub"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Tourist Information
            </Link>
            <Link
              href="/administrative"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Administrative Services
            </Link>
            <Link
              href="/health-hub"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Healthcare Services
            </Link>
            <Link
              href="/education-hub"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Education Resources
            </Link>
            <Link
              href="/economic-hub"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Economic Development
            </Link>
            <Link
              href="/climate-hub"
              className="flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Climate Information
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

