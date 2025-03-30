import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleIcon as AdCircle, BarChart, Target, Users, Megaphone } from "lucide-react"
import Link from "next/link"

export default function Ads() {
  const adPackages = [
    {
      name: "Tourism Spotlight",
      price: "৳15,000/month",
      description: "Premium placement on tourist hub pages with high visibility to visitors planning their trip.",
      features: [
        "Featured placement on Tourist Hub homepage",
        "Inclusion in weekly tourism newsletter",
        "Social media promotion (2 posts per month)",
        "Detailed analytics dashboard",
      ],
    },
    {
      name: "Business Connect",
      price: "৳10,000/month",
      description:
        "Targeted advertising for businesses looking to connect with local community and government sectors.",
      features: [
        "Placement on Economic Hub and Administrative pages",
        "Business directory premium listing",
        "Monthly performance report",
        "Local business network access",
      ],
    },
    {
      name: "Community Outreach",
      price: "৳5,000/month",
      description: "Affordable option for NGOs, educational institutions, and community organizations.",
      features: [
        "Placement on Community Hub and Social Initiatives pages",
        "Event calendar listings",
        "Community announcement inclusion",
        "Basic analytics reporting",
      ],
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advertising - Trusted Ally</h1>
      <p className="text-lg mb-8">
        Promote your business, services, or initiatives on the Trusted Ally platform to reach targeted audiences
        interested in Cox's Bazar district. Our advertising solutions offer visibility across various sections of the
        platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Why Advertise With Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Reach targeted audiences interested in Cox's Bazar</li>
              <li>Connect with local communities, businesses, and government</li>
              <li>Support the sustainable development of the district</li>
              <li>Gain visibility among tourists, investors, and researchers</li>
              <li>Access detailed analytics on ad performance</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Our Audience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Tourists planning visits to Cox's Bazar</li>
              <li>Local residents seeking services and information</li>
              <li>Government officials and administrative staff</li>
              <li>Researchers and educational institutions</li>
              <li>Businesses and investors interested in the region</li>
              <li>NGOs and development organizations</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AdCircle className="h-5 w-5" />
              Ad Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Banner ads in various sizes and placements</li>
              <li>Sponsored content and featured listings</li>
              <li>Directory listings with enhanced visibility</li>
              <li>Event promotions and announcements</li>
              <li>Newsletter inclusions and email campaigns</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>All advertising packages include access to our analytics dashboard, providing insights on:</p>
            <ul className="space-y-2 mt-2">
              <li>Impressions and click-through rates</li>
              <li>User demographics and behavior</li>
              <li>Conversion tracking for specific goals</li>
              <li>Comparative performance metrics</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Advertising Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {adPackages.map((pkg) => (
          <Card key={pkg.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription className="text-xl font-bold">{pkg.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4">{pkg.description}</p>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="space-y-1 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto">Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5" />
            Contact Our Advertising Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            For custom advertising solutions or to discuss your specific needs, please contact our advertising team:
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> ads@trustedally.gov.bd
            </p>
            <p>
              <strong>Phone:</strong> +880 1234 567890
            </p>
            <p>
              <strong>Office:</strong> Trusted Ally Administrative Building, Cox's Bazar
            </p>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

