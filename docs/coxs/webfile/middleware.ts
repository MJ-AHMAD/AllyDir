import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

export function middleware(request: NextRequest) {
  // This middleware runs on the server
  try {
    // Create logs directory if it doesn't exist
    const logDir = path.join(process.cwd(), "logs")
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    }
  } catch (error) {
    console.error("Error creating logs directory:", error)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/contact"],
}

