"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, Mail, FileText, Share2, Calendar, CheckCircle } from "lucide-react"
import { SimpleFooter } from "@/components/simple-footer"

export default function ThankYouPage() {
  const [receiptData, setReceiptData] = useState<any>(null)

  useEffect(() => {
    // Retrieve receipt data from localStorage
    const storedData = localStorage.getItem("receiptData")
    if (storedData) {
      setReceiptData(JSON.parse(storedData))
    }
  }, [])

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleDownloadReceipt = () => {
    // In a real implementation, this would generate a PDF receipt
    alert("Receipt download functionality would be implemented here")
  }

  const handleEmailReceipt = () => {
    // In a real implementation, this would send an email with the receipt
    alert("Email receipt functionality would be implemented here")
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
            Return to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-8 mb-8 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Thank You for Your Donation!</h1>
            <p className="text-lg">
              Your generosity makes a real difference. Your donation has been successfully processed.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Donation Receipt</CardTitle>
              <CardDescription>Please save this receipt for your records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Receipt Number</p>
                  <p className="font-medium">{receiptData?.id || "DON-000000"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{formatDate(receiptData?.date) || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Donor</p>
                  <p className="font-medium">{receiptData?.name || "Anonymous"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{receiptData?.email || "N/A"}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fund</span>
                  <span className="font-medium">{receiptData?.fund || "General Fund"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Donation Type</span>
                  <span className="font-medium capitalize">{receiptData?.donationType || "General"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium">${receiptData?.amount || "0.00"}</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800">Fund Allocation Guarantee</h4>
                    <p className="text-sm text-blue-700">
                      Your donation will be used exclusively for the {receiptData?.fund || "selected fund"}. We maintain
                      strict separation between all funds and ensure complete transparency in our financial operations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadReceipt}>
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleEmailReceipt}>
                <Mail className="h-4 w-4" />
                Email Receipt
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Track Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  You can track how your donation is being used and the impact it's making through our transparency
                  portal.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/transparency-portal" className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Transparency Portal
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Share Your Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Help us spread the word about our mission by sharing your support with others.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="#" className="flex items-center justify-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Your Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">What's Next?</h2>
            <p>
              You'll receive a confirmation email with your donation details shortly. We'll also send you updates about
              how your donation is making an impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/donate">Make Another Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

