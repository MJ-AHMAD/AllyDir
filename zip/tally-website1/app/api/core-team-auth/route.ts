import { type NextRequest, NextResponse } from "next/server"
import coreTeamData from "@/data/core-team-credentials.json"

export async function POST(request: NextRequest) {
  try {
    const { id, password } = await request.json()

    // Find the user in the core team data
    const user = coreTeamData.users.find((user) => user.id === id)

    // If user not found or password doesn't match
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    // Determine if the user is a Board member or Core Team member
    const isBoard = user.id.startsWith("BOD-")
    const role = isBoard ? "board" : "coreTeam"

    // Return success with user data (excluding password)
    const { password: _, ...userData } = user
    return NextResponse.json({
      success: true,
      user: userData,
      role,
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 })
  }
}

