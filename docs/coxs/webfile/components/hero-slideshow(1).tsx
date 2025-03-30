"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Slide {
  image: string
  headline: string
  subheadline: string
}

export default function HeroSlideshow() {
  const slides: Slide[] = [
    {
      image: "https://mj-ahmad.github.io/mja2025/img/coxs.png",
      headline: "Education for Every Heart in Cox's Bazar",
      subheadline: "Building a foundation for sustainable growth through accessible learning opportunities for all",
    },
    {
      image: "https://mj-ahmad.github.io/mja2025/img/coxs1.png",
      headline: "Empowered Women, Educated Youth",
      subheadline: "Empowering communities through knowledge to create resilient and thriving societies",
    },
    {
      image: "https://mj-ahmad.github.io/mja2025/img/coxs2.png",
      headline: "Transforming Cox's Bazar Together",
      subheadline: "Creating pathways for inclusive development and equal opportunities for future generations",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="py-12 text-center relative overflow-hidden min-h-[60vh] flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          } ${isTransitioning && currentSlide === index ? "animate-fadeOut" : ""}`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Cox's Bazar Slide ${index + 1}`}
            fill
            className="object-cover opacity-20 animate-[pulse_8s_ease-in-out_infinite]"
            priority
          />
        </div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 mb-4 animate-[bounce_3s_ease-in-out_infinite]">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/icon.png"
              alt="Trusted Ally Icon"
              width={80}
              height={80}
            />
          </div>

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.headline}</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{slide.subheadline}</p>
            </div>
          ))}

          <div className="flex justify-center gap-4 animate-[fadeIn_3s_ease-in-out]">
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

