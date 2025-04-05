import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SimpleFooter from "@/components/simple-footer"

export default function MajorSponsorPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Become a Major Sponsor</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Make a Significant Impact as a Major Sponsor</h2>
            <p className="text-gray-700 mb-6">
              Major Sponsors play a crucial role in bringing our Modern Printing Press Project to life. Your substantial
              contribution will help establish a world-class facility dedicated to producing high-quality Qurans.
            </p>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <p className="italic text-gray-600">
                "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise." - Hadith
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Major Sponsor Benefits:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Prominent recognition on our Major Sponsors Wall</li>
              <li>Special invitation to the opening ceremony and annual events</li>
              <li>Guided tours of the printing facility</li>
              <li>Special edition Quran from our production</li>
              <li>Regular updates on project progress</li>
              <li>Recognition in project publications and website</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Sponsorship Opportunities:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Diamond Sponsor</CardTitle>
                  <CardDescription>$25,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus naming rights for a section of the printing facility.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select This Level</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ruby Sponsor</CardTitle>
                  <CardDescription>$10,000+</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All standard benefits plus special recognition at the opening ceremony.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select This Level</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Your Sponsorship Impact:</h3>
              <p className="text-gray-700 mb-4">As a Major Sponsor, your contribution will directly support:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Purchase of essential printing equipment</li>
                <li>Development of quality control processes</li>
                <li>Training programs for staff</li>
                <li>Establishment of distribution channels</li>
                <li>Research and development for printing innovations</li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" className="mr-4">
                Become a Major Sponsor Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Our Sponsorship Team</h2>
            <p className="text-gray-700 mb-6">
              Our dedicated team is ready to discuss how you can become a Major Sponsor and the specific impact your
              contribution will make.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information:</h3>
                <p className="text-gray-700 mb-1">Email: sponsors@printingproject.org</p>
                <p className="text-gray-700 mb-1">Phone: +880 1XXX-XXXXXX</p>
                <p className="text-gray-700">Office: Dhaka, Bangladesh</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Schedule a Discussion:</h3>
                <p className="text-gray-700 mb-4">
                  We would be pleased to arrange a meeting to discuss your sponsorship in detail.
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

