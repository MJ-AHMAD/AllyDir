import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/education-program" className="font-medium hover:text-primary">
              Education Program
            </Link>
            <Link href="/social-initiatives" className="font-medium hover:text-primary">
              Social Initiatives
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              Environmental Development
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved in Our Education Program</h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg mb-6">
            Your involvement can make a significant difference in the lives of underprivileged children. Here are ways
            you can contribute to our education initiatives:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Teach in our free education programs</li>
                  <li>Assist in organizing workshops</li>
                  <li>Help with administrative tasks</li>
                  <li>Participate in our mentorship program</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sponsor a child's education</li>
                  <li>Contribute to our school supply drive</li>
                  <li>Fund teacher training programs</li>
                  <li>Support our digital literacy initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up to Get Involved</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" />
            </div>
            <div>
              <Label>Areas of Interest</Label>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="teaching" />
                  <Label htmlFor="teaching">Teaching</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mentoring" />
                  <Label htmlFor="mentoring">Mentoring</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="donation" />
                  <Label htmlFor="donation">Donation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="administrative" />
                  <Label htmlFor="administrative">Administrative Support</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" placeholder="Tell us more about how you'd like to get involved" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </main>

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

