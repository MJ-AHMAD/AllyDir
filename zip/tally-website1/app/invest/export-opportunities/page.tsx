import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimpleFooter } from "@/components/simple-footer"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Download,
  ExternalLink,
  Factory,
  Fish,
  Globe,
  Leaf,
  Package,
  PieChart,
  ShoppingBag,
  Ship,
} from "lucide-react"

export default function ExportOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/cox1.svg" alt="Export Opportunities" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container py-16 px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/invest" className="text-white/80 hover:text-white">
              Investment
            </Link>
            <span>/</span>
            <span>Export Opportunities</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Export Opportunities from Cox's Bazar</h1>
            <p className="text-xl mb-8">
              Discover high-quality products from Cox's Bazar with strong international market potential and competitive
              advantages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/schedule-consultation" className="flex items-center gap-2">
                  <Ship className="h-5 w-5" />
                  Schedule Export Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="#products" className="flex items-center gap-2">
                  Explore Products
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Export Overview */}
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Cox's Bazar Export Landscape</h2>
            <div className="prose max-w-none">
              <p>
                Cox's Bazar offers a diverse range of high-quality products with strong export potential to
                international markets. The region's unique geography, natural resources, and traditional skills create
                distinctive products that appeal to global consumers seeking quality, sustainability, and authenticity.
              </p>

              <h3>Export Growth Trends</h3>
              <p>
                Exports from Cox's Bazar have shown consistent growth over the past decade, with an average annual
                increase of 12-15%. The region contributes significantly to Bangladesh's non-garment exports,
                particularly in seafood, agricultural products, and handicrafts.
              </p>

              <h3>Competitive Advantages</h3>
              <p>Products from Cox's Bazar benefit from several competitive advantages in international markets:</p>
              <ul>
                <li>Unique natural resources and biodiversity</li>
                <li>Traditional craftsmanship and distinctive designs</li>
                <li>Competitive production costs</li>
                <li>Growing compliance with international standards</li>
                <li>Preferential market access to major importing countries</li>
                <li>Increasing focus on sustainability and ethical production</li>
              </ul>

              <h3>Market Access</h3>
              <p>Bangladesh enjoys preferential market access to many major economies:</p>
              <ul>
                <li>Duty-free, quota-free access to the European Union under Everything But Arms (EBA)</li>
                <li>Preferential access to markets including Canada, Australia, Japan, and China</li>
                <li>Growing trade relationships with ASEAN countries</li>
                <li>Established export channels to the Middle East and South Asia</li>
              </ul>

              <h3>Export Support Infrastructure</h3>
              <p>The region's export capabilities are supported by:</p>
              <ul>
                <li>Improving transportation and logistics networks</li>
                <li>Growing cold chain facilities for perishable products</li>
                <li>Quality testing and certification services</li>
                <li>Export promotion agencies and trade facilitation</li>
                <li>Digital platforms connecting producers with international buyers</li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Export Highlights</CardTitle>
                <CardDescription>Key statistics and figures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <Ship className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Annual Export Volume</h4>
                    <p className="text-sm text-gray-600">$180+ million from Cox's Bazar region</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Growth Rate</h4>
                    <p className="text-sm text-gray-600">12-15% annual export growth</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Key Export Markets</h4>
                    <p className="text-sm text-gray-600">EU, Japan, USA, Middle East, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Product Categories</h4>
                    <p className="text-sm text-gray-600">Seafood, handicrafts, agricultural products, salt</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="/documents/export-statistics.pdf" className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Export Statistics
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <div className="mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Export Market Share</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
                    <PieChart className="h-16 w-16 text-gray-300" />
                    {/* This would be replaced with an actual chart in production */}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">European Union (42%)</span>
                      </div>
                      <span className="text-sm font-medium">$75.6M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Japan (18%)</span>
                      </div>
                      <span className="text-sm font-medium">$32.4M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm">USA (15%)</span>
                      </div>
                      <span className="text-sm font-medium">$27.0M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Middle East (14%)</span>
                      </div>
                      <span className="text-sm font-medium">$25.2M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                        <span className="text-sm">Others (11%)</span>
                      </div>
                      <span className="text-sm font-medium">$19.8M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Our Export Support Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-sm">Market research and buyer identification</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-sm">Quality certification and compliance support</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-sm">Export documentation and logistics assistance</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p className="text-sm">Trade fair participation and buyer meetings</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <p className="text-sm">Digital marketing and e-commerce enablement</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/schedule-consultation">Schedule Export Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Export Products */}
        <div id="products" className="pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Export Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore high-potential export products from Cox's Bazar with strong international demand
            </p>
          </div>

          <Tabs defaultValue="seafood" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl mx-auto">
              <TabsTrigger value="seafood">Marine Products</TabsTrigger>
              <TabsTrigger value="handicrafts">Handicrafts</TabsTrigger>
              <TabsTrigger value="agriculture">Agricultural Products</TabsTrigger>
              <TabsTrigger value="salt">Salt Production</TabsTrigger>
            </TabsList>

            {/* Marine Products Tab */}
            <TabsContent value="seafood" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Marine Products from Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Marine Products</h3>
                      <p className="text-white/80">High-quality seafood with growing international demand</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar is renowned for its diverse and abundant marine resources, offering a wide range of
                      high-quality seafood products that meet international standards. The region's strategic location
                      along the Bay of Bengal provides access to rich fishing grounds and supports both wild-caught and
                      aquaculture production.
                    </p>

                    <h4>Key Export Products:</h4>
                    <ul>
                      <li>
                        <strong>Shrimp and Prawns:</strong> Black tiger shrimp, freshwater prawns, and other varieties
                        cultivated in environmentally sustainable farms with increasing organic certification.
                      </li>
                      <li>
                        <strong>Crabs and Lobsters:</strong> Mud crabs, blue swimming crabs, and spiny lobsters known
                        for their size and meat quality.
                      </li>
                      <li>
                        <strong>Fish Species:</strong> Hilsa (Bangladesh's national fish), sea bass, grouper, snapper,
                        and other premium fish varieties.
                      </li>
                      <li>
                        <strong>Dried Fish Products:</strong> Traditional sun-dried fish with growing international
                        market among diaspora communities and specialty food markets.
                      </li>
                      <li>
                        <strong>Value-Added Products:</strong> Ready-to-cook seafood items, marinated products, and
                        specialty preparations gaining popularity in international markets.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Marine products from Cox's Bazar have established export channels to the European Union, Japan,
                      USA, and other markets with stringent quality requirements. The sector has been growing at 15-20%
                      annually, with increasing focus on sustainability certification and traceability to access premium
                      market segments.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Natural flavor and quality due to unique coastal ecosystem</li>
                      <li>Growing compliance with international food safety standards</li>
                      <li>Increasing adoption of sustainable fishing and farming practices</li>
                      <li>Competitive pricing compared to other Asian suppliers</li>
                      <li>Established processing infrastructure with cold chain facilities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Marine Products Highlights</CardTitle>
                        <Fish className="h-5 w-5 text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Export Value</h4>
                        <p className="font-medium">$120+ million</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Primary Markets</h4>
                        <p className="font-medium">EU, Japan, USA, China</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Growth Rate</h4>
                        <p className="font-medium">15-20% annually</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Key Certifications</h4>
                        <p className="font-medium">HACCP, EU approval, ASC, BAP</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Value Addition Potential</h4>
                        <p className="font-medium">30-40% price premium for processed products</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Cox's Bay Seafood Ltd.</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          EU-certified processor exporting premium shrimp products to European retail chains.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $12M | Markets: 8 countries</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Ocean Harvest Cooperative</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Fishermen's cooperative producing sustainable seafood with fair trade certification.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $5.8M | Premium: 25%</p>
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
                          <h4 className="font-medium">Certification Assistance</h4>
                          <p className="text-sm text-gray-600">
                            Support with obtaining EU, HACCP, and sustainability certifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <Factory className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Processing Technology</h4>
                          <p className="text-sm text-gray-600">Access to modern processing techniques and equipment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Ship className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Buyer Connections</h4>
                          <p className="text-sm text-gray-600">
                            Introductions to international seafood importers and distributors
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/seafood-export" className="flex items-center justify-center gap-2">
                          Detailed Seafood Export Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Handicrafts Tab */}
            <TabsContent value="handicrafts" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Handicrafts from Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Handcrafted Products</h3>
                      <p className="text-white/80">Unique artisanal crafts with cultural significance</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar has a rich tradition of handicraft production, with skilled artisans creating unique
                      items that reflect the region's cultural heritage and natural resources. These handcrafted
                      products have growing appeal in international markets seeking authentic, sustainable, and
                      ethically produced items.
                    </p>

                    <h4>Key Export Products:</h4>
                    <ul>
                      <li>
                        <strong>Shell Crafts:</strong> Intricate decorative items, jewelry, and home accessories made
                        from locally collected seashells with distinctive designs.
                      </li>
                      <li>
                        <strong>Bamboo Products:</strong> Sustainable furniture, home décor, and utility items crafted
                        from locally grown bamboo using traditional techniques.
                      </li>
                      <li>
                        <strong>Traditional Textiles:</strong> Handwoven fabrics, traditional clothing, and textile
                        products with unique patterns and natural dyes.
                      </li>
                      <li>
                        <strong>Cane & Reed Products:</strong> Baskets, mats, and decorative items made from locally
                        sourced natural materials.
                      </li>
                      <li>
                        <strong>Wood Carvings:</strong> Sculptures, decorative panels, and furniture featuring
                        traditional motifs and sustainable wood sources.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Handicrafts from Cox's Bazar have found growing markets in boutique retailers, fair trade
                      networks, and e-commerce platforms in North America, Europe, Japan, and Australia. The sector
                      benefits from increasing consumer interest in sustainable, handmade products with authentic
                      cultural stories.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Unique designs reflecting local cultural heritage</li>
                      <li>Natural, sustainable materials with eco-friendly appeal</li>
                      <li>Skilled artisans with generations of craftsmanship tradition</li>
                      <li>Growing fair trade and ethical production certification</li>
                      <li>Compelling stories that resonate with conscious consumers</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Handicrafts Highlights</CardTitle>
                        <ShoppingBag className="h-5 w-5 text-amber-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Export Value</h4>
                        <p className="font-medium">$15+ million</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Primary Markets</h4>
                        <p className="font-medium">USA, EU, Japan, Australia</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Growth Rate</h4>
                        <p className="font-medium">18-22% annually</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Key Certifications</h4>
                        <p className="font-medium">Fair Trade, WFTO, Sustainable Forestry</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Artisans Involved</h4>
                        <p className="font-medium">5,000+ (70% women)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Coastal Crafts Collective</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Women's cooperative exporting shell crafts to boutique retailers in Europe and North America.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $2.8M | Artisans: 850</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Bay Bamboo Creations</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Sustainable bamboo product manufacturer with fair trade certification and e-commerce presence.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $3.2M | Markets: 12 countries</p>
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
                          <h4 className="font-medium">Design Development</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with product design for international markets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <ShoppingBag className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Fair Trade Certification</h4>
                          <p className="text-sm text-gray-600">Support with obtaining ethical trade certifications</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Ship className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Market Access</h4>
                          <p className="text-sm text-gray-600">
                            Connections to international buyers and e-commerce platforms
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/handicrafts-export" className="flex items-center justify-center gap-2">
                          Detailed Handicrafts Export Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Agricultural Products Tab */}
            <TabsContent value="agriculture" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Agricultural Products from Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Agricultural Products</h3>
                      <p className="text-white/80">Specialty crops and organic produce with export potential</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar's unique microclimate and fertile soil support the cultivation of specialty
                      agricultural products with growing international demand. The region is increasingly focusing on
                      organic and sustainable farming practices to access premium export markets.
                    </p>

                    <h4>Key Export Products:</h4>
                    <ul>
                      <li>
                        <strong>Betel Leaf (Paan):</strong> High-quality betel leaves with distinctive flavor exported
                        to South Asian diaspora communities worldwide.
                      </li>
                      <li>
                        <strong>Cashew Nuts:</strong> Locally grown cashews with increasing organic certification for
                        premium markets.
                      </li>
                      <li>
                        <strong>Tropical Fruits:</strong> Specialty varieties of pineapple, mango, jackfruit, and other
                        tropical fruits with export potential.
                      </li>
                      <li>
                        <strong>Spices:</strong> Turmeric, ginger, chili, and other spices grown with traditional
                        methods and minimal chemical inputs.
                      </li>
                      <li>
                        <strong>Medicinal Plants:</strong> Herbs and plants used in traditional medicine and wellness
                        products with growing international markets.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      Agricultural exports from Cox's Bazar have been growing steadily, with particular success in
                      ethnic food markets, organic specialty stores, and health food sectors in North America, Europe,
                      and the Middle East. The organic and specialty segments offer significant premium pricing
                      opportunities.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Unique varieties with distinctive flavors due to local growing conditions</li>
                      <li>Increasing adoption of organic and sustainable farming practices</li>
                      <li>Lower pesticide usage compared to conventional farming regions</li>
                      <li>Traditional farming knowledge combined with modern quality standards</li>
                      <li>Growing infrastructure for post-harvest handling and processing</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Agricultural Highlights</CardTitle>
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Export Value</h4>
                        <p className="font-medium">$35+ million</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Primary Markets</h4>
                        <p className="font-medium">Middle East, EU, North America, South Asia</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Growth Rate</h4>
                        <p className="font-medium">12-15% annually</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Key Certifications</h4>
                        <p className="font-medium">Organic, Global GAP, Rainforest Alliance</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Organic Premium</h4>
                        <p className="font-medium">30-50% price advantage</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Coastal Organic Farms</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Certified organic producer exporting tropical fruits and spices to premium markets in Europe.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $4.2M | Premium: 45%</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Bay Spice Collective</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Farmer-owned cooperative producing and exporting high-quality spices with traceability.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $3.8M | Farmers: 1,200</p>
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
                          <Leaf className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Organic Certification</h4>
                          <p className="text-sm text-gray-600">
                            Support with obtaining organic and sustainable farming certifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <Factory className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Processing Technology</h4>
                          <p className="text-sm text-gray-600">
                            Access to modern post-harvest handling and processing techniques
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                          <Ship className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Market Connections</h4>
                          <p className="text-sm text-gray-600">
                            Introductions to international buyers and specialty food distributors
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/agricultural-export" className="flex items-center justify-center gap-2">
                          Detailed Agricultural Export Report
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Salt Production Tab */}
            <TabsContent value="salt" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Salt Production in Cox's Bazar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Salt Production</h3>
                      <p className="text-white/80">High-quality sea salt with premium market potential</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar is one of Bangladesh's primary salt-producing regions, with ideal conditions for
                      high-quality sea salt production. The traditional salt harvesting methods combined with the
                      region's unique coastal environment create salt products with distinctive characteristics that
                      have potential in premium international markets.
                    </p>

                    <h4>Key Export Products:</h4>
                    <ul>
                      <li>
                        <strong>Gourmet Sea Salt:</strong> Unrefined, mineral-rich sea salt for culinary use in premium
                        food markets.
                      </li>
                      <li>
                        <strong>Specialty Salt Products:</strong> Flavored and infused salts with local herbs and spices
                        for gourmet food applications.
                      </li>
                      <li>
                        <strong>Bath and Spa Salts:</strong> Natural sea salt products for wellness and personal care
                        markets.
                      </li>
                      <li>
                        <strong>Industrial Grade Salt:</strong> High-purity salt for chemical and industrial
                        applications.
                      </li>
                      <li>
                        <strong>Artisanal Salt Products:</strong> Traditionally harvested salt with unique packaging and
                        storytelling for specialty markets.
                      </li>
                    </ul>

                    <h4>Market Potential:</h4>
                    <p>
                      While currently a smaller export sector compared to seafood and handicrafts, salt products from
                      Cox's Bazar have significant growth potential in specialty food markets, wellness sectors, and
                      industrial applications. Value addition through premium packaging, branding, and certification can
                      substantially increase export value.
                    </p>

                    <h4>Competitive Advantages:</h4>
                    <ul>
                      <li>Natural mineral content due to the unique Bay of Bengal ecosystem</li>
                      <li>Traditional harvesting methods that can be marketed as artisanal</li>
                      <li>Potential for organic and natural product certification</li>
                      <li>Competitive production costs compared to European and American producers</li>
                      <li>Growing capacity for value-added processing and premium packaging</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Salt Production Highlights</CardTitle>
                        <Factory className="h-5 w-5 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Annual Export Value</h4>
                        <p className="font-medium">$8+ million</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Primary Markets</h4>
                        <p className="font-medium">Middle East, South Asia, Southeast Asia</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Growth Rate</h4>
                        <p className="font-medium">10-12% annually</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Value Addition Potential</h4>
                        <p className="font-medium">200-300% for premium packaging</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Emerging Markets</h4>
                        <p className="font-medium">Gourmet food, wellness, cosmetics</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Bay Salt Company</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Producer of premium sea salt products with distinctive packaging for gourmet markets.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $1.8M | Markets: 6 countries</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Coastal Minerals Ltd</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Manufacturer of high-grade industrial salt and specialty chemical products.
                        </p>
                        <p className="text-xs text-gray-500">Annual Export: $3.2M | B2B Clients: 45+</p>
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
                          <Package className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Product Development</h4>
                          <p className="text-sm text-gray-600">
                            Assistance with premium product formulation and packaging design
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                          <Factory className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Processing Technology</h4>
                          <p className="text-sm text-gray-600">
                            Access to improved salt processing and purification techniques
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
                            Analysis of premium salt markets and consumer preferences
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/invest/salt-export" className="flex items-center justify-center gap-2">
                          Detailed Salt Export Report
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

        {/* Export Process */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Export Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined approach to supporting your export journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Product Assessment</h3>
              <p className="text-sm text-gray-600">Evaluate your product's export readiness and market potential</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Market Research</h3>
              <p className="text-sm text-gray-600">Identify target markets and understand buyer requirements</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Compliance Support</h3>
              <p className="text-sm text-gray-600">Ensure your products meet international standards and regulations</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Buyer Connections</h3>
              <p className="text-sm text-gray-600">Connect with qualified international buyers and distributors</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Export Logistics</h3>
              <p className="text-sm text-gray-600">Support with documentation, shipping, and payment processes</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/schedule-consultation" className="flex items-center gap-2">
                Start Your Export Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Exporter Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from successful exporters who have expanded their international reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="font-bold">AR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Abdul Rahman</h4>
                  <p className="text-sm text-gray-500">CEO, Bay Seafood Exports</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The export support we received transformed our business. From quality certification to connecting with
                European buyers, the team helped us increase our export value by 35% in just one year. Our shrimp
                products now reach premium markets across Europe."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                  <span className="font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Salma Khatun</h4>
                  <p className="text-sm text-gray-500">Founder, Coastal Crafts Collective</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a women's handicraft cooperative, we never imagined our products would be sold in boutiques across
                North America and Europe. The export facilitation program helped us with design, packaging, and
                connecting with ethical trade buyers who value our craftsmanship."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                  <span className="font-bold">MH</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mohammed Hossain</h4>
                  <p className="text-sm text-gray-500">Director, Organic Spice Gardens</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The organic certification support and market research provided were invaluable. We've successfully
                positioned our specialty spices in premium food markets in the Middle East and Europe, commanding prices
                40% higher than conventional products."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Export Your Products?</h2>
              <p className="text-xl mb-6">
                Schedule a consultation with our export facilitation team to discuss your products and receive
                personalized guidance on international market access.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/schedule-consultation" className="flex items-center gap-2">
                    Schedule Export Consultation
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
                alt="Export from Cox's Bazar"
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

