import type { Metadata } from "next"
import ConceptMappingToolClientPage from "./ConceptMappingToolClientPage"

export const metadata: Metadata = {
  title: "Quranic Concept Mapping Tool | Al Quran Journey",
  description:
    "Explore the interconnected concepts of the Quran through our advanced digital mapping tool, combining traditional scholarship with modern visualization technology.",
}

export default function ConceptMappingToolPage() {
  return <ConceptMappingToolClientPage />
}

