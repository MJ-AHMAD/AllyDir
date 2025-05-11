import Link from "next/link"
import { Github, GitPullRequest, Code, BookOpen } from "lucide-react"

export default function ContributingPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contributing to Cox's Bazar District Management</h1>

      <div className="prose prose-blue max-w-none">
        <p className="text-lg mb-6">
          Thank you for your interest in contributing to the Cox's Bazar District Management project! This is an open
          source project and we love to receive contributions from our community.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-blue-600" />
              Code Contributions
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fork the repository</li>
              <li>Create a feature branch</li>
              <li>Make your changes</li>
              <li>Write or adapt tests as needed</li>
              <li>Update documentation as needed</li>
              <li>Submit a pull request</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Documentation
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve module documentation</li>
              <li>Add code comments</li>
              <li>Write tutorials and examples</li>
              <li>Improve error messages</li>
              <li>Translate documentation</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Development Setup</h2>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <pre className="whitespace-pre-wrap">
            <code>
              # Clone the repository git clone https://github.com/MJ-AHMAD/coxs.git cd coxs # Install dependencies npm
              install # Start the development server npm run dev
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">Pull Request Process</h2>

        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Ensure your code follows the project's coding standards</li>
          <li>Update the README.md with details of changes if applicable</li>
          <li>The PR should work for all supported platforms</li>
          <li>Your PR will be merged once it's reviewed and approved</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>

        <p className="mb-6">
          This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please
          report unacceptable behavior to{" "}
          <a href="mailto:mjahmad2024@outlook.com" className="text-blue-600 hover:underline">
            mjahmad2024@outlook.com
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="https://github.com/MJ-AHMAD/coxs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Link>
          <Link
            href="https://github.com/MJ-AHMAD/coxs/pulls"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <GitPullRequest className="h-5 w-5" />
            Open Pull Requests
          </Link>
        </div>
      </div>
    </div>
  )
}
