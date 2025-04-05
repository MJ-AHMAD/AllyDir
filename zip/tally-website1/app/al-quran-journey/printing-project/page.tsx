import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quran Printing Project | Al Quran Journey",
  description:
    "Join our initiative to produce and distribute high-quality copies of the Quran worldwide with the highest standards of accuracy and beauty.",
}

export default function PrintingProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header */}
      <header className="bg-emerald-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              TRUSTED-ALLY
            </Link>
            <div className="flex gap-6">
              <Link href="/education-program" className="hover:text-emerald-200 transition">
                Education
              </Link>
              <Link href="/al-quran-journey" className="hover:text-emerald-200 transition">
                Al-Quran Journey
              </Link>
              <Link href="/contact" className="hover:text-emerald-200 transition">
                Contact
              </Link>
            </div>
          </nav>

          <div className="text-center py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 leading-tight">Quran Printing Project</h1>
            <p className="text-xl mb-8 text-emerald-100">
              A global initiative to produce and distribute high-quality copies of the Quran with uncompromising
              standards of accuracy, beauty, and accessibility.
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-emerald-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-emerald-800">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/al-quran-journey" className="hover:text-emerald-600">
              Al-Quran Journey
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Printing Project</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Mission: Excellence in Sacred Text</h2>

            <p className="mb-6">
              The Quran Printing Project represents our commitment to honoring the divine revelation through the highest
              standards of textual accuracy, aesthetic beauty, and global accessibility. We believe that the physical
              manifestation of the Quran should reflect the profound reverence due to divine guidance.
            </p>

            <p className="mb-6">
              This initiative combines traditional craftsmanship with cutting-edge technology to produce mushaf copies
              that set new standards for excellence while ensuring that these sacred texts reach communities worldwide,
              particularly those with limited access.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Project Objectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Produce mushaf copies with uncompromising standards of textual accuracy</li>
                <li>Develop beautiful typography that honors the aesthetic tradition of Quranic script</li>
                <li>Utilize sustainable, high-quality materials that ensure longevity</li>
                <li>Create specialized editions for diverse needs and contexts</li>
                <li>Establish ethical production practices that respect both people and planet</li>
                <li>Build global distribution networks that prioritize underserved communities</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Approach</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Scholarly Oversight</h4>
                <p>
                  Every aspect of our printing process is supervised by a committee of qualified Quranic scholars who
                  ensure absolute textual accuracy and adherence to traditional standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Artistic Excellence</h4>
                <p>
                  We collaborate with master calligraphers and typographers to create beautiful, readable text that
                  honors the aesthetic tradition of Quranic script.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Sustainable Production</h4>
                <p>
                  Our printing facilities implement environmentally responsible practices, using sustainable materials
                  and processes that minimize ecological impact.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Community Partnership</h4>
                <p>
                  We work closely with local Islamic organizations to ensure that our distribution efforts respect
                  cultural contexts and reach those most in need.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Current Initiatives</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">The Global Accessibility Initiative</h4>
              <p className="mb-4">
                Our flagship program aims to distribute one million high-quality mushaf copies to communities with
                limited access across 50 countries by 2025. This initiative includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Regional printing hubs that reduce transportation costs and environmental impact</li>
                <li>Subsidized distribution networks that prioritize underserved communities</li>
                <li>Partnerships with local Islamic organizations to ensure cultural appropriateness</li>
                <li>Training programs that build local capacity for Quranic printing and preservation</li>
              </ul>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-800 text-2xl font-bold">65%</span>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Current Progress</h5>
                    <p className="text-sm">650,000 copies distributed across 37 countries since project inception</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">Specialized Editions Initiative</h4>
              <p className="mb-4">
                This program develops and distributes specialized mushaf editions for diverse needs:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Large-Print Edition:</strong> For elderly readers and those with visual impairments
                </li>
                <li>
                  <strong>Tactile Quran:</strong> Braille edition for blind readers
                </li>
                <li>
                  <strong>Study Edition:</strong> With simplified translation and notes for new Muslims and students
                </li>
                <li>
                  <strong>Children's Edition:</strong> With age-appropriate design and supplementary materials
                </li>
                <li>
                  <strong>Digital-Enhanced Print:</strong> QR-enabled for connecting to audio recitations and tafsir
                </li>
              </ul>
              <p>
                Each specialized edition undergoes the same rigorous quality assurance process as our standard mushaf,
                ensuring absolute textual accuracy while addressing specific accessibility needs.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Quality Assurance Process</h3>

            <p className="mb-6">Our commitment to excellence is reflected in our rigorous quality assurance process:</p>

            <ol className="list-decimal pl-6 space-y-2 mb-8">
              <li>
                <strong>Textual Verification:</strong> Multiple layers of review by qualified huffaz and Quranic
                scholars
              </li>
              <li>
                <strong>Typographic Excellence:</strong> Meticulous attention to the nuances of Quranic script and
                diacritical marks
              </li>
              <li>
                <strong>Material Testing:</strong> Rigorous evaluation of paper, ink, and binding materials for
                durability and quality
              </li>
              <li>
                <strong>Production Oversight:</strong> Supervision of printing processes by trained specialists
              </li>
              <li>
                <strong>Final Inspection:</strong> Comprehensive review of finished copies before distribution
              </li>
              <li>
                <strong>Community Feedback:</strong> Ongoing collection and integration of user feedback for continuous
                improvement
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">How You Can Contribute</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-hand-holding-heart text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Sponsor Distribution</h5>
                <p className="text-sm mb-3">
                  Fund the printing and distribution of mushaf copies to communities in need
                </p>
                <Link
                  href="/al-quran-journey/printing-project/donate"
                  className="text-emerald-700 text-sm font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Donate Now <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-hands-helping text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Volunteer</h5>
                <p className="text-sm mb-3">Contribute your skills and time to our printing and distribution efforts</p>
                <Link
                  href="/al-quran-journey/printing-project/volunteer"
                  className="text-emerald-700 text-sm font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Join as Volunteer <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-building text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Institutional Partnership</h5>
                <p className="text-sm mb-3">Collaborate with us as an organization to expand our global reach</p>
                <Link
                  href="/al-quran-journey/printing-project/partner"
                  className="text-emerald-700 text-sm font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Become a Partner <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Join Our Printing Project</h3>
              <p className="mb-4">Be part of our mission to make high-quality copies of the Quran accessible to all.</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/printing-project/get-involved"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Get Involved
                </Link>
                <Link
                  href="/al-quran-journey/printing-project/contact"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Contact Project Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUSTED-ALLY</h3>
              <p className="text-emerald-100">
                Dedicated to illuminating minds through Quranic wisdom and scholarly research.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-emerald-100 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-emerald-100 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/education-program" className="text-emerald-100 hover:text-white transition">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-emerald-100 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Al-Quran Journey</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/al-quran-journey/modern-science"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Modern Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/research-methodologies"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Research Methods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/printing-distribution"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Printing Excellence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/global-network"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Global Network
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-emerald-100">
                Email: info@trusted-ally.org
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

