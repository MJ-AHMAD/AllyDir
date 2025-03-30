import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to assist you with any questions, feedback, or collaboration opportunities related to Cox's Bazar
          district management.
        </p>
      </section>

      {/* Contact Information and Form */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">District Administration Office</p>
                    <p className="text-muted-foreground">Cox's Bazar, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">t-ally@outlook.com</p>
                    <p className="text-muted-foreground">mja@trustedally.onmicrosoft.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-muted-foreground">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/coxs2.png"
                alt="Cox's Bazar District Office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tourism Department</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For inquiries related to tourism, attractions, and visitor information.
              </p>
              <p>
                <span className="font-medium">Email:</span> tourism@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education Department</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For inquiries related to educational institutions and programs.
              </p>
              <p>
                <span className="font-medium">Email:</span> education@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Economic Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For inquiries related to business opportunities and economic initiatives.
              </p>
              <p>
                <span className="font-medium">Email:</span> economic@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Environmental Affairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For inquiries related to environmental conservation and climate initiatives.
              </p>
              <p>
                <span className="font-medium">Email:</span> environment@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Healthcare Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">For inquiries related to healthcare facilities and programs.</p>
              <p>
                <span className="font-medium">Email:</span> health@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For inquiries related to infrastructure projects and development.
              </p>
              <p>
                <span className="font-medium">Email:</span> infrastructure@trustedally.onmicrosoft.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How can I access district services online?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You can access most district services through our website by navigating to the relevant hub. Each hub
                provides specific online services related to that sector.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How can I report an issue in my area?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You can report issues through our contact form, by email, or by calling our office directly. Please
                provide specific details about the location and nature of the issue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How can I get involved in community initiatives?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visit our Community Hub for information on ongoing initiatives and volunteer opportunities. You can also
                contact us directly to express your interest in specific areas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Where can I find information about upcoming events?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Information about upcoming events is regularly updated on our website's home page and in the relevant
                hub sections. You can also subscribe to our newsletter for updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

