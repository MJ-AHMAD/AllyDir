import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const timestamp = new Date().toISOString()

    // Log the donation data to the console (will be captured by Vercel)
    console.log(`${timestamp} - New donation received:`)
    console.log(`Amount: ${data.amount} ${data.currency}`)
    console.log(`Name: ${data.name}`)
    console.log(`Email: ${data.email.slice(0, 3)}...${data.email.slice(-4)}`) // Partial email for privacy
    console.log(`Mobile Number: ${data.mobileNumber.slice(0, 3)}...${data.mobileNumber.slice(-2)}`) // Partial number for privacy
    console.log(`Payment Method: ${data.paymentMethod}`)
    console.log(`Preferred Contact Method: ${data.contactMethod}`)
    console.log(`Preferred Contact Time: ${data.contactTime}`)

    // Here you would typically process the donation, e.g., send to a payment gateway or database
    // For now, we'll just log it and return a success response

    return NextResponse.json({ success: true, message: "Donation received successfully" })
  } catch (error) {
    console.error("Error processing donation:", error)
    return NextResponse.json({ success: false, message: "Failed to process donation" }, { status: 500 })
  }
}

