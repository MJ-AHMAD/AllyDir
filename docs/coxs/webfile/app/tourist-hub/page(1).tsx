"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Star, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageCarousel from "@/components/image-carousel"
import Testimonials from "@/components/testimonials"
import PackageCards from "@/components/package-cards"
import EnhancedServicesSection from "@/components/enhanced-services-section"

export default function Home() {
  const images = [
    "https://mj-ahmad.github.io/mja2025/img/cox1.png",
    "https://mj-ahmad.github.io/mja2025/img/discover01.png",
    "https://mj-ahmad.github.io/mja2025/img/discover02.png",
    "https://mj-ahmad.github.io/mja2025/img/discover03.png",
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <style jsx global>{`
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-md {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }
      `}</style>

      {/* Hero Section with Image Carousel */}
      <section className="relative w-full h-[80vh]">
        <ImageCarousel images={images} />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="container text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-up text-shadow-lg">
              Discover Cox's Bazar
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-up animation-delay-200 text-shadow-md">
              Experience the world's longest natural sea beach and create memories that last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up animation-delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Packages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 hover:bg-background/30 text-white border-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Cox's Bazar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The World's Longest Natural Sea Beach</h2>
              <p className="text-muted-foreground text-lg">
                Cox's Bazar boasts an unbroken 120 kilometers of sandy beach, making it the longest natural sea beach in
                the world. This breathtaking destination offers pristine waters, golden sands, and mesmerizing sunsets
                that captivate visitors from around the globe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>120km Beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Millions of Visitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Year-round Destination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>5-Star Experiences</span>
                </div>
              </div>
              <Button className="gap-2" asChild>
                <Link href="/destinations/sea-beach">
                  Discover More <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/the0.png"
                alt="Cox's Bazar Beach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tailored Travel Experiences for Every Explorer
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our carefully crafted packages designed to provide the perfect Cox's Bazar experience, whether
              you're seeking adventure, relaxation, or cultural immersion.
            </p>
          </div>

          <PackageCards />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-fade-up">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-up animation-delay-200">
              Comprehensive Travel Services
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up animation-delay-300">
              TRUSTED-ALLY provides end-to-end travel services to ensure your Cox's Bazar journey is seamless,
              comfortable, and memorable from start to finish.
            </p>
          </div>

          <EnhancedServicesSection />
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Explore</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Must-Visit Attractions</h2>
            <p className="text-muted-foreground text-lg">
              Beyond the magnificent beach, Cox's Bazar offers a wealth of natural wonders and cultural experiences.
            </p>
          </div>

          <Tabs defaultValue="beaches" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="beaches">Beaches</TabsTrigger>
              <TabsTrigger value="islands">Islands</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
              <TabsTrigger value="adventure">Adventure</TabsTrigger>
            </TabsList>

            <TabsContent value="beaches" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani0.png"
                      alt="Inani Beach"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Inani Beach</CardTitle>
                    <CardDescription>Known for its unique coral stones and crystal clear waters</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/beaches/inani">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/laboni0.png"
                      alt="Laboni Beach"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Laboni Beach</CardTitle>
                    <CardDescription>The main beach with vibrant activities and entertainment</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/beaches/laboni">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/himchari00.png"
                      alt="Himchari Beach"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Himchari Beach</CardTitle>
                    <CardDescription>Beautiful waterfalls meeting the sea with lush greenery</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/beaches/himchari">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="islands" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/st00.png"
                      alt="St. Martin's Island"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>St. Martin's Island</CardTitle>
                    <CardDescription>Bangladesh's only coral island with pristine beaches</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/islands/st-martins">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/maheshkhali00.png"
                      alt="Maheshkhali Island"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Maheshkhali Island</CardTitle>
                    <CardDescription>Famous for its Buddhist temples and panoramic views</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/islands/maheshkhali">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/sonadia00.png"
                      alt="Sonadia Island"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Sonadia Island</CardTitle>
                    <CardDescription>A paradise for birdwatchers with mangrove forests</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/islands/sonadia">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/rakhaine00.png"
                      alt="Rakhaine Village"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Rakhaine Village</CardTitle>
                    <CardDescription>Experience the unique culture of the Rakhaine ethnic community</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/culture/rakhaine-village">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/buddhist00.png"
                      alt="Buddhist Temples"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Buddhist Temples</CardTitle>
                    <CardDescription>Ancient temples showcasing rich Buddhist heritage</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/culture/buddhist-temples">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/local00.png"
                      alt="Local Markets"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Local Markets</CardTitle>
                    <CardDescription>Vibrant markets selling local crafts, seafood, and souvenirs</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/culture/local-markets">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/water00.png"
                      alt="Water Sports"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Water Sports</CardTitle>
                    <CardDescription>Surfing, jet skiing, and parasailing adventures</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/adventure/water-sports">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/marine00.png"
                      alt="Marine Drive"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Marine Drive</CardTitle>
                    <CardDescription>Scenic 80km road trip along the coastline</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/adventure/marine-drive">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/hiking0.png"
                      alt="Hiking Trails"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Hiking Trails</CardTitle>
                    <CardDescription>Explore the hills and forests surrounding Cox's Bazar</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/attractions/adventure/hiking-trails">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground text-lg">
              Hear from travelers who have experienced the magic of Cox's Bazar with TRUSTED-ALLY.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>
    </main>
  )
}

