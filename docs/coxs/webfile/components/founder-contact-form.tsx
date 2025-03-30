"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { logContactSubmission } from "@/app/actions/log-contact"

export default function FounderContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      // Add the inquiry type to the form data
      formData.append("inquiryType", "founder-direct")

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
      <div className="bg-muted p-4 md:p-8 rounded-lg flex flex-col items-center justify-center h-full">
        {response.success ? (
          <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-green-500 mb-3 md:mb-4" />
        ) : (
          <AlertCircle className="h-12 w-12 md:h-16 md:w-16 text-red-500 mb-3 md:mb-4" />
        )}
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          {response.success ? "Thank You!" : "Something went wrong"}
        </h3>
        <p className="text-center text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{response.message}</p>
        <Button onClick={handleReset} className="text-sm md:text-base">
          {response.success ? "Send Another Message" : "Try Again"}
        </Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-3 md:space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
          placeholder="Enter your message"
        ></Textarea>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm md:text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

