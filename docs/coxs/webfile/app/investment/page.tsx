import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, TrendingUp, Hotel, Anchor, Factory, Leaf, Plane } from "lucide-react"
import Link from "next/link"

export default function Investment() {
  const sectors = [
    {
      name: "Tourism and Hospitality",
      icon: Hotel,
      description:
        "Investment opportunities in hotels, resorts, restaurants, and tourism services in the world's longest natural sea beach destination.",
      opportunities: [
        "Luxury and boutique resorts along the beachfront",
        "Eco-tourism facilities near protected areas",
        "Water sports and recreational facilities",
        "Tourism training institutes and skill development centers",
      ],
    },
    {
      name: "Marine and Fisheries",
      icon: Anchor,
      description:
        "Opportunities in sustainable fishing, seafood processing, and marine resource development in the Bay of Bengal.",
      opportunities: [
        "Modern fishing fleet development",
        "Seafood processing and export facilities",
        "Aquaculture and mariculture projects",
        "Marine research and conservation initiatives",
      ],
    },
    {
      name: "Manufacturing and Processing",
      icon: Factory,
      description:
        "Investment in manufacturing facilities leveraging the strategic location near the upcoming Matarbari deep-sea port.",
      opportunities: [
        "Light manufacturing in the Special Economic Zone",
        "Agro-processing and food production",
        "Handicraft and artisanal product development",
        "Salt production and processing",
      ],
    },
    {
      name: "Renewable Energy",
      icon: Leaf,
      description: "Green energy projects including solar, wind, and biomass energy production in this coastal region.",
      opportunities: [
        "Solar power plants in non-agricultural lands",
        "Wind energy farms along the coastline",
        "Biomass energy from agricultural waste",
        "Hybrid energy solutions for remote areas",
      ],
    },
    {
      name: "Infrastructure",
      icon: Building,
      description: "Development of essential infrastructure to support growing tourism and economic activities.",
      opportunities: [
        "Commercial real estate development",
        "Water supply and waste management systems",
        "Transportation services and facilities",
        "Entertainment and recreational facilities",
      ],
    },
    {
      name: "Aviation and Logistics",
      icon: Plane,
      description: "Opportunities related to the expanding Cox's Bazar International Airport and logistics services.",
      opportunities: [
        "Air cargo facilities and services",
        "Aircraft maintenance and support services",
        "Logistics and supply chain solutions",
        "Warehousing and distribution centers",
      ],
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Investment Opportunities - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar offers diverse investment opportunities across multiple sectors, supported by government incentives,
        strategic location, and growing infrastructure. Explore potential areas for investment and learn about the
        support available for investors.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Why Invest in Cox's Bazar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Strategic Location</h3>
              <p>
                Located on the southeastern coast of Bangladesh with access to the Bay of Bengal and proximity to
                Southeast Asian markets. The upcoming Matarbari deep-sea port will enhance connectivity.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Growing Tourism</h3>
              <p>
                As Bangladesh's premier tourist destination, Cox's Bazar attracts millions of domestic and international
                visitors annually, creating demand for various services and facilities.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Government Support</h3>
              <p>
                Special incentives for investors in tourism, manufacturing, and infrastructure development, including
                tax holidays, duty exemptions, and simplified regulatory procedures.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Infrastructure Development</h3>
              <p>
                Ongoing improvements in transportation, power supply, and telecommunications, including international
                airport expansion and highway development.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Natural Resources</h3>
              <p>
                Rich marine resources, agricultural land, and potential for renewable energy development provide diverse
                opportunities across multiple sectors.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Growing Market</h3>
              <p>
                Increasing local population, expanding middle class, and growing tourism create a substantial market for
                goods and services in the region.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Investment Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {sectors.map((sector) => (
          <Card key={sector.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <sector.icon className="h-5 w-5" />
                {sector.name}
              </CardTitle>
              <CardDescription>{sector.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Key Opportunities:</h4>
              <ul className="space-y-1">
                {sector.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{opportunity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Investment Support Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">One-Stop Service Center</h3>
              <p>
                The Cox's Bazar Investment Promotion Office provides comprehensive support to investors, including
                information, regulatory guidance, and facilitation of approvals and permits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Investment Incentives</h3>
              <ul className="space-y-1">
                <li>Tax holidays for up to 10 years for investments in priority sectors</li>
                <li>Duty exemptions on capital machinery and equipment</li>
                <li>Accelerated depreciation allowances</li>
                <li>Reduced land lease rates in designated investment zones</li>
                <li>Simplified repatriation of profits and capital</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Special Economic Zone</h3>
              <p>
                The Cox's Bazar Special Economic Zone offers dedicated infrastructure, utilities, and regulatory
                benefits for manufacturing and export-oriented businesses.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Investment Promotion Team</CardTitle>
          <CardDescription>
            Our dedicated team is ready to assist you with information, site visits, and regulatory guidance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Cox's Bazar Investment Promotion Office</p>
                <p className="text-muted-foreground">District Administration Complex</p>
                <p className="text-muted-foreground">Cox's Bazar, Bangladesh</p>
              </div>
              <div>
                <p>
                  <strong>Email:</strong> investment@trustedally.gov.bd
                </p>
                <p>
                  <strong>Phone:</strong> +880 1234 567890
                </p>
                <p>
                  <strong>Hours:</strong> Sunday-Thursday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline">Download Investment Guide</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

