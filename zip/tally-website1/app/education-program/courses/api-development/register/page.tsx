"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export default function ApiDevelopmentRegistrationPage() {
  const router = useRouter()
  const [formStep, setFormStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    background: "",
    goals: "",
    hearAbout: "",
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormStep(3) // Move to success page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
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
            <Link
              href="/education-program/courses/api-development"
              className="font-medium hover:text-primary transition-colors"
            >
              Back to Course
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-12">
        {formStep === 1 && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Register for API Development Course</h1>
              <p className="text-gray-600">Join our free course and master modern API development techniques</p>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-bold">
                  1
                </div>
                <div className="ml-3">
                  <p className="font-medium">Personal Information</p>
                </div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className="h-1 bg-teal-500" style={{ width: "0%" }}></div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold">
                  2
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-500">Course Details</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your contact details so we can create your student account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-sm text-gray-500">We'll send course updates to this email</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/education-program/courses/api-development">Cancel</Link>
                </Button>
                <Button onClick={() => setFormStep(2)}>Continue</Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {formStep === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Register for API Development Course</h1>
              <p className="text-gray-600">Join our free course and master modern API development techniques</p>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white font-bold">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Personal Information</p>
                </div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className="h-1 bg-teal-500" style={{ width: "100%" }}></div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-bold">
                  2
                </div>
                <div className="ml-3">
                  <p className="font-medium">Course Details</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
                <CardDescription>
                  Help us understand your background and goals to personalize your learning experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Programming Experience Level</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("experience", value)}
                      defaultValue={formData.experience}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner - Basic programming knowledge</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate - Some experience with web development
                        </SelectItem>
                        <SelectItem value="advanced">Advanced - Comfortable with backend development</SelectItem>
                        <SelectItem value="expert">Expert - Professional developer with API experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="background">Technical Background</Label>
                    <Textarea
                      id="background"
                      name="background"
                      placeholder="Briefly describe your technical background and current role"
                      value={formData.background}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goals">Learning Goals</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      placeholder="What do you hope to achieve by taking this course?"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>How did you hear about us?</Label>
                    <RadioGroup
                      defaultValue={formData.hearAbout}
                      onValueChange={(value) => handleSelectChange("hearAbout", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="social" id="social" />
                        <Label htmlFor="social">Social Media</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="friend" id="friend" />
                        <Label htmlFor="friend">Friend or Colleague</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="search" id="search" />
                        <Label htmlFor="search">Search Engine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleSelectChange("agreeTerms", checked)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the terms and conditions
                      </Label>
                      <p className="text-sm text-gray-500">
                        By checking this box, you agree to our{" "}
                        <Link href="/terms-of-service" className="text-teal-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-teal-600 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setFormStep(1)}>
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting || !formData.agreeTerms}>
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {formStep === 3 && (
          <div className="max-w-3xl mx-auto">
            <Card className="border-teal-100">
              <CardContent className="pt-6">
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Congratulations on taking this important step in your learning journey! We're excited to have you
                    join our API Development course.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-teal-50 p-4 rounded-lg text-left">
                      <h3 className="font-medium text-teal-800 mb-2">What happens next?</h3>
                      <ul className="space-y-2 text-sm text-teal-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span>You'll receive a confirmation email with your student ID and login details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span>Access to the course materials will be available in your student dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span>
                            Our team will reach out within 24-48 hours to welcome you and answer any questions
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/education-program/student-dashboard">Go to Student Dashboard</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link href="/education-program">Explore More Courses</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

