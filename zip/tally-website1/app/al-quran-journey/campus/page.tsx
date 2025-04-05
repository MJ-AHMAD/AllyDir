import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Al Quran Journey Campus | TRUSTED-ALLY",
  description:
    "Explore our state-of-the-art campus dedicated to Quranic research, education, and scholarly collaboration.",
}

export default function CampusPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Our Permanent Campus</h1>
            <p className="text-xl mb-8 text-emerald-100">
              A center of excellence dedicated to Quranic research, education, and scholarly collaboration in a serene
              environment conducive to deep learning and spiritual reflection.
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
            <span className="font-medium">Campus</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Sacred Space for Knowledge and Reflection</h2>

            <p className="mb-6">
              Our campus represents the physical embodiment of our commitment to advancing Quranic studies through a
              harmonious blend of traditional wisdom and contemporary approaches. Designed to inspire both intellectual
              rigor and spiritual contemplation, our facilities provide an ideal environment for scholars, students, and
              visitors from around the world.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-md">
                {/* Placeholder for campus aerial view */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Campus Aerial View</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 italic">
                Aerial view of our 25-acre campus nestled in a serene natural setting
              </p>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Campus Facilities</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Research Library</h4>
                <p className="mb-4">
                  Our state-of-the-art library houses over 100,000 volumes of classical and contemporary works on
                  Quranic studies, Islamic sciences, and related disciplines. The collection includes rare manuscripts,
                  digital archives, and comprehensive research databases.
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md">
                  {/* Placeholder for library image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Library Interior</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Advanced Research Laboratories</h4>
                <p className="mb-4">
                  Our specialized laboratories support interdisciplinary research at the intersection of Quranic studies
                  and various scientific fields. Equipped with cutting-edge technology, these spaces facilitate
                  innovative research methodologies.
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md">
                  {/* Placeholder for lab image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Research Laboratory</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Lecture Halls & Classrooms</h4>
                <p className="mb-4">
                  Our educational spaces combine traditional design elements with modern technology to create optimal
                  learning environments. From intimate seminar rooms to grand lecture halls, these spaces accommodate
                  diverse teaching and learning approaches.
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md">
                  {/* Placeholder for classroom image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Lecture Hall</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Contemplation Gardens</h4>
                <p className="mb-4">
                  Inspired by traditional Islamic garden design, our contemplation spaces provide serene environments
                  for reflection, meditation, and spiritual connection. These gardens feature calligraphy, water
                  elements, and carefully selected plantings.
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md">
                  {/* Placeholder for garden image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Contemplation Garden</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Residential Facilities</h3>

            <p className="mb-6">
              Our campus includes comfortable residential accommodations for visiting scholars, students, and
              participants in our various programs:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Scholar residences for long-term research fellows</li>
              <li>Student dormitories for program participants</li>
              <li>Guest housing for short-term visitors</li>
              <li>Family accommodations for researchers with families</li>
              <li>Dining facilities serving nutritious meals that respect diverse dietary requirements</li>
            </ul>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Sustainability Features</h3>

            <p className="mb-6">
              In keeping with the Quranic emphasis on environmental stewardship, our campus incorporates numerous
              sustainability features:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-solar-panel text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Renewable Energy</h5>
                <p className="text-sm">
                  Solar arrays and geothermal systems provide clean energy for campus operations
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-water text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Water Conservation</h5>
                <p className="text-sm">Rainwater harvesting and greywater systems minimize water consumption</p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-seedling text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Native Landscaping</h5>
                <p className="text-sm">Indigenous plants create habitat and reduce maintenance needs</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Campus Access</h3>

            <p className="mb-6">Our campus welcomes visitors and participants in our various programs:</p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Visit Our Campus</h4>
              <p className="mb-4">
                We offer guided tours, open lectures, and various events that are open to the public. Researchers and
                scholars can also apply for access to our specialized facilities.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/campus/schedule-visit"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Schedule a Visit
                </Link>
                <Link
                  href="/al-quran-journey/campus/virtual-tour"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Take a Virtual Tour
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

