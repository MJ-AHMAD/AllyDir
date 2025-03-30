"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  )
}

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const response = await subscribeToNewsletter(formData)
    setResult(response)

    if (response.success) {
      setEmail("")
    }
  }

  return (
    <div className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Our Progress</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive updates on our projects, events, and the transformation of Cox's
            Bazar.
          </p>

          {result ? (
            <div
              className={`flex items-center justify-center space-x-2 ${result.success ? "text-green-600" : "text-red-600"} mb-6`}
            >
              {result.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              <span>{result.message}</span>
            </div>
          ) : null}

          <form action={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <SubmitButton />
          </form>

          <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  )
}

