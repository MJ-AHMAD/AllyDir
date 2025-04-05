import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsor a Facility | Al Quran Journey",
  description: "Sponsor a specific facility or room within our permanent Quranic research campus in Cox's Bazar.",
}

export default function SponsorFacilityPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Sponsor a Facility</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Make a lasting impact by sponsoring a specific facility or room within our permanent Quranic research
              campus
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
            <Link href="/al-quran-journey/permanent-campus" className="hover:text-emerald-600">
              Permanent Campus
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Sponsor a Facility</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-emerald-100 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">Facility Sponsor</h3>
                    <div className="text-3xl font-bold text-emerald-700 mb-4">৳5,000,000+</div>
                    <div className="inline-block bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Excellent Opportunity
                    </div>
                    <p className="text-emerald-700 mb-4">Multiple facilities available</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">Create a Meaningful Legacy</h2>
                  <p className="mb-4">
                    By sponsoring a specific facility or room within our campus buildings, you can create a meaningful
                    legacy that aligns with your personal interests and values.
                  </p>
                  <p>
                    Each facility will serve an important purpose in our mission, providing essential spaces for
                    learning, research, worship, and community building.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Available Facilities for Sponsorship</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Manuscript Preservation Room</h4>
                <p className="text-sm text-gray-600 mb-4">
                  State-of-the-art facility for preserving and restoring rare Quranic manuscripts.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳10,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/manuscript-room"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Digital Learning Lab</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Advanced technology center for digital Quranic studies and research.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳8,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/digital-lab"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Main Lecture Hall</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Primary lecture space for classes, seminars, and special presentations.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳7,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/lecture-hall"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Calligraphy Studio</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Dedicated space for teaching and practicing traditional Quranic calligraphy.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳5,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/calligraphy-studio"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Scholar's Reading Room</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Quiet, dedicated space for scholars to study and conduct research.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳5,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/reading-room"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-2">Contemplation Garden</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Beautifully landscaped outdoor space for reflection and meditation.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Contribution:</span>
                  <span className="font-bold text-emerald-700">৳5,000,000</span>
                </div>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility/garden"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor This Facility
                </Link>
              </div>
            </div>

            <div className="text-center mb-12">
              <Link
                href="/al-quran-journey/permanent-campus/sponsor/facility/all"
                className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
              >
                View All Facility Sponsorship Options
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Benefits for Facility Sponsors</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Recognition & Legacy</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Facility Naming Rights:</strong> The facility will bear your name or the name of your
                      choosing for the lifetime of the structure.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Recognition Plaque:</strong> A beautifully designed plaque at the facility entrance
                      acknowledging your contribution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Donor Wall Recognition:</strong> Your name featured on the campus donor recognition wall.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Opening Ceremony:</strong> Special recognition at the facility opening ceremony.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Access & Involvement</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>VIP Access:</strong> Priority access to the facility and its programs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Annual Report:</strong> Yearly update on the activities and impact of your sponsored
                      facility.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Special Events:</strong> Invitations to special events related to your sponsored facility.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>Recognition in Publications:</strong> Acknowledgment in campus publications and materials.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">How to Sponsor a Facility</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Select a Facility</h4>
                  <p className="text-sm">
                    Choose from our available facilities based on your interests and contribution level.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Consultation Meeting</h4>
                  <p className="text-sm">
                    Meet with our team to discuss naming, recognition, and payment arrangements.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Formalize Sponsorship</h4>
                  <p className="text-sm">
                    Complete the sponsorship agreement and begin your journey as a facility sponsor.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="mb-6">
                  Our team is ready to work with you to create a meaningful legacy through your facility sponsorship.
                </p>
                <Link
                  href="/al-quran-journey/permanent-campus/contact"
                  className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/al-quran-journey/permanent-campus"
                className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-md font-medium hover:bg-emerald-200 transition"
              >
                Return to Campus Plan
              </Link>
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

