"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { logContactSubmission } from "@/app/actions/log-contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)
  const [inquiryType, setInquiryType] = useState("general")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      // Add the inquiry type to the form data
      formData.append("inquiryType", inquiryType)

      // Submit the form to both actions
      const result = await submitContactForm(formData)

      // Log the submission to file
      await logContactSubmission(formData)

      setResponse(result)
    } catch (error) {
      setResponse({
        success: false,
        message: "There was an error submitting your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleReset() {
    setResponse(null)
  }

  if (response) {
    return (
      <div className="bg-muted p-8 rounded-lg flex flex-col items-center justify-center h-full">
        {response.success ? (
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
        ) : (
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
        )}
        <h3 className="text-2xl font-bold mb-2">{response.success ? "Thank You!" : "Something went wrong"}</h3>
        <p className="text-center text-muted-foreground mb-6">{response.message}</p>
        <Button onClick={handleReset}>{response.success ? "Send Another Message" : "Try Again"}</Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6 bg-muted p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="Your email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiry-type">Inquiry Type</Label>
        <Select defaultValue="general" onValueChange={setInquiryType}>
          <SelectTrigger id="inquiry-type">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="booking">Booking Information</SelectItem>
            <SelectItem value="package">Custom Package</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

