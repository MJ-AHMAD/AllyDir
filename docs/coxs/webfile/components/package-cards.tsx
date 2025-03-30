import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PackageCards() {
  const packages = [
    {
      id: "economy",
      title: "Economy Package",
      price: "৳5,999",
      description: "Perfect for budget travelers who want to experience Cox's Bazar essentials",
      image: "/placeholder.svg?height=200&width=400",
      features: [
        "3 days, 2 nights accommodation",
        "Standard hotel stay",
        "Beach tour",
        "Transportation from Cox's Bazar airport",
        "Breakfast included",
      ],
      popular: false,
    },
    {
      id: "standard",
      title: "Standard Package",
      price: "৳9,999",
      description: "Our most popular package with a balance of comfort and experiences",
      image: "/placeholder.svg?height=200&width=400",
      features: [
        "4 days, 3 nights accommodation",
        "3-star hotel stay",
        "Beach tour and Himchari National Park",
        "Transportation from Cox's Bazar airport",
        "Breakfast and dinner included",
        "Local guide for one day",
      ],
      popular: true,
    },
    {
      id: "premium",
      title: "Premium Package",
      price: "৳15,999",
      description: "Luxury experience with exclusive activities and premium accommodations",
      image: "/placeholder.svg?height=200&width=400",
      features: [
        "5 days, 4 nights accommodation",
        "4-star or 5-star hotel stay",
        "Complete Cox's Bazar tour including islands",
        "Private transportation throughout",
        "All meals included",
        "Private guide for entire stay",
        "Sunset cruise experience",
      ],
      popular: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <Card key={pkg.id} className={pkg.popular ? "border-primary shadow-lg" : ""}>
          <div className="relative h-48 w-full">
            <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover rounded-t-lg" />
          </div>
          <CardHeader>
            <CardTitle>{pkg.title}</CardTitle>
            <CardDescription>{pkg.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-3xl font-bold">{pkg.price}</span>
              <span className="text-muted-foreground"> / person</span>
            </div>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className={`w-full ${pkg.popular ? "" : "bg-primary/90 hover:bg-primary"}`} asChild>
              <Link href={`/packages/${pkg.id}`}>Book This Package</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

