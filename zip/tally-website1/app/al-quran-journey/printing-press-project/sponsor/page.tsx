import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Sponsor | Modern Printing Press Project",
  description:
    "Explore sponsorship opportunities for our state-of-the-art Quran printing press project and help establish a legacy of excellence.",
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
              Support our modern Quran printing press project and help establish a legacy of excellence
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
            <Link href="/al-quran-journey/printing-press-project" className="hover:text-emerald-600">
              Printing Press Project
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Sponsor</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Sponsorship Opportunities</h2>

            <p className="mb-6">
              TRUSTED-ALLY invites individuals, organizations, and institutions to become stakeholders in our historic
              Modern Printing Press Project. Your contribution will help establish a legacy of Quranic excellence for
              generations to come.
            </p>

            <p className="mb-6">
              We offer various sponsorship levels to accommodate different capacities for giving, each with its own set
              of recognition and benefits. All contributions, regardless of size, play a vital role in bringing this
              important project to fruition.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Founding Patron</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳10,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">
                  Become a founding patron of our printing press with a major contribution
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
                    Named recognition on building facade
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
                    Permanent recognition in main lobby
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
                    Naming rights to a major facility section
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
                    VIP access to all facility events
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
                    Annual special edition Quran gift
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor/founding"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Founding Patron
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Major Sponsor</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳5,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">
                  Make a significant contribution to a specific aspect of the project
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
                    Named recognition for specific equipment
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
                    Recognition plaque in sponsored area
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
                    Invitations to special facility events
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
                    Commemorative limited edition Quran
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
                    Regular project updates and reports
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor/major"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Major Sponsor
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Supporting Partner</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳1,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">Support a specific component of the printing press project</p>
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
                    Recognition on donor wall
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
                    Certificate of appreciation
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
                    Special edition Quran from first print run
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
                    Regular project newsletters
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor/supporting"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Supporting Partner
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-3 text-center">
                Equipment Sponsorship Opportunities
              </h4>
              <p className="text-center mb-6">
                Sponsor specific equipment or facility components with naming rights and recognition
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Main Printing Press</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High-precision digital press</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Binding Department</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Complete binding facility</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Quality Control Laboratory</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Advanced testing equipment</span>
                    <span className="font-bold text-emerald-700">৳10,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Training Center</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Staff development facility</span>
                    <span className="font-bold text-emerald-700">৳5,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Paper Processing System</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Specialized paper handling</span>
                    <span className="font-bold text-emerald-700">৳8,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Distribution Center</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Packaging and logistics hub</span>
                    <span className="font-bold text-emerald-700">৳7,000,000</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/al-quran-journey/printing-press-project/equipment-sponsorship"
                  className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  View All Equipment Sponsorship Options
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">General Sponsorship Form</h3>

            <p className="mb-6">
              If you're interested in supporting our Modern Printing Press Project but aren't sure which sponsorship
              level or equipment to choose, you can fill out our general sponsorship form below. Our team will contact
              you to discuss the options that best align with your interests and capacity.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Sponsorship Inquiry Form</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name / Organization Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your name or organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sponsorship Level of Interest
                    </label>
                    <select
                      id="sponsorship-level"
                      name="sponsorship-level"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select a sponsorship level</option>
                      <option value="founding">Founding Patron (৳10,000,000+)</option>
                      <option value="major">Major Sponsor (৳5,000,000+)</option>
                      <option value="supporting">Supporting Partner (৳1,000,000+)</option>
                      <option value="equipment">Equipment Sponsor (Various Amounts)</option>
                      <option value="other">Other (Please specify)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contribution Amount (৳)</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">৳</span>
                    </div>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter amount"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">BDT</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Comments or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Any specific interests, requests, or questions you may have"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">TRUSTED-ALLY</h4>
              <p className="text-sm">
                A beacon of knowledge, compassion, and community service, dedicated to uplifting lives through education
                and humanitarian initiatives.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/" className="hover:text-emerald-200 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/education-program" className="hover:text-emerald-200 transition">
                    Education Program
                  </Link>
                </li>
                <li>
                  <Link href="/al-quran-journey" className="hover:text-emerald-200 transition">
                    Al-Quran Journey
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-emerald-200 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <p className="text-sm">
                123 Charity Street, Dhaka, Bangladesh
                <br />
                Email: info@trusted-ally.org
                <br />
                Phone: +880 1234-567890
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

