"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [inquiryType, setInquiryType] = useState("general")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    })
    // Reset form fields
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setInquiryType("general")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to listen, help, and collaborate. Reach out to us through any of our contact channels.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="container mx-auto px-4 py-12 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Main Office:</p>
              <p className="font-medium">+1 (234) 567-890</p>
              <p className="text-gray-600 mt-4 mb-2">Support Line:</p>
              <p className="font-medium">+1 (234) 567-891</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">General Inquiries:</p>
              <p className="font-medium">info@trusted-ally.org</p>
              <p className="text-gray-600 mt-4 mb-2">Support:</p>
              <p className="font-medium">support@trusted-ally.org</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Weekdays:</p>
              <p className="font-medium">9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mt-4 mb-2">Weekends:</p>
              <p className="font-medium">10:00 AM - 2:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="contact-form" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="contact-form" className="text-sm md:text-base">
              <MessageSquare className="h-4 w-4 mr-2 hidden md:inline" />
              Contact Form
            </TabsTrigger>
            <TabsTrigger value="directory" className="text-sm md:text-base">
              <Users className="h-4 w-4 mr-2 hidden md:inline" />
              Directory
            </TabsTrigger>
            <TabsTrigger value="faq" className="text-sm md:text-base">
              <Lightbulb className="h-4 w-4 mr-2 hidden md:inline" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="location" className="text-sm md:text-base">
              <MapPin className="h-4 w-4 mr-2 hidden md:inline" />
              Location
            </TabsTrigger>
          </TabsList>

          {/* Contact Form Tab */}
          <TabsContent value="contact-form">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you as soon as possible. We value your feedback
                  and inquiries.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What is your message about?"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Inquiry Type <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup value={inquiryType} onValueChange={setInquiryType} className="mt-2">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="text-sm">
                            General
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="volunteer" id="volunteer" />
                          <Label htmlFor="volunteer" className="text-sm">
                            Volunteer
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="donation" id="donation" />
                          <Label htmlFor="donation" className="text-sm">
                            Donation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partnership" id="partnership" />
                          <Label htmlFor="partnership" className="text-sm">
                            Partnership
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      className="mt-1 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                    <p className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span>123 TRUSTED-ALLY Street, Cityville, State 12345, Country</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
                    <p className="flex items-center mb-2">
                      <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <span>Main: +1 (234) 567-890</span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <span>Support: +1 (234) 567-891</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Addresses</h3>
                    <p className="flex items-center mb-2">
                      <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <span>General: info@trusted-ally.org</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <span>Support: support@trusted-ally.org</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://facebook.com"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="https://twitter.com"
                        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                      <Link
                        href="https://instagram.com"
                        className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="https://linkedin.com"
                        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Directory Tab */}
          <TabsContent value="directory">
            <h2 className="text-2xl font-bold mb-6">Contact Directory</h2>
            <p className="text-gray-600 mb-6">
              Find the right department or team member to address your specific needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Administration</CardTitle>
                  <CardDescription>For organizational and management inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Director:</span> Ahmed Rahman
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> admin@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-892
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Coordination</CardTitle>
                  <CardDescription>For volunteer opportunities and management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Coordinator:</span> Sarah Johnson
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> volunteers@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-893
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donations & Fundraising</CardTitle>
                  <CardDescription>For donation inquiries and fundraising</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Manager:</span> Michael Chen
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> donations@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-894
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education Programs</CardTitle>
                  <CardDescription>For inquiries about our educational initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Director:</span> Fatima Al-Zahra
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> education@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-895
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Al-Quran Journey</CardTitle>
                  <CardDescription>For inquiries about our Quranic programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Director:</span> Yusuf Abdullah
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> quran@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-896
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Relations</CardTitle>
                  <CardDescription>For press and media inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Spokesperson:</span> David Wilson
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span> media@trusted-ally.org
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> +1 (234) 567-897
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Find answers to common questions about our organization, programs, and services.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Our Organization</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is TRUSTED-ALLY's mission?</AccordionTrigger>
                    <AccordionContent>
                      TRUSTED-ALLY is dedicated to empowering communities through education, social initiatives, and
                      environmental development. Our mission is to create sustainable positive change by fostering
                      collaboration, innovation, and compassion.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long has TRUSTED-ALLY been operating?</AccordionTrigger>
                    <AccordionContent>
                      TRUSTED-ALLY was established in 2010 and has been serving communities for over a decade.
                      Throughout this time, we've expanded our programs and reach to impact more lives positively.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is TRUSTED-ALLY a non-profit organization?</AccordionTrigger>
                    <AccordionContent>
                      Yes, TRUSTED-ALLY is a registered 501(c)(3) non-profit organization. All donations are
                      tax-deductible to the extent allowed by law.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h3 className="text-xl font-semibold mt-8 mb-4">Programs & Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What educational programs does TRUSTED-ALLY offer?</AccordionTrigger>
                    <AccordionContent>
                      We offer a variety of educational programs including coding workshops, language courses, Al-Quran
                      Journey, and professional development training. Our programs cater to different age groups and
                      skill levels.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How can I enroll in your educational programs?</AccordionTrigger>
                    <AccordionContent>
                      You can enroll in our educational programs through our website by visiting the Education Program
                      page and selecting the course you're interested in. Follow the registration instructions provided
                      for each program.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Are your programs available online?</AccordionTrigger>
                    <AccordionContent>
                      Yes, many of our programs are available in both in-person and online formats to accommodate
                      different preferences and circumstances. Check the specific program details for availability
                      options.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Getting Involved</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-7">
                    <AccordionTrigger>How can I volunteer with TRUSTED-ALLY?</AccordionTrigger>
                    <AccordionContent>
                      You can volunteer by visiting our Volunteer page and filling out the application form. We have
                      various volunteer opportunities based on your skills, interests, and availability.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>What donation options are available?</AccordionTrigger>
                    <AccordionContent>
                      We offer various donation options including one-time donations, monthly giving, Zakat, Sadaqah,
                      and specific program funding. You can donate online through our secure platform or contact us for
                      other arrangements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger>Can organizations partner with TRUSTED-ALLY?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we welcome partnerships with organizations that share our values and mission. Please contact
                      our Partnership team at partnerships@trusted-ally.org to discuss potential collaboration
                      opportunities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h3 className="text-xl font-semibold mt-8 mb-4">Contact & Support</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-10">
                    <AccordionTrigger>How quickly can I expect a response to my inquiry?</AccordionTrigger>
                    <AccordionContent>
                      We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters,
                      please call our main office directly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-11">
                    <AccordionTrigger>Can I schedule a meeting with a team member?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can schedule a meeting with our team members. Please contact the relevant department
                      through our directory or use the contact form to request a meeting, specifying your preferred date
                      and time.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-12">
                    <AccordionTrigger>Do you have physical offices I can visit?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our main office is located at 123 TRUSTED-ALLY Street, Cityville. We welcome visitors during
                      our business hours, but we recommend scheduling an appointment in advance for a better experience.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <p className="text-gray-600 mb-6">Visit us at our main office or one of our satellite locations.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                  {/* Replace with actual map integration */}
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p>An interactive map would be displayed here, showing our office location and nearby landmarks.</p>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Main Office</CardTitle>
                    <CardDescription>Headquarters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <p>123 TRUSTED-ALLY Street, Cityville, State 12345, Country</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <p>+1 (234) 567-890</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <p>info@trusted-ally.org</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                      <div>
                        <p className="mb-1">Monday-Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">By Public Transport</h4>
                      <p className="text-gray-600">
                        Bus routes 10, 15, and 22 stop within a 5-minute walk of our office. The nearest subway station
                        is Central Station, a 10-minute walk away.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">By Car</h4>
                      <p className="text-gray-600">
                        Parking is available in the building's underground garage. Street parking is also available but
                        limited during business hours.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Accessibility</h4>
                      <p className="text-gray-600">
                        Our office is wheelchair accessible with ramps and elevators. Please contact us in advance if
                        you require any special accommodations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-8">
              Subscribe to our newsletter to receive updates about our programs, events, and impact stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-gray-900 min-w-0 sm:min-w-[300px]"
                required
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold">Need urgent assistance?</h3>
            </div>
            <p className="text-gray-700 mb-4 md:mb-0 md:mx-4">
              Our emergency support line is available 24/7 for critical situations.
            </p>
            <Button variant="destructive">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Contact: +1 (234) 567-999
            </Button>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  )
}

