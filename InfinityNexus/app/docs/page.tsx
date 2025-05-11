import Link from "next/link"
import { FileText, Code, Database, Server, Layers, Terminal } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-600 mb-4">Learn how to install and set up the project for development.</p>
          <Link href="#getting-started" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Code className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">API Reference</h2>
          <p className="text-gray-600 mb-4">Detailed documentation of all available APIs and endpoints.</p>
          <Link href="#api-reference" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Layers className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Architecture</h2>
          <p className="text-gray-600 mb-4">Understand the system architecture and component design.</p>
          <Link href="#architecture" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>
      </div>

      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Getting Started</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Prerequisites</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Node.js 18.0 or higher</li>
          <li>npm or pnpm</li>
          <li>Git</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Installation</h3>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <pre className="whitespace-pre-wrap">
            <code>
              # Clone the repository git clone https://github.com/MJ-AHMAD/coxs.git cd coxs # Install dependencies npm
              install # Start the development server npm run dev
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Configuration</h3>
        <p className="mb-4">
          Create a <code className="bg-gray-100 px-1 py-0.5 rounded">.env.local</code> file in the root directory with
          the following variables:
        </p>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <pre className="whitespace-pre-wrap">
            <code>
              # Database connection DATABASE_URL=your_database_url # API keys API_KEY=your_api_key # Other configuration
              NEXT_PUBLIC_SITE_URL=http://localhost:3000
            </code>
          </pre>
        </div>
      </section>

      <section id="api-reference" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">API Reference</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Data API
          </h3>
          <p className="mb-4">The Data API provides access to district management data and statistics.</p>

          <h4 className="font-semibold mt-4 mb-2">Endpoints</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">GET /api/data/statistics</code> - Get district
              statistics
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">GET /api/data/projects</code> - List all projects
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">GET /api/data/projects/:id</code> - Get project details
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-600" />
            Admin API
          </h3>
          <p className="mb-4">The Admin API provides administrative functions for managing the district data.</p>

          <h4 className="font-semibold mt-4 mb-2">Endpoints</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">POST /api/admin/projects</code> - Create a new project
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">PUT /api/admin/projects/:id</code> - Update a project
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">DELETE /api/admin/projects/:id</code> - Delete a project
            </li>
          </ul>
        </div>
      </section>

      <section id="architecture" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Architecture</h2>

        <p className="mb-6">
          The Cox's Bazar District Management system follows a modern microservices architecture with the following
          components:
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3">Frontend</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Next.js 15 for server-side rendering and static site generation</li>
            <li>React for UI components</li>
            <li>Tailwind CSS for styling</li>
            <li>SWR for data fetching and caching</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3">Backend</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Next.js API routes for serverless functions</li>
            <li>Database integration with Prisma ORM</li>
            <li>Authentication with NextAuth.js</li>
            <li>Caching layer for performance optimization</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deployed on Vercel for global CDN and edge functions</li>
            <li>Database hosted on a scalable cloud platform</li>
            <li>CI/CD pipeline with GitHub Actions</li>
            <li>Monitoring and logging with Vercel Analytics</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-blue-600" />
          Need Help?
        </h2>
        <p className="mb-4">
          If you need additional help or have questions about the documentation, please reach out through one of these
          channels:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Open an issue on{" "}
            <a href="https://github.com/MJ-AHMAD/coxs/issues" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </li>
          <li>
            Email us at{" "}
            <a href="mailto:mjahmad2024@outlook.com" className="text-blue-600 hover:underline">
              mjahmad2024@outlook.com
            </a>
          </li>
          <li>Join our community discussions on GitHub</li>
        </ul>
      </div>
    </div>
  )
}
