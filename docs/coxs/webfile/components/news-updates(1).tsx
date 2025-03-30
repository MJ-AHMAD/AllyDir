"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("news")

  const newsItems = [
    {
      title: "Chief Advisor Launches Educational Excellence Initiative",
      date: "March 15, 2025",
      category: "Education",
      excerpt:
        "Chief Advisor Prof. Muhammad Yunus has announced a comprehensive educational reform initiative aimed at modernizing Bangladesh's education system and creating opportunities for underprivileged students.",
      link: "/news/chief-advisor-initiative",
    },
    {
      title: "Cox's Bazar Flood Relief Efforts Mobilized by Trusted Ally",
      date: "March 5, 2025",
      category: "Community",
      excerpt:
        "In response to recent flooding in Cox's Bazar region, Trusted Ally has coordinated emergency relief efforts, providing essential supplies and temporary shelter to affected communities.",
      link: "/news/flood-relief",
    },
    {
      title: "Digital Literacy Program Expands to 50 Schools in Cox's Bazar",
      date: "March 12, 2025",
      category: "Technology",
      excerpt:
        "The Digital Literacy Program has successfully expanded to 50 schools in Cox's Bazar district, including both traditional and Islamic educational institutions, bridging the digital divide.",
      link: "/news/digital-literacy",
    },
  ]

  const upcomingEvents = [
    {
      title: "Educational Innovation Summit",
      date: "October 15-17, 2025",
      location: "Cox's Bazar Convention Center",
      description:
        "Join educators, policymakers, and technology experts to discuss innovative approaches to education in Bangladesh.",
      link: "#",
    },
    {
      title: "Community Resilience Workshop",
      date: "November 5, 2025",
      location: "Central Community Hall",
      description: "Learn about disaster preparedness and community resilience strategies for coastal communities.",
      link: "#",
    },
    {
      title: "Youth Digital Skills Bootcamp",
      date: "December 10-12, 2025",
      location: "Cox's Bazar Digital Hub",
      description: "Intensive training program for youth to develop essential digital skills for the modern workforce.",
      link: "#",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our recent activities, news, and upcoming events
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="news">News & Announcements</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-3">{item.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={item.link} className="flex items-center">
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/news">View All News</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="text-sm text-gray-500 mt-1">{event.location}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-3">{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={event.link} className="flex items-center">
                        Event details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

