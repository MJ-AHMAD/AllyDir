import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Campus Founder | Al Quran Journey",
  description: "Join as a founding patron of our permanent Quranic research campus in Cox's Bazar, Bangladesh.",
}

export default function CampusFounderPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Become a Campus Founder</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Join an exclusive group of visionary supporters who will make history by establishing the world's premier
              Quranic research campus
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
            <span className="font-medium">Campus Founder</span>
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
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">Campus Founder</h3>
                    <div className="text-3xl font-bold text-emerald-700 mb-4">৳50,000,000+</div>
                    <div className="inline-block bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Exclusive Opportunity
                    </div>
                    <p className="text-emerald-700 mb-4">Limited to 5 founding patrons</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">A Legacy of Knowledge and Faith</h2>
                  <p className="mb-4">
                    As a Campus Founder, you will be among an exclusive group of visionary supporters who will make
                    history by establishing the world's premier Quranic research campus in Cox's Bazar, Bangladesh.
                  </p>
                  <p>
                    Your extraordinary contribution will create a lasting legacy that will benefit generations to come,
                    advancing Quranic scholarship and education for decades into the future.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Exclusive Benefits for Campus Founders</h3>

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
                      <strong>Campus Naming Opportunity:</strong> The opportunity to have the entire campus named in
                      your honor or in memory of a loved one.
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
                      <strong>Founder's Monument:</strong> Your name prominently displayed on the Founder's Monument at
                      the main entrance of the campus.
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
                      <strong>Commemorative Publication:</strong> A special commemorative book documenting your
                      contribution and the campus development.
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
                      <strong>Annual Founder's Day:</strong> An annual event celebrating the founding of the campus,
                      with special recognition of the Founders.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Governance & Influence</h4>
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
                      <strong>Lifetime Board Position:</strong> A permanent position on the campus advisory board, with
                      input on strategic decisions.
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
                      <strong>Research Direction Input:</strong> The opportunity to help shape research priorities and
                      special initiatives.
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
                      <strong>Quarterly Briefings:</strong> Private briefings with campus leadership on developments and
                      achievements.
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
                      <strong>Naming Committee:</strong> Participation in the naming committee for major campus
                      buildings and facilities.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Access & Privileges</h4>
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
                      <strong>Founder's Residence:</strong> Access to the exclusive Founder's Residence when visiting
                      the campus.
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
                      <strong>VIP Access:</strong> Lifetime VIP access to all campus facilities, events, and programs.
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
                      <strong>Private Tours:</strong> The ability to arrange private tours of the campus for family and
                      guests.
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
                      <strong>Scholar Access:</strong> Direct access to resident scholars and researchers for
                      consultation.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Spiritual & Educational Benefits</h4>
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
                      <strong>Perpetual Prayers:</strong> Daily prayers offered for you and your family in the campus
                      mosque.
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
                      <strong>Scholarship Program:</strong> The ability to establish a named scholarship program for
                      deserving students.
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
                      <strong>Research Dedication:</strong> Annual research publication dedicated to the Founders.
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
                      <strong>Private Lectures:</strong> Access to private lectures and educational sessions with
                      leading scholars.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">How to Become a Campus Founder</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Initial Consultation</h4>
                  <p className="text-sm">
                    Schedule a personal meeting with our project director to discuss your vision and interests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Customized Proposal</h4>
                  <p className="text-sm">
                    Receive a detailed proposal tailored to your specific interests and recognition preferences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Commitment & Recognition</h4>
                  <p className="text-sm">
                    Formalize your commitment and begin receiving the exclusive benefits of being a Campus Founder.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="mb-6">
                  Our team is ready to work with you to create a meaningful and personalized legacy through your
                  founding contribution.
                </p>
                <Link
                  href="/al-quran-journey/permanent-campus/contact"
                  className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Flexible Contribution Options</h3>

              <p className="mb-6">
                We understand that a contribution of this magnitude requires careful planning. We offer several flexible
                options to accommodate your financial planning needs:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-emerald-800 mb-1">Lump Sum Contribution</h4>
                  <p className="text-sm">
                    A one-time contribution of ৳50,000,000 or more, with immediate recognition and benefits.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-emerald-800 mb-1">Multi-Year Pledge</h4>
                  <p className="text-sm">
                    A formal pledge to contribute the full amount over a period of up to 5 years, with benefits
                    beginning immediately.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-emerald-800 mb-1">Combined Family Contribution</h4>
                  <p className="text-sm">
                    Multiple family members can combine their contributions to reach the Founder level, with shared
                    recognition.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-emerald-800 mb-1">Corporate Matching</h4>
                  <p className="text-sm">
                    We can work with your company's matching gift program to maximize your contribution.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic">
                Note: All contributions are eligible for tax benefits in accordance with applicable laws. Our financial
                team can provide guidance on maximizing the tax advantages of your contribution.
              </p>
            </div>

            <div className="bg-emerald-700 text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Contact Our Founder Relations Team</h3>

              <p className="mb-6">
                Our dedicated Founder Relations team is available to answer your questions and provide personalized
                assistance as you consider this extraordinary opportunity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Dr. Rashid Ahmed</h4>
                  <p className="text-sm text-emerald-100 mb-1">Project Director</p>
                  <p className="text-sm">
                    Email: r.ahmed@trusted-ally.org
                    <br />
                    Phone: +880 1712-345678
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Mrs. Fatima Rahman</h4>
                  <p className="text-sm text-emerald-100 mb-1">Founder Relations Coordinator</p>
                  <p className="text-sm">
                    Email: f.rahman@trusted-ally.org
                    <br />
                    Phone: +880 1812-345678
                  </p>
                </div>
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

