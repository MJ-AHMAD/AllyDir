import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Cox's Bazar District Management</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Trusted Ally is a comprehensive management system designed to support the sustainable development and
              effective governance of Cox's Bazar district through integrated information, services, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#hubs">Explore Our Hubs</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/coxs1.png"
              alt="Cox's Bazar District"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To facilitate sustainable development in Cox's Bazar through integrated information systems, effective
                resource management, and collaborative governance that addresses the unique challenges and opportunities
                of the district while prioritizing community welfare and environmental conservation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A thriving Cox's Bazar where economic prosperity, social equity, and environmental sustainability
                coexist harmoniously, supported by transparent governance, community participation, and innovative
                solutions that benefit both residents and visitors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community-Centered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prioritizing the needs, voices, and well-being of local communities in all decision-making processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Balancing economic development with environmental conservation and social equity for long-term
                prosperity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Embracing creative solutions and technologies to address complex challenges and improve service
                delivery.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Striving for the highest standards of quality and performance in all our initiatives and services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Responsiveness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Adapting quickly to changing needs, emerging challenges, and feedback from stakeholders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Maintaining open communication, accountability, and integrity in all operations and decision-making.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Strategic Objectives</h2>
        <div className="bg-muted p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrated Information Management</h3>
                  <p className="text-muted-foreground">
                    Develop and maintain comprehensive information systems that facilitate data-driven decision-making
                    across all sectors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Tourism Development</h3>
                  <p className="text-muted-foreground">
                    Promote responsible tourism that benefits local communities while preserving natural and cultural
                    assets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Conservation</h3>
                  <p className="text-muted-foreground">
                    Implement measures to protect and restore Cox's Bazar's unique ecosystems, including beaches,
                    forests, and marine environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
                  <p className="text-muted-foreground">
                    Strengthen local communities through education, skills development, and inclusive participation in
                    governance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Infrastructure Development</h3>
                  <p className="text-muted-foreground">
                    Support the development of sustainable infrastructure that enhances quality of life and economic
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Disaster Resilience</h3>
                  <p className="text-muted-foreground">
                    Enhance the district's capacity to prepare for, respond to, and recover from natural disasters and
                    climate change impacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Building a Better Cox's Bazar</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Together, we can create a sustainable, prosperous, and inclusive future for Cox's Bazar. Explore our various
            hubs to learn more about our initiatives or get in touch to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#hubs">Explore Our Hubs</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

