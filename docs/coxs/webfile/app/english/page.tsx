import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import Link from "next/link"

export default function English() {
  const sections = [
    {
      title: "About Cox's Bazar",
      description:
        "Cox's Bazar is a district in southeastern Bangladesh and home to the world's longest natural sea beach.",
      link: "/tourist-hub",
    },
    {
      title: "Administrative Services",
      description: "Information about government services, officials, and administrative procedures.",
      link: "/administrative",
    },
    {
      title: "Tourism Information",
      description: "Explore the beautiful beaches, attractions, and tourism facilities in Cox's Bazar.",
      link: "/tourist-hub",
    },
    {
      title: "Healthcare Services",
      description: "Find information about hospitals, clinics, and healthcare programs in the district.",
      link: "/health-hub",
    },
    {
      title: "Education Resources",
      description: "Details about educational institutions, programs, and opportunities in Cox's Bazar.",
      link: "/education-hub",
    },
    {
      title: "Economic Development",
      description: "Information about economic activities, business opportunities, and development projects.",
      link: "/economic-hub",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="h-6 w-6" />
        <h1 className="text-3xl font-bold">English - Trusted Ally</h1>
      </div>

      <p className="text-lg mb-8">
        Welcome to the English language section of Trusted Ally, the comprehensive management system for Cox's Bazar
        district. Access information and services in English through the links below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sections.map((section) => (
          <Card key={section.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild className="w-full">
                <Link href={section.link}>Explore</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Language Options</CardTitle>
          <CardDescription>
            This platform is available in multiple languages to serve diverse communities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-2 border-primary">
              <Globe className="mr-2 h-4 w-4" /> English (Current)
            </Button>
            <Button variant="outline" asChild>
              <Link href="/bangla">
                <Globe className="mr-2 h-4 w-4" /> বাংলা (Bangla)
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/arabic">
                <Globe className="mr-2 h-4 w-4" /> العربية (Arabic)
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

