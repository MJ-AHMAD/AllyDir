import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import Link from "next/link"

export default function Bangla() {
  const sections = [
    {
      title: "কক্সবাজার সম্পর্কে",
      description: "কক্সবাজার বাংলাদেশের দক্ষিণ-পূর্বাঞ্চলের একটি জেলা এবং বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকতের অবস্থান।",
      link: "/tourist-hub",
    },
    {
      title: "প্রশাসনিক সেবা",
      description: "সরকারি সেবা, কর্মকর্তা এবং প্রশাসনিক পদ্ধতি সম্পর্কে তথ্য।",
      link: "/administrative",
    },
    {
      title: "পর্যটন তথ্য",
      description: "কক্সবাজারের সুন্দর সৈকত, আকর্ষণীয় স্থান এবং পর্যটন সুবিধাগুলি অন্বেষণ করুন।",
      link: "/tourist-hub",
    },
    {
      title: "স্বাস্থ্যসেবা",
      description: "জেলার হাসপাতাল, ক্লিনিক এবং স্বাস্থ্যসেবা কর্মসূচি সম্পর্কে তথ্য খুঁজুন।",
      link: "/health-hub",
    },
    {
      title: "শিক্ষা সংস্থান",
      description: "কক্সবাজারের শিক্ষা প্রতিষ্ঠান, কর্মসূচি এবং সুযোগ সম্পর্কে বিস্তারিত।",
      link: "/education-hub",
    },
    {
      title: "অর্থনৈতিক উন্নয়ন",
      description: "অর্থনৈতিক কার্যক্রম, ব্যবসায়িক সুযোগ এবং উন্নয়ন প্রকল্প সম্পর্কে তথ্য।",
      link: "/economic-hub",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="h-6 w-6" />
        <h1 className="text-3xl font-bold">বা���লা - ট্রাস্টেড অ্যালাই</h1>
      </div>

      <p className="text-lg mb-8">
        ট্রাস্টেড অ্যালাই-এর বাংলা ভাষা বিভাগে স্বাগতম, কক্সবাজার জেলার জন্য একটি ব্যাপক ব্যবস্থাপনা সিস্টেম। নিচের লিঙ্কগুলির মাধ্যমে বাংলায় তথ্য এবং
        পরিষেবাগুলি অ্যাক্সেস করুন।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sections.map((section) => (
          <Card key={section.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild className="w-full">
                <Link href={section.link}>অন্বেষণ করুন</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ভাষা বিকল্প</CardTitle>
          <CardDescription>এই প্ল্যাটফর্মটি বিভিন্ন সম্প্রদায়কে সেবা দেওয়ার জন্য একাধিক ভাষায় উপলব্ধ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/english">
                <Globe className="mr-2 h-4 w-4" /> English (ইংরেজি)
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-primary">
              <Globe className="mr-2 h-4 w-4" /> বাংলা (বর্তমান)
            </Button>
            <Button variant="outline" asChild>
              <Link href="/arabic">
                <Globe className="mr-2 h-4 w-4" /> العربية (আরবি)
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

