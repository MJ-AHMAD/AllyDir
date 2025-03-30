"use server"

import fs from "fs"
import path from "path"

// Define the type for the form data
type ContactFormData = {
  name: string
  email: string
  inquiryType: string
  message: string
  timestamp: string
}

export async function logContactSubmission(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const inquiryType = (formData.get("inquiryType") as string) || "general"
    const message = formData.get("message") as string
    const timestamp = new Date().toISOString()

    // Validate form data
    if (!name || !email || !message) {
      return { success: false, message: "Please fill in all required fields." }
    }

    // Create contact data object
    const contactData: ContactFormData = {
      name,
      email,
      inquiryType,
      message,
      timestamp,
    }

    // Format log entry
    const logEntry = `
==========================================================
TIMESTAMP: ${timestamp}
NAME: ${name}
EMAIL: ${email}
INQUIRY TYPE: ${inquiryType}
MESSAGE: ${message}
==========================================================
`

    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), "logs")
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true })
    }

    // Log file path
    const logFilePath = path.join(logsDir, "contact-submissions.log")

    // Append to log file
    fs.appendFileSync(logFilePath, logEntry)

    // Log to console as well
    console.log("New contact form submission logged to file:", logFilePath)

    return {
      success: true,
      message: "Your message has been received. Our team will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error logging contact form submission:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}

// Function to retrieve logs (for admin use)
export async function getContactLogs() {
  try {
    const logFilePath = path.join(process.cwd(), "logs", "contact-submissions.log")

    if (fs.existsSync(logFilePath)) {
      const logs = fs.readFileSync(logFilePath, "utf8")
      return logs
    }

    return "No logs found"
  } catch (error) {
    console.error("Error reading logs:", error)
    return "Error reading logs"
  }
}

