import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Sponsor | Al Quran Journey",
  description: "Explore sponsorship opportunities for our permanent Quranic research campus in Cox's Bazar.",
}

export default function SponsorPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Become a Sponsor</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Join our mission to establish a world-class center for Quranic research and education
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
            <span className="font-medium">Become a Sponsor</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Sponsorship Opportunities</h2>

            <p className="mb-8">
              Our permanent campus project offers a range of sponsorship opportunities to suit different interests and
              contribution levels. By becoming a sponsor, you will create a lasting legacy that will benefit generations
              to come, advancing Quranic scholarship and education for decades into the future.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Campus Founder</h3>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳50,000,000+</div>
                <div className="inline-block bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Exclusive Opportunity
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Become a founding patron of our permanent campus with a major contribution
                </p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Campus naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Permanent recognition at main entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime membership on advisory board
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    VIP access to all campus facilities
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/campus-founder"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Building Sponsor</h3>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳20,000,000+</div>
                <div className="inline-block bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Premium Opportunity
                </div>
                <p className="text-sm text-gray-600 mb-4">Sponsor an entire building on our campus</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Building naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition plaque at building entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Membership on campus advisory committee
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Special access to campus events
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/building"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Facility Sponsor</h3>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳5,000,000+</div>
                <div className="inline-block bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Excellent Opportunity
                </div>
                <p className="text-sm text-gray-600 mb-4">Sponsor a specific facility or room within a building</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Facility naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition plaque at facility entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Invitation to facility opening ceremony
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Annual report on facility activities
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor/facility"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">Additional Sponsorship Options</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Equipment & Technology Sponsor</h4>
                  <div className="text-xl font-bold text-emerald-700 mb-2">৳1,000,000 - ৳5,000,000</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Sponsor specialized equipment, technology systems, or digital infrastructure for the campus.
                  </p>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/equipment"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Scholarship Sponsor</h4>
                  <div className="text-xl font-bold text-emerald-700 mb-2">৳500,000 - ৳5,000,000</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Establish a named scholarship fund to support students and researchers at the campus.
                  </p>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/scholarship"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Research Program Sponsor</h4>
                  <div className="text-xl font-bold text-emerald-700 mb-2">৳1,000,000 - ৳10,000,000</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Fund specific research programs or initiatives aligned with your interests.
                  </p>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/research"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">General Campus Supporter</h4>
                  <div className="text-xl font-bold text-emerald-700 mb-2">Any Amount</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Make a general contribution to support the campus development at any level.
                  </p>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/general"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Sponsorship Process</h3>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="font-bold mb-2">Initial Consultation</h4>
                  <p className="text-sm text-gray-600">
                    Meet with our team to discuss your interests and explore sponsorship options.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="font-bold mb-2">Customized Proposal</h4>
                  <p className="text-sm text-gray-600">
                    Receive a detailed proposal tailored to your specific interests and preferences.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="font-bold mb-2">Formalize Agreement</h4>
                  <p className="text-sm text-gray-600">
                    Complete the sponsorship agreement with clear terms and recognition details.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-800 text-xl font-bold mb-4">
                    4
                  </div>
                  <h4 className="font-bold mb-2">Recognition & Updates</h4>
                  <p className="text-sm text-gray-600">
                    Begin receiving recognition and regular updates on your sponsored project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-700 text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center">Ready to Make a Lasting Impact?</h3>
              <p className="text-center mb-6">
                Contact our sponsorship team today to discuss how you can be part of this historic project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/al-quran-journey/permanent-campus/contact"
                  className="bg-white text-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-100 transition"
                >
                  Contact Project Team
                </Link>
                <Link
                  href="/al-quran-journey/permanent-campus"
                  className="bg-emerald-800 text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-emerald-900 transition"
                >
                  Return to Campus Plan
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

