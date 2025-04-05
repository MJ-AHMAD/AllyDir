"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowLeft, Check, HelpCircle, Calendar, User, FileText, Briefcase, Heart, Clock } from "lucide-react"

export default function VolunteerForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationalId: "",
    address: "",
    phone: "",
    email: "",
    altPhone: "",
    currentAddress: "",
    qualification: "",
    institution: "",
    fieldOfStudy: "",
    graduationDate: "",
    skills: {
      teaching: false,
      organizing: false,
      fundraising: false,
      communication: false,
      leadership: false,
      technical: false,
      design: false,
      writing: false,
    },
    experience: "",
    years: "",
    preferredAreas: {
      education: false,
      environment: false,
      health: false,
      community: false,
      social: false,
      other: false,
    },
    availability: "",
    motivation: "",
    referenceSource: "",
    termsAgreed: false,
    signature: "",
  })

  const totalSteps = 6

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

  const handleCheckboxChange = (category, name) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: !formData[category][name],
      },
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

    try {
      const response = await fetch("/api/submit-volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setFormSubmitted(true)
        window.scrollTo(0, 0)
      } else {
        alert("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepIcons = [
    <User key="user" className="h-5 w-5" />,
    <FileText key="contact" className="h-5 w-5" />,
    <Briefcase key="education" className="h-5 w-5" />,
    <Heart key="skills" className="h-5 w-5" />,
    <Calendar key="availability" className="h-5 w-5" />,
    <Check key="terms" className="h-5 w-5" />,
  ]

  const stepTitles = [
    "Personal Information",
    "Contact Details",
    "Education",
    "Skills & Experience",
    "Preferences",
    "Confirmation",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
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
            <Link
              href="/volunteer"
              className="flex items-center gap-1 text-sm font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Volunteer Page
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Badge className="mb-2 bg-white/20 hover:bg-white/30 text-white">Join Our Team</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Volunteer Application</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Thank you for your interest in volunteering with TRUSTED-ALLY. Please complete the form below to apply.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {formSubmitted ? (
          <Card className="max-w-3xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl">Application Submitted Successfully!</CardTitle>
              <CardDescription className="text-white/90">
                Thank you for your interest in volunteering with TRUSTED-ALLY
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
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-sm">Application Review</h4>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-sm">Interview</h4>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm">Onboarding</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button asChild>
                  <Link href="/volunteer">Explore More Volunteer Opportunities</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-8 overflow-x-auto pb-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[100px]">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 ${
                        index + 1 === currentStep
                          ? "bg-blue-600 text-white"
                          : index + 1 < currentStep
                            ? "bg-green-100 text-green-600 border border-green-200"
                            : "bg-gray-100 text-gray-400 border border-gray-200"
                      }`}
                    >
                      {index + 1 < currentStep ? <Check className="h-5 w-5" /> : stepIcons[index]}
                    </div>
                    <span
                      className={`text-xs font-medium ${index + 1 === currentStep ? "text-blue-600" : "text-gray-500"}`}
                    >
                      {stepTitles[index]}
                    </span>
                    {index < totalSteps - 1 && (
                      <div
                        className={`hidden sm:block h-[2px] w-16 mt-5 ${
                          index + 1 < currentStep ? "bg-green-500" : "bg-gray-200"
                        }`}
                        style={{ marginLeft: "100%" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-lg">
                {currentStep === 1 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <CardTitle>Personal Information</CardTitle>
                      </div>
                      <CardDescription>
                        Please provide your basic personal details to help us know you better
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="border-gray-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-[200px] text-xs">
                                    You must be at least 18 years old to volunteer with us
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            type="date"
                            className="border-gray-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select
                            value={formData.gender}
                            onValueChange={(value) => handleSelectChange("gender", value)}
                          >
                            <SelectTrigger id="gender" className="border-gray-300">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="nationalId">National ID / Passport No</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-[200px] text-xs">
                                    This information is required for security verification
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="nationalId"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleInputChange}
                            placeholder="Enter your ID number"
                            className="border-gray-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Permanent Address</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your permanent address"
                          className="border-gray-300"
                          rows={3}
                          required
                        />
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <CardTitle>Contact Information</CardTitle>
                      </div>
                      <CardDescription>
                        How can we reach you? This information will be used for communication purposes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="border-gray-300"
                            required
                          />
                          <p className="text-xs text-gray-500">Format: +880 1XXX-XXXXXX</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Enter your email address"
                            className="border-gray-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="altPhone">
                            Alternative Contact Number <span className="text-gray-500 text-xs">(Optional)</span>
                          </Label>
                          <Input
                            id="altPhone"
                            name="altPhone"
                            value={formData.altPhone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="Enter alternative phone number"
                            className="border-gray-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="referenceSource">How did you hear about us?</Label>
                          </div>
                          <Select
                            value={formData.referenceSource}
                            onValueChange={(value) => handleSelectChange("referenceSource", value)}
                          >
                            <SelectTrigger id="referenceSource" className="border-gray-300">
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
                      <div className="space-y-2">
                        <Label htmlFor="currentAddress">
                          Current Address{" "}
                          <span className="text-gray-500 text-xs">(if different from permanent address)</span>
                        </Label>
                        <Textarea
                          id="currentAddress"
                          name="currentAddress"
                          value={formData.currentAddress}
                          onChange={handleInputChange}
                          placeholder="Enter your current address"
                          className="border-gray-300"
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        <CardTitle>Educational Background</CardTitle>
                      </div>
                      <CardDescription>Tell us about your education and qualifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="qualification">Highest Qualification</Label>
                          <Select
                            value={formData.qualification}
                            onValueChange={(value) => handleSelectChange("qualification", value)}
                          >
                            <SelectTrigger id="qualification" className="border-gray-300">
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="highSchool">High School</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="associate">Associate Degree</SelectItem>
                              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                              <SelectItem value="master">Master's Degree</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution/University Name</Label>
                          <Input
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="Enter institution name"
                            className="border-gray-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fieldOfStudy">Field of Study</Label>
                          <Input
                            id="fieldOfStudy"
                            name="fieldOfStudy"
                            value={formData.fieldOfStudy}
                            onChange={handleInputChange}
                            placeholder="Enter your field of study"
                            className="border-gray-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="graduationDate">
                            Graduation Date <span className="text-gray-500 text-xs">(or expected)</span>
                          </Label>
                          <Input
                            id="graduationDate"
                            name="graduationDate"
                            value={formData.graduationDate}
                            onChange={handleInputChange}
                            type="date"
                            className="border-gray-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <h4 className="font-medium text-amber-800 mb-2 flex items-center gap-1.5">
                          <HelpCircle className="h-4 w-4" />
                          Why we ask for educational information
                        </h4>
                        <p className="text-sm text-amber-700">
                          Your educational background helps us match you with volunteer opportunities that align with
                          your knowledge and skills. We welcome volunteers from all educational backgrounds.
                        </p>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-blue-600" />
                        <CardTitle>Skills and Experience</CardTitle>
                      </div>
                      <CardDescription>Share your skills and previous volunteer experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="space-y-4">
                        <Label>
                          Relevant Skills <span className="text-gray-500 text-xs">(select all that apply)</span>
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="teaching"
                              checked={formData.skills.teaching}
                              onCheckedChange={() => handleCheckboxChange("skills", "teaching")}
                            />
                            <Label htmlFor="teaching" className="font-normal text-sm">
                              Teaching
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="organizing"
                              checked={formData.skills.organizing}
                              onCheckedChange={() => handleCheckboxChange("skills", "organizing")}
                            />
                            <Label htmlFor="organizing" className="font-normal text-sm">
                              Organizing
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="fundraising"
                              checked={formData.skills.fundraising}
                              onCheckedChange={() => handleCheckboxChange("skills", "fundraising")}
                            />
                            <Label htmlFor="fundraising" className="font-normal text-sm">
                              Fundraising
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="communication"
                              checked={formData.skills.communication}
                              onCheckedChange={() => handleCheckboxChange("skills", "communication")}
                            />
                            <Label htmlFor="communication" className="font-normal text-sm">
                              Communication
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="leadership"
                              checked={formData.skills.leadership}
                              onCheckedChange={() => handleCheckboxChange("skills", "leadership")}
                            />
                            <Label htmlFor="leadership" className="font-normal text-sm">
                              Leadership
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="technical"
                              checked={formData.skills.technical}
                              onCheckedChange={() => handleCheckboxChange("skills", "technical")}
                            />
                            <Label htmlFor="technical" className="font-normal text-sm">
                              Technical
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="design"
                              checked={formData.skills.design}
                              onCheckedChange={() => handleCheckboxChange("skills", "design")}
                            />
                            <Label htmlFor="design" className="font-normal text-sm">
                              Design
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                            <Checkbox
                              id="writing"
                              checked={formData.skills.writing}
                              onCheckedChange={() => handleCheckboxChange("skills", "writing")}
                            />
                            <Label htmlFor="writing" className="font-normal text-sm">
                              Writing
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Previous Volunteer Experiences</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Describe your previous volunteer experiences, including organizations, roles, and responsibilities"
                          className="border-gray-300"
                          rows={4}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="years">Years of Volunteering Experience</Label>
                          <Input
                            id="years"
                            name="years"
                            value={formData.years}
                            onChange={handleInputChange}
                            type="number"
                            min="0"
                            placeholder="Enter number of years"
                            className="border-gray-300"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="motivation">What motivates you to volunteer with us?</Label>
                          <Textarea
                            id="motivation"
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleInputChange}
                            placeholder="Share your motivation for volunteering with TRUSTED-ALLY"
                            className="border-gray-300"
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 5 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <CardTitle>Preferred Volunteering Areas</CardTitle>
                      </div>
                      <CardDescription>Tell us how you'd like to contribute and your availability</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="space-y-4">
                        <Label>
                          Areas of Interest <span className="text-gray-500 text-xs">(select all that apply)</span>
                        </Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                            <Checkbox
                              id="education"
                              checked={formData.preferredAreas.education}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "education")}
                            />
                            <Label htmlFor="education" className="font-medium text-blue-700">
                              Education
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-md border border-green-100">
                            <Checkbox
                              id="environment"
                              checked={formData.preferredAreas.environment}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "environment")}
                            />
                            <Label htmlFor="environment" className="font-medium text-green-700">
                              Environment
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-red-50 p-3 rounded-md border border-red-100">
                            <Checkbox
                              id="health"
                              checked={formData.preferredAreas.health}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "health")}
                            />
                            <Label htmlFor="health" className="font-medium text-red-700">
                              Health
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-amber-50 p-3 rounded-md border border-amber-100">
                            <Checkbox
                              id="community"
                              checked={formData.preferredAreas.community}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "community")}
                            />
                            <Label htmlFor="community" className="font-medium text-amber-700">
                              Community Development
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-purple-50 p-3 rounded-md border border-purple-100">
                            <Checkbox
                              id="social"
                              checked={formData.preferredAreas.social}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "social")}
                            />
                            <Label htmlFor="social" className="font-medium text-purple-700">
                              Social Initiatives
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md border border-gray-100">
                            <Checkbox
                              id="other"
                              checked={formData.preferredAreas.other}
                              onCheckedChange={() => handleCheckboxChange("preferredAreas", "other")}
                            />
                            <Label htmlFor="other" className="font-medium text-gray-700">
                              Other
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability</Label>
                        <Select
                          value={formData.availability}
                          onValueChange={(value) => handleSelectChange("availability", value)}
                        >
                          <SelectTrigger id="availability" className="border-gray-300">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekends">Weekends Only</SelectItem>
                            <SelectItem value="weekdays">Weekdays Only</SelectItem>
                            <SelectItem value="evenings">Evenings Only</SelectItem>
                            <SelectItem value="fullTime">Full-Time (40+ hours/week)</SelectItem>
                            <SelectItem value="partTime">Part-Time (10-20 hours/week)</SelectItem>
                            <SelectItem value="flexible">Flexible Schedule</SelectItem>
                            <SelectItem value="remote">Remote Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          Time Commitment
                        </h4>
                        <p className="text-sm text-blue-700">
                          Most volunteer positions require a minimum commitment of 3-6 months, with at least 4-8 hours
                          per week. Some roles may have different requirements. We value your time and will work with
                          you to find a schedule that fits your availability.
                        </p>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === 6 && (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600" />
                        <CardTitle>Consent and Terms</CardTitle>
                      </div>
                      <CardDescription>
                        Please review and agree to our terms before submitting your application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-sm">
                          <h4 className="font-semibold mb-3 text-gray-900">Volunteer Agreement</h4>
                          <p className="mb-4 text-gray-700">By submitting this form, you agree to:</p>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Provide accurate and truthful information in your application</li>
                            <li>Participate in volunteer activities with integrity, respect, and professionalism</li>
                            <li>Follow the guidelines, policies, and code of conduct of TRUSTED-ALLY</li>
                            <li>Maintain confidentiality regarding sensitive information you may encounter</li>
                            <li>Allow us to contact you regarding volunteer opportunities and related matters</li>
                            <li>Allow us to store your information securely for volunteer coordination purposes</li>
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
                        <div className="space-y-2">
                          <Label htmlFor="signature">
                            Digital Signature <span className="text-gray-500 text-xs">(Type your full name)</span>
                          </Label>
                          <Input
                            id="signature"
                            name="signature"
                            value={formData.signature}
                            onChange={handleInputChange}
                            placeholder="Type your full name as signature"
                            className="border-gray-300"
                            required
                          />
                          <p className="text-xs text-gray-500">
                            By typing your name above, you are signing this application electronically.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}

                <CardFooter className="flex justify-between py-6 border-t bg-gray-50">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                  ) : (
                    <Button type="button" variant="outline" asChild>
                      <Link href="/volunteer">Cancel</Link>
                    </Button>
                  )}

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                      Next <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAgreed}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </form>
          </>
        )}
      </main>
    </div>
  )
}

