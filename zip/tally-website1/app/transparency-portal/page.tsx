import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, FileText, PieChart, BarChart, Users, DollarSign } from "lucide-react"
import { SimpleFooter } from "@/components/simple-footer"

export default function TransparencyPortalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <header className="bg-background border-b sticky top-0 z-50">
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
          <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Financial Transparency Portal</h1>
            <p className="text-muted-foreground">
              Complete visibility into our financial operations, fund allocations, and impact
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="funds">Fund Tracking</TabsTrigger>
              <TabsTrigger value="reports">Financial Reports</TabsTrigger>
              <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Transparency Commitment</CardTitle>
                  <CardDescription>How we ensure complete financial accountability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    At TRUSTED-ALLY, we believe in complete transparency in all our financial operations. Our commitment
                    to transparency is built on four key pillars:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <h3 className="font-medium">Detailed Reporting</h3>
                      </div>
                      <p className="text-sm">
                        We publish quarterly financial reports that detail all donations received and how they were
                        used.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <PieChart className="h-4 w-4 text-green-600" />
                        </div>
                        <h3 className="font-medium">Fund Separation</h3>
                      </div>
                      <p className="text-sm">
                        We maintain strict separation between different funds, ensuring donations are used as
                        designated.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <Users className="h-4 w-4 text-amber-600" />
                        </div>
                        <h3 className="font-medium">Independent Oversight</h3>
                      </div>
                      <p className="text-sm">
                        Our financial operations are overseen by an independent committee and audited annually.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <BarChart className="h-4 w-4 text-purple-600" />
                        </div>
                        <h3 className="font-medium">Impact Measurement</h3>
                      </div>
                      <p className="text-sm">
                        We track and report on the impact of each donation to show the real-world difference you're
                        making.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Recent Transparency Achievements</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Implemented new fund tracking system with real-time updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Received "Excellence in Financial Transparency" certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Expanded our independent oversight committee to include community representatives</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$124,500</div>
                    <p className="text-sm text-muted-foreground">Across all funds</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Donors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1,634</div>
                    <p className="text-sm text-muted-foreground">Supporting our mission</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Admin Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">9.2%</div>
                    <p className="text-sm text-muted-foreground">Of total donations</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="funds" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fund Allocation Tracking</CardTitle>
                  <CardDescription>Real-time tracking of each fund's progress and usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Education Program Fund</h3>
                      <span className="text-sm font-medium">$28,750 / $50,000</span>
                    </div>
                    <Progress value={57.5} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Recent Donations</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Anonymous</span>
                            <span>$100</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sarah M.</span>
                            <span>$50</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Ahmed K.</span>
                            <span>$200</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Recent Expenditures</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Learning Materials</span>
                            <span>$1,200</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Teacher Salaries</span>
                            <span>$2,500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Facility Costs</span>
                            <span>$800</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Al-Quran Journey Fund</h3>
                      <span className="text-sm font-medium">$42,300 / $75,000</span>
                    </div>
                    <Progress value={56.4} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Recent Donations</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Fatima R.</span>
                            <span>$500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Anonymous</span>
                            <span>$250</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Mohammad S.</span>
                            <span>$100</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Recent Expenditures</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Quran Printing</span>
                            <span>$3,500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Distribution</span>
                            <span>$1,200</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Teacher Training</span>
                            <span>$900</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Orphan Care Fund</h3>
                      <span className="text-sm font-medium">$22,450 / $40,000</span>
                    </div>
                    <Progress value={56.1} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Recent Donations</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>John D.</span>
                            <span>$300</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Anonymous</span>
                            <span>$150</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Aisha T.</span>
                            <span>$200</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Recent Expenditures</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Education</span>
                            <span>$2,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Food & Nutrition</span>
                            <span>$1,500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Healthcare</span>
                            <span>$1,200</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/financial-reports">View Detailed Fund Reports</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>Comprehensive financial documentation and audit reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Quarterly Reports</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">Q1 2023 Financial Report</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed breakdown of donations and expenditures for January-March 2023
                        </p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="#">Download PDF</Link>
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">Q2 2023 Financial Report</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed breakdown of donations and expenditures for April-June 2023
                        </p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="#">Download PDF</Link>
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">Q3 2023 Financial Report</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed breakdown of donations and expenditures for July-September 2023
                        </p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="#">Download PDF</Link>
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">Q4 2023 Financial Report</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Detailed breakdown of donations and expenditures for October-December 2023
                        </p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="#">Download PDF</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="annual">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="annual">Annual Reports</TabsTrigger>
                      <TabsTrigger value="audit">Audit Reports</TabsTrigger>
                      <TabsTrigger value="special">Special Reports</TabsTrigger>
                    </TabsList>
                    <TabsContent value="annual" className="pt-4">
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-green-500" />
                            <h4 className="font-medium">2023 Annual Financial Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Comprehensive financial report for the entire 2023 fiscal year
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>

                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-green-500" />
                            <h4 className="font-medium">2022 Annual Financial Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Comprehensive financial report for the entire 2022 fiscal year
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="audit" className="pt-4">
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-amber-500" />
                            <h4 className="font-medium">2023 Independent Audit Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Results of the annual independent financial audit for 2023
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>

                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-amber-500" />
                            <h4 className="font-medium">2022 Independent Audit Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Results of the annual independent financial audit for 2022
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="special" className="pt-4">
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-purple-500" />
                            <h4 className="font-medium">Zakat Fund Distribution Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Detailed report on the collection and distribution of Zakat funds
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>

                        <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-purple-500" />
                            <h4 className="font-medium">Al-Quran Journey Impact Report</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Special report on the impact of the Al-Quran Journey initiative
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#">Download PDF</Link>
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact Metrics</CardTitle>
                  <CardDescription>Measuring the real-world difference your donations make</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-blue-700">1,250</div>
                      <p className="text-blue-600">Children Educated</p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="text-3xl font-bold text-green-700">5,000</div>
                      <p className="text-green-600">Qurans Distributed</p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="text-3xl font-bold text-amber-700">350</div>
                      <p className="text-amber-600">Orphans Supported</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Education Program Impact</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Literacy Rate Improvement</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Students Continuing to Higher Education</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Teacher Training Completion</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Al-Quran Journey Impact</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Quran Distribution Target</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tajweed Program Completion</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Community Engagement</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Testimonials</h3>
                    <div className="space-y-4">
                      <div className="bg-background p-3 rounded border">
                        <p className="text-sm italic mb-2">
                          "The educational materials provided by TRUSTED-ALLY have transformed our school. Our students
                          now have access to quality resources they never had before."
                        </p>
                        <p className="text-sm font-medium">- Headmaster, Rural School in Bangladesh</p>
                      </div>

                      <div className="bg-background p-3 rounded border">
                        <p className="text-sm italic mb-2">
                          "Receiving the Quran and learning materials has been a blessing for our community. We are
                          grateful for the support of donors who made this possible."
                        </p>
                        <p className="text-sm font-medium">- Community Leader, Sylhet Region</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/impact-stories">Read Full Impact Stories</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

