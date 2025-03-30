import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedProject() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
            Featured Initiative
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Digital Education for All</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our flagship project bringing technology and digital literacy to every corner of Cox's Bazar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/coxs.png"
              alt="Digital Education Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <div className="text-white">
                <p className="text-sm mb-2">Launched January 2023</p>
                <h3 className="text-xl font-bold mb-2">Empowering through Digital Knowledge</h3>
                <p className="text-sm opacity-80">Reaching 50+ schools and 15,000+ students</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Bridging the Digital Divide</h3>
            <p className="text-gray-600 mb-6">
              In today's digital world, access to technology and digital literacy are essential for educational and
              economic opportunities. Our Digital Education for All initiative aims to ensure that every student in
              Cox's Bazar has the skills and resources needed to thrive in the digital age.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Computer Labs in Schools</h4>
                  <p className="text-sm text-gray-500">
                    Establishing modern computer labs in schools across the district
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Teacher Training Programs</h4>
                  <p className="text-sm text-gray-500">
                    Training teachers in digital pedagogy and technology integration
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Digital Curriculum Development</h4>
                  <p className="text-sm text-gray-500">Creating locally relevant digital learning materials</p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-4">
              <Link href="/initiatives/digital-divide" className="flex items-center gap-2">
                Learn more about this initiative <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

