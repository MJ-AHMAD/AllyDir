import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimpleFooter } from "@/components/simple-footer"
import {
  ArrowLeft,
  Building2,
  DollarSign,
  Download,
  ExternalLink,
  Factory,
  Fish,
  Globe,
  Leaf,
  Map,
  Ship,
  Waves,
  ArrowRight,
} from "lucide-react"

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/cox2.svg" alt="Investment Opportunities" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container py-16 px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/invest" className="text-white/80 hover:text-white">
              Investment
            </Link>
            <span>/</span>
            <span>Opportunities</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Opportunities in Cox's Bazar</h1>
            <p className="text-xl mb-8">
              Discover high-potential investment sectors in one of Bangladesh's most promising regions with strategic
              location, government incentives, and growing infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/schedule-consultation" className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Schedule Investment Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="#sectors" className="flex items-center gap-2">
                  Explore Sectors
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Overview */}
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Why Invest in Cox's Bazar?</h2>
            <div className="prose max-w-none">
              <p>
                Cox's Bazar offers a unique combination of strategic advantages for international investors looking to
                establish or expand their presence in South Asia. As one of Bangladesh's fastest-growing regions, it
                provides access to emerging markets, government support, and diverse sector opportunities.
              </p>

              <h3>Strategic Location</h3>
              <p>
                Located on the southeastern coast of Bangladesh, Cox's Bazar serves as a gateway to Southeast Asian
                markets and provides direct access to maritime trade routes. The district is being developed as a key
                node in Bangladesh's connectivity with Myanmar and other ASEAN countries.
              </p>

              <h3>Government Support</h3>
              <p>
                The Bangladesh government has designated Cox's Bazar as a priority development zone with special
                incentives for foreign direct investment. These include tax holidays, duty exemptions, repatriation of
                invested capital and profits, and special economic zone benefits.
              </p>

              <h3>Growing Infrastructure</h3>
              <p>Significant investments in infrastructure development are underway, including:</p>
              <ul>
                <li>Expansion of Cox's Bazar Airport to international standards</li>
                <li>Development of deep-sea port facilities</li>
                <li>Improved road and rail connectivity</li>
                <li>Enhanced power generation capacity</li>
                <li>Deployment of high-speed internet and digital infrastructure</li>
              </ul>

              <h3>Abundant Resources</h3>
              <p>The region is rich in natural resources, including:</p>
              <ul>
                <li>Marine resources for seafood processing and aquaculture</li>
                <li>Agricultural land for specialty crop production</li>
                <li>Excellent conditions for renewable energy generation</li>
                <li>Natural beauty for sustainable tourism development</li>
                <li>Growing skilled workforce with competitive labor costs</li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Investment Highlights</CardTitle>
                <CardDescription>Key advantages for investors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tax Incentives</h4>
                    <p className="text-sm text-gray-600">
                      Up to 10-year tax holiday for investments in priority sectors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Market Access</h4>
                    <p className="text-sm text-gray-600">Preferential access to EU, US, and other major markets</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                    <Map className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Special Economic Zone</h4>
                    <p className="text-sm text-gray-600">Dedicated facilities with one-stop services for investors</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
                    <Ship className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Export Orientation</h4>
                    <p className="text-sm text-gray-600">
                      100% export-oriented businesses allowed with full repatriation
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="/documents/investment-guide.pdf" className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Investment Guide
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Support Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <p className="text-sm">Market research and feasibility studies</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <p className="text-sm">Local partner identification and due diligence</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <p className="text-sm">Regulatory navigation and permit assistance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <p className="text-sm">Site selection and infrastructure assessment</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <p className="text-sm">Ongoing operational support and troubleshooting</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/schedule-consultation">Schedule a Consultation</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Investment Sectors */}
        <div id="sectors" className="pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Priority Investment Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore high-potential sectors with strong growth prospects and government support
            </p>
          </div>

          <Tabs defaultValue="tourism" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl mx-auto">
              <TabsTrigger value="tourism">Tourism</TabsTrigger>
              <TabsTrigger value="seafood">Seafood Processing</TabsTrigger>
              <TabsTrigger value="renewable">Renewable Energy</TabsTrigger>
              <TabsTrigger value="digital">Digital Infrastructure</TabsTrigger>
            </TabsList>

            {/* Tourism Tab */}
            <TabsContent value="tourism" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Eco-Tourism in Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Eco-Tourism & Hospitality</h3>
                      <p className="text-white/80">Sustainable tourism development opportunities</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar offers exceptional opportunities for sustainable tourism development, leveraging its
                      natural beauty while preserving the environment. With the world's longest natural sea beach and
                      growing international visitor numbers, the tourism sector presents compelling investment
                      potential.
                    </p>

                    <h4>Key Investment Opportunities:</h4>
                    <ul>
                      <li>
                        <strong>Eco-Friendly Resorts:</strong> Development of environmentally sustainable luxury and
                        mid-range accommodations with minimal ecological footprint.
                      </li>
                      <li>
                        <strong>Adventure Tourism Infrastructure:</strong> Facilities for water sports, hiking,
                        eco-tours, and other adventure activities.
                      </li>
                      <li>
                        <strong>Wellness Tourism:</strong> Spa resorts, retreat centers, and wellness facilities
                        catering to growing health-conscious travelers.
                      </li>
                      <li>
                        <strong>Cultural Tourism:</strong> Facilities showcasing local culture, cuisine, and traditions
                        of the region.
                      </li>
                      <li>
                        <strong>MICE Tourism:</strong> Convention centers and facilities for meetings, incentives,
                        conferences, and exhibitions.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Tourism in Cox's Bazar has been growing at 15-20% annually (pre-pandemic), with domestic tourism
                      already robust and international tourism showing strong growth potential. The government has
                      designated tourism as a thrust sector with special incentives.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Natural beauty and the world's longest natural sea beach (120 km)</li>
                      <li>Year-round pleasant climate suitable for tourism</li>
                      <li>Rich cultural heritage and diverse local traditions</li>
                      <li>Relatively undeveloped compared to other Asian beach destinations</li>
                      <li>Government focus on tourism infrastructure development</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Tourism Sector Highlights</CardTitle>
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Growth Rate</h4>
                        <p className="font-medium">15-20%</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Visitors</h4>
                        <p className="font-medium">2.5+ million (domestic & international)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Investment Size Range</h4>
                        <p className="font-medium">$500K - $50M+</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ROI Timeframe</h4>
                        <p className="font-medium">5-8 years (average)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Special Incentives</h4>
                        <p className="font-medium">Tax holidays, land allocation, infrastructure support</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Mermaid Eco Resort</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Award-winning eco-friendly resort with sustainable practices and strong financial performance.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $4.5M | ROI: 22%</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Ocean Paradise Hotel</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Luxury hotel development with international standards and year-round occupancy.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $12M | ROI: 18%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                          <Map className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Site Selection</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with identifying optimal locations for tourism projects
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Financing Facilitation</h4>
                          <p className="text-sm text-gray-600">
                            Connections with financial institutions and potential partners
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Market Research</h4>
                          <p className="text-sm text-gray-600">
                            Detailed tourism market analysis and feasibility studies
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/tourism-sector" className="flex items-center justify-center gap-2">
                          Detailed Tourism Sector Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Seafood Processing Tab */}
            <TabsContent value="seafood" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Seafood Processing in Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Seafood Processing</h3>
                      <p className="text-white/80">Value-added marine product opportunities</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar's abundant marine resources provide exceptional opportunities for seafood processing
                      investments. With direct access to the Bay of Bengal and a tradition of fishing, the region offers
                      ideal conditions for developing modern processing facilities for high-value export markets.
                    </p>

                    <h4>Key Investment Opportunities:</h4>
                    <ul>
                      <li>
                        <strong>Modern Processing Plants:</strong> Facilities for cleaning, processing, packaging, and
                        freezing seafood products to international standards.
                      </li>
                      <li>
                        <strong>Value-Added Products:</strong> Production of ready-to-cook and ready-to-eat seafood
                        items for premium markets.
                      </li>
                      <li>
                        <strong>Aquaculture Development:</strong> Sustainable shrimp, crab, and fish farming with modern
                        techniques.
                      </li>
                      <li>
                        <strong>Cold Chain Infrastructure:</strong> Cold storage, refrigerated transport, and logistics
                        for perishable seafood products.
                      </li>
                      <li>
                        <strong>Quality Testing Laboratories:</strong> Facilities to ensure compliance with
                        international food safety standards.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Bangladesh's seafood exports have been growing at 25% annually, with strong demand from EU, US,
                      Japan, and China. Cox's Bazar contributes significantly to the country's $700+ million seafood
                      export industry, with substantial room for growth through value addition.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Abundant and diverse marine resources</li>
                      <li>Established fishing industry and skilled workforce</li>
                      <li>Lower production costs compared to many competing countries</li>
                      <li>Preferential market access to major importing countries</li>
                      <li>Government support for seafood export sector</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Seafood Sector Highlights</CardTitle>
                        <Fish className="h-5 w-5 text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Growth Rate</h4>
                        <p className="font-medium">25%</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Export Markets</h4>
                        <p className="font-medium">EU, US, Japan, China, Middle East</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Investment Size Range</h4>
                        <p className="font-medium">$1M - $15M</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ROI Timeframe</h4>
                        <p className="font-medium">3-5 years (average)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Special Incentives</h4>
                        <p className="font-medium">Export subsidies, tax exemptions, certification support</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Bay Seafood Processing</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          EU-certified processing facility exporting premium shrimp products to European markets.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $3.2M | ROI: 28%</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Ocean Harvest Ltd</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Integrated aquaculture and processing operation with Japanese technology and export markets.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $5.8M | ROI: 32%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                          <Factory className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Technical Assistance</h4>
                          <p className="text-sm text-gray-600">
                            Support with processing technology and facility design
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Certification Support</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with obtaining EU, HACCP, and other certifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Ship className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Export Facilitation</h4>
                          <p className="text-sm text-gray-600">
                            Connections with international buyers and export logistics support
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/seafood-sector" className="flex items-center justify-center gap-2">
                          Detailed Seafood Sector Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Renewable Energy Tab */}
            <TabsContent value="renewable" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Renewable Energy in Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Renewable Energy</h3>
                      <p className="text-white/80">Solar, wind, and tidal energy opportunities</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar offers exceptional natural conditions for renewable energy development, with abundant
                      sunshine, consistent coastal winds, and tidal patterns. As Bangladesh aims to increase its
                      renewable energy capacity, the region presents compelling investment opportunities with strong
                      government support.
                    </p>

                    <h4>Key Investment Opportunities:</h4>
                    <ul>
                      <li>
                        <strong>Solar Power Plants:</strong> Utility-scale solar installations leveraging the region's
                        high solar irradiation.
                      </li>
                      <li>
                        <strong>Wind Farms:</strong> Coastal wind energy projects utilizing consistent sea breezes.
                      </li>
                      <li>
                        <strong>Hybrid Systems:</strong> Combined solar-wind installations for consistent power
                        generation.
                      </li>
                      <li>
                        <strong>Tidal Energy:</strong> Pilot projects for harnessing tidal power along the coastline.
                      </li>
                      <li>
                        <strong>Microgrids:</strong> Decentralized renewable energy systems for remote communities and
                        islands.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Bangladesh has set a target of generating 40% of its electricity from renewable sources by 2041.
                      The current capacity is under 3%, creating substantial growth opportunities. Cox's Bazar has been
                      identified as one of the most promising regions for renewable energy development.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Excellent natural conditions for solar and wind energy</li>
                      <li>Strong government incentives for renewable energy projects</li>
                      <li>Growing demand for electricity with supply shortages</li>
                      <li>Carbon credit opportunities for clean energy projects</li>
                      <li>Potential for technology transfer and capacity building</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Renewable Energy Highlights</CardTitle>
                        <Waves className="h-5 w-5 text-green-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Growth Rate</h4>
                        <p className="font-medium">30%+</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Target Market</h4>
                        <p className="font-medium">National grid, industrial users, remote areas</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Investment Size Range</h4>
                        <p className="font-medium">$2M - $50M+</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ROI Timeframe</h4>
                        <p className="font-medium">6-10 years (average)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Special Incentives</h4>
                        <p className="font-medium">Feed-in tariffs, tax exemptions, land allocation</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Teknaf Solar Park</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          20MW utility-scale solar plant with power purchase agreement and consistent performance.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $22M | ROI: 15%</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Coastal Wind Project</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Pilot wind energy installation with expansion plans and technology transfer component.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $8.5M | ROI: 18%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                          <Map className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Resource Assessment</h4>
                          <p className="text-sm text-gray-600">
                            Solar, wind, and tidal resource mapping and feasibility studies
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">PPA Facilitation</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with power purchase agreements and regulatory approvals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Leaf className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Carbon Credit Support</h4>
                          <p className="text-sm text-gray-600">
                            Guidance on accessing carbon markets and certification
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/renewable-energy-sector" className="flex items-center justify-center gap-2">
                          Detailed Renewable Energy Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Digital Infrastructure Tab */}
            <TabsContent value="digital" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Digital Infrastructure in Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Digital Infrastructure</h3>
                      <p className="text-white/80">IT parks, connectivity, and digital services</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      As Bangladesh pursues its "Digital Bangladesh" vision, Cox's Bazar offers strategic opportunities
                      for digital infrastructure investments. The region's growing importance as a tourism and trade hub
                      creates demand for modern digital services and connectivity solutions.
                    </p>

                    <h4>Key Investment Opportunities:</h4>
                    <ul>
                      <li>
                        <strong>IT Parks and Tech Hubs:</strong> Development of specialized facilities for technology
                        companies and startups.
                      </li>
                      <li>
                        <strong>Connectivity Infrastructure:</strong> Broadband, fiber optic, and wireless network
                        expansion to underserved areas.
                      </li>
                      <li>
                        <strong>Digital Training Centers:</strong> Facilities for digital skills development and
                        workforce training.
                      </li>
                      <li>
                        <strong>Data Centers:</strong> Modern, energy-efficient data storage and processing facilities.
                      </li>
                      <li>
                        <strong>Smart City Solutions:</strong> IoT and digital infrastructure for tourism,
                        transportation, and urban management.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Bangladesh's digital economy is growing at over 40% annually, with government initiatives to
                      expand digital services nationwide. Cox's Bazar has been identified as a priority area for digital
                      infrastructure development to support tourism, trade, and local economic growth.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Growing young, tech-savvy population</li>
                      <li>Strong government support for digital initiatives</li>
                      <li>Increasing demand from tourism and business sectors</li>
                      <li>Competitive labor costs for IT services</li>
                      <li>Strategic location for regional connectivity</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Digital Sector Highlights</CardTitle>
                        <Globe className="h-5 w-5 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Growth Rate</h4>
                        <p className="font-medium">40%+</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Target Market</h4>
                        <p className="font-medium">Tourism sector, businesses, government, residents</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Investment Size Range</h4>
                        <p className="font-medium">$500K - $20M</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ROI Timeframe</h4>
                        <p className="font-medium">4-7 years (average)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Special Incentives</h4>
                        <p className="font-medium">Tax holidays, duty-free equipment imports, subsidized land</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Cox's Digital Hub</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          IT park with training facilities, co-working spaces, and business process outsourcing
                          operations.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $3.8M | ROI: 22%</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Coastal Connectivity Project</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Broadband infrastructure development serving tourism businesses and local communities.
                        </p>
                        <p className="text-xs text-gray-500">Investment: $5.2M | ROI: 19%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Market Assessment</h4>
                          <p className="text-sm text-gray-600">Digital needs assessment and market sizing studies</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Licensing Support</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with telecommunications and IT service licenses
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Infrastructure Planning</h4>
                          <p className="text-sm text-gray-600">
                            Technical assistance with digital infrastructure design
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/digital-sector" className="flex items-center justify-center gap-2">
                          Detailed Digital Sector Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Investment Process */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Investment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined approach to supporting your investment journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-sm text-gray-600">Discuss your investment interests and objectives with our team</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Market Research</h3>
              <p className="text-sm text-gray-600">Receive customized market analysis and feasibility assessment</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Site Visits</h3>
              <p className="text-sm text-gray-600">Explore potential locations and meet with local stakeholders</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Implementation Support</h3>
              <p className="text-sm text-gray-600">Receive assistance with permits, registrations, and setup</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Ongoing Partnership</h3>
              <p className="text-sm text-gray-600">Benefit from continued support and troubleshooting</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/schedule-consultation" className="flex items-center gap-2">
                Start Your Investment Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Investor Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from international investors who have successfully established operations in Cox's Bazar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="font-bold">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Thompson</h4>
                  <p className="text-sm text-gray-500">CEO, EcoVentures International</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The support we received throughout our investment journey in Cox's Bazar was exceptional. From market
                research to regulatory navigation, the team made the process smooth and efficient. Our eco-resort is now
                thriving with strong returns."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                  <span className="font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Satoshi Kimura</h4>
                  <p className="text-sm text-gray-500">Director, Ocean Harvest Co.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Our seafood processing investment in Cox's Bazar has exceeded our expectations. The abundance of
                quality marine resources combined with the supportive business environment has allowed us to expand our
                operations twice in three years."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                  <span className="font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-500">Investment Director, GreenPower Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The renewable energy potential in Cox's Bazar is remarkable. With the government incentives and local
                support, our solar project achieved operational status in record time. We're now planning to double our
                investment in the region."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore Investment Opportunities?</h2>
              <p className="text-xl mb-6">
                Schedule a consultation with our investment facilitation team to discuss your specific interests and
                receive personalized guidance.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/schedule-consultation" className="flex items-center gap-2">
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/invest" className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    Back to Investment Hub
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Investment in Cox's Bazar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

