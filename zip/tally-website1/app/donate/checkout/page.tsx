"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Lock, CreditCard, Calendar, Info, AlertCircle } from "lucide-react"
import { SimpleFooter } from "@/components/simple-footer"
import { toast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donationData, setDonationData] = useState<any>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    agreeToTerms: false,
    receiveUpdates: false,
    isAnonymous: false,
  })

  useEffect(() => {
    // Retrieve donation data from localStorage
    const storedData = localStorage.getItem("donationData")
    if (storedData) {
      setDonationData(JSON.parse(storedData))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "You must agree to the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate a unique donation ID
      const donationId = `DON-${Math.floor(100000 + Math.random() * 900000)}`

      // Store donation receipt data
      const receiptData = {
        id: donationId,
        date: new Date().toISOString(),
        fund: donationData?.fundName || "General Fund",
        donationType: donationData?.donationType || "general",
        amount: donationData?.amount || "0",
        name: formData.isAnonymous ? "Anonymous" : formData.fullName,
        email: formData.email,
      }

      localStorage.setItem("receiptData", JSON.stringify(receiptData))

      // Redirect to success page
      router.push("/donate/thank-you")
    } catch (error) {
      console.error("Error processing donation:", error)
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  // Special message based on donation type
  const getDonationTypeMessage = () => {
    if (!donationData) return null

    switch (donationData.donationType) {
      case "zakat":
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800">Zakat Donation</h4>
                <p className="text-sm text-green-700">
                  Your Zakat will be distributed according to Islamic guidelines to eligible recipients. We maintain
                  separate accounting for all Zakat funds and distribute them within one lunar year.
                </p>
              </div>
            </div>
          </div>
        )
      case "mannat":
        return (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800">Mannat/Nazr Donation</h4>
                <p className="text-sm text-blue-700">
                  Your donation will be used exactly as specified for your Mannat/Nazr purpose. We understand the sacred
                  nature of this commitment and will honor it accordingly.
                </p>
                {donationData.specificPurpose && (
                  <p className="text-sm font-medium mt-2 text-blue-800">Purpose: {donationData.specificPurpose}</p>
                )}
              </div>
            </div>
          </div>
        )
      case "sadaqah":
        return (
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-purple-800">Sadaqah Donation</h4>
                <p className="text-sm text-purple-700">
                  Your Sadaqah will be used for charitable purposes within the fund you've selected. Thank you for your
                  generosity.
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
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
          <Link href="/donate" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Donation
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Complete Your Donation</h1>
            <p className="text-muted-foreground">
              Your contribution will be securely processed and allocated exactly as you've designated.
            </p>
          </div>

          {getDonationTypeMessage()}

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit}>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Please provide your contact information for donation receipt</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-2 mb-4">
                      <Checkbox
                        id="isAnonymous"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, isAnonymous: checked as boolean }))
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="isAnonymous"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Make this donation anonymous
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Your personal information will still be collected for receipt purposes but will not be
                          displayed publicly.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
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
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>Your payment information is encrypted and secure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        <span>Card Number</span>
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Expiry Date</span>
                        </Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          <span>CVV</span>
                        </Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter your city"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          placeholder="Enter postal code"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Enter your country"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="agreeToTerms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                          I understand that my donation will be used exclusively for the designated fund and will not be
                          transferred to other initiatives under any circumstances.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="receiveUpdates"
                        name="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, receiveUpdates: checked as boolean }))
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="receiveUpdates"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Receive updates about this fund
                        </label>
                        <p className="text-sm text-muted-foreground">
                          I would like to receive periodic updates about how my donation is being used and the impact
                          it's making.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Complete Donation"}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fund</span>
                      <span className="font-medium">{donationData?.fundName || "Loading..."}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium capitalize">{donationData?.donationType || "General"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-medium">${donationData?.amount || "0.00"}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="font-bold">${donationData?.amount || "0.00"}</span>
                    </div>
                  </div>

                  <div className="bg-muted p-3 rounded-md space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Lock className="h-4 w-4 text-green-500" />
                      <span>Encrypted Transaction</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Your donation will be processed securely. A receipt will be emailed to you upon completion.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

