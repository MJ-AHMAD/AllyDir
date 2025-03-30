"use server"

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address." }
    }

    // Format the log entry with timestamp
    const timestamp = new Date().toISOString()
    const logEntry = `${timestamp} - Email: ${email}\n`

    // In a production environment, you would use a proper logging system
    // For this example, we'll log to the server console
    console.log("Newsletter subscription:", logEntry)

    // In a real application with file system access, you would do:
    // Create logs directory if it doesn't exist
    // const logsDir = path.join(process.cwd(), 'logs')
    // if (!fs.existsSync(logsDir)) {
    //   fs.mkdirSync(logsDir, { recursive: true })
    // }
    //
    // // Log file path
    // const logFilePath = path.join(logsDir, 'newsletter-subscriptions.log')
    //
    // // Append to log file
    // fs.appendFileSync(logFilePath, logEntry)

    // In a real application, you would also add the email to your newsletter service
    // such as Mailchimp, SendGrid, etc.

    return { success: true, message: "Thank you for subscribing! We'll keep you updated." }
  } catch (error) {
    console.error("Error logging subscription:", error)
    return { success: false, message: "An error occurred. Please try again later." }
  }
}

