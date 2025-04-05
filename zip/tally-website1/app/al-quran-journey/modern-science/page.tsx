import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Science & Quranic Revelations | Al Quran Journey",
  description:
    "Explore the remarkable harmony between modern scientific discoveries and Quranic revelations that preceded them by centuries.",
}

export default function ModernSciencePage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Modern Science & Quranic Revelations</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Exploring the profound harmony between contemporary scientific discoveries and the divine wisdom revealed
              in the Quran fourteen centuries ago.
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
            <span className="font-medium">Modern Science & Quranic Revelations</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Convergence of Revelation and Discovery</h2>

            <p className="mb-6">
              The Quran, revealed over fourteen centuries ago, contains numerous verses that describe natural phenomena
              with remarkable precision—descriptions that align with scientific discoveries made only in recent
              centuries. This convergence presents a profound testament to the divine origin of the Quranic text.
            </p>

            <p className="mb-6">
              Our research in this field is dedicated to meticulously documenting, analyzing, and presenting these
              convergences through rigorous scholarly methodology, bringing together experts in both Islamic studies and
              various scientific disciplines.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Research Objectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Document and analyze Quranic verses that describe natural phenomena in light of contemporary
                  scientific understanding
                </li>
                <li>Collaborate with specialists across scientific disciplines to ensure accurate interpretation</li>
                <li>Develop educational resources that present these findings in accessible formats</li>
                <li>Contribute to interfaith and science-faith dialogue through evidence-based research</li>
                <li>Publish peer-reviewed research in both Islamic studies and scientific journals</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Key Research Areas</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Cosmology & Astronomy</h4>
                <p>
                  Examining Quranic descriptions of celestial bodies, the expanding universe, cosmic origins, and
                  astronomical phenomena in light of modern astrophysics and cosmological models.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Embryology & Human Development</h4>
                <p>
                  Analyzing the Quran's detailed description of human embryonic development stages and comparing them
                  with contemporary embryological understanding.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Geology & Oceanography</h4>
                <p>
                  Investigating Quranic references to geological formations, mountain structures, and deep-sea phenomena
                  in relation to modern earth sciences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Physics & Quantum Mechanics</h4>
                <p>
                  Exploring Quranic concepts of matter, energy, and the nature of reality in relation to contemporary
                  physics, including quantum theory.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Featured Research</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">The Expanding Universe in Quranic Cosmology</h4>
              <p className="mb-4">
                The Quran states: "And the heaven We constructed with strength, and indeed, We are [its] expander."
                (Quran 51:47)
              </p>
              <p className="mb-4">
                This verse, revealed in the 7th century CE, describes the expansion of the universe—a concept that was
                not scientifically established until the 20th century when Edwin Hubble's observations confirmed the
                expansion of the universe in 1929.
              </p>
              <p>
                Our research team, led by Dr. Ibrahim Hassan (Astrophysicist) and Sheikh Ahmad Al-Farooq (Quranic
                Scholar), has published a comprehensive analysis of this verse and related astronomical concepts in the
                Quran, examining the linguistic nuances of the original Arabic text alongside the latest cosmological
                models.
              </p>
              <div className="mt-6">
                <Link
                  href="/al-quran-journey/research/expanding-universe"
                  className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Read Full Research Paper <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Scholarly Approach</h3>

            <p className="mb-6">
              Our research adheres to the highest standards of both scientific and Islamic scholarly methodology:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Rigorous linguistic analysis of the original Quranic Arabic text</li>
              <li>Consideration of classical and contemporary tafsir (exegesis)</li>
              <li>Collaboration with specialists in relevant scientific fields</li>
              <li>Peer review by both Islamic scholars and scientists</li>
              <li>Transparent presentation of evidence and methodologies</li>
              <li>Acknowledgment of limitations and areas requiring further research</li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Join Our Research Community</h3>
              <p className="mb-4">
                We welcome collaboration with scholars, scientists, and researchers interested in exploring the
                relationship between Quranic revelation and scientific discovery.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/join-research"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Join as Researcher
                </Link>
                <Link
                  href="/al-quran-journey/courses/science-revelation"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Enroll in Our Course
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

