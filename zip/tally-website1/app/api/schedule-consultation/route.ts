import { NextResponse } from "next/server"

// This will act as our simple in-memory database
const bookedSlots: { [key: string]: string[] } = {}

export async function POST(request: Request) {
  const { date, time, name, email } = await request.json()

  try {
    // Check if the slot is already booked
    if (bookedSlots[date] && bookedSlots[date].includes(time)) {
      return NextResponse.json({ error: "This slot is already booked" }, { status: 400 })
    }

    // Book the slot
    if (!bookedSlots[date]) {
      bookedSlots[date] = []
    }
    bookedSlots[date].push(time)

    console.log(`Booked slot: ${date} at ${time} for ${name} (${email})`)

    return NextResponse.json({ message: "Consultation scheduled successfully" })
  } catch (error) {
    console.error("Error in POST handler:", error)
    return NextResponse.json({ error: "Failed to schedule consultation" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get("date")

  if (!date) {
    return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
  }

  return NextResponse.json({ bookedSlots: bookedSlots[date] || [] })
}

