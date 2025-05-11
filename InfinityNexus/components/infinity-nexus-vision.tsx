import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Globe, Database, Shield, Sparkles } from "lucide-react"

export function InfinityNexusVision() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-300 text-indigo-700">
            The Vision
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Redefining Global Data Innovation
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Infinity Nexus is not just a project—it is a movement that will redefine how the world sees knowledge, data,
            and scientific evolution. The vision begins in Cox's Bazar and extends to the stars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">AI-Driven Research</h3>
            <p className="text-gray-600">
              Leveraging advanced artificial intelligence to process complex datasets and generate groundbreaking
              insights for scientific advancement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Global Collaboration</h3>
            <p className="text-gray-600">
              Connecting researchers, institutions, and innovators worldwide to share knowledge and tackle humanity's
              greatest challenges together.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-800">Next-Gen Infrastructure</h3>
            <p className="text-gray-600">
              Building on quantum computing and advanced cloud technologies to process and analyze data at unprecedented
              scales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">Blockchain Security</h3>
            <p className="text-gray-600">
              Implementing cutting-edge security protocols to ensure data integrity, privacy, and ethical use across all
              platforms.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full -ml-24 -mb-24 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                From Cox's Bazar to the Cosmos
              </h3>
            </div>
            <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Infinity Nexus begins as a personal educational initiative in Cox's Bazar, but aims to grow into a global
              force for scientific advancement, climate action, and technological innovation that will one day
              contribute to humanity's understanding of both our planet and the universe beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              >
                <Link href="/about">Explore Our Vision</Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                <Link href="/contributing">Join The Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
