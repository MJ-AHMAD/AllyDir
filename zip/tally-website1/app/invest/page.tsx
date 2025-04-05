"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, TrendingUp, Briefcase } from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"

export default function InvestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b">
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

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Invest in Our Educational Projects</h1>
          <p className="text-center text-muted-foreground mb-12">
            Partner with us to create sustainable educational solutions and generate social impact
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Why Invest?</h2>
              <ul className="space-y-3">
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
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Create long-term social impact</span>
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
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Participate in sustainable educational solutions</span>
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
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Potential for financial returns alongside social benefits</span>
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
                    className="text-primary h-5 w-5 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Be part of innovative educational technology projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center mb-6">Investment Opportunities</h2>

              <div className="space-y-4">
                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">EdTech Innovation Fund</span>
                    <span className="text-primary font-semibold">$10,000 min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Invest in cutting-edge educational technology projects
                  </p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">School Infrastructure Project</span>
                    <span className="text-primary font-semibold">$25,000 min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Support the construction and renovation of schools</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Teacher Training Program</span>
                    <span className="text-primary font-semibold">$5,000 min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Invest in professional development for educators</p>
                </div>

                <div className="border rounded-md p-4 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Sustainable Education Bond</span>
                    <span className="text-primary font-semibold">$1,000 min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Long-term investment in our educational initiatives</p>
                </div>
              </div>

              <div className="mt-6">
                <ScrollButton className="w-full" size="lg" targetId="investmentForm">
                  Explore Investment Options
                </ScrollButton>
                <p className="text-xs text-center mt-4 text-muted-foreground">
                  All investments are subject to terms and conditions. Please consult with a financial advisor before
                  investing.
                </p>
              </div>
            </div>
          </div>

          <div id="investmentForm" className="mt-12 bg-card rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Investment Inquiry Form</h3>
            {isSubmitted ? (
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-green-600">Inquiry Submitted Successfully!</h4>
                <p className="mb-6">Thank you for your interest. We will contact you soon with more information.</p>
                <Button asChild variant="outline">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input type="tel" id="phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Intended Investment Amount
                  </label>
                  <Input type="number" id="investmentAmount" name="investmentAmount" min="1000" step="1000" required />
                </div>
                <div>
                  <label htmlFor="projectInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Project of Interest
                  </label>
                  <select
                    id="projectInterest"
                    name="projectInterest"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  >
                    <option value="">Select a project</option>
                    <option value="edtech">EdTech Innovation Fund</option>
                    <option value="infrastructure">School Infrastructure Project</option>
                    <option value="teacherTraining">Teacher Training Program</option>
                    <option value="educationBond">Sustainable Education Bond</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Comments or Questions
                  </label>
                  <Textarea id="message" name="message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Learn More About Investing</h3>
            <p className="mb-6">
              For more information about our investment opportunities or to discuss potential partnerships, please
              contact our investment team at{" "}
              <a href="mailto:invest@trusted-ally.org" className="text-primary hover:underline">
                invest@trusted-ally.org
              </a>
            </p>
            <Button asChild variant="outline">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

