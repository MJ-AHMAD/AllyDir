import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimpleFooter } from "@/components/simple-footer"

export default function EquipmentSponsorshipPage() {
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Equipment Sponsorship Opportunities</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sponsor Essential Equipment for Our Modern Printing Press</h2>
            <p className="text-gray-700 mb-6">
              Our printing press requires state-of-the-art equipment to produce high-quality Qurans. By sponsoring
              specific equipment, you can make a tangible contribution to this important project and leave a lasting
              legacy.
            </p>

            <Tabs defaultValue="printing" className="mb-8">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="printing">Printing Equipment</TabsTrigger>
                <TabsTrigger value="binding">Binding Equipment</TabsTrigger>
                <TabsTrigger value="quality">Quality Control</TabsTrigger>
                <TabsTrigger value="digital">Digital Systems</TabsTrigger>
              </TabsList>

              <TabsContent value="printing" className="space-y-6">
                <h3 className="text-xl font-semibold mb-3">Printing Press Equipment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>High-Speed Offset Press</CardTitle>
                      <CardDescription>$150,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        The heart of our printing operation, capable of producing thousands of high-quality pages per
                        hour with exceptional clarity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Produces 15,000 sheets per hour</li>
                        <li>Six-color printing capability</li>
                        <li>Automatic plate changing</li>
                        <li>Integrated quality control system</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Digital Printing System</CardTitle>
                      <CardDescription>$75,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        For specialized and short-run printing needs, offering flexibility and customization options.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>High-resolution output</li>
                        <li>Variable data printing</li>
                        <li>Special edition capabilities</li>
                        <li>Reduced setup time</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="binding" className="space-y-6">
                <h3 className="text-xl font-semibold mb-3">Binding Equipment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Automated Binding System</CardTitle>
                      <CardDescription>$85,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Creates durable, beautiful bindings that will last for generations.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Multiple binding styles</li>
                        <li>Precision folding and gathering</li>
                        <li>Automated gluing and stitching</li>
                        <li>Capacity for leather and specialty bindings</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cover Making System</CardTitle>
                      <CardDescription>$45,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Creates beautiful, durable covers with embossing and gilding capabilities.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Gold foil application</li>
                        <li>Embossing and debossing</li>
                        <li>Multiple material handling</li>
                        <li>Precision alignment</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="quality" className="space-y-6">
                <h3 className="text-xl font-semibold mb-3">Quality Control Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Automated Inspection System</CardTitle>
                      <CardDescription>$60,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Ensures every page meets our exacting standards for clarity and accuracy.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>High-resolution cameras</li>
                        <li>AI-powered error detection</li>
                        <li>Real-time monitoring</li>
                        <li>Comprehensive reporting</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Color Management System</CardTitle>
                      <CardDescription>$35,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Maintains consistent color accuracy throughout the printing process.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Spectrophotometric analysis</li>
                        <li>Calibration tools</li>
                        <li>Color matching software</li>
                        <li>Profile management</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="digital" className="space-y-6">
                <h3 className="text-xl font-semibold mb-3">Digital Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Workflow Management System</CardTitle>
                      <CardDescription>$40,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Coordinates all aspects of the printing process for maximum efficiency.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Job tracking and scheduling</li>
                        <li>Resource allocation</li>
                        <li>Production analytics</li>
                        <li>Integration with all equipment</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Digital Asset Management</CardTitle>
                      <CardDescription>$25,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Securely stores and manages all digital files and templates.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Secure file storage</li>
                        <li>Version control</li>
                        <li>Collaborative editing</li>
                        <li>Backup and recovery</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sponsor This Equipment</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Equipment Sponsorship Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your name or organization permanently associated with the sponsored equipment</li>
                <li>Plaque of recognition displayed prominently on or near the equipment</li>
                <li>Certificate of appreciation and regular updates on the project</li>
                <li>Invitation to the inauguration ceremony and special events</li>
                <li>Recognition in our annual reports and publications</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Make a Lasting Contribution?</h3>
              <p className="text-gray-700 mb-6">
                Contact our sponsorship team to discuss equipment sponsorship opportunities and payment arrangements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/al-quran-journey/printing-press-project/sponsor/founding" passHref>
                  <Button size="lg" variant="default">
                    Become a Founding Patron
                  </Button>
                </Link>
                <Link href="/al-quran-journey/printing-press-project/contact" passHref>
                  <Button size="lg" variant="outline">
                    Contact Project Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

