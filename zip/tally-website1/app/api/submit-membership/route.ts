import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const timestamp = new Date().toISOString()

    // Log the membership application data to the console (will be captured by Vercel)
    console.log(`${timestamp} - New membership application received:`)
    console.log(`Name: ${data.name}`)
    console.log(`Email: ${data.email.slice(0, 3)}...${data.email.slice(-4)}`) // Partial email for privacy
    console.log(`Phone: ${data.phone.slice(0, 3)}...${data.phone.slice(-2)}`) // Partial phone for privacy
    console.log(`Address: ${data.address.slice(0, 10)}...`) // Partial address for privacy
    console.log(`Membership Type: ${data.membershipType}`)
    console.log(`Amount: ${data.amount} BDT`)
    console.log(`Payment Method: ${data.paymentMethod}`)
    console.log(`Comments: ${data.comments ? "Provided" : "Not provided"}`)

    // Here you would typically process the application, e.g., send to a database
    // For now, we'll just log it and return a success response

    return NextResponse.json({ success: true, message: "Application submitted successfully" })
  } catch (error) {
    console.error("Error processing membership application:", error)
    return NextResponse.json({ success: false, message: "Failed to process application" }, { status: 500 })
  }
}

