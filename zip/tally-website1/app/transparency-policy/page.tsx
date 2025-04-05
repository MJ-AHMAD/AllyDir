import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SimpleFooter } from "@/components/simple-footer"

export default function TransparencyPolicyPage() {
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
          <Link href="/donate" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Donation
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Financial Transparency Policy</h1>

          <div className="prose prose-slate max-w-none">
            <p className="lead">
              At TRUSTED-ALLY, we are committed to the highest standards of financial transparency, accountability, and
              ethical fund management. This policy outlines our approach to ensuring that all donations are handled with
              integrity and used exactly as designated by our donors.
            </p>

            <h2>Core Principles</h2>

            <h3>1. Strict Fund Separation</h3>
            <p>We maintain completely separate accounts for each of our initiative funds:</p>
            <ul>
              <li>Education Program Fund</li>
              <li>Al-Quran Journey Fund</li>
              <li>Social Initiatives Fund</li>
            </ul>
            <p>
              Under no circumstances will funds be transferred between different initiatives. Each donation is allocated
              exclusively to the fund designated by the donor and will only be used for purposes within that specific
              initiative.
            </p>

            <h3>2. Financial Reporting</h3>
            <p>We publish quarterly financial reports that detail:</p>
            <ul>
              <li>Total donations received for each fund</li>
              <li>Detailed breakdown of how funds were utilized</li>
              <li>Current fund balances</li>
              <li>Progress toward funding goals</li>
            </ul>
            <p>These reports are made available to all donors and the general public through our website.</p>

            <h3>3. Independent Auditing</h3>
            <p>
              Our financial records are audited annually by an independent accounting firm. The results of these audits
              are published on our website to ensure complete transparency.
            </p>

            <h3>4. Donor Access</h3>
            <p>
              Donors have the right to request detailed information about how their specific contributions have been
              used. We provide regular updates to donors about the impact of their donations.
            </p>

            <h2>Fund Allocation Guidelines</h2>

            <h3>Education Program Fund</h3>
            <p>Donations to this fund are used exclusively for:</p>
            <ul>
              <li>Learning materials and resources</li>
              <li>Teacher salaries and training</li>
              <li>Educational facility maintenance</li>
              <li>Administrative costs directly related to educational programs</li>
            </ul>

            <h3>Al-Quran Journey Fund</h3>
            <p>Donations to this fund are used exclusively for:</p>
            <ul>
              <li>Quran printing and production</li>
              <li>Distribution and shipping costs</li>
              <li>Islamic education programs</li>
              <li>Administrative costs directly related to Al-Quran Journey initiatives</li>
            </ul>

            <h3>Social Initiatives Fund</h3>
            <p>Donations to this fund are used exclusively for:</p>
            <ul>
              <li>Community development programs</li>
              <li>Emergency relief efforts</li>
              <li>Volunteer support and training</li>
              <li>Administrative costs directly related to social initiatives</li>
            </ul>

            <h2>Administrative Cost Policy</h2>
            <p>
              We are committed to ensuring that the maximum amount of each donation goes directly to program activities.
              Administrative costs for each fund are capped at 10% of donations received.
            </p>
            <p>These administrative costs include:</p>
            <ul>
              <li>Staff salaries directly related to program management</li>
              <li>Technology and infrastructure necessary for program implementation</li>
              <li>Regulatory compliance and reporting</li>
              <li>Financial management and accounting</li>
            </ul>

            <h2>Financial Emergency Protocol</h2>
            <p>
              In the event of financial hardship within our organization, we will never transfer funds between different
              initiatives. Instead, we will:
            </p>
            <ul>
              <li>Reduce administrative costs</li>
              <li>Seek additional funding through grants and partnerships</li>
              <li>Temporarily scale back non-essential activities</li>
              <li>Be transparent with our community about the challenges we face</li>
            </ul>
            <p>Our commitment to fund separation remains absolute even in difficult circumstances.</p>

            <h2>Accountability Measures</h2>
            <p>To ensure adherence to this policy, we have implemented the following accountability measures:</p>
            <ul>
              <li>Multiple signatories required for all financial transactions</li>
              <li>Regular internal audits of financial processes</li>
              <li>Oversight committee composed of board members and community representatives</li>
              <li>Whistleblower protection policy for reporting financial concerns</li>
            </ul>

            <h2>Commitment to Continuous Improvement</h2>
            <p>
              We regularly review and update our financial transparency practices to incorporate best practices and
              respond to feedback from our donors and community.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-6">
              <p className="font-medium">
                If you have questions about our financial transparency policy or would like to request additional
                information, please contact our Finance Department at finance@trusted-ally.org.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/donate">Return to Donation Page</Link>
            </Button>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

