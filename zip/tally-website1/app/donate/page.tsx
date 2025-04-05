"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  AlertCircle,
  CreditCard,
  Landmark,
  Smartphone,
  Gift,
  Users,
  BookOpen,
  Heart,
} from "lucide-react"
import { SimpleFooter } from "@/components/simple-footer"

export default function DonatePage() {
  const [selectedFund, setSelectedFund] = useState("education")
  const [donationType, setDonationType] = useState("general")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [specificPurpose, setSpecificPurpose] = useState("")

  // Fund data with separate tracking for each fund
  const funds = {
    education: {
      title: "Education Program Fund",
      description: "Support our educational initiatives for underprivileged children",
      target: 50000,
      raised: 28750,
      donors: 342,
      deadline: "2025-06-30",
      usageBreakdown: [
        { purpose: "Learning Materials", percentage: 40 },
        { purpose: "Teacher Salaries", percentage: 30 },
        { purpose: "Facility Maintenance", percentage: 20 },
        { purpose: "Administrative Costs", percentage: 10 },
      ],
    },
    quran: {
      title: "Al-Quran Journey Fund",
      description: "Support Quranic education, printing, and distribution",
      target: 75000,
      raised: 42300,
      donors: 518,
      deadline: "2025-07-15",
      usageBreakdown: [
        { purpose: "Quran Printing", percentage: 45 },
        { purpose: "Distribution Costs", percentage: 25 },
        { purpose: "Teacher Training", percentage: 20 },
        { purpose: "Administrative Costs", percentage: 10 },
      ],
    },
    social: {
      title: "Social Initiatives Fund",
      description: "Support community development and social welfare programs",
      target: 35000,
      raised: 18200,
      donors: 276,
      deadline: "2025-05-20",
      usageBreakdown: [
        { purpose: "Community Programs", percentage: 50 },
        { purpose: "Emergency Relief", percentage: 25 },
        { purpose: "Volunteer Support", percentage: 15 },
        { purpose: "Administrative Costs", percentage: 10 },
      ],
    },
    orphans: {
      title: "Orphan Care Fund",
      description: "Dedicated support for orphaned children's education and wellbeing",
      target: 40000,
      raised: 22450,
      donors: 312,
      deadline: "2025-08-10",
      usageBreakdown: [
        { purpose: "Education & Schooling", percentage: 40 },
        { purpose: "Food & Nutrition", percentage: 25 },
        { purpose: "Healthcare", percentage: 20 },
        { purpose: "Administrative Costs", percentage: 15 },
      ],
    },
    volunteers: {
      title: "Volunteer Support Fund",
      description: "Support our dedicated volunteers who make our work possible",
      target: 25000,
      raised: 12800,
      donors: 186,
      deadline: "2025-05-30",
      usageBreakdown: [
        { purpose: "Training Programs", percentage: 40 },
        { purpose: "Equipment & Resources", percentage: 30 },
        { purpose: "Recognition & Support", percentage: 20 },
        { purpose: "Administrative Costs", percentage: 10 },
      ],
    },
  }

  const donationTypes = [
    { id: "general", name: "General Donation", description: "Support our work where it's needed most" },
    {
      id: "zakat",
      name: "Zakat",
      description: "Islamic obligatory charity that will be used according to Shariah guidelines",
    },
    { id: "mannat", name: "Mannat/Nazr", description: "Fulfill your religious vow or pledge" },
    { id: "sadaqah", name: "Sadaqah", description: "Voluntary charity that can be given at any time" },
    {
      id: "trustee",
      name: "Trustee Discretion",
      description: "Allow our trustees to allocate funds where most needed",
    },
  ]

  const selectedFundData = funds[selectedFund as keyof typeof funds]
  const percentageRaised = (selectedFundData.raised / selectedFundData.target) * 100
  const daysRemaining = Math.ceil(
    (new Date(selectedFundData.deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24),
  )

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const handleCheckout = () => {
    // Prepare donation data to pass to checkout
    const donationData = {
      fund: selectedFund,
      fundName: selectedFundData.title,
      donationType: donationType,
      amount: amount === "custom" ? customAmount : amount,
      specificPurpose: specificPurpose,
      paymentMethod: paymentMethod,
    }

    // In a real implementation, you would store this in a state management solution
    // or pass it via URL parameters. For simplicity, we'll use localStorage here.
    localStorage.setItem("donationData", JSON.stringify(donationData))
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
          <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Transparent Donation Platform</h1>
            <p className="text-lg mb-6">
              At TRUSTED-ALLY, we are committed to complete transparency and accountability in all financial matters.
              Your donations are carefully tracked and used exactly as designated.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Lock className="h-5 w-5" />
                <span>Encrypted Transactions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Eye className="h-5 w-5" />
                <span>Full Transparency</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <FileText className="h-5 w-5" />
                <span>Detailed Reports</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Fund Category</CardTitle>
                  <CardDescription>
                    Choose the specific fund you wish to support. Each fund is strictly separated and managed
                    independently.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedFund} onValueChange={setSelectedFund} className="w-full">
                    <TabsList className="grid grid-cols-5 mb-4">
                      <TabsTrigger value="education" className="flex flex-col items-center gap-1 py-2 h-auto">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-xs">Education</span>
                      </TabsTrigger>
                      <TabsTrigger value="quran" className="flex flex-col items-center gap-1 py-2 h-auto">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-xs">Al-Quran</span>
                      </TabsTrigger>
                      <TabsTrigger value="social" className="flex flex-col items-center gap-1 py-2 h-auto">
                        <Users className="h-4 w-4" />
                        <span className="text-xs">Social</span>
                      </TabsTrigger>
                      <TabsTrigger value="orphans" className="flex flex-col items-center gap-1 py-2 h-auto">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs">Orphans</span>
                      </TabsTrigger>
                      <TabsTrigger value="volunteers" className="flex flex-col items-center gap-1 py-2 h-auto">
                        <Gift className="h-4 w-4" />
                        <span className="text-xs">Volunteers</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="education" className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Education Programs"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{funds.education.title}</h3>
                      <p>{funds.education.description}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            All donations to this fund are exclusively used for educational programs. These funds are
                            never mixed with other initiatives under any circumstances.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="quran" className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Al-Quran Journey"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{funds.quran.title}</h3>
                      <p>{funds.quran.description}</p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            All donations to this fund are exclusively used for Al-Quran Journey initiatives. These
                            funds are strictly separated and never used for other purposes.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="social" className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Social Initiatives"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{funds.social.title}</h3>
                      <p>{funds.social.description}</p>
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            All donations to this fund are exclusively used for social welfare initiatives. These funds
                            are never mixed with other projects under any circumstances.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="orphans" className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Orphan Care"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{funds.orphans.title}</h3>
                      <p>{funds.orphans.description}</p>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            All donations to this fund are exclusively used for orphaned children. These funds are
                            strictly separated and used only for orphan care programs.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="volunteers" className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Volunteer Support"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{funds.volunteers.title}</h3>
                      <p>{funds.volunteers.description}</p>
                      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            All donations to this fund are exclusively used to support our volunteers. These funds help
                            provide training, resources, and support for those who dedicate their time.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donation Type</CardTitle>
                  <CardDescription>Select the type of donation you wish to make</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={donationType} onValueChange={setDonationType} className="grid gap-4">
                    {donationTypes.map((type) => (
                      <div key={type.id} className="flex items-center">
                        <RadioGroupItem value={type.id} id={`type-${type.id}`} className="peer sr-only" />
                        <Label
                          htmlFor={`type-${type.id}`}
                          className="flex flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                        >
                          <span className="font-medium">{type.name}</span>
                          <span className="text-sm text-muted-foreground">{type.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {donationType === "mannat" && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="specific-purpose">Specify Your Mannat/Nazr Purpose</Label>
                      <Textarea
                        id="specific-purpose"
                        placeholder="Please describe the specific purpose of your Mannat/Nazr"
                        value={specificPurpose}
                        onChange={(e) => setSpecificPurpose(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <p className="text-sm text-muted-foreground">
                        We will ensure your donation is used exactly according to your specified intention.
                      </p>
                    </div>
                  )}

                  {donationType === "zakat" && (
                    <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                      <h4 className="font-medium text-green-800 mb-2">Zakat Distribution Policy</h4>
                      <p className="text-sm text-green-700 mb-2">
                        We distribute Zakat strictly according to Islamic guidelines to the eligible categories (asnaf):
                      </p>
                      <ul className="text-sm text-green-700 list-disc pl-5 space-y-1">
                        <li>The poor (Fuqara)</li>
                        <li>The needy (Masakin)</li>
                        <li>Zakat administrators</li>
                        <li>Those whose hearts are to be reconciled</li>
                        <li>Those in bondage (slaves and captives)</li>
                        <li>The debt-ridden</li>
                        <li>In the cause of Allah (Fi Sabilillah)</li>
                        <li>The wayfarer</li>
                      </ul>
                      <p className="text-sm text-green-700 mt-2">
                        We maintain separate accounting for all Zakat funds and distribute them within one lunar year.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donation Amount</CardTitle>
                  <CardDescription>Select or enter the amount you wish to donate to the selected fund.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4">
                    {["25", "50", "100", "250", "500", "1000"].map((value) => (
                      <div key={value} className="flex items-center">
                        <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                        <Label
                          htmlFor={`amount-${value}`}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                        >
                          ${value}
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center">
                      <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                      <Label
                        htmlFor="amount-custom"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                      >
                        Custom
                      </Label>
                    </div>
                  </RadioGroup>

                  {amount === "custom" && (
                    <div className="mt-4">
                      <Label htmlFor="custom-amount">Enter Custom Amount ($)</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="mt-1"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>
                    Choose your preferred payment method. All transactions are secure and encrypted.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full" size="lg" asChild onClick={handleCheckout}>
                    <Link href="/donate/checkout">Proceed to Checkout</Link>
                  </Button>
                  <p className="text-xs text-center mt-4 text-muted-foreground">
                    By proceeding, you agree to our donation terms and conditions, including our strict fund allocation
                    policy.
                  </p>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fund Progress</CardTitle>
                  <CardDescription>Track the progress of the selected fund</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Raised: ${selectedFundData.raised.toLocaleString()}</span>
                      <span>Goal: ${selectedFundData.target.toLocaleString()}</span>
                    </div>
                    <Progress value={percentageRaised} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{selectedFundData.donors} Donors</span>
                      <span>{percentageRaised.toFixed(1)}% Complete</span>
                    </div>
                  </div>

                  <div className="bg-muted p-3 rounded-md text-sm">
                    <div className="flex justify-between mb-2">
                      <span>Campaign Ends:</span>
                      <span>{new Date(selectedFundData.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Days Remaining:</span>
                      <span>{daysRemaining}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fund Allocation</CardTitle>
                  <CardDescription>How your donation will be used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedFundData.usageBreakdown.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.purpose}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-1.5" />
                    </div>
                  ))}

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded mt-4">
                    <p className="text-sm">
                      <strong>Our Commitment:</strong> We strictly maintain separate accounts for each fund. Under no
                      circumstances will funds be transferred between different initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transparency Guarantee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
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
                        className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Quarterly financial reports published online</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Independent audit of all financial activities</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Donor access to fund allocation details</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Strict separation of all fund accounts</span>
                    </li>
                  </ul>

                  <Separator />

                  <div className="text-center">
                    <Link href="/transparency-policy" className="text-sm text-primary hover:underline">
                      Read Our Full Transparency Policy
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Transparency</CardTitle>
                  <CardDescription>View our latest financial activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted rounded-md p-3">
                    <h4 className="font-medium text-sm mb-2">Recent Donations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Anonymous</span>
                        <span className="font-medium">$50 to Education</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Ahmed K.</span>
                        <span className="font-medium">$100 to Al-Quran</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sarah M.</span>
                        <span className="font-medium">$75 to Orphans</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted rounded-md p-3">
                    <h4 className="font-medium text-sm mb-2">Recent Expenditures</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Educational Materials</span>
                        <span className="font-medium">$1,200</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Quran Printing</span>
                        <span className="font-medium">$2,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Orphan Support</span>
                        <span className="font-medium">$1,800</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link href="/financial-reports" className="text-sm text-primary hover:underline">
                      View Complete Financial Reports
                    </Link>
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

