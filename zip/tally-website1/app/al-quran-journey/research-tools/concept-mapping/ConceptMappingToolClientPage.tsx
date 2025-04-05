"use client"

import Link from "next/link"
import { useState } from "react"

export default function ConceptMappingToolClientPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedConcept, setSelectedConcept] = useState("guidance")

  const concepts = {
    guidance: {
      name: "Guidance (Hidayah)",
      relatedConcepts: ["Light (Nur)", "Path (Sirat)", "Wisdom (Hikmah)"],
      verses: [
        {
          reference: "Al-Baqarah 2:2",
          text: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
        },
        {
          reference: "Al-Isra 17:9",
          text: "Indeed, this Qur'an guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward.",
        },
        {
          reference: "Yunus 10:57",
          text: "O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers.",
        },
      ],
    },
    mercy: {
      name: "Mercy (Rahmah)",
      relatedConcepts: ["Compassion", "Forgiveness (Maghfirah)", "Grace (Fadl)"],
      verses: [
        { reference: "Al-A'raf 7:156", text: "My mercy encompasses all things." },
        { reference: "Al-An'am 6:12", text: "He has decreed upon Himself mercy." },
        {
          reference: "Al-Isra 17:82",
          text: "And We send down of the Qur'an that which is healing and mercy for the believers.",
        },
      ],
    },
    justice: {
      name: "Justice (Adl)",
      relatedConcepts: ["Balance (Mizan)", "Rights (Huquq)", "Equity (Qist)"],
      verses: [
        {
          reference: "An-Nahl 16:90",
          text: "Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression.",
        },
        {
          reference: "Al-Hadid 57:25",
          text: "We have already sent Our messengers with clear evidences and sent down with them the Scripture and the balance that the people may maintain [their affairs] in justice.",
        },
        {
          reference: "Al-Ma'idah 5:8",
          text: "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.",
        },
      ],
    },
    knowledge: {
      name: "Knowledge (Ilm)",
      relatedConcepts: ["Wisdom (Hikmah)", "Reflection (Tafakkur)", "Understanding (Fahm)"],
      verses: [
        { reference: "Ta-Ha 20:114", text: "And say, 'My Lord, increase me in knowledge.'" },
        { reference: "Az-Zumar 39:9", text: "Are those who know equal to those who do not know?" },
        {
          reference: "Al-Mujadila 58:11",
          text: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
        },
      ],
    },
    creation: {
      name: "Creation (Khalq)",
      relatedConcepts: ["Signs (Ayat)", "Nature (Fitrah)", "Universe (Alam)"],
      verses: [
        {
          reference: "Al-Ankabut 29:20",
          text: "Say, [O Muhammad], 'Travel through the land and observe how He began creation. Then Allah will produce the final creation. Indeed Allah, over all things, is competent.'",
        },
        {
          reference: "Ar-Rum 30:22",
          text: "And of His signs is the creation of the heavens and the earth and the diversity of your languages and your colors. Indeed in that are signs for those of knowledge.",
        },
        {
          reference: "Al-Baqarah 2:164",
          text: "Indeed, in the creation of the heavens and earth, and the alternation of the night and the day, and the [great] ships which sail through the sea with that which benefits people, and what Allah has sent down from the heavens of rain, giving life thereby to the earth after its lifelessness and dispersing therein every [kind of] moving creature, and [His] directing of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason.",
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">The Quranic Concept Mapping Tool</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Visualizing the interconnected wisdom of the Quran through advanced digital mapping technology
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
            <Link href="/al-quran-journey/research-methodologies" className="hover:text-emerald-600">
              Research Methodologies
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Concept Mapping Tool</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === "overview" ? "border-b-2 border-emerald-600 text-emerald-800" : "text-gray-600 hover:text-emerald-600"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("methodology")}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === "methodology" ? "border-b-2 border-emerald-600 text-emerald-800" : "text-gray-600 hover:text-emerald-600"}`}
            >
              Methodology
            </button>
            <button
              onClick={() => setActiveTab("explore")}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === "explore" ? "border-b-2 border-emerald-600 text-emerald-800" : "text-gray-600 hover:text-emerald-600"}`}
            >
              Explore Concepts
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === "research" ? "border-b-2 border-emerald-600 text-emerald-800" : "text-gray-600 hover:text-emerald-600"}`}
            >
              Research Applications
            </button>
            <button
              onClick={() => setActiveTab("access")}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === "access" ? "border-b-2 border-emerald-600 text-emerald-800" : "text-gray-600 hover:text-emerald-600"}`}
            >
              Access & Training
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Revolutionizing Quranic Research</h2>

              <p className="mb-6">
                The Quranic Concept Mapping Tool represents a groundbreaking approach to understanding the Quran's
                conceptual framework. By combining traditional Islamic scholarship with advanced data visualization and
                computational linguistics, we have created a powerful resource for exploring the rich tapestry of
                interconnected concepts within the Quranic text.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md my-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span>
                      <strong>Comprehensive Concept Database:</strong> Over 300 key Quranic concepts meticulously
                      identified and categorized
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span>
                      <strong>Interactive Visualization:</strong> Dynamic mapping of conceptual relationships and
                      thematic connections
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span>
                      <strong>Multilingual Support:</strong> Access concepts in Arabic, English, and multiple other
                      languages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span>
                      <strong>Verse Mapping:</strong> Trace concepts across the entire Quranic text with precise verse
                      references
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span>
                      <strong>Scholarly Annotations:</strong> Insights from classical and contemporary tafsir (exegesis)
                      integrated into the tool
                    </span>
                  </li>
                </ul>
              </div>

              <div className="my-12 bg-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">The Vision Behind the Tool</h3>
                <p className="mb-4">
                  The Quranic Concept Mapping Tool was born from a vision to make the conceptual richness of the Quran
                  more accessible to researchers, students, and general readers alike. By visualizing the intricate
                  relationships between Quranic concepts, we aim to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Reveal the remarkable coherence (nazm) of the Quranic text</li>
                  <li>Facilitate deeper understanding of the Quran's thematic structure</li>
                  <li>Enable new insights through pattern recognition and conceptual analysis</li>
                  <li>Bridge traditional and contemporary approaches to Quranic studies</li>
                  <li>Support both specialized research and general educational purposes</li>
                </ul>
                <p>
                  This tool represents years of collaborative work between Islamic scholars, computational linguists,
                  data scientists, and interface designers, all committed to honoring the depth and integrity of the
                  Quranic text while making its wisdom more accessible through innovative technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md my-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Development Journey</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-emerald-700">Phase 1: Conceptual Framework (2018-2019)</h4>
                    <p>Establishment of scholarly criteria for concept identification and relationship mapping</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700">Phase 2: Data Collection & Analysis (2019-2020)</h4>
                    <p>Comprehensive analysis of the Quranic text to identify and categorize concepts</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700">Phase 3: Visualization Development (2020-2021)</h4>
                    <p>Creation of the interactive visualization interface and relationship mapping algorithms</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700">Phase 4: Scholarly Review & Refinement (2021-2022)</h4>
                    <p>Rigorous review by Islamic scholars and refinement based on expert feedback</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700">
                      Phase 5: Public Release & Ongoing Development (2022-Present)
                    </h4>
                    <p>Launch of the tool for public use with continuous updates and expansions</p>
                  </div>
                </div>
              </div>

              <div className="text-center my-12">
                <button
                  onClick={() => setActiveTab("explore")}
                  className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Explore the Concept Map
                </button>
              </div>
            </div>
          )}

          {/* Methodology Tab */}
          {activeTab === "methodology" && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Methodological Approach</h2>

              <p className="mb-6">
                The development of the Quranic Concept Mapping Tool is grounded in a rigorous methodological framework
                that honors traditional Islamic scholarship while leveraging contemporary computational and
                visualization techniques.
              </p>

              <div className="bg-white p-8 rounded-lg shadow-md my-8">
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">Concept Identification Process</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-emerald-700">1. Lexical Analysis</h4>
                    <p>
                      We began with a comprehensive analysis of the Quranic vocabulary, identifying key terms and their
                      semantic fields. This involved careful study of root words and their derivatives across the
                      Quranic text.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">2. Thematic Categorization</h4>
                    <p>
                      Working with classical and contemporary tafsir literature, we categorized concepts into major
                      thematic domains such as theology, ethics, law, spirituality, history, and cosmology.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">3. Contextual Analysis</h4>
                    <p>
                      Each concept was analyzed in its various contexts throughout the Quran, noting how meanings might
                      shift or expand in different passages and surahs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">4. Relationship Mapping</h4>
                    <p>We identified relationships between concepts based on:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Direct textual proximity</li>
                      <li>Semantic relationships</li>
                      <li>Thematic associations</li>
                      <li>Logical connections</li>
                      <li>Exegetical traditions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">5. Scholarly Validation</h4>
                    <p>
                      All concept identifications and relationships were validated by a diverse panel of Quranic
                      scholars representing various traditions of Islamic scholarship.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Computational Approaches</h3>

                <p className="mb-6">
                  Our methodology integrates traditional scholarship with advanced computational techniques:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-emerald-700 mb-2">Natural Language Processing</h4>
                    <p>
                      Utilizing Arabic NLP tools specifically adapted for classical Quranic Arabic to identify
                      linguistic patterns and relationships.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-emerald-700 mb-2">Network Analysis</h4>
                    <p>
                      Applying graph theory to map the complex network of conceptual relationships and identify central
                      concepts and clusters.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-emerald-700 mb-2">Semantic Vector Mapping</h4>
                    <p>
                      Creating vector representations of concepts to measure semantic proximity and conceptual
                      relationships mathematically.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-emerald-700 mb-2">Data Visualization Algorithms</h4>
                    <p>
                      Developing specialized algorithms to visually represent complex conceptual relationships in an
                      intuitive and interactive format.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ethical Considerations</h3>

              <p className="mb-6">
                Throughout the development process, we have been guided by several ethical principles:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>
                  <strong>Textual Fidelity:</strong> Maintaining absolute fidelity to the Quranic text, ensuring that
                  our concept mapping accurately reflects the original Arabic.
                </li>
                <li>
                  <strong>Scholarly Transparency:</strong> Clearly documenting our methodological decisions and making
                  our process open to scholarly critique and refinement.
                </li>
                <li>
                  <strong>Interpretive Humility:</strong> Acknowledging the limitations of any conceptual mapping and
                  the inexhaustible depth of the Quranic text.
                </li>
                <li>
                  <strong>Inclusivity:</strong> Incorporating insights from diverse schools of Quranic interpretation
                  while avoiding sectarian bias.
                </li>
                <li>
                  <strong>Accessibility:</strong> Designing the tool to be accessible to users with varying levels of
                  expertise, from scholars to students to general readers.
                </li>
              </ul>

              <div className="text-center my-12">
                <button
                  onClick={() => setActiveTab("explore")}
                  className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Explore the Concept Map
                </button>
              </div>
            </div>
          )}

          {/* Explore Concepts Tab */}
          {activeTab === "explore" && (
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Explore Quranic Concepts</h2>

              <p className="text-lg mb-8">
                Discover the rich conceptual landscape of the Quran through our interactive mapping tool. Select a
                concept to explore its connections, related verses, and scholarly insights.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Select a Concept</h3>

                  <div className="space-y-2">
                    {Object.keys(concepts).map((concept) => (
                      <button
                        key={concept}
                        onClick={() => setSelectedConcept(concept)}
                        className={`block w-full text-left px-4 py-3 rounded-md transition ${
                          selectedConcept === concept
                            ? "bg-emerald-100 text-emerald-800 font-medium"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {concepts[concept].name}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-700 mb-2">Search Concepts</h4>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search by keyword..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button className="absolute right-3 top-2 text-gray-400">🔍</button>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">{concepts[selectedConcept].name}</h3>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Related Concepts</h4>
                    <div className="flex flex-wrap gap-2">
                      {concepts[selectedConcept].relatedConcepts.map((related, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Key Verses</h4>
                    <div className="space-y-4">
                      {concepts[selectedConcept].verses.map((verse, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <p className="italic mb-2">{verse.text}</p>
                          <p className="text-sm text-gray-600 font-medium">{verse.reference}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
                      View Full Concept Analysis
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Concept Visualization</h3>
                <p className="mb-4">
                  Our interactive visualization allows you to see how concepts connect across the Quranic text. The full
                  version of this tool includes dynamic network graphs, heat maps of concept distribution, and
                  chronological analysis of concept development.
                </p>
                <div className="bg-white p-4 rounded-md text-center py-12">
                  <p className="text-gray-500 mb-4">Interactive Concept Map Visualization</p>
                  <p className="text-sm text-gray-400">
                    (Simplified representation - full interactive version available for registered researchers)
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/al-quran-journey/research-tools/concept-mapping/register"
                    className="bg-emerald-700 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                  >
                    Register for Full Access
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Research Applications Tab */}
          {activeTab === "research" && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Research Applications</h2>

              <p className="mb-8">
                The Quranic Concept Mapping Tool has been designed to support a wide range of research applications,
                from traditional Islamic studies to interdisciplinary explorations. Here are some of the ways
                researchers are currently using this tool:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Thematic Studies</h3>
                  <p>
                    Researchers are using the tool to conduct comprehensive studies of specific themes across the Quran,
                    tracing how concepts develop and interconnect throughout the text.
                  </p>
                  <div className="mt-4">
                    <Link href="#" className="text-emerald-600 font-medium hover:text-emerald-800">
                      Case Study: Ethical Concepts in Meccan vs. Medinan Revelations →
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Comparative Religious Studies</h3>
                  <p>
                    Scholars are comparing conceptual frameworks across religious traditions, identifying points of
                    convergence and distinctive contributions of Quranic thought.
                  </p>
                  <div className="mt-4">
                    <Link href="#" className="text-emerald-600 font-medium hover:text-emerald-800">
                      Research Paper: Concepts of Mercy in Abrahamic Scriptures →
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Linguistic Analysis</h3>
                  <p>
                    Linguists are studying the semantic fields and conceptual networks in the Quran to better understand
                    its linguistic structure and rhetorical features.
                  </p>
                  <div className="mt-4">
                    <Link href="#" className="text-emerald-600 font-medium hover:text-emerald-800">
                      Publication: Semantic Networks in Quranic Discourse →
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Contemporary Applications</h3>
                  <p>
                    Researchers are exploring how Quranic concepts can inform contemporary discussions on ethics,
                    governance, environmental stewardship, and social justice.
                  </p>
                  <div className="mt-4">
                    <Link href="#" className="text-emerald-600 font-medium hover:text-emerald-800">
                      Project: Quranic Concepts for Sustainable Development →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Current Research Projects</h3>

                <p className="mb-6">
                  Our research team is currently engaged in several projects utilizing the Concept Mapping Tool:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-emerald-700">The Quranic Worldview Project</h4>
                    <p>
                      A comprehensive study mapping the Quran's conceptual framework for understanding the relationship
                      between God, humanity, and creation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">Ethical Concepts Database</h4>
                    <p>
                      Developing a specialized database of ethical concepts in the Quran and their applications to
                      contemporary ethical dilemmas.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">Chronological Concept Development</h4>
                    <p>
                      Tracing how key concepts evolved throughout the period of Quranic revelation, providing insights
                      into the progressive development of Quranic teachings.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700">Multilingual Concept Alignment</h4>
                    <p>
                      Working to ensure accurate translation of Quranic concepts across multiple languages, preserving
                      the semantic richness of the original Arabic.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Research Collaboration Opportunities</h3>

              <p className="mb-6">
                We welcome collaboration with researchers and institutions interested in utilizing the Quranic Concept
                Mapping Tool for academic research:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Research partnerships with universities and Islamic studies departments</li>
                <li>Collaborative grant applications for expanded research projects</li>
                <li>Visiting researcher positions for scholars working on related topics</li>
                <li>Student research opportunities for graduate and postgraduate students</li>
                <li>Technical collaborations to enhance and expand the tool's capabilities</li>
              </ul>

              <div className="text-center my-12">
                <Link
                  href="/al-quran-journey/research-collaboration"
                  className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Explore Research Collaboration
                </Link>
              </div>
            </div>
          )}

          {/* Access & Training Tab */}
          {activeTab === "access" && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Access & Training</h2>

              <p className="mb-8">
                The Quranic Concept Mapping Tool is available to researchers, educators, students, and interested
                individuals through several access options. We also provide comprehensive training to help users
                maximize the benefits of this powerful research tool.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Basic Access</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Core concept exploration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Basic visualization features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Access to 50 major concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Educational resources</span>
                    </li>
                  </ul>
                  <p className="font-medium text-center mb-4">Free</p>
                  <div className="text-center">
                    <Link
                      href="/al-quran-journey/research-tools/concept-mapping/register"
                      className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-md font-medium hover:bg-emerald-200 transition inline-block"
                    >
                      Register for Basic Access
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-emerald-500 relative">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-sm font-medium">
                    Recommended
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Research Access</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Full concept database (300+ concepts)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Advanced visualization tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Data export capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Scholarly annotations access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Research collaboration tools</span>
                    </li>
                  </ul>
                  <p className="font-medium text-center mb-4">$9.99/month</p>
                  <div className="text-center">
                    <Link
                      href="/al-quran-journey/research-tools/concept-mapping/subscribe"
                      className="bg-emerald-600 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-700 transition inline-block"
                    >
                      Subscribe for Research Access
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Institutional Access</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Everything in Research Access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Multiple user accounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>API access for integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Custom training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <p className="font-medium text-center mb-4">Custom Pricing</p>
                  <div className="text-center">
                    <Link
                      href="/al-quran-journey/research-tools/concept-mapping/institutional"
                      className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-md font-medium hover:bg-emerald-200 transition inline-block"
                    >
                      Contact for Institutional Access
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Training Resources</h3>

              <div className="bg-emerald-50 p-8 rounded-lg my-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-3">Self-Paced Learning</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">📚</span>
                        <span>
                          <strong>Video Tutorials:</strong> Comprehensive guides to all tool features
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">📚</span>
                        <span>
                          <strong>Documentation:</strong> Detailed user guides and methodological explanations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">📚</span>
                        <span>
                          <strong>Practice Exercises:</strong> Guided activities to build proficiency
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">📚</span>
                        <span>
                          <strong>Case Studies:</strong> Examples of research using the tool
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700 mb-3">Interactive Training</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">👥</span>
                        <span>
                          <strong>Monthly Webinars:</strong> Live demonstrations and Q&A sessions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">👥</span>
                        <span>
                          <strong>Research Workshops:</strong> In-depth training on research applications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">👥</span>
                        <span>
                          <strong>User Community:</strong> Forum for sharing insights and best practices
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white p-1 rounded-full mr-3 mt-1">👥</span>
                        <span>
                          <strong>One-on-One Support:</strong> Personalized assistance for researchers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/al-quran-journey/research-tools/concept-mapping/training"
                    className="bg-emerald-700 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                  >
                    Access Training Resources
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Upcoming Training Events</h3>

              <div className="space-y-4 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-emerald-800">Introduction to Quranic Concept Mapping</h4>
                      <p className="text-gray-600">A beginner-friendly webinar introducing the tool's core features</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">April 15, 2025</p>
                      <p className="text-sm text-gray-500">2:00 PM - 3:30 PM GMT</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/al-quran-journey/events/register?id=intro-concept-mapping"
                      className="text-emerald-600 font-medium hover:text-emerald-800"
                    >
                      Register →
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-emerald-800">Advanced Research Applications Workshop</h4>
                      <p className="text-gray-600">
                        In-depth training for researchers on advanced analytical techniques
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">May 7-8, 2025</p>
                      <p className="text-sm text-gray-500">Full-day workshop</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/al-quran-journey/events/register?id=advanced-research-workshop"
                      className="text-emerald-600 font-medium hover:text-emerald-800"
                    >
                      Register →
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-emerald-800">
                        Educator's Training: Using the Tool in Islamic Studies
                      </h4>
                      <p className="text-gray-600">Specialized training for teachers and professors</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">June 12, 2025</p>
                      <p className="text-sm text-gray-500">10:00 AM - 4:00 PM GMT</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/al-quran-journey/events/register?id=educators-training"
                      className="text-emerald-600 font-medium hover:text-emerald-800"
                    >
                      Register →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center my-12">
                <Link
                  href="/al-quran-journey/research-tools/concept-mapping/register"
                  className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          )}
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

