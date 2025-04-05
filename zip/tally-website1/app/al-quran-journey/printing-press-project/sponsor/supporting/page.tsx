import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SimpleFooter from "@/components/simple-footer"

export default function SupportingPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/al-quran-journey/printing-press-project" className="text-primary hover:text-primary/80">
              &larr; Back to Printing Press Project
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Become a Supporting Partner</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community of Supporting Partners</h2>
            <p className="text-gray-700 mb-6">
              Supporting Partners form the backbone of our Modern Printing Press Project. Your contribution, combined
              with others, creates the foundation for this important initiative to flourish and succeed.
            </p>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <p className="italic text-gray-600">
                "The best of people are those who are most beneficial to people." - Hadith
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Supporting Partner Benefits:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Recognition on our Supporting Partners Wall</li>
              <li>Invitation to the opening ceremony</li>
              <li>Regular project updates and newsletters</li>
              <li>Certificate of appreciation</li>
              <li>Mention in the project's annual report</li>
              <li>Access to special events and tours</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Partnership Levels:</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sapphire Partner</CardTitle>
                  <CardDescription>$5,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus special recognition in our quarterly newsletter.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emerald Partner</CardTitle>
                  <CardDescription>$2,500+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus a commemorative plaque.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pearl Partner</CardTitle>
                  <CardDescription>$1,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus recognition on our website.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">How Your Support Makes a Difference:</h3>
              <p className="text-gray-700 mb-4">As a Supporting Partner, your contribution will help:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fund ongoing operational costs</li>
                <li>Support staff training and development</li>
                <li>Maintain quality control standards</li>
                <li>Expand distribution networks</li>
                <li>Develop educational programs about the printing process</li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="mr-4">
                Become a Supporting Partner
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Monthly Giving Program</h2>
            <p className="text-gray-700 mb-6">
              Consider becoming a sustaining partner through our monthly giving program. Your regular contributions
              provide reliable support for our ongoing operations.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>$100/month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Supports paper and ink supplies for 50 Qurans monthly</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Select
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>$250/month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Funds training for one printing specialist</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Select
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>$500/month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Maintains one printing station in operation</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Select
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center">
              <Button>Join Our Monthly Giving Program</Button>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

