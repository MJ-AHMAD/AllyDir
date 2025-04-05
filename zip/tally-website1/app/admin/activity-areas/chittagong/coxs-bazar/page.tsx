import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  BookOpen,
  Building2,
  Waves,
  Landmark,
  Calendar,
  ArrowRight,
  ExternalLink,
  FileText,
  GraduationCap,
  Lightbulb,
  Leaf,
  Globe,
  Ship,
  DollarSign,
  Factory,
  Fish,
  Briefcase,
  ShoppingBag,
} from "lucide-react"

export default function CoxsBazarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/cox1.svg" alt="Cox's Bazar Beach" fill className="object-cover opacity-30" />
        </div>
        <div className="relative container h-full flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/admin/activity-areas" className="text-white/80 hover:text-white">
              Activity Areas
            </Link>
            <span>/</span>
            <Link href="/admin/activity-areas/chittagong" className="text-white/80 hover:text-white">
              Chittagong Division
            </Link>
            <span>/</span>
            <span>Cox's Bazar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cox's Bazar District</h1>
          <p className="text-xl max-w-2xl">
            Home to the world's longest natural sea beach and a hub for international trade, investment, and sustainable
            development.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Active Projects</p>
                  <h3 className="text-3xl font-bold">24</h3>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Export Products</p>
                  <h3 className="text-3xl font-bold">15+</h3>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Ship className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Investment Sectors</p>
                  <h3 className="text-3xl font-bold">8</h3>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Annual Growth</p>
                  <h3 className="text-3xl font-bold">7.2%</h3>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <BarChart3 className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Potential & Investment Opportunities - HIGHLIGHTED SECTION */}
        <div className="mb-12 border-2 border-blue-500 rounded-xl overflow-hidden">
          <div className="bg-blue-500 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">International Trade & Investment Opportunities</h2>
            <p className="text-white/80">Discover Cox's Bazar's export potential and investment opportunities</p>
          </div>

          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Export Potential */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-blue-700">
                  <Ship className="h-5 w-5 mr-2" /> Export Potential Products
                </h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                        <Fish className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Marine Products</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          High-quality seafood including shrimp, lobster, crab, and various fish species with
                          established export channels to Europe, Japan, and USA.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            $120M Annual Export
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Growing Demand
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Handcrafted Products</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Unique handicrafts including shell crafts, bamboo products, and traditional textiles with
                          appeal in international boutique markets.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            $15M Annual Export
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            Fair Trade Potential
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                        <Leaf className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Agricultural Products</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Organic fruits, spices, and specialty crops including betel leaf, cashew nuts, and tropical
                          fruits with growing international demand.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            $35M Annual Export
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Organic Certified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
                        <Factory className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Salt Production</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          High-quality sea salt with potential for premium packaging and marketing as gourmet cooking
                          salt in international markets.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            $8M Annual Export
                          </span>
                          <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                            Value-Add Potential
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/invest/export-opportunities" className="flex items-center justify-center gap-2">
                      View Detailed Export Analysis <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Investment Opportunities */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
                  <Briefcase className="h-5 w-5 mr-2" /> Investment Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Eco-Tourism Infrastructure</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Sustainable resort development, eco-lodges, and tourism facilities with government incentives
                          and growing international visitor numbers.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            High ROI Potential
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Tax Incentives
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                        <Factory className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Seafood Processing</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Modern processing facilities for value-added seafood products with direct access to abundant
                          marine resources and export markets.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            25% Annual Growth
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Export Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                        <Waves className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Renewable Energy</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Solar and wind energy projects with excellent natural conditions and government support for
                          green energy initiatives.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Subsidized Land
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Carbon Credits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Digital Infrastructure</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          IT parks, digital training centers, and connectivity infrastructure with growing tech-savvy
                          workforce and government backing.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Special Economic Zone
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Tax Holidays</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/invest/opportunities" className="flex items-center justify-center gap-2">
                      Explore Investment Opportunities <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Investment Support */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Investment Support & Incentives</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold mb-2">Government Incentives</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tax holidays up to 10 years</li>
                    <li>• Duty-free import of capital machinery</li>
                    <li>• Repatriation of invested capital</li>
                    <li>• Special Economic Zone benefits</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold mb-2">Local Support</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Investment facilitation services</li>
                    <li>• Local partnership matching</li>
                    <li>• Skilled workforce recruitment</li>
                    <li>• Cultural and language assistance</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-3">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold mb-2">Our Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Market research and analysis</li>
                    <li>• Regulatory navigation assistance</li>
                    <li>• Site selection consultation</li>
                    <li>• Ongoing operational support</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/schedule-consultation" className="flex items-center justify-center gap-2">
                    Schedule Investment Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  Our team provides personalized guidance for international investors interested in Cox's Bazar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About Cox's Bazar</CardTitle>
                    <CardDescription>Key information about the district</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p>
                        Cox's Bazar is a district in the southeastern part of Bangladesh, known for hosting the world's
                        longest natural sea beach stretching 120 kilometers along the Bay of Bengal. Beyond its natural
                        beauty, the district has become a focal point for international trade, investment, and
                        sustainable development initiatives.
                      </p>
                      <p>
                        With its strategic location, abundant natural resources, and growing infrastructure, Cox's Bazar
                        offers exceptional opportunities for international investors and export-oriented businesses. The
                        district serves as a gateway to Southeast Asian markets and provides access to one of the
                        fastest-growing consumer bases in the world.
                      </p>
                      <h3>Strategic Importance</h3>
                      <p>Cox's Bazar represents one of our most critical operational areas due to several factors:</p>
                      <ul>
                        <li>
                          <strong>Economic Potential:</strong> The district has substantial potential for sustainable
                          tourism, seafood processing, renewable energy, and digital infrastructure development.
                        </li>
                        <li>
                          <strong>Export Resources:</strong> Rich in marine products, agricultural specialties,
                          handicrafts, and natural resources that have strong demand in international markets.
                        </li>
                        <li>
                          <strong>Strategic Location:</strong> Positioned as a potential trade hub connecting Bangladesh
                          with Myanmar and other Southeast Asian markets.
                        </li>
                        <li>
                          <strong>Government Focus:</strong> Designated as a priority development zone with special
                          incentives for foreign direct investment and export-oriented businesses.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Key Focus Areas</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <Ship className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Export Promotion</h4>
                            <p className="text-sm text-gray-500">
                              Supporting local producers to access international markets
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                            <DollarSign className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Investment Attraction</h4>
                            <p className="text-sm text-gray-500">
                              Facilitating international investment in key growth sectors
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Skill Development</h4>
                            <p className="text-sm text-gray-500">
                              Training local workforce for export-oriented industries
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Sustainable Development</h4>
                            <p className="text-sm text-gray-500">
                              Ensuring economic growth with environmental protection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                      <CardDescription>Latest initiatives in Cox's Bazar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium">International Trade Fair</h4>
                            <p className="text-sm text-gray-500 mb-1">
                              Organized an export showcase featuring local products with participation from 15
                              international buyers.
                            </p>
                            <p className="text-xs text-gray-400">October 15, 2023</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium">Investment Seminar</h4>
                            <p className="text-sm text-gray-500 mb-1">
                              Hosted a seminar on investment opportunities in Cox's Bazar for international investors
                              from 8 countries.
                            </p>
                            <p className="text-xs text-gray-400">September 22, 2023</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium">Export Training Program</h4>
                            <p className="text-sm text-gray-500 mb-1">
                              Conducted training for 75 local businesses on international quality standards and export
                              procedures.
                            </p>
                            <p className="text-xs text-gray-400">August 10, 2023</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium">Investor Site Visit</h4>
                            <p className="text-sm text-gray-500 mb-1">
                              Facilitated site visits for potential investors from Europe and Asia interested in
                              eco-tourism projects.
                            </p>
                            <p className="text-xs text-gray-400">July 5, 2023</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>District Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Area</h4>
                        <p className="font-medium">2,491.85 km²</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Population</h4>
                        <p className="font-medium">2.29 million (2022 est.)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Major Industries</h4>
                        <p className="font-medium">Tourism, Fishing, Salt Production, Agriculture</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Export Volume</h4>
                        <p className="font-medium">$180 million annually</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Investment Growth</h4>
                        <p className="font-medium">12.5% year-over-year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Special Economic Zone</h4>
                        <p className="font-medium">Sabrang Tourism Park (Designated)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Key Export Destinations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">European Union</h4>
                          <p className="text-sm text-gray-500">Primary market for seafood exports</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Japan</h4>
                          <p className="text-sm text-gray-500">Premium seafood and agricultural products</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">United States</h4>
                          <p className="text-sm text-gray-500">Handicrafts and specialty food items</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Middle East</h4>
                          <p className="text-sm text-gray-500">Agricultural products and textiles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">China</h4>
                          <p className="text-sm text-gray-500">Raw materials and processed seafood</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Related Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Link
                        href="/invest"
                        className="block p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <DollarSign className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">Investment Program</h4>
                              <p className="text-sm text-gray-500">International investment facilitation</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </Link>
                      <Link
                        href="/al-quran-journey/printing-distribution"
                        className="block p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">Quran Distribution</h4>
                              <p className="text-sm text-gray-500">Al-Quran Journey Initiative</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </Link>
                      <Link
                        href="/education-program/free-learning"
                        className="block p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <GraduationCap className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">Free Learning Program</h4>
                              <p className="text-sm text-gray-500">Education Initiative</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Export Development Projects</CardTitle>
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Ship className="h-5 w-5" />
                    </div>
                  </div>
                  <CardDescription>Supporting local producers to access international markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Seafood Quality Certification Program</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Helping local seafood producers obtain international quality certifications to access premium
                        markets.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Beneficiaries: 45 businesses</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Handicraft Export Promotion</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Connecting local artisans with international buyers and e-commerce platforms for handicraft
                        exports.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Participants: 120 artisans</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Agricultural Export Standards</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Training farmers on international agricultural standards and organic certification processes.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Participants: 85 farmers</span>
                        <span className="text-green-600 font-medium">Completed</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Export Logistics Improvement</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Developing cold chain infrastructure and logistics solutions for perishable export products.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Impact: Regional supply chain</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/invest/export-programs" className="flex items-center justify-center gap-2">
                        View All Export Programs <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Investment Facilitation Projects</CardTitle>
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <DollarSign className="h-5 w-5" />
                    </div>
                  </div>
                  <CardDescription>Supporting international investment in Cox's Bazar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Investor Matchmaking Service</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Connecting international investors with local partners and opportunities in key sectors.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Matches: 28 partnerships</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Investment Climate Assessment</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Conducting research and publishing reports on the investment environment in Cox's Bazar.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Coverage: 8 key sectors</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Regulatory Navigation Support</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Assisting investors with understanding and navigating local regulations and permit processes.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Clients: 35 companies</span>
                        <span className="text-blue-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Investment Promotion Events</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Organizing international roadshows and events to showcase investment opportunities.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Events: 6 annually</span>
                        <span className="text-amber-600 font-medium">Ongoing</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/invest/facilitation-services" className="flex items-center justify-center gap-2">
                        View All Investment Services <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional project cards would continue here */}
            </div>
          </TabsContent>

          {/* Other tabs would continue here */}
        </Tabs>
      </div>
    </div>
  )
}

