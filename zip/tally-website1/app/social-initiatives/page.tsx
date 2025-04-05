import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Heart, Home, BookOpen, Leaf, Globe } from "lucide-react"

export default function SocialInitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary transition-colors">
              Education Program
            </Link>
            <Link href="/social-initiatives" className="font-medium hover:text-primary transition-colors">
              Social Initiatives
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary transition-colors">
              Environmental Development
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/com1.png"
            alt="Social Initiatives"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Social Initiatives</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Empowering communities through compassion, collaboration, and sustainable change.
            </p>
            <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
              <a href="#initiatives">Explore Our Initiatives</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Transforming Lives Together</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                At TRUSTED-ALLY, our Social Initiatives focus on creating meaningful impact in underserved communities.
                We believe in the power of collective action to address social challenges and create lasting positive
                change.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Through strategic partnerships, volunteer engagement, and innovative programs, we're working to build
                more equitable, inclusive, and resilient communities where everyone has the opportunity to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="font-semibold">
                  <Link href="/social-initiatives/support-our-initiatives">Support Our Work</Link>
                </Button>
                <Button asChild variant="outline" className="font-semibold">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sos1.png"
                    alt="Community Support"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-32 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/edu2.png"
                    alt="Education Support"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-32 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/env1.png"
                    alt="Environmental Project"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 relative">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/coop1.png"
                    alt="Social Innovation"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Key Focus Areas</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We concentrate our efforts where we can make the most significant impact, addressing critical needs and
              creating sustainable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Outreach</h3>
                <p className="text-gray-600 mb-6">
                  Connecting with marginalized communities to provide essential resources, support services, and create
                  pathways to self-sufficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mobile health clinics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Food security programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Emergency relief services</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/community-outreach"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Youth Empowerment</h3>
                <p className="text-gray-600 mb-6">
                  Equipping young people with the skills, knowledge, and opportunities they need to build bright futures
                  and become agents of positive change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Leadership development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vocational training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mentorship programs</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/youth-empowerment"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Housing Support</h3>
                <p className="text-gray-600 mb-6">
                  Working to ensure everyone has access to safe, affordable housing through advocacy, direct assistance,
                  and collaborative community projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Affordable housing initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Home repair programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Homelessness prevention</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/housing-support"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Educational Access</h3>
                <p className="text-gray-600 mb-6">
                  Breaking down barriers to education and creating inclusive learning opportunities for underserved
                  populations of all ages.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scholarship programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Adult literacy initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Educational resource centers</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/educational-access"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sustainable Livelihoods</h3>
                <p className="text-gray-600 mb-6">
                  Creating economic opportunities through skills development, microfinance, and support for small
                  businesses and social enterprises.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Microenterprise development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Job skills training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cooperative business models</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/sustainable-livelihoods"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Collaborating with international organizations to address complex social challenges and share
                  knowledge, resources, and best practices.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cross-cultural exchanges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Collaborative research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>International development projects</span>
                  </li>
                </ul>
                <Link
                  href="/social-initiatives/global-partnerships"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Through dedication, collaboration, and your support, we've made significant progress in addressing social
              challenges and improving lives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-lg">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">120+</div>
              <p className="text-lg">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-lg">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">35+</div>
              <p className="text-lg">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Behind every statistic is a personal story of transformation. Here are just a few examples of the impact
              our initiatives have made.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-56 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/edu1.png"
                  alt="Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">The Learning Center</h3>
                <p className="text-gray-600 mb-4">
                  Established in an underserved community, our Learning Center has provided educational resources to
                  over 500 children and adults, improving literacy rates by 35%.
                </p>
                <Link
                  href="/social-initiatives/success-stories/learning-center"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read the full story <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-56 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/sos1.png"
                  alt="Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Women's Cooperative</h3>
                <p className="text-gray-600 mb-4">
                  Our women's cooperative has empowered 75 women to start their own businesses, increasing household
                  incomes by an average of 60%.
                </p>
                <Link
                  href="/social-initiatives/success-stories/womens-cooperative"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read the full story <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-56 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/coop1.png"
                  alt="Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Housing Project</h3>
                <p className="text-gray-600 mb-4">
                  Through community collaboration, we've built 25 affordable homes, providing safe housing for over 100
                  individuals previously in inadequate living conditions.
                </p>
                <Link
                  href="/social-initiatives/success-stories/housing-project"
                  className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read the full story <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              There are many ways you can contribute to our social initiatives and help create positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your time and talents to make a direct impact in our communities.
              </p>
              <Button asChild className="w-full">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our work financially to help us reach more communities in need.
              </p>
              <Button asChild className="w-full">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Collaborate with us to create greater impact through shared resources and expertise.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Join Us in Creating Change</h2>
            <p className="text-xl mb-12">
              Together, we can build stronger, more resilient communities where everyone has the opportunity to thrive.
            </p>
            <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
              <Link href="/social-initiatives/support-our-initiatives">Support Our Initiatives</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                  alt="TRUSTED-ALLY Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl">TRUSTED-ALLY</span>
              </div>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">©2025 Trusted Ally, All Rights Reserved.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs-overview" className="hover:text-primary transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education-program" className="hover:text-primary transition-colors">
                    Education Program
                  </Link>
                </li>
                <li>
                  <Link href="/social-initiatives" className="hover:text-primary transition-colors">
                    Social Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/environmental-development" className="hover:text-primary transition-colors">
                    Environmental Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

