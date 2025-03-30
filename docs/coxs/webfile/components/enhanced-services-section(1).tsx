import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Plane, Utensils, Map, ShieldCheck, Users } from "lucide-react"

export default function EnhancedServicesSection() {
  const services = [
    {
      icon: <Plane className="h-10 w-10 text-primary" />,
      title: "Travel Arrangements",
      description: "Hassle-free flight bookings, airport transfers, and local transportation services.",
    },
    {
      icon: <Bed className="h-10 w-10 text-primary" />,
      title: "Accommodation",
      description: "Carefully selected hotels and resorts ranging from budget-friendly to luxury options.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Guided Tours",
      description: "Expert local guides who provide insightful tours of Cox's Bazar's attractions.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Dining Experiences",
      description: "Authentic local cuisine and international dining options to satisfy your palate.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Group Activities",
      description: "Exciting group activities and cultural experiences for memorable moments.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance options for your peace of mind.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="mb-2">{service.icon}</div>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

