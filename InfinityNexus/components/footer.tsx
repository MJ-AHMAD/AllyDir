import Link from "next/link"
import { Github, Coffee, Mail, Heart, BookOpen, Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              Infinity Nexus
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A global data hub originating in Cox's Bazar, pioneering AI-driven research and knowledge innovation for
              scientific advancement and sustainable futures.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/MJ-AHMAD" className="text-gray-600 hover:text-black">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://ko-fi.com/mjahmad" className="text-gray-600 hover:text-amber-600">
                <Coffee className="h-5 w-5" />
                <span className="sr-only">Ko-fi</span>
              </Link>
              <Link href="mailto:mjahmad2024@outlook.com" className="text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Main Hubs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tourist-hub" className="hover:underline">
                  Tourist Hub
                </Link>
              </li>
              <li>
                <Link href="/education-hub" className="hover:underline">
                  Education Hub
                </Link>
              </li>
              <li>
                <Link href="/economic-hub" className="hover:underline">
                  Economic Hub
                </Link>
              </li>
              <li>
                <Link href="/climate-hub" className="hover:underline">
                  Climate Hub
                </Link>
              </li>
              <li>
                <Link href="/social-initiatives" className="hover:underline">
                  Social Initiatives
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Hubs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/health-hub" className="hover:underline">
                  Health Hub
                </Link>
              </li>
              <li>
                <Link href="/marine-resource-hub" className="hover:underline">
                  Marine Resources
                </Link>
              </li>
              <li>
                <Link href="/infrastructure-hub" className="hover:underline">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/research-hub" className="hover:underline">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Open Source</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/MJ-AHMAD" className="hover:underline flex items-center gap-1">
                  <Github className="h-4 w-4" /> GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Sponsors/MJ-AHMAD" className="hover:underline flex items-center gap-1">
                  <Heart className="h-4 w-4 text-red-500" /> Sponsor on GitHub
                </Link>
              </li>
              <li>
                <Link href="https://ko-fi.com/mjahmad" className="hover:underline flex items-center gap-1">
                  <Coffee className="h-4 w-4 text-amber-600" /> Support on Ko-fi
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contributing" className="hover:underline">
                  Contribution Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                Infinity Nexus
              </h3>
              <p className="text-sm text-gray-600">
                An open source initiative for global data innovation and knowledge transformation
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/MJ-AHMAD/coxs"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://github.com/Sponsors/MJ-AHMAD"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="h-5 w-5" />
                <span>Sponsor</span>
              </a>
              <a href="/docs" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <BookOpen className="h-5 w-5" />
                <span>Documentation</span>
              </a>
              <a href="/license" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Scale className="h-5 w-5" />
                <span>License</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Infinity Nexus - Global Data Hub • Cox's Bazar. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/license" className="hover:underline">
              MIT License
            </Link>{" "}
            •{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
