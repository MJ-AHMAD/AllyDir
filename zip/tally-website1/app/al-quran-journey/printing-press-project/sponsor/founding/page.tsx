import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SimpleFooter from "@/components/simple-footer"

export default function FoundingPatronPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Become a Founding Patron</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Exclusive Circle of Founding Patrons</h2>
            <p className="text-gray-700 mb-6">
              As a Founding Patron of our Modern Printing Press Project, you will be among the select few who make this
              historic initiative possible. Your generous contribution will be recognized for generations to come.
            </p>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <p className="italic text-gray-600">
                "The ink of the scholar is more sacred than the blood of the martyr." - Islamic Tradition
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Founding Patron Benefits:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Your name permanently inscribed on our Founding Patrons Wall</li>
              <li>Exclusive invitation to the grand opening ceremony</li>
              <li>VIP tours of the printing facility for you and your family</li>
              <li>Personalized, limited-edition Quran from our first print run</li>
              <li>Quarterly updates on the project's progress and impact</li>
              <li>Recognition in all major publications about the project</li>
              <li>Opportunity to participate in strategic planning sessions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Contribution Levels:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Platinum Founding Patron</CardTitle>
                  <CardDescription>$100,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus naming rights for a major facility within the printing complex.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select This Level</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gold Founding Patron</CardTitle>
                  <CardDescription>$50,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    All standard benefits plus special recognition at annual events for the lifetime of the project.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select This Level</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">How Your Contribution Makes a Difference:</h3>
              <p className="text-gray-700 mb-4">
                Your generous support as a Founding Patron will directly contribute to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Acquisition of state-of-the-art printing equipment</li>
                <li>Construction of environmentally sustainable printing facilities</li>
                <li>Training programs for skilled printing professionals</li>
                <li>Development of quality control systems</li>
                <li>Establishment of distribution networks for completed Qurans</li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="mr-4">
                Become a Founding Patron Now
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us About Becoming a Founding Patron</h2>
            <p className="text-gray-700 mb-6">
              Our team is available to discuss the details of becoming a Founding Patron and answer any questions you
              may have about this historic opportunity.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information:</h3>
                <p className="text-gray-700 mb-1">Email: patron@printingproject.org</p>
                <p className="text-gray-700 mb-1">Phone: +880 1XXX-XXXXXX</p>
                <p className="text-gray-700">Office: Dhaka, Bangladesh</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Schedule a Meeting:</h3>
                <p className="text-gray-700 mb-4">
                  We would be honored to meet with you personally to discuss your participation as a Founding Patron.
                </p>
                <Button variant="outline" className="w-full">
                  Request a Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

