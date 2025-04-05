import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quranic Printing & Distribution Excellence | Al Quran Journey",
  description:
    "Advancing the art and science of Quranic printing, preservation, and global distribution with the highest standards of accuracy and beauty.",
}

export default function PrintingDistributionPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Quranic Printing & Distribution Excellence</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Preserving the divine word with uncompromising standards of accuracy, beauty, and accessibility through
              innovative printing technologies and global distribution networks.
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
            <span className="font-medium">Quranic Printing & Distribution Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Honoring the Sacred Text Through Excellence</h2>

            <p className="mb-6">
              The printing and distribution of the Holy Quran represents a sacred trust—one that demands the highest
              standards of accuracy, beauty, and accessibility. Our initiative is dedicated to advancing this noble
              tradition through a combination of traditional craftsmanship and cutting-edge technology.
            </p>

            <p className="mb-6">
              We believe that every aspect of Quranic printing—from typography and paper selection to binding and
              distribution—should reflect the profound reverence due to divine revelation. Our work spans from
              preserving historical printing techniques to pioneering new technologies that make the Quran accessible to
              all people across the globe.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Commitment to Excellence</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Absolute textual accuracy verified through multiple layers of scholarly review</li>
                <li>Beautiful typography that honors the aesthetic tradition of Quranic script</li>
                <li>Sustainable, high-quality materials that ensure longevity</li>
                <li>Innovative formats that serve diverse needs and contexts</li>
                <li>Ethical production practices that respect both people and planet</li>
                <li>Global distribution networks that reach underserved communities</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Areas of Innovation</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Typography & Calligraphy</h4>
                <p>
                  Developing digital typefaces that preserve the beauty of traditional Quranic calligraphy while
                  ensuring optimal readability across print and digital formats.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Sustainable Production</h4>
                <p>
                  Pioneering environmentally responsible printing methods that minimize ecological impact while
                  maintaining the highest quality standards for sacred texts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Accessibility Innovations</h4>
                <p>
                  Creating specialized editions for diverse needs, including large-print versions, tactile editions for
                  the visually impaired, and simplified layouts for new readers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Digital Integration</h4>
                <p>
                  Developing technologies that bridge print and digital experiences, such as QR-enabled mushaf editions
                  that connect readers to audio recitations and tafsir resources.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Flagship Project</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">The Global Accessibility Initiative</h4>
              <p className="mb-4">
                Our most ambitious undertaking is the Global Accessibility Initiative, which aims to ensure that every
                Muslim community worldwide has access to high-quality printed copies of the Quran in their local
                language and preferred script.
              </p>
              <p className="mb-4">This initiative combines:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Regional printing hubs that reduce transportation costs and environmental impact</li>
                <li>Subsidized distribution networks that prioritize underserved communities</li>
                <li>Partnerships with local Islamic organizations to ensure cultural appropriateness</li>
                <li>Training programs that build local capacity for Quranic printing and preservation</li>
              </ul>
              <p>
                Since its launch, this initiative has distributed over 1 million high-quality mushaf copies to
                communities across 47 countries, with a particular focus on regions where access has historically been
                limited.
              </p>
              <div className="mt-6">
                <Link
                  href="/al-quran-journey/printing-project/global-initiative"
                  className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Learn More About This Initiative <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
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

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Support Our Printing Projects</h3>
              <p className="mb-4">
                You can contribute to our mission of making high-quality copies of the Quran accessible to all.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/printing-project/donate"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Sponsor Quran Distribution
                </Link>
                <Link
                  href="/al-quran-journey/printing-project/volunteer"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Volunteer for Distribution
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

