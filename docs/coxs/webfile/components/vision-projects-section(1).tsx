"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Building,
  GraduationCap,
  Heart,
  LineChart,
  Lightbulb,
  Target,
  Trophy,
  Users,
  Workflow,
} from "lucide-react"

export default function VisionProjectsSection() {
  const [activeYear, setActiveYear] = useState(1)

  const visionYears = [
    {
      year: "Year 1",
      title: "Foundation Building",
      description: "Establishing core infrastructure and educational frameworks",
      achievements: [
        { text: "Launch 15 educational centers across the district", progress: 65 },
        { text: "Train 200 local teachers in modern teaching methods", progress: 80 },
        { text: "Implement digital literacy programs in 30 schools", progress: 70 },
      ],
    },
    {
      year: "Year 2",
      title: "Expansion & Growth",
      description: "Scaling successful initiatives and introducing new programs",
      achievements: [
        { text: "Expand to 30 educational centers district-wide", progress: 40 },
        { text: "Establish vocational training in 5 key economic sectors", progress: 55 },
        { text: "Launch environmental education in all district schools", progress: 30 },
      ],
    },
    {
      year: "Year 3",
      title: "Integration & Innovation",
      description: "Creating sustainable systems and innovative solutions",
      achievements: [
        { text: "Integrate technology in 90% of district schools", progress: 25 },
        { text: "Develop Cox's Bazar-specific curriculum materials", progress: 20 },
        { text: "Establish research partnerships with 3 universities", progress: 35 },
      ],
    },
    {
      year: "Year 4",
      title: "Sustainability & Excellence",
      description: "Ensuring long-term impact and educational excellence",
      achievements: [
        { text: "Achieve 95% literacy rate across the district", progress: 15 },
        { text: "Create self-sustaining educational ecosystem", progress: 10 },
        { text: "Position Cox's Bazar as an educational model for coastal regions", progress: 5 },
      ],
    },
  ]

  const projects = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Educational Excellence Initiative",
      description: "Transforming 100 schools with modern teaching methods and technology integration",
      metrics: [
        { label: "Schools Transformed", value: "42", target: "100" },
        { label: "Teachers Trained", value: "315", target: "500" },
        { label: "Students Impacted", value: "12,450", target: "25,000" },
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Sustainable Infrastructure Development",
      description: "Creating eco-friendly infrastructure to support education and community needs",
      metrics: [
        { label: "Green Buildings", value: "8", target: "25" },
        { label: "Solar-Powered Schools", value: "15", target: "50" },
        { label: "Community Centers", value: "6", target: "20" },
      ],
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Community Wellness Program",
      description: "Promoting health education and wellness practices throughout Cox's Bazar",
      metrics: [
        { label: "Health Workshops", value: "87", target: "200" },
        { label: "Wellness Centers", value: "12", target: "30" },
        { label: "Families Reached", value: "5,280", target: "15,000" },
      ],
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Digital Literacy Campaign",
      description: "Equipping residents with essential digital skills for the modern economy",
      metrics: [
        { label: "Tech Labs Established", value: "18", target: "40" },
        { label: "Digital Skills Workshops", value: "124", target: "300" },
        { label: "Digital Certificates Awarded", value: "3,750", target: "10,000" },
      ],
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            <span className="relative inline-block">
              Transforming Cox's Bazar
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trusted Ally is committed to transforming Cox's Bazar into an educated, model district through targeted
            projects and sustainable development initiatives over the next four years.
          </p>
        </div>

        {/* Vision Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Workflow className="h-6 w-6 text-primary" />
            Our 4-Year Transformation Roadmap
          </h3>

          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {visionYears.map((item, index) => (
                <div
                  key={index}
                  className={`relative z-10 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeYear === index ? "scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveYear(index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeYear === index ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p className="mt-2 font-medium text-sm">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h4 className="text-xl font-bold text-primary mb-2">{visionYears[activeYear].title}</h4>
                <p className="text-gray-600 mb-4">{visionYears[activeYear].description}</p>
                <div className="hidden md:block">
                  <div className="relative mt-8">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    {[1, 2, 3, 4].map((year, idx) => (
                      <div key={idx} className="relative flex items-center mb-6">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                            activeYear === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {year}
                        </div>
                        <div className={`ml-4 font-medium ${activeYear === idx ? "text-primary" : "text-gray-500"}`}>
                          Year {year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Key Milestones:</h4>
                <div className="space-y-6">
                  {visionYears[activeYear].achievements.map((achievement, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{achievement.text}</span>
                        <span className="text-primary font-bold">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Our Target-Based Projects
          </h3>

          <Tabs defaultValue="education" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Education
                </TabsTrigger>
                <TabsTrigger value="infrastructure" className="flex items-center gap-2">
                  <Building className="h-4 w-4" /> Infrastructure
                </TabsTrigger>
                <TabsTrigger value="community" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" /> Community
                </TabsTrigger>
                <TabsTrigger value="digital" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Digital
                </TabsTrigger>
              </TabsList>
            </div>

            {projects.map((project, idx) => (
              <TabsContent key={idx} value={["education", "infrastructure", "community", "digital"][idx]}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="mb-4">{project.icon}</div>
                        <h4 className="text-xl font-bold mb-2 text-center md:text-left">{project.title}</h4>
                        <p className="text-gray-600 text-center md:text-left">{project.description}</p>
                      </div>
                      <div className="md:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.metrics.map((metric, midx) => (
                            <div key={midx} className="bg-gray-50 rounded-lg p-4 text-center">
                              <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-3xl font-bold text-primary">{metric.value}</span>
                                <span className="text-sm text-gray-400">/ {metric.target}</span>
                              </div>
                              <Progress
                                value={
                                  (Number.parseInt(metric.value.replace(/,/g, "")) /
                                    Number.parseInt(metric.target.replace(/,/g, ""))) *
                                  100
                                }
                                className="h-1 mt-2"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-3 text-center md:text-left">Our Vision for Cox's Bazar</h3>
              <p className="text-gray-700 mb-4">
                By 2028, we envision Cox's Bazar as a model district where education, sustainability, and community
                well-being flourish together. Through our targeted initiatives and collaborative approach, we aim to
                create lasting positive change that benefits all residents and serves as an inspiration for other
                coastal regions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Trophy className="h-3 w-3" /> 95% Literacy Rate
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Users className="h-3 w-3" /> 100% School Enrollment
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <LineChart className="h-3 w-3" /> Sustainable Economic Growth
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Target className="h-3 w-3" /> Model Coastal District
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

