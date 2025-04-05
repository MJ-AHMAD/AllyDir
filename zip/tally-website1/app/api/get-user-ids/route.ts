import { type NextRequest, NextResponse } from "next/server"
import coreTeamData from "@/data/core-team-credentials.json"

export async function POST(request: NextRequest) {
  try {
    const { userType } = await request.json()

    // Filter users based on user type
    let userIds: string[] = []

    if (userType === "board") {
      userIds = coreTeamData.users.filter((user) => user.id.startsWith("BOD-")).map((user) => user.id)
    } else if (userType === "coreTeam") {
      userIds = coreTeamData.users.filter((user) => !user.id.startsWith("BOD-")).map((user) => user.id)
    }

    return NextResponse.json({ success: true, userIds })
  } catch (error) {
    console.error("Error fetching user IDs:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch user IDs" }, { status: 500 })
  }
}

