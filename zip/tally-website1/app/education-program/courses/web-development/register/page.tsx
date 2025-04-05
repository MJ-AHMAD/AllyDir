"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    goals: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    // Show success message
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="border-blue-100 overflow-hidden">
            <div className="bg-blue-600 p-8 text-white text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration Successful!</h1>
              <p className="text-xl opacity-90">
                Congratulations on taking the first step toward your web development journey!
              </p>
            </div>
            <CardContent className="p-8 text-center space-y-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">What Happens Next?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Thank you for registering for our Web Development course. We're thrilled to have you join our
                  community of learners!
                </p>
                <div className="space-y-6 text-left mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Check Your Email</h3>
                      <p className="text-gray-600">
                        We've sent a confirmation email to <span className="font-medium">{formData.email}</span>. Please
                        check your inbox (and spam folder) and confirm your registration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Access Your Student Dashboard</h3>
                      <p className="text-gray-600">
                        Within 24 hours, you'll receive your unique student ID and login credentials to access your
                        personalized learning dashboard.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Begin Your Learning Journey</h3>
                      <p className="text-gray-600">
                        Once you've logged in, you can start your step-by-step learning journey through our
                        comprehensive web development curriculum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/education-program/student-dashboard">
                      Go to Student Dashboard <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/education-program">Explore Other Courses</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
            <Link href="/about-us" className="font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary transition-colors">
              Education Program
            </Link>
            <Link href="/impact" className="font-medium hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="/get-involved" className="font-medium hover:text-primary transition-colors">
              Get Involved
            </Link>
          </nav>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-800">Begin Your Web Development Journey</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're excited to welcome you to our Web Development course. Fill out the form below to register and start
            your learning journey.
          </p>
        </div>

        <Card className="border-blue-100">
          <CardHeader className="bg-blue-50 border-b border-blue-100">
            <CardTitle>Registration Form</CardTitle>
            <CardDescription>
              Please provide your information to register for the Web Development course
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Educational Background</Label>
                <Select onValueChange={(value) => handleSelectChange("education", value)} value={formData.education}>
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Select your highest education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Prior Experience in Web Development</Label>
                <Select onValueChange={(value) => handleSelectChange("experience", value)} value={formData.experience}>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Experience</SelectItem>
                    <SelectItem value="beginner">Beginner (Some HTML/CSS)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (Basic JavaScript)</SelectItem>
                    <SelectItem value="advanced">Advanced (Some Framework Experience)</SelectItem>
                    <SelectItem value="professional">Professional Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Your Learning Goals</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  placeholder="Tell us what you hope to achieve with this course"
                  className="min-h-[120px]"
                  value={formData.goals}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    By checking this box, you agree to our{" "}
                    <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  Complete Registration
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="bg-blue-50 border-t border-blue-100 flex flex-col items-center text-center p-6">
            <p className="text-sm text-gray-600 mb-2">
              Already registered?{" "}
              <Link href="/education-program/student-dashboard" className="text-blue-600 hover:underline">
                Sign in to your dashboard
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact our support team
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUSTED-ALLY</h3>
              <p>
                We work to build a better society through education, social development, and environmental improvement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: info@trusted-ally.org</p>
              <p>Phone: +880 1234-567890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

