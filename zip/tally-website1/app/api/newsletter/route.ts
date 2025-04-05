import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Log the received email
    console.log("Received newsletter subscription:", email)

    // Here you would typically process the email, e.g., save to a database or send to an email service
    // For now, we'll just simulate a successful subscription

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription successful",
    })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json({ success: false, message: "Failed to process newsletter subscription" }, { status: 500 })
  }
}

