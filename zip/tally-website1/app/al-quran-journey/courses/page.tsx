import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Al Quran Journey Courses | TRUSTED-ALLY",
  description:
    "Explore our comprehensive courses on Quranic studies, combining traditional knowledge with contemporary approaches.",
}

export default function CoursesPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Collaborative Quranic Courses</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Immersive educational experiences that combine traditional Quranic knowledge with contemporary approaches
              through collaborative learning environments.
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
            <span className="font-medium">Courses</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Educational Philosophy</h2>

            <p className="mb-6">
              Our courses are designed around a collaborative learning model that brings together diverse perspectives
              and expertise. We believe that the deepest understanding of the Quran emerges through respectful dialogue,
              critical inquiry, and the integration of knowledge across disciplines.
            </p>

            <p className="mb-6">Each course combines:</p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Traditional Quranic scholarship and classical methodologies</li>
              <li>Contemporary academic approaches and research frameworks</li>
              <li>Practical application of Quranic wisdom to modern contexts</li>
              <li>Collaborative projects that foster community and shared understanding</li>
            </ul>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Featured Courses</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-atom text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Science & Revelation: Exploring Convergence</h4>
                <p className="mb-4">
                  This interdisciplinary course examines the relationship between Quranic descriptions of natural
                  phenomena and modern scientific discoveries. Led by both Quranic scholars and scientists, participants
                  explore how revelation and scientific inquiry can mutually illuminate our understanding of the natural
                  world.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">12 Weeks | Online & On-Campus</span>
                  <Link
                    href="/al-quran-journey/courses/science-revelation"
                    className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                  >
                    Course Details <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-microscope text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Advanced Quranic Research Methods</h4>
                <p className="mb-4">
                  This comprehensive course equips participants with sophisticated methodologies for Quranic research,
                  combining classical approaches with contemporary analytical tools. Participants develop research
                  projects under the mentorship of experienced scholars from diverse disciplines.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">16 Weeks | Online & On-Campus</span>
                  <Link
                    href="/al-quran-journey/courses/research-methods"
                    className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                  >
                    Course Details <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-globe-asia text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Global Perspectives on Quranic Ethics</h4>
                <p className="mb-4">
                  This innovative course explores how Quranic ethical principles can address contemporary global
                  challenges. Through case studies, dialogue, and collaborative projects, participants develop
                  frameworks for applying Quranic wisdom to issues of social justice, environmental stewardship, and
                  peaceful coexistence.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">10 Weeks | Online & On-Campus</span>
                  <Link
                    href="/al-quran-journey/courses/global-ethics"
                    className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                  >
                    Course Details <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-book-open text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Quranic Manuscript Studies</h4>
                <p className="mb-4">
                  This specialized course examines the history, preservation, and analysis of Quranic manuscripts.
                  Participants learn techniques for manuscript examination, digital preservation, and textual analysis
                  while contributing to ongoing research projects in this field.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">8 Weeks | On-Campus</span>
                  <Link
                    href="/al-quran-journey/courses/manuscript-studies"
                    className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                  >
                    Course Details <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Collaborative Learning Model</h3>

            <p className="mb-6">
              Our courses employ a unique collaborative learning model that maximizes engagement and knowledge
              integration:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Learning Circles</h5>
                <p className="text-sm">
                  Small, diverse groups that engage in structured dialogue and collaborative inquiry
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-chalkboard-teacher text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Expert Facilitation</h5>
                <p className="text-sm">
                  Courses led by teams of scholars representing diverse disciplines and perspectives
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-project-diagram text-xl"></i>
                </div>
                <h5 className="font-bold mb-2">Applied Projects</h5>
                <p className="text-sm">
                  Collaborative research and community engagement that applies learning to real-world contexts
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Course Formats</h3>

            <p className="mb-6">We offer flexible learning options to accommodate diverse needs and circumstances:</p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>
                <strong>On-Campus Immersion:</strong> Intensive residential programs at our purpose-built campus
              </li>
              <li>
                <strong>Online Learning:</strong> Interactive digital courses with synchronous and asynchronous
                components
              </li>
              <li>
                <strong>Hybrid Format:</strong> Combination of online modules and on-campus intensives
              </li>
              <li>
                <strong>Community Circles:</strong> Facilitated local study groups supported by our digital platform
              </li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Enroll in Our Courses</h3>
              <p className="mb-4">
                Join our collaborative learning community and deepen your understanding of the Quran through our
                innovative educational programs.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/courses/apply"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Apply for Courses
                </Link>
                <Link
                  href="/al-quran-journey/courses/catalog"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  View Full Course Catalog
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

