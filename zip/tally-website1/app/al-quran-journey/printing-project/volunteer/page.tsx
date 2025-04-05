"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Calendar, Clock, BookOpen, Printer, Truck, Users } from "lucide-react"

export default function VolunteerPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    occupation: "",
    volunteerArea: "",
    availability: "",
    experience: "",
    skills: "",
    motivation: "",
    referenceSource: "",
    termsAgreed: false,
  })

  const totalSteps = 3

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      window.scrollTo(0, 0)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="bg-emerald-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              TRUSTED-ALLY
            </Link>
            <div className="flex gap-6">
              <Link href="/education-program" className="hover:text-emerald-200 transition">
                Education
              </Link>
              <Link href="/al-quran-journey" className="hover:text-emerald-200 transition">
                Al-Quran Journey
              </Link>
              <Link href="/contact" className="hover:text-emerald-200 transition">
                Contact
              </Link>
            </div>
          </nav>

          <div className="text-center py-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 leading-tight">Volunteer for Quran Printing Project</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Join our dedicated team and help make the Holy Quran accessible to all
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-emerald-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-emerald-800">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/al-quran-journey" className="hover:text-emerald-600">
              Al-Quran Journey
            </Link>
            <span className="mx-2">/</span>
            <Link href="/al-quran-journey/printing-report" className="hover:text-emerald-600">
              Printing Report
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Volunteer</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link
            href="/al-quran-journey/printing-report"
            className="flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Printing Report
          </Link>
        </div>

        {formSubmitted ? (
          <Card className="max-w-3xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl">Application Submitted Successfully!</CardTitle>
              <CardDescription className="text-white/90">
                Thank you for your interest in volunteering with our Quran Printing Project
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-green-100 p-4 mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">What happens next?</h3>
              <p className="text-center mb-8 text-gray-600 max-w-xl">
                Your volunteer application has been successfully submitted. Our team will review your information and
                contact you within 3-5 business days to discuss the next steps in the volunteer onboarding process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-sm">Application Review</h4>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-sm">Orientation</h4>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <Printer className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm">Start Volunteering</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button asChild>
                  <Link href="/al-quran-journey/printing-report">Explore More Opportunities</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg border-b">
                <CardTitle>Volunteer Opportunities</CardTitle>
                <CardDescription>
                  Explore the different ways you can contribute to our Quran Printing Project
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="printing" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="printing" className="flex flex-col items-center gap-1 py-2 h-auto">
                      <Printer className="h-4 w-4" />
                      <span className="text-xs">Printing</span>
                    </TabsTrigger>
                    <TabsTrigger value="quality" className="flex flex-col items-center gap-1 py-2 h-auto">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-xs">Quality Control</span>
                    </TabsTrigger>
                    <TabsTrigger value="distribution" className="flex flex-col items-center gap-1 py-2 h-auto">
                      <Truck className="h-4 w-4" />
                      <span className="text-xs">Distribution</span>
                    </TabsTrigger>
                    <TabsTrigger value="admin" className="flex flex-col items-center gap-1 py-2 h-auto">
                      <Users className="h-4 w-4" />
                      <span className="text-xs">Administration</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="printing" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-3">Printing Team Volunteer</h3>
                        <p className="mb-4">
                          Join our printing team to help with the production of high-quality Qurans. You'll assist with
                          paper preparation, printing operations, and binding processes.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Time Commitment: 8-10 hours/week</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Duration: Minimum 3 months</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-gray-500">Printing team image</div>
                        {/* Replace with actual image */}
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Skills Required:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Attention to Detail
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Physical Stamina</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Basic Technical Skills
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Reliability</Badge>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="quality" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-3">Quality Control Volunteer</h3>
                        <p className="mb-4">
                          Help ensure the accuracy and quality of each printed Quran. You'll inspect printed pages,
                          verify text accuracy, and check binding quality.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Time Commitment: 6-8 hours/week</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Duration: Minimum 3 months</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-gray-500">Quality control team image</div>
                        {/* Replace with actual image */}
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Skills Required:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Excellent Attention to Detail
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Basic Arabic Knowledge
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Patience</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Quality Focus</Badge>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="distribution" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-3">Distribution Volunteer</h3>
                        <p className="mb-4">
                          Help distribute Qurans to schools, communities, and refugee camps. You'll assist with
                          packaging, logistics planning, and direct distribution.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Time Commitment: Flexible (event-based)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Duration: Minimum 3 distribution events</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-gray-500">Distribution team image</div>
                        {/* Replace with actual image */}
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Skills Required:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Organization</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Communication</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Physical Stamina</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Reliability</Badge>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="admin" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-3">Administrative Volunteer</h3>
                        <p className="mb-4">
                          Support the project with administrative tasks such as record-keeping, donor communications,
                          inventory management, and coordination.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Time Commitment: 5-10 hours/week</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm">Duration: Minimum 3 months</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-gray-500">Administrative team image</div>
                        {/* Replace with actual image */}
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Skills Required:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Computer Literacy
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Organization</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Communication</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Attention to Detail
                        </Badge>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg border-b">
                <CardTitle>Volunteer Application Form</CardTitle>
                <CardDescription>Please complete the form below to apply for a volunteer position</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>
                            <Input
                              id="age"
                              name="age"
                              type="number"
                              min="18"
                              value={formData.age}
                              onChange={handleInputChange}
                              placeholder="Enter your age"
                              required
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              placeholder="Enter your address"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="occupation">Occupation</Label>
                            <Input
                              id="occupation"
                              name="occupation"
                              value={formData.occupation}
                              onChange={handleInputChange}
                              placeholder="Enter your occupation"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="referenceSource">How did you hear about us?</Label>
                            <Select
                              value={formData.referenceSource}
                              onValueChange={(value) => handleSelectChange("referenceSource", value)}
                            >
                              <SelectTrigger id="referenceSource">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="friend">Friend or Family</SelectItem>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="event">Event</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Volunteer Preferences</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="volunteerArea">Preferred Volunteer Area</Label>
                            <Select
                              value={formData.volunteerArea}
                              onValueChange={(value) => handleSelectChange("volunteerArea", value)}
                            >
                              <SelectTrigger id="volunteerArea">
                                <SelectValue placeholder="Select an area" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="printing">Printing Team</SelectItem>
                                <SelectItem value="quality">Quality Control</SelectItem>
                                <SelectItem value="distribution">Distribution</SelectItem>
                                <SelectItem value="admin">Administration</SelectItem>
                                <SelectItem value="any">Any Area (Flexible)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="availability">Availability</Label>
                            <Select
                              value={formData.availability}
                              onValueChange={(value) => handleSelectChange("availability", value)}
                            >
                              <SelectTrigger id="availability">
                                <SelectValue placeholder="Select availability" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekends">Weekends Only</SelectItem>
                                <SelectItem value="weekdays">Weekdays Only</SelectItem>
                                <SelectItem value="evenings">Evenings Only</SelectItem>
                                <SelectItem value="fullTime">Full-Time (40+ hours/week)</SelectItem>
                                <SelectItem value="partTime">Part-Time (10-20 hours/week)</SelectItem>
                                <SelectItem value="flexible">Flexible Schedule</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="experience">Previous Volunteer Experience</Label>
                            <Textarea
                              id="experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              placeholder="Describe any previous volunteer experience"
                              rows={3}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="skills">Relevant Skills</Label>
                            <Textarea
                              id="skills"
                              name="skills"
                              value={formData.skills}
                              onChange={handleInputChange}
                              placeholder="List any skills relevant to your preferred volunteer area"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Motivation & Confirmation</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="motivation">
                              Why do you want to volunteer with our Quran Printing Project?
                            </Label>
                            <Textarea
                              id="motivation"
                              name="motivation"
                              value={formData.motivation}
                              onChange={handleInputChange}
                              placeholder="Share your motivation for volunteering with us"
                              rows={4}
                              required
                            />
                          </div>

                          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-sm">
                            <h4 className="font-semibold mb-3 text-gray-900">Volunteer Agreement</h4>
                            <p className="mb-4 text-gray-700">By submitting this form, you agree to:</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              <li>Provide accurate and truthful information in your application</li>
                              <li>Participate in volunteer activities with integrity, respect, and professionalism</li>
                              <li>Follow the guidelines, policies, and code of conduct of TRUSTED-ALLY</li>
                              <li>Maintain confidentiality regarding sensitive information you may encounter</li>
                              <li>Allow us to contact you regarding volunteer opportunities and related matters</li>
                              <li>Understand that volunteering is unpaid and does not constitute employment</li>
                              <li>Commit to the time requirements of your chosen volunteer position</li>
                            </ul>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.termsAgreed}
                              onCheckedChange={() =>
                                setFormData({
                                  ...formData,
                                  termsAgreed: !formData.termsAgreed,
                                })
                              }
                              required
                            />
                            <Label htmlFor="terms" className="font-normal">
                              I have read and agree to the terms and conditions of volunteering with TRUSTED-ALLY
                            </Label>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-4 border-t">
                      {currentStep > 1 ? (
                        <Button type="button" variant="outline" onClick={handlePrevious}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                      ) : (
                        <Button type="button" variant="outline" asChild>
                          <Link href="/al-quran-journey/printing-report">Cancel</Link>
                        </Button>
                      )}

                      {currentStep < totalSteps ? (
                        <Button type="button" onClick={handleNext} className="bg-emerald-600 hover:bg-emerald-700">
                          Next <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.termsAgreed}
                          className="bg-emerald-600 hover:bg-emerald-700"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUSTED-ALLY</h3>
              <p className="text-emerald-100">
                Dedicated to illuminating minds through Quranic wisdom and scholarly research.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-emerald-100 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-emerald-100 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/education-program" className="text-emerald-100 hover:text-white transition">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-emerald-100 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Al-Quran Journey</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/al-quran-journey/modern-science"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Modern Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/research-methodologies"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Research Methods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/printing-distribution"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Printing Excellence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/global-network"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Global Network
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-emerald-100">
                Email: info@trusted-ally.org
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

