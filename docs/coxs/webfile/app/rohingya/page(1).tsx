import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Users, Heart, School, Stethoscope, ShieldAlert, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Rohingya() {
  const keyFacts = [
    {
      title: "Population",
      value: "Approximately 900,000",
      description: "Rohingya refugees currently residing in camps in Cox's Bazar district",
    },
    {
      title: "Camp Area",
      value: "26 sq km",
      description: "Total area of the Kutupalong-Balukhali expansion site, the world's largest refugee settlement",
    },
    {
      title: "Arrival Period",
      value: "August 2017",
      description: "Main influx of refugees following violence in Myanmar's Rakhine State",
    },
    {
      title: "Host Communities",
      value: "Over 500,000",
      description: "Local Bangladeshi residents in areas surrounding the refugee camps",
    },
  ]

  const supportAreas = [
    {
      title: "Shelter and Infrastructure",
      icon: Home,
      description:
        "Providing temporary shelters, improving camp infrastructure, and addressing housing needs in the densely populated camps.",
    },
    {
      title: "Protection and Safety",
      icon: ShieldAlert,
      description:
        "Ensuring the safety and security of vulnerable refugees, particularly women, children, and the elderly.",
    },
    {
      title: "Healthcare Services",
      icon: Stethoscope,
      description: "Delivering essential healthcare services, disease prevention, and addressing nutritional needs.",
    },
    {
      title: "Education",
      icon: School,
      description:
        "Providing educational opportunities for refugee children and youth through learning centers and skill development programs.",
    },
    {
      title: "Community Support",
      icon: Users,
      description:
        "Facilitating community engagement, social cohesion, and peaceful coexistence with host communities.",
    },
    {
      title: "Humanitarian Assistance",
      icon: Heart,
      description: "Coordinating food, non-food items, and essential services distribution to meet basic needs.",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rohingya Refugee Response - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar district hosts one of the world's largest refugee populations, with hundreds of thousands of
        Rohingya refugees who fled violence in Myanmar. This hub provides information about the humanitarian response,
        coordination efforts, and support for both refugee and host communities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Rohingya refugee camp in Cox's Bazar"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Situation Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Since August 2017, Cox's Bazar has been hosting Rohingya refugees who fled violence and persecution in
              Myanmar's Rakhine State. The refugee camps in Ukhiya and Teknaf upazilas constitute one of the world's
              largest and most densely populated refugee settlements.
            </p>
            <p className="mb-4">
              The Government of Bangladesh, in coordination with UN agencies, international and national NGOs, and local
              organizations, has been providing humanitarian assistance to the refugees while also addressing the needs
              of affected host communities.
            </p>
            <p>
              The response focuses on providing essential services, protection, and support for both refugee and host
              communities, while working towards sustainable solutions.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {keyFacts.map((fact) => (
          <Card key={fact.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-1">{fact.value}</p>
              <p className="text-sm text-muted-foreground">{fact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Response Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {supportAreas.map((area) => (
          <Card key={area.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <area.icon className="h-5 w-5" />
                {area.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Coordination Mechanism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The response to the Rohingya refugee situation is coordinated through a comprehensive structure that ensures
            effective collaboration between the Government of Bangladesh, UN agencies, and humanitarian partners:
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Strategic Executive Group (SEG):</strong> Co-chaired by the UN Resident Coordinator, IOM, and
              UNHCR Representatives, providing overall strategic guidance.
            </li>
            <li>
              <strong>Inter-Sector Coordination Group (ISCG):</strong> Coordinating the overall humanitarian response
              across all sectors.
            </li>
            <li>
              <strong>Sector Coordination:</strong> Specialized coordination in areas such as shelter, health,
              education, protection, and food security.
            </li>
            <li>
              <strong>Government Coordination:</strong> Led by the Refugee Relief and Repatriation Commissioner (RRRC)
              for camp management and the Deputy Commissioner for host community support.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Host Community Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The influx of refugees has significantly impacted local communities in Cox's Bazar. Support programs for
              host communities include:
            </p>
            <ul className="space-y-1">
              <li>• Infrastructure development in affected areas</li>
              <li>• Environmental rehabilitation programs</li>
              <li>• Economic opportunity creation and livelihood support</li>
              <li>• Enhanced public services including healthcare and education</li>
              <li>• Social cohesion initiatives promoting peaceful coexistence</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Joint Response Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The humanitarian response is guided by the Joint Response Plan (JRP), a comprehensive strategy developed
              by the Government of Bangladesh and humanitarian partners to address the needs of refugees and affected
              host communities.
            </p>
            <p className="mb-4">
              The JRP outlines funding requirements, strategic objectives, and sector-specific plans for providing
              protection and assistance while working towards sustainable solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" asChild>
                <Link href="#">View Current JRP</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">Situation Reports</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How to Support</CardTitle>
          <CardDescription>
            There are various ways to contribute to the humanitarian response for Rohingya refugees and host communities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <Heart className="h-6 w-6 text-red-500 mb-2" />
              <h3 className="font-semibold mb-2">Donate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Financial contributions to humanitarian organizations working in the response.
              </p>
              <Button asChild size="sm">
                <Link href="/donation">Donation Page</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-4">
              <Users className="h-6 w-6 text-blue-500 mb-2" />
              <h3 className="font-semibold mb-2">Partner</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Organizational partnerships, technical support, and collaborative projects.
              </p>
              <Button variant="outline" size="sm">
                Partnership Information
              </Button>
            </div>
            <div className="border rounded-lg p-4">
              <FileText className="h-6 w-6 text-green-500 mb-2" />
              <h3 className="font-semibold mb-2">Stay Informed</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow updates, share information, and advocate for continued support.
              </p>
              <Button variant="outline" size="sm">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

