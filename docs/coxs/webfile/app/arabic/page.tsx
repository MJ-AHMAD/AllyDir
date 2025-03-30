import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import Link from "next/link"

export default function Arabic() {
  const sections = [
    {
      title: "حول كوكس بازار",
      description: "كوكس بازار هي منطقة في جنوب شرق بنغلاديش وموطن لأطول شاطئ بحري طبيعي في العالم.",
      link: "/tourist-hub",
    },
    {
      title: "الخدمات الإدارية",
      description: "معلومات عن الخدمات الحكومية والمسؤولين والإجراءات الإدارية.",
      link: "/administrative",
    },
    {
      title: "معلومات سياحية",
      description: "استكشف الشواطئ الجميلة والمعالم السياحية ومرافق السياحة في كوكس بازار.",
      link: "/tourist-hub",
    },
    {
      title: "الخدمات الصحية",
      description: "ابحث عن معلومات حول المستشفيات والعيادات وبرامج الرعاية الصحية في المنطقة.",
      link: "/health-hub",
    },
    {
      title: "الموارد التعليمية",
      description: "تفاصيل حول المؤسسات التعليمية والبرامج والفرص في كوكس بازار.",
      link: "/education-hub",
    },
    {
      title: "التنمية الاقتصادية",
      description: "معلومات عن الأنشطة الاقتصادية وفرص الأعمال ومشاريع التنمية.",
      link: "/economic-hub",
    },
  ]

  return (
    <div className="container mx-auto" dir="rtl">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="h-6 w-6" />
        <h1 className="text-3xl font-bold">العربية - الحليف الموثوق</h1>
      </div>

      <p className="text-lg mb-8">
        مرحبًا بكم في القسم العربي من الحليف الموثوق، نظام الإدارة الشامل لمنطقة كوكس بازار. يمكنك الوصول إلى المعلومات
        والخدمات باللغة العربية من خلال الروابط أدناه.
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
                <Link href={section.link}>استكشاف</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>خيارات اللغة</CardTitle>
          <CardDescription>هذه المنصة متوفرة بعدة لغات لخدمة المجتمعات المتنوعة</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/english">
                <Globe className="ml-2 h-4 w-4" /> English (الإنجليزية)
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/bangla">
                <Globe className="ml-2 h-4 w-4" /> বাংলা (البنغالية)
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-primary">
              <Globe className="ml-2 h-4 w-4" /> العربية (الحالية)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

