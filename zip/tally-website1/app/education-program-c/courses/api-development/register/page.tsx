"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ApiDevelopmentRegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    background: "",
    goals: "",
    termsAgreed: false,
  })

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    errorMessage: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAgreed: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.termsAgreed) {
      setFormState({
        ...formState,
        isError: true,
        errorMessage: "You must agree to the terms and conditions.",
      })
      return
    }

    setFormState({ ...formState, isSubmitting: true, isError: false })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        errorMessage: "",
      })

      // Redirect after successful submission (after showing success message)
      setTimeout(() => {
        router.push("/education-program-c/student-dashboard")
      }, 3000)
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: "There was an error submitting your registration. Please try again.",
      })
    }
  }

  if (formState.isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800">Registration Successful!</AlertTitle>
          <AlertDescription className="text-green-700">
            Thank you for registering for the API Development course. We have sent a confirmation email with further
            details. You will be redirected to the student dashboard shortly.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">API Development Course Registration</CardTitle>
              <CardDescription>
                Fill out the form below to register for our comprehensive API Development course.
              </CardDescription>
            </CardHeader>

            {formState.isError && (
              <div className="px-6">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{formState.errorMessage}</AlertDescription>
                </Alert>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
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
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Education & Experience</h3>

                  <div className="space-y-2">
                    <Label htmlFor="education">Highest Education Level</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("education", value)}
                      value={formData.education}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="associate">Associate Degree</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD or Doctorate</SelectItem>
                        <SelectItem value="self-taught">Self-taught</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Programming Experience</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("experience", value)}
                      value={formData.experience}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                        <SelectItem value="expert">Expert (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background">Technical Background</Label>
                    <Textarea
                      id="background"
                      name="background"
                      placeholder="Briefly describe your programming background and any experience with APIs"
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
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={formData.termsAgreed} onCheckedChange={handleCheckboxChange} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full md:w-auto" disabled={formState.isSubmitting}>
                  {formState.isSubmitting ? "Submitting..." : "Register for Course"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">API Development</h4>
                <p className="text-sm text-gray-500">Comprehensive training on building robust APIs</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Duration:</span>
                  <span className="text-sm font-medium">12 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Format:</span>
                  <span className="text-sm font-medium">Online & Hands-on</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Start Date:</span>
                  <span className="text-sm font-medium">Next cohort: June 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Certificate:</span>
                  <span className="text-sm font-medium">Yes, upon completion</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium">What You'll Learn</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• RESTful API design principles</li>
                  <li>• API authentication and security</li>
                  <li>• Performance optimization</li>
                  <li>• Documentation with Swagger/OpenAPI</li>
                  <li>• Testing and debugging APIs</li>
                  <li>• Deployment and monitoring</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Prerequisites</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Basic programming knowledge</li>
                  <li>• Understanding of HTTP protocols</li>
                  <li>• Familiarity with JSON/XML formats</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

