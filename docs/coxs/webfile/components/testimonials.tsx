"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "/placeholder.svg?height=100&width=100",
      text: "Cox's Bazar exceeded all my expectations. The beach is truly magnificent, and TRUSTED-ALLY made our experience unforgettable with their exceptional service and attention to detail.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      image: "/placeholder.svg?height=100&width=100",
      text: "As a frequent traveler, I can confidently say that Cox's Bazar is a hidden gem. TRUSTED-ALLY's local knowledge and personalized approach made our family trip both authentic and comfortable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "India",
      image: "/placeholder.svg?height=100&width=100",
      text: "The sunset views at Cox's Bazar are unmatched! Our guide from TRUSTED-ALLY was knowledgeable, friendly, and went above and beyond to ensure we experienced the best of what this beautiful destination has to offer.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
              <div className="flex mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-lg italic">{testimonials[currentIndex].text}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-2">
        <Button variant="outline" size="icon" onClick={goToPrevious} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 p-0 rounded-full ${currentIndex === index ? "bg-primary text-primary-foreground" : ""}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

