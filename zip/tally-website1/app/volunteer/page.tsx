import { redirect } from "next/navigation"

export default function VolunteerRedirect() {
  redirect("/volunteer/landing")
  return null
}

