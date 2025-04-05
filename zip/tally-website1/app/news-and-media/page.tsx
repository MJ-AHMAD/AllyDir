import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsAndMediaPage() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/news-and-media" className="font-medium hover:text-primary">
              News + Media
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">News + Media</h1>

        <Tabs defaultValue="latest-news" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="latest-news">Latest News</TabsTrigger>
            <TabsTrigger value="project-updates">Project Updates</TabsTrigger>
            <TabsTrigger value="media-gallery">Media Gallery</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
          <TabsContent value="latest-news">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>TRUSTED-ALLY Launches New Education Initiative</CardTitle>
                    <CardDescription>May 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      TRUSTED-ALLY has launched a groundbreaking education program aimed at providing free learning
                      resources to underprivileged communities...
                    </p>
                    <Button className="mt-4" variant="outline">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="project-updates">
            <h2 className="text-2xl font-semibold mb-4">Project Updates</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Environmental Clean-up Drive Exceeds Expectations</CardTitle>
                    <CardDescription>June 1, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our recent environmental clean-up drive has surpassed all expectations, with over 500 volunteers
                      participating and collecting over 2 tons of waste...
                    </p>
                    <Button className="mt-4" variant="outline">
                      View Full Report
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="media-gallery">
            <h2 className="text-2xl font-semibold mb-4">Media Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Image ${i}`}
                    alt={`Gallery Image ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <Button className="mt-6">View All Media</Button>
          </TabsContent>
          <TabsContent value="blog">
            <h2 className="text-2xl font-semibold mb-4">Blog</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <article key={i} className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    The Importance of Community Engagement in Social Development
                  </h3>
                  <p className="text-muted-foreground mb-2">By John Doe | July 10, 2023</p>
                  <p>
                    Community engagement is a crucial aspect of social development. It fosters a sense of belonging,
                    encourages participation, and leads to more sustainable outcomes...
                  </p>
                  <Button className="mt-4" variant="link">
                    Read Full Article
                  </Button>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">© 2025 Trusted Ally, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@trustedally.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Trusted Street, Ally City, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

