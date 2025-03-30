import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, FileText } from "lucide-react"
import Image from "next/image"

export default function MJAhmad() {
  const projects = [
    {
      title: "Cox's Bazar Tourism Development Initiative",
      role: "Project Director",
      period: "2020 - Present",
      description:
        "Leading the comprehensive tourism development initiative to enhance infrastructure, promote sustainable tourism, and improve visitor experiences in Cox's Bazar.",
    },
    {
      title: "Coastal Community Resilience Program",
      role: "Technical Advisor",
      period: "2018 - 2022",
      description:
        "Provided technical guidance for implementing climate adaptation measures and building resilience in coastal communities of Cox's Bazar district.",
    },
    {
      title: "Marine Resource Conservation Project",
      role: "Consultant",
      period: "2017 - 2019",
      description:
        "Consulted on sustainable fishing practices and marine conservation efforts to protect the biodiversity of the Bay of Bengal.",
    },
  ]

  const publications = [
    {
      title: "Sustainable Tourism Development in Coastal Areas: A Case Study of Cox's Bazar",
      journal: "Journal of Sustainable Tourism",
      year: "2022",
    },
    {
      title: "Climate Change Adaptation Strategies for Coastal Communities in Bangladesh",
      journal: "Climate Policy Journal",
      year: "2020",
    },
    {
      title: "Socioeconomic Impact of Tourism on Local Communities in Cox's Bazar",
      journal: "Development Studies Review",
      year: "2019",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="MJ Ahmad"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Mohammad Jamal Ahmad</h1>
                <p className="text-xl text-muted-foreground mb-4">Project Director, Trusted Ally Initiative</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>mjahmad@trustedally.gov.bd</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+880 1712 345678</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Cox's Bazar, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>District Administration Office</span>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Leading the Trusted Ally initiative to develop a comprehensive management system for Cox's Bazar
                  district, focusing on sustainable development, tourism enhancement, and community welfare.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                About
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mohammad Jamal Ahmad is a seasoned administrator and development professional with over 15 years of
                experience in public administration, project management, and sustainable development. He has been
                instrumental in implementing various development initiatives in Cox's Bazar district.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">Master of Public Administration</div>
                  <div className="text-sm text-muted-foreground">University of Dhaka, 2008</div>
                </li>
                <li>
                  <div className="font-medium">Bachelor of Civil Engineering</div>
                  <div className="text-sm text-muted-foreground">
                    Bangladesh University of Engineering and Technology, 2006
                  </div>
                </li>
                <li>
                  <div className="font-medium">Certificate in Sustainable Development</div>
                  <div className="text-sm text-muted-foreground">
                    United Nations Institute for Training and Research, 2012
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                <li>Public Administration</li>
                <li>Project Management</li>
                <li>Sustainable Development</li>
                <li>Tourism Management</li>
                <li>Climate Change Adaptation</li>
                <li>Community Development</li>
                <li>Disaster Management</li>
                <li>Infrastructure Planning</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Key Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.title} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-sm">
                    <span className="text-muted-foreground">{project.role}</span>
                    <span className="text-muted-foreground">{project.period}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {publications.map((pub) => (
                <li key={pub.title}>
                  <div className="font-medium">{pub.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {pub.journal}, {pub.year}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

