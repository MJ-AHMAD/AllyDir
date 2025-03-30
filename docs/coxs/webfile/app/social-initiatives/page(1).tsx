import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Home, School, Users } from "lucide-react"

export default function SocialInitiatives() {
  const initiatives = [
    {
      title: "Rohingya Refugee Support",
      icon: Home,
      description:
        "Programs supporting Rohingya refugees in Cox's Bazar camps, including shelter, food, healthcare, and education.",
    },
    {
      title: "Women Empowerment",
      icon: Users,
      description:
        "Initiatives to promote women's economic independence through skills training, microfinance, and entrepreneurship support.",
    },
    {
      title: "Child Education",
      icon: School,
      description:
        "Programs ensuring access to quality education for underprivileged children, including school supplies and scholarships.",
    },
    {
      title: "Community Health",
      icon: Heart,
      description:
        "Mobile health clinics, awareness campaigns, and preventive healthcare services for remote communities.",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Social Initiatives - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar is home to numerous social initiatives addressing community needs, refugee support, and sustainable
        development. This hub highlights key social programs and their impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {initiatives.map((initiative) => (
          <Card key={initiative.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <initiative.icon className="h-5 w-5" />
                {initiative.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{initiative.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>NGOs and Organizations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Several organizations are actively implementing social initiatives in Cox's Bazar:</p>
          <ul className="space-y-2">
            <li>BRAC - Education, healthcare, and livelihood programs</li>
            <li>UNHCR - Refugee support and protection</li>
            <li>Save the Children - Child welfare and education</li>
            <li>Oxfam - Water, sanitation, and hygiene programs</li>
            <li>ActionAid - Women empowerment and disaster response</li>
            <li>World Food Programme - Food security and nutrition</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Volunteer Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">There are various ways to contribute to social initiatives in Cox's Bazar:</p>
          <ul className="space-y-2">
            <li>Teaching English or other subjects in local schools</li>
            <li>Supporting healthcare outreach programs</li>
            <li>Participating in environmental conservation activities</li>
            <li>Assisting with vocational training programs</li>
            <li>Contributing to disaster preparedness and response</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

