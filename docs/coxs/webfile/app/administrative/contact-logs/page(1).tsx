"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function ContactLogsPage() {
  const [logs, setLogs] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchLogs() {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact-logs")

      if (!response.ok) {
        if (response.status === 404) {
          setLogs("No contact form submissions found.")
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
      } else {
        const data = await response.text()
        setLogs(data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      setLogs("")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
        <Button onClick={fetchLogs} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <Card className="mb-8 border-red-300">
          <CardContent className="pt-6">
            <p className="text-red-500">{error}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Contact Submission Logs</CardTitle>
          <CardDescription>
            All contact form submissions are logged here. Newest submissions appear at the top.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-pulse text-muted-foreground">Loading logs...</div>
            </div>
          ) : (
            <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[600px] text-sm whitespace-pre-wrap">
              {logs || "No logs available."}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

