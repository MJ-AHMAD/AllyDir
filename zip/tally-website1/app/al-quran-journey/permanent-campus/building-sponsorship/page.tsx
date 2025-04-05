import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building Sponsorship Options | Al Quran Journey",
  description:
    "Explore all building sponsorship opportunities for our permanent Quranic research campus in Cox's Bazar.",
}

export default function BuildingSponsorshipOptionsPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Building Sponsorship Options</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Explore all available building sponsorship opportunities for our permanent Quranic research campus
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
            <span className="font-medium">Building Sponsorship Options</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Complete Building Sponsorship Opportunities</h2>

            <p className="mb-8">
              Our permanent campus project offers a range of building sponsorship opportunities to suit different
              interests and contribution levels. Each building plays a vital role in our mission to advance Quranic
              research and education.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 text-center">Academic Zone Buildings</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Research Center Building</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The heart of our campus, housing advanced research facilities, laboratories, and collaborative
                    spaces.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Three floors with specialized research facilities</li>
                    <li>• Digital manuscript scanning and preservation lab</li>
                    <li>• Collaborative research spaces and meeting rooms</li>
                    <li>• Faculty and visiting scholar offices</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳50,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/research-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Central Library</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A comprehensive library housing rare manuscripts, research materials, and digital resources.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Three-story building with modern design</li>
                    <li>• Climate-controlled rare manuscript repository</li>
                    <li>• Digital resource center and multimedia facilities</li>
                    <li>• Individual and group study spaces</li>
                    <li>• Scholar reading rooms and research areas</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳40,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/central-library"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Conference Center</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A state-of-the-art facility for international conferences, seminars, and educational events.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Main auditorium seating 300 people</li>
                    <li>• Multiple breakout rooms and seminar spaces</li>
                    <li>• Advanced audiovisual and translation equipment</li>
                    <li>• Exhibition space and reception areas</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳30,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/conference-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Educational Building</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Primary teaching facility with classrooms, lecture halls, and educational technology.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Multiple classrooms of various sizes</li>
                    <li>• Smart technology in all teaching spaces</li>
                    <li>• Faculty offices and meeting rooms</li>
                    <li>• Student resource center</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/educational-building"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 text-center">
                Spiritual & Contemplative Zone Buildings
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Central Mosque</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The spiritual heart of the campus, featuring beautiful architecture and space for 500 worshippers.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Main prayer hall with capacity for 500</li>
                    <li>• Women's prayer area with equal aesthetic consideration</li>
                    <li>• Educational displays on mosque architecture</li>
                    <li>• Quranic calligraphy showcasing various styles</li>
                    <li>• Sustainable design with natural lighting</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳50,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/central-mosque"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Calligraphy & Arts Center</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Dedicated facility for Islamic arts, calligraphy, and creative expression.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Multiple studio spaces for different art forms</li>
                    <li>• Gallery for rotating exhibitions</li>
                    <li>• Teaching spaces for classes and workshops</li>
                    <li>• Materials and equipment storage</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳20,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/arts-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 text-center">Residential Zone Buildings</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Scholar Residence Building</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Comfortable accommodations for resident scholars and visiting researchers.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• 20 private apartments for resident scholars</li>
                    <li>• 10 guest suites for visiting researchers</li>
                    <li>• Common areas and meeting spaces</li>
                    <li>• Kitchen and dining facilities</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/scholar-residence"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Student Dormitory</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Modern residential facilities for students enrolled in our educational programs.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Accommodations for 100 students</li>
                    <li>• Study lounges and common areas</li>
                    <li>• Laundry and kitchen facilities</li>
                    <li>• Outdoor recreational spaces</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳20,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/student-dormitory"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Visitor Accommodation</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Hotel-style accommodations for campus visitors and conference attendees.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• 50 guest rooms of various configurations</li>
                    <li>• Reception and concierge services</li>
                    <li>• Dining facilities and meeting rooms</li>
                    <li>• Amenities for extended stays</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/visitor-accommodation"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Dining Hall</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Central dining facility serving the entire campus community.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Main dining area seating 200 people</li>
                    <li>• Modern kitchen facilities</li>
                    <li>• Private dining rooms for special events</li>
                    <li>• Café and informal gathering spaces</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/dining-hall"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 text-center">
                Community & Support Zone Buildings
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Administrative Building</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Central facility for campus administration and operations.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Administrative offices and meeting rooms</li>
                    <li>• Finance and human resources departments</li>
                    <li>• Campus security and operations center</li>
                    <li>• Staff facilities and support services</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳20,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/administrative"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Visitor Center</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Welcome facility for campus visitors, featuring exhibitions and information.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Reception and information desk</li>
                    <li>• Exhibition space on campus history and mission</li>
                    <li>• Orientation theater and meeting rooms</li>
                    <li>• Gift shop and refreshment area</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/visitor-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Community Outreach Center</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Facility dedicated to community engagement and outreach programs.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Multipurpose spaces for community programs</li>
                    <li>• Classrooms for public education initiatives</li>
                    <li>• Offices for outreach staff</li>
                    <li>• Resource center for community members</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/outreach-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Health & Wellness Center</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Facility providing health services and wellness programs for the campus community.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Medical clinic with examination rooms</li>
                    <li>• Wellness and fitness facilities</li>
                    <li>• Counseling and mental health services</li>
                    <li>• Health education resources</li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Contribution:</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                  <Link
                    href="/al-quran-journey/permanent-campus/sponsor/building/health-center"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Sponsor This Building
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-emerald-700 text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center">Ready to Make a Lasting Impact?</h3>
              <p className="text-center mb-6">
                Our team is ready to discuss these sponsorship opportunities in detail and help you find the perfect
                match for your interests and contribution level.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor"
                  className="bg-white text-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-100 transition"
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/al-quran-journey/permanent-campus/contact"
                  className="bg-emerald-800 text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-emerald-900 transition"
                >
                  Contact Project Team
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

