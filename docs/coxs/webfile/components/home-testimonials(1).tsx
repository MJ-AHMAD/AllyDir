"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function HomeTestimonials() {
  const testimonials = [
    {
      quote:
        "The educational initiatives in our school have transformed how our students learn. The digital resources and teacher training have opened new possibilities for our children.",
      name: "Fatima Rahman",
      title: "School Principal, Cox's Bazar Central School",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a community leader, I've witnessed firsthand how Trusted Ally's programs have united our community around education and sustainable development.",
      name: "Mohammad Ali",
      title: "Community Leader, Southern Cox's Bazar",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The vocational training program gave me skills and confidence to start my own business. Now I can support my family and contribute to our local economy.",
      name: "Nusrat Jahan",
      title: "Entrepreneur & Program Graduate",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Voices from Cox's Bazar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been impacted by our initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-primary/20 mb-6" />

                <p className="text-xl italic mb-8">"{testimonials[currentIndex].quote}"</p>

                <div className="flex flex-col items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-500">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

