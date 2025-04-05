"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Landmark, Smartphone, Lock, Shield, Check } from "lucide-react"

export default function DonatePage() {
  const searchParams = useSearchParams()
  const packageType = searchParams.get("package") || "single"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    donationAmount: "",
    customAmount: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    nameOnCard: "",
    isRecurring: false,
    isAnonymous: false,
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Set default donation amount based on package type
  useEffect(() => {
    let amount = ""
    switch (packageType) {
      case "single":
        amount = "500"
        break
      case "classroom":
        amount = "15000"
        break
      case "school":
        amount = "100000"
        break
      case "custom":
        amount = "custom"
        break
      default:
        amount = "500"
    }

    setFormData((prev) => ({
      ...prev,
      donationAmount: amount,
    }))
  }, [packageType])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name],
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
      setIsSubmitted(true)
      window.scrollTo(0, 0)
    }, 1500)
  }

  const packageTitles = {
    single: "Single Quran Sponsor",
    classroom: "Classroom Sponsor",
    school: "School Sponsor",
    custom: "Custom Donation",
  }

  const packageDescriptions = {
    single: "Sponsor one complete Quran for ৳500",
    classroom: "Sponsor 30 Qurans for a classroom for ৳15,000",
    school: "Sponsor 200 Qurans for a school for ৳100,000",
    custom: "Choose your own donation amount",
  }

  const packageBenefits = {
    single: [
      "Your name inside the sponsored Quran",
      "Digital certificate of sponsorship",
      "Photo of recipient (when possible)",
    ],
    classroom: [
      "Your name in all sponsored Qurans",
      "Framed certificate of appreciation",
      "Photos of classroom distribution",
      "Recognition on our donor wall",
    ],
    school: [
      "All Classroom Sponsor benefits",
      "Commemorative plaque at the school",
      "Invitation to distribution ceremony",
      "Featured in our annual report",
    ],
    custom: ["Benefits based on donation amount", "Digital certificate of appreciation", "Tax-deductible receipt"],
  }

  if (isSubmitted) {
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
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl">Donation Successful!</CardTitle>
              <CardDescription className="text-white/90">
                Thank you for supporting our Quran Printing Mission
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-green-100 p-4 mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your donation has been received</h3>
              <p className="text-center mb-8 text-gray-600 max-w-xl">
                Your generous contribution will help us continue our mission of making the Holy Quran accessible to
                students and communities in need. A confirmation email has been sent to your registered email address.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl mb-8">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm">Email Receipt</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm">Donation Confirmed</h4>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm">Impact Created</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button asChild>
                  <Link href="/al-quran-journey/printing-report">Back to Printing Report</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
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
            <span className="font-medium">Donate</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/al-quran-journey/printing-report"
              className="flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Printing Report
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg border-b">
                  <CardTitle>Complete Your Donation</CardTitle>
                  <CardDescription>
                    Your support helps us continue our Quran printing and distribution mission
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
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
                            <Label htmlFor="address">Address</Label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              placeholder="Enter your address"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Donation Details</h3>

                        {packageType === "custom" ? (
                          <div className="space-y-2 mb-4">
                            <Label htmlFor="customAmount">Donation Amount (৳)</Label>
                            <Input
                              id="customAmount"
                              name="customAmount"
                              type="number"
                              min="100"
                              value={formData.customAmount}
                              onChange={handleInputChange}
                              placeholder="Enter your donation amount"
                              required
                            />
                          </div>
                        ) : (
                          <div className="flex items-center p-4 bg-emerald-50 rounded-lg mb-4">
                            <div>
                              <h4 className="font-medium">{packageTitles[packageType]}</h4>
                              <p className="text-sm text-gray-600">{packageDescriptions[packageType]}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center space-x-2 mb-4">
                          <Checkbox
                            id="isRecurring"
                            checked={formData.isRecurring}
                            onCheckedChange={() => handleCheckboxChange("isRecurring")}
                          />
                          <Label htmlFor="isRecurring" className="font-normal">
                            Make this a monthly recurring donation
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 mb-4">
                          <Checkbox
                            id="isAnonymous"
                            checked={formData.isAnonymous}
                            onCheckedChange={() => handleCheckboxChange("isAnonymous")}
                          />
                          <Label htmlFor="isAnonymous" className="font-normal">
                            Make this donation anonymous
                          </Label>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Any special instructions or messages"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                        <RadioGroup
                          value={formData.paymentMethod}
                          onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                        >
                          <div className="flex items-center">
                            <RadioGroupItem value="card" id="payment-card" className="peer sr-only" />
                            <Label
                              htmlFor="payment-card"
                              className="flex items-center gap-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                            >
                              <CreditCard className="h-5 w-5" />
                              <span>Credit/Debit Card</span>
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <RadioGroupItem value="bank" id="payment-bank" className="peer sr-only" />
                            <Label
                              htmlFor="payment-bank"
                              className="flex items-center gap-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                            >
                              <Landmark className="h-5 w-5" />
                              <span>Bank Transfer</span>
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <RadioGroupItem value="mobile" id="payment-mobile" className="peer sr-only" />
                            <Label
                              htmlFor="payment-mobile"
                              className="flex items-center gap-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                            >
                              <Smartphone className="h-5 w-5" />
                              <span>Mobile Banking</span>
                            </Label>
                          </div>
                        </RadioGroup>

                        {formData.paymentMethod === "card" && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="1234 5678 9012 3456"
                                required
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="cardExpiry">Expiry Date</Label>
                                <Input
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  value={formData.cardExpiry}
                                  onChange={handleInputChange}
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cardCvc">CVC</Label>
                                <Input
                                  id="cardCvc"
                                  name="cardCvc"
                                  value={formData.cardCvc}
                                  onChange={handleInputChange}
                                  placeholder="123"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nameOnCard">Name on Card</Label>
                              <Input
                                id="nameOnCard"
                                name="nameOnCard"
                                value={formData.nameOnCard}
                                onChange={handleInputChange}
                                placeholder="Enter name as it appears on card"
                                required
                              />
                            </div>
                          </div>
                        )}

                        {formData.paymentMethod === "bank" && (
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Bank Transfer Instructions</h4>
                            <p className="text-sm mb-3">Please transfer your donation to the following bank account:</p>
                            <div className="text-sm space-y-1">
                              <p>
                                <strong>Bank Name:</strong> Islamic Bank Bangladesh Ltd.
                              </p>
                              <p>
                                <strong>Account Name:</strong> TRUSTED-ALLY Foundation
                              </p>
                              <p>
                                <strong>Account Number:</strong> 0123456789012
                              </p>
                              <p>
                                <strong>Branch:</strong> Main Branch, Dhaka
                              </p>
                              <p>
                                <strong>Reference:</strong> Quran-{formData.fullName}
                              </p>
                            </div>
                            <p className="text-sm mt-3">
                              After making the transfer, please complete this form to help us track your donation.
                            </p>
                          </div>
                        )}

                        {formData.paymentMethod === "mobile" && (
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Mobile Banking Instructions</h4>
                            <p className="text-sm mb-3">
                              Please send your donation to the following mobile banking numbers:
                            </p>
                            <div className="text-sm space-y-1">
                              <p>
                                <strong>bKash:</strong> 01712-345678 (Personal)
                              </p>
                              <p>
                                <strong>Nagad:</strong> 01712-345678
                              </p>
                              <p>
                                <strong>Rocket:</strong> 01712-345678
                              </p>
                              <p>
                                <strong>Reference:</strong> Quran-{formData.fullName}
                              </p>
                            </div>
                            <p className="text-sm mt-3">
                              After sending the money, please complete this form to help us track your donation.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="font-normal text-sm">
                          I agree to the{" "}
                          <Link href="/terms-of-service" className="text-emerald-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex flex-col space-y-4">
                        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                          {isSubmitting ? "Processing..." : "Complete Donation"}
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Lock className="h-4 w-4" />
                          <span>Secure payment processing</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg sticky top-6">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg border-b">
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{packageTitles[packageType]}</h4>
                      <p className="text-sm text-gray-600 mb-4">{packageDescriptions[packageType]}</p>

                      <div className="text-2xl font-bold text-emerald-700 mb-4">
                        {packageType === "custom"
                          ? formData.customAmount
                            ? `৳${formData.customAmount}`
                            : "৳0"
                          : packageType === "single"
                            ? "৳500"
                            : packageType === "classroom"
                              ? "৳15,000"
                              : "৳100,000"}
                      </div>

                      {formData.isRecurring && (
                        <div className="bg-blue-50 p-2 rounded text-sm mb-4">Monthly recurring donation</div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Your Impact</h4>
                      <ul className="space-y-2 text-sm">
                        {packageBenefits[packageType].map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-emerald-500 h-5 w-5 flex-shrink-0 mt-0.5"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-emerald-700" />
                        <h4 className="font-medium text-emerald-700">Our Guarantee</h4>
                      </div>
                      <p className="text-sm text-emerald-700">
                        100% of your donation goes directly to Quran printing and distribution. We maintain complete
                        transparency in all our financial activities.
                      </p>
                    </div>

                    <div className="text-center">
                      <Link href="/transparency-policy" className="text-sm text-emerald-600 hover:underline">
                        View our Transparency Policy
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

