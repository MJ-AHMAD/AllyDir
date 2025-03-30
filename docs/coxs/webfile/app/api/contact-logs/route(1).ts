import { type NextRequest, NextResponse } from "next/server"
import { getContactLogs } from "@/app/actions/log-contact"

export async function GET(request: NextRequest) {
  // This should be protected with authentication in a real application
  try {
    const logs = await getContactLogs()

    return new NextResponse(logs, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("Error reading logs:", error)
    return new NextResponse("Error reading logs", {
      status: 500,
    })
  }
}

