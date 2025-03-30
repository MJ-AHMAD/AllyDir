"use server"

// Define the type for the form data
type ContactFormData = {
  name: string
  email: string
  inquiryType: string
  message: string
  timestamp: string
}

// In-memory log storage (will persist until server restart)
const contactLogs: ContactFormData[] = []

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const inquiryType = formData.get("inquiryType") as string
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

    // Format log entry for console
    const logEntry = `
==========================================================
TIMESTAMP: ${timestamp}
NAME: ${name}
EMAIL: ${email}
INQUIRY TYPE: ${inquiryType}
MESSAGE: ${message}
==========================================================
`

    // Log to console (this will appear in server logs)
    console.log("New contact form submission:")
    console.log(logEntry)

    // Store in our in-memory log array
    contactLogs.push(contactData)

    return {
      success: true,
      message: "Your message has been received. Our team will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}

// Function to retrieve logs (for admin use)
export async function getContactLogs() {
  return contactLogs
}

