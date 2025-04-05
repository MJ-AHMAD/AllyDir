import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Quranic Research Methodologies | Al Quran Journey",
  description:
    "Discover our sophisticated methodologies for Quranic research, combining classical Islamic scholarship with contemporary academic approaches.",
}

export default function ResearchMethodologiesPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Advanced Quranic Research Methodologies</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Pioneering innovative approaches to Quranic studies that honor traditional scholarship while embracing
              contemporary analytical frameworks.
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
            <span className="font-medium">Advanced Quranic Research Methodologies</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Bridging Classical and Contemporary Approaches</h2>

            <p className="mb-6">
              Our research methodologies represent a harmonious integration of classical Islamic scholarly traditions
              and cutting-edge academic approaches. This synthesis allows us to explore the depths of Quranic wisdom
              with both reverence for tradition and the rigor of modern scholarship.
            </p>

            <p className="mb-6">
              At the heart of our methodology is the recognition that the Quran is a multifaceted text that speaks to
              humanity across time, space, and cultural contexts. Our approach acknowledges both its divine origin and
              its engagement with the human condition.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Methodological Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contextual understanding of revelation (asbab al-nuzul)</li>
                <li>Linguistic analysis using both classical and computational approaches</li>
                <li>Thematic coherence (nazm) across the Quranic text</li>
                <li>Interdisciplinary engagement with relevant fields of knowledge</li>
                <li>Critical evaluation of interpretive traditions</li>
                <li>Ethical framework for application of Quranic guidance</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Research Framework</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Textual Analysis</h4>
                <p>
                  Employing advanced linguistic tools to analyze the Quranic text, including semantic mapping,
                  rhetorical analysis, and computational linguistics to uncover deeper patterns and meanings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Historical Contextualization</h4>
                <p>
                  Situating Quranic passages within their historical context while exploring their transhistorical
                  significance and application to contemporary challenges.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Comparative Analysis</h4>
                <p>
                  Examining the Quran in dialogue with other religious texts, philosophical traditions, and knowledge
                  systems to illuminate its distinctive contributions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Interdisciplinary Integration</h4>
                <p>
                  Bringing insights from diverse fields—including psychology, sociology, environmental science, and
                  ethics—into conversation with Quranic teachings.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Innovative Research Tools</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">The Quranic Concept Mapping Project</h4>
              <p className="mb-4">
                Our research team has developed a sophisticated digital tool that maps conceptual relationships across
                the Quranic text, allowing researchers to trace thematic developments, identify patterns, and discover
                new insights into the Quran's internal coherence.
              </p>
              <p className="mb-4">
                This tool combines traditional Islamic scholarship on Quranic concepts with advanced data visualization
                techniques, creating an unprecedented resource for both established scholars and new researchers in the
                field.
              </p>
              <div className="mt-6">
                <Link
                  href="/al-quran-journey/research-tools/concept-mapping"
                  className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Explore the Concept Mapping Tool <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Methodological Training</h3>

            <p className="mb-6">
              We are committed to training the next generation of Quranic researchers in these advanced methodologies:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Intensive workshops on classical and contemporary research methods</li>
              <li>Mentorship programs pairing established scholars with emerging researchers</li>
              <li>Digital literacy training for utilizing advanced research tools</li>
              <li>Collaborative research projects that model interdisciplinary approaches</li>
              <li>Publication support for new scholars entering the field</li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Join Our Methodological Innovation</h3>
              <p className="mb-4">
                We invite scholars, researchers, and students to participate in our ongoing development of advanced
                Quranic research methodologies.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/methodology-workshop"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Attend Methodology Workshop
                </Link>
                <Link
                  href="/al-quran-journey/courses/research-methods"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Enroll in Research Methods Course
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

