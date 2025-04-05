"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SupportOurInitiativesPage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")

  const handleDonationChange = (value: string) => {
    setDonationAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount("custom")
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary">
              Education Program
            </Link>
            <Link href="/social-initiatives" className="font-medium hover:text-primary">
              Social Initiatives
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              Environmental Development
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Support Our Social Initiatives</h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg mb-6">
            Your support can make a significant impact on our community development projects and help uplift those in
            need. Here are ways you can contribute to our social initiatives:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fund community outreach programs</li>
                  <li>Support skill-building workshops</li>
                  <li>Contribute to health and wellness campaigns</li>
                  <li>Help provide resources for marginalized communities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Participate in community events</li>
                  <li>Teach skills to unemployed youth</li>
                  <li>Assist in organizing support groups</li>
                  <li>Help with administrative tasks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
          <form className="space-y-6">
            <div>
              <Label className="text-base">Select Donation Amount</Label>
              <RadioGroup
                className="grid grid-cols-2 gap-4 mt-2"
                value={donationAmount}
                onValueChange={handleDonationChange}
              >
                <div>
                  <RadioGroupItem value="10" id="amount-10" className="peer sr-only" />
                  <Label
                    htmlFor="amount-10"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    $10
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                  <Label
                    htmlFor="amount-25"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    $25
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                  <Label
                    htmlFor="amount-50"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    $50
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                  <Label
                    htmlFor="amount-100"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    $100
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <Input
                id="custom-amount"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" placeholder="Leave a message or specify which initiative you'd like to support" />
            </div>
            <Button type="submit" className="w-full">
              Donate Now
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">© 2025 Trusted Ally, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@trustedally.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Trusted Street, Ally City, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

