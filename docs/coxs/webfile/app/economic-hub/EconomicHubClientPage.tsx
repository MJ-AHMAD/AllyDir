"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EconomicHubClientPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Economic Hub Cox's Bazar</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover international trade opportunities and investment potential in one of Bangladesh's most promising
          economic zones
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Annual Exports</h3>
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-700">$178M</p>
            <p className="text-sm text-muted-foreground mt-1">Growing at 12% annually</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Investment Inflow</h3>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-700">$320M</p>
            <p className="text-sm text-muted-foreground mt-1">Last 5 years cumulative</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Employment</h3>
              <BarChart3 className="h-5 w-5 text-amber-600" />
            </div>
            <p className="text-3xl font-bold text-amber-700">85,000+</p>
            <p className="text-sm text-muted-foreground mt-1">Jobs in export sectors</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Trade Partners</h3>
              <Globe className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-700">42</p>
            <p className="text-sm text-muted-foreground mt-1">Countries worldwide</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="exports" className="mb-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="exports">Export Potential</TabsTrigger>
          <TabsTrigger value="investments">Investment Opportunities</TabsTrigger>
        </TabsList>

        {/* Export Potential Tab */}
        <TabsContent value="exports" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Marine Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Marine Products</h3>
                    <p className="text-sm opacity-90">Shrimp, lobster, crab, and fish</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$120M</p>
                    <p className="text-sm text-muted-foreground">Annual Export</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Growing Demand
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  High-quality seafood with established export channels to Europe, Japan, and USA.
                </p>
                <Link href="/economic-hub/exports/marine-products">
                  <Button variant="outline" className="w-full">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Handcrafted Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Handcrafted Products</h3>
                    <p className="text-sm opacity-90">Shell crafts, bamboo products, textiles</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$15M</p>
                    <p className="text-sm text-muted-foreground">Annual Export</p>
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Fair Trade Potential
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Unique handicrafts with appeal in international boutique markets.
                </p>
                <Link href="/economic-hub/exports/handcrafted-products">
                  <Button variant="outline" className="w-full">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Agricultural Products</h3>
                    <p className="text-sm opacity-90">Organic fruits, spices, specialty crops</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$35M</p>
                    <p className="text-sm text-muted-foreground">Annual Export</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Organic Certified
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Organic fruits, spices, and specialty crops with growing international demand.
                </p>
                <Link href="/economic-hub/exports/agricultural-products">
                  <Button variant="outline" className="w-full">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Salt Production"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Salt Production</h3>
                    <p className="text-sm opacity-90">High-quality sea salt</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$8M</p>
                    <p className="text-sm text-muted-foreground">Annual Export</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Value-Add Potential
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  High-quality sea salt with potential for premium packaging and marketing.
                </p>
                <Link href="/economic-hub/exports/salt-production">
                  <Button variant="outline" className="w-full">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Investment Opportunities Tab */}
        <TabsContent value="investments" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eco-Tourism Infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Eco-Tourism Infrastructure</h3>
                    <p className="text-sm opacity-90">Sustainable resorts and facilities</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    High ROI Potential
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tax Incentives
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Sustainable resort development with government incentives and growing visitor numbers.
                </p>
                <Link href="/economic-hub/investments/eco-tourism">
                  <Button variant="outline" className="w-full">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Seafood Processing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Seafood Processing</h3>
                    <p className="text-sm opacity-90">Modern processing facilities</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    25% Annual Growth
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Export Ready
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Modern processing facilities for value-added seafood products with direct access to resources.
                </p>
                <Button asChild>
                  <Link href="/economic-hub/investments/seafood-processing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Renewable Energy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Renewable Energy</h3>
                    <p className="text-sm opacity-90">Solar and wind energy projects</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Subsidized Land
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Carbon Credits
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Solar and wind energy projects with excellent natural conditions and government support.
                </p>
                <Button asChild>
                  <Link href="/economic-hub/investments/renewable-energy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Digital Infrastructure</h3>
                    <p className="text-sm opacity-90">IT parks and connectivity</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Special Economic Zone
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tax Holidays
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  IT parks, digital training centers, and connectivity infrastructure with government backing.
                </p>
                <Button asChild>
                  <Link href="/economic-hub/investments/digital-infrastructure">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Cox's Bazar?</h2>
            <p className="mb-6">
              Connect with our investment facilitation team to explore opportunities, incentives, and support for your
              business venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg">
                Download Investment Guide
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Investment Fast Track</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <p>Initial consultation and opportunity matching</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <p>Site visit and stakeholder meetings</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <p>Regulatory guidance and permit facilitation</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </div>
                <p>Implementation support and ongoing assistance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

