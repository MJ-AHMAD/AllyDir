"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Leaf, Droplets, Recycle, Wind, ChevronRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function JoinOurEcoEffortsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [location, setLocation] = useState("")
  const [availability, setAvailability] = useState("")
  const [experience, setExperience] = useState("none")
  const [activities, setActivities] = useState({
    treePlanting: false,
    recycling: false,
    cleanupDrives: false,
    awarenessWorkshops: false,
    waterConservation: false,
    communityGardens: false,
  })
  const [progress, setProgress] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, phone, message, activities, location, availability, experience })

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in joining our eco-efforts. We'll be in touch soon!",
      variant: "default",
    })

    // Reset form
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setLocation("")
    setAvailability("")
    setExperience("none")
    setActivities({
      treePlanting: false,
      recycling: false,
      cleanupDrives: false,
      awarenessWorkshops: false,
      waterConservation: false,
      communityGardens: false,
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/eco1.png"
            alt="Environmental volunteers planting trees"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/60"></div>
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 text-sm">
              Join Our Community
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join Our Eco-Efforts</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your participation can make a significant impact on our environment. Together, we can create a sustainable
              future for generations to come.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <a href="#volunteer-form">Become a Volunteer</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                <a href="#upcoming-events">View Upcoming Events</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg bg-green-50">
              <div className="text-green-600 mb-2">
                <Leaf className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-green-800">10,000+</div>
              <p className="text-sm text-green-700">Trees Planted</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg bg-blue-50">
              <div className="text-blue-600 mb-2">
                <Droplets className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-blue-800">20+</div>
              <p className="text-sm text-blue-700">Water Projects</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg bg-amber-50">
              <div className="text-amber-600 mb-2">
                <Recycle className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-amber-800">15+</div>
              <p className="text-sm text-amber-700">Recycling Centers</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg bg-purple-50">
              <div className="text-purple-600 mb-2">
                <Users className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-purple-800">5,000+</div>
              <p className="text-sm text-purple-700">Volunteers</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Environmental Action</Badge>
            <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              There are many ways you can contribute to our environmental initiatives. Choose the activities that align
              with your interests and availability.
            </p>
          </motion.div>

          <Tabs defaultValue="treePlanting" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger
                value="treePlanting"
                className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
              >
                Tree Planting
              </TabsTrigger>
              <TabsTrigger
                value="recycling"
                className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
              >
                Recycling
              </TabsTrigger>
              <TabsTrigger
                value="cleanupDrives"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
              >
                Clean-ups
              </TabsTrigger>
              <TabsTrigger
                value="awarenessWorkshops"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
              >
                Workshops
              </TabsTrigger>
              <TabsTrigger
                value="waterConservation"
                className="data-[state=active]:bg-cyan-100 data-[state=active]:text-cyan-800"
              >
                Water Projects
              </TabsTrigger>
              <TabsTrigger
                value="communityGardens"
                className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
              >
                Gardens
              </TabsTrigger>
            </TabsList>

            <TabsContent value="treePlanting" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle>Tree Planting Initiatives</CardTitle>
                      <CardDescription>Help increase green cover and combat climate change</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Plant native trees and shrubs in designated areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Learn about local ecosystems and plant species</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Monitor and maintain newly planted trees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Participate in community education about reforestation</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Each tree planted can:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Absorb up to 48 pounds of CO2 per year</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Provide habitat for local wildlife</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Help prevent soil erosion</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/env2.png"
                          alt="Tree planting volunteers"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Tree Planting Events</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">City Park Reforestation</p>
                              <p className="text-sm text-gray-600">April 22, 2025 • 9:00 AM - 1:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Watershed Protection Planting</p>
                              <p className="text-sm text-gray-600">May 15, 2025 • 8:30 AM - 12:30 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recycling" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Recycle className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle>Recycling Programs</CardTitle>
                      <CardDescription>Reduce waste and promote circular economy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Help sort and process recyclable materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Educate community members about proper recycling practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Assist with recycling collection events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Help develop and implement waste reduction strategies</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Our recycling programs:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Divert over 50 tons of waste from landfills annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Reduce greenhouse gas emissions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Conserve natural resources and energy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/eco2.png"
                          alt="Recycling volunteers"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Recycling Events</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">E-Waste Collection Drive</p>
                              <p className="text-sm text-gray-600">April 15, 2025 • 10:00 AM - 2:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Plastic-Free Workshop</p>
                              <p className="text-sm text-gray-600">May 10, 2025 • 1:00 PM - 3:00 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cleanupDrives" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Wind className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Clean-up Drives</CardTitle>
                      <CardDescription>Keep our neighborhoods, beaches, and parks litter-free</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Participate in organized clean-up events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Collect and properly dispose of litter and debris</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Document pollution sources for future prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Help raise awareness about litter prevention</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Our clean-up drives:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Remove thousands of pounds of trash annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Protect wildlife from harmful debris</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Improve water quality in local waterways</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/env3.png"
                          alt="Beach cleanup volunteers"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Clean-up Events</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Riverside Clean-up</p>
                              <p className="text-sm text-gray-600">April 8, 2025 • 9:00 AM - 12:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Beach Restoration Day</p>
                              <p className="text-sm text-gray-600">May 22, 2025 • 8:00 AM - 1:00 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="awarenessWorkshops" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle>Environmental Awareness Workshops</CardTitle>
                      <CardDescription>
                        Spread awareness about environmental issues and sustainable practices
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Help organize and facilitate educational workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Develop educational materials and presentations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Engage with community members and students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Share knowledge about environmental conservation</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Our workshops:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Reach over 5,000 students and community members annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Inspire behavior change and sustainable practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Create environmental advocates in the community</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/eco1.png"
                          alt="Environmental education workshop"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Workshops</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Sustainable Living Workshop</p>
                              <p className="text-sm text-gray-600">April 18, 2025 • 2:00 PM - 4:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Climate Change Education Series</p>
                              <p className="text-sm text-gray-600">May 5-7, 2025 • 6:00 PM - 8:00 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="waterConservation" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Droplets className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <CardTitle>Water Conservation Projects</CardTitle>
                      <CardDescription>Protect freshwater resources and restore watersheds</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Help install rainwater harvesting systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Participate in watershed restoration activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Monitor water quality in local waterways</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Educate communities about water conservation</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Our water projects:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <span>Conserve millions of gallons of water annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <span>Improve water quality for communities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <span>Restore natural water cycles</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/env1.png"
                          alt="Water conservation project"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Water Projects</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Watershed Restoration Day</p>
                              <p className="text-sm text-gray-600">April 12, 2025 • 9:00 AM - 2:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Rain Garden Installation</p>
                              <p className="text-sm text-gray-600">May 18, 2025 • 10:00 AM - 3:00 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communityGardens" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle>Community Gardens</CardTitle>
                      <CardDescription>Promote food security and sustainable agriculture</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What You'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Help establish and maintain community gardens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Plant and harvest organic produce</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Teach gardening skills to community members</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Distribute fresh produce to food-insecure communities</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-2">Impact</h4>
                        <p className="mb-2">Our community gardens:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Produce thousands of pounds of fresh food annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Improve food security in underserved communities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Create green spaces and community gathering places</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48 relative">
                        <Image
                          src="https://mj-ahmad.github.io/mja2025/img/eco2.png"
                          alt="Community garden volunteers"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2">Upcoming Garden Events</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Spring Planting Day</p>
                              <p className="text-sm text-gray-600">April 5, 2025 • 10:00 AM - 2:00 PM</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Organic Gardening Workshop</p>
                              <p className="text-sm text-gray-600">May 12, 2025 • 1:00 PM - 3:00 PM</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 bg-green-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Mark Your Calendar</Badge>
            <h2 className="text-3xl font-bold mb-4">Upcoming Eco-Events</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us for these upcoming environmental events and make a difference in your community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 z-10 rounded-bl-lg">
                  April 22, 2025
                </div>
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/env2.png"
                  alt="Earth Day Tree Planting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Leaf className="h-5 w-5" />
                  <span className="text-sm font-medium">Tree Planting</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earth Day Tree Planting</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">City Park, Main Entrance</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">50 volunteers needed</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for our annual Earth Day tree planting event. Help us plant 500 native trees to restore our
                  city's green canopy.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="#volunteer-form">Sign Up</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 z-10 rounded-bl-lg">
                  May 15, 2025
                </div>
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/env3.png"
                  alt="Riverside Clean-up"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Wind className="h-5 w-5" />
                  <span className="text-sm font-medium">Clean-up</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Riverside Clean-up</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">8:30 AM - 12:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">River Park, South Entrance</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">75 volunteers needed</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Help us clean up our beautiful riverside and protect our local watershed. All cleaning supplies will
                  be provided.
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="#volunteer-form">Sign Up</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 z-10 rounded-bl-lg">
                  June 5, 2025
                </div>
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/eco1.png"
                  alt="World Environment Day Festival"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-amber-600 mb-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">Community Event</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">World Environment Day Festival</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Community Center Plaza</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">25 volunteers needed</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Celebrate World Environment Day with workshops, demonstrations, and family-friendly activities focused
                  on sustainability.
                </p>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="#volunteer-form">Sign Up</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/environmental-development/events">
                View All Events <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Join Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Become an Eco-Volunteer</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Fill out the form below to join our network of dedicated environmental volunteers. We'll match you with
              opportunities that align with your interests and availability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Why Volunteer With Us?</h3>
                  <p className="opacity-90 mb-4">
                    Joining our eco-volunteer network offers numerous benefits and opportunities.
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Make a Real Impact</h4>
                        <p className="text-gray-600">
                          Our projects create measurable environmental improvements in your community.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Learn New Skills</h4>
                        <p className="text-gray-600">
                          Gain practical experience in environmental conservation and sustainability.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Connect with Others</h4>
                        <p className="text-gray-600">
                          Meet like-minded individuals who share your passion for the environment.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Flexible Commitment</h4>
                        <p className="text-gray-600">
                          Volunteer as much or as little as your schedule allows. Every contribution helps.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Volunteer Spotlight</h4>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Volunteer portrait"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="italic text-gray-700 mb-2">
                          "Volunteering with TRUSTED-ALLY has been incredibly rewarding. I've learned so much about
                          environmental conservation while making a real difference in my community."
                        </p>
                        <p className="font-medium">- Sarah J., Volunteer since 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="City, State/Province"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="availability">Availability</Label>
                        <Select value={availability} onValueChange={setAvailability}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays</SelectItem>
                            <SelectItem value="weekends">Weekends</SelectItem>
                            <SelectItem value="evenings">Evenings</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Environmental Experience</Label>
                        <RadioGroup value={experience} onValueChange={setExperience} className="mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="none" id="exp-none" />
                            <Label htmlFor="exp-none" className="font-normal">
                              None (Beginners welcome!)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="some" id="exp-some" />
                            <Label htmlFor="exp-some" className="font-normal">
                              Some experience
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="experienced" id="exp-experienced" />
                            <Label htmlFor="exp-experienced" className="font-normal">
                              Experienced
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">I'm interested in participating in:</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="treePlanting"
                            checked={activities.treePlanting}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, treePlanting: checked === true }))
                            }
                          />
                          <Label htmlFor="treePlanting" className="font-normal">
                            Tree Planting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="recycling"
                            checked={activities.recycling}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, recycling: checked === true }))
                            }
                          />
                          <Label htmlFor="recycling" className="font-normal">
                            Recycling Programs
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cleanupDrives"
                            checked={activities.cleanupDrives}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, cleanupDrives: checked === true }))
                            }
                          />
                          <Label htmlFor="cleanupDrives" className="font-normal">
                            Clean-up Drives
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="awarenessWorkshops"
                            checked={activities.awarenessWorkshops}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, awarenessWorkshops: checked === true }))
                            }
                          />
                          <Label htmlFor="awarenessWorkshops" className="font-normal">
                            Awareness Workshops
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="waterConservation"
                            checked={activities.waterConservation}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, waterConservation: checked === true }))
                            }
                          />
                          <Label htmlFor="waterConservation" className="font-normal">
                            Water Conservation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="communityGardens"
                            checked={activities.communityGardens}
                            onCheckedChange={(checked) =>
                              setActivities((prev) => ({ ...prev, communityGardens: checked === true }))
                            }
                          />
                          <Label htmlFor="communityGardens" className="font-normal">
                            Community Gardens
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interests, skills, or any questions you have"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div className="pt-2">
                      <Progress value={progress} className="h-2 mb-2" />
                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Volunteer Stories</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Volunteers Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from the people who are making a difference in our environmental initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-gray-700 mb-6">
                  "Volunteering with the tree planting initiative has been one of the most rewarding experiences of my
                  life. Seeing the saplings we planted grow into trees that will benefit generations to come gives me
                  immense satisfaction."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Michael R." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Michael R.</p>
                    <p className="text-sm text-gray-600">Tree Planting Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-gray-700 mb-6">
                  "The beach clean-up drives have opened my eyes to the impact of pollution on our oceans. Working with
                  like-minded volunteers has been inspiring, and I've made lifelong friends while making a difference."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Priya K." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Priya K.</p>
                    <p className="text-sm text-gray-600">Clean-up Drive Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-gray-700 mb-6">
                  "Working in the community garden has taught me so much about sustainable agriculture. I love seeing
                  children's faces light up when they harvest vegetables they've grown themselves. It's truly
                  transformative."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src="/placeholder.svg?height=48&width=48" alt="David L." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">David L.</p>
                    <p className="text-sm text-gray-600">Community Garden Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Make a Difference</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Eco-Efforts Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Together, we can create a sustainable future for generations to come. Every action, no matter how small,
              contributes to a healthier planet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-white/90">
                <a href="#volunteer-form">Become a Volunteer</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">© 2025 Trusted Ally, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@trustedally.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Trusted Street, Ally City, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

