"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import Link from "next/link"

const availableTimeSlots = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
]

export default function ScheduleForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (date) {
      fetch(`/api/schedule-consultation?date=${format(date, "yyyy-MM-dd")}`)
        .then((response) => response.json())
        .then((data) => setBookedSlots(data.bookedSlots))
    }
  }, [date])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !time || !name || !email) {
      alert("Please fill in all fields")
      return
    }

    const response = await fetch("/api/schedule-consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: format(date, "yyyy-MM-dd"),
        time,
        name,
        email,
      }),
    })

    if (response.ok) {
      setSuccessMessage("Your consultation has been scheduled successfully.")
      setDate(undefined)
      setTime(undefined)
      setName("")
      setEmail("")
      setBookedSlots([...bookedSlots, time])
      setIsSubmitted(true)
    } else {
      const errorData = await response.json()
      alert(errorData.error || "An error occurred. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="space-y-6 max-w-md mx-auto text-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
        <Link href="/">
          <Button className="w-full">Back to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="date">Select a date</Label>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </div>
      {date && (
        <div>
          <Label htmlFor="time">Select a time</Label>
          <div className="grid grid-cols-3 gap-2">
            {availableTimeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={time === slot ? "default" : "outline"}
                onClick={() => setTime(slot)}
                disabled={bookedSlots.includes(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full">
        Schedule Consultation
      </Button>
    </form>
  )
}

