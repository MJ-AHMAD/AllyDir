import Link from "next/link"
import { FaGithub, FaGitAlt, FaCodeBranch, FaUsers, FaLaptopCode, FaCalendarAlt } from "react-icons/fa"

export default function VersionControlCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Version Control Systems</h1>
            <p className="text-xl mb-8">
              Learn essential version control skills with Git, GitHub, and other popular tools to collaborate
              effectively in software development teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/education-program/courses/version-control/register"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Overview</h2>
            <p className="text-gray-600 mb-6">
              Version control is a critical skill for modern software development. This comprehensive course will teach
              you how to use Git and other version control systems to track changes, collaborate with team members, and
              manage code efficiently. Whether you're a beginner or looking to enhance your existing skills, this course
              provides practical knowledge that you can apply immediately to your projects.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaGitAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Git Fundamentals</h3>
                  <p className="text-gray-600">
                    Learn the core concepts of Git including repositories, commits, branches, and merges.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaGithub className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">GitHub & Collaboration</h3>
                  <p className="text-gray-600">
                    Master GitHub workflows, pull requests, code reviews, and team collaboration techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaCodeBranch className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Branching Strategies</h3>
                  <p className="text-gray-600">
                    Explore different branching models like GitFlow and GitHub Flow for effective team workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Learn best practices for working in teams using version control systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-blue-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">8 weeks, 3 hours/week</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-blue-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Skill Level</h3>
              </div>
              <p className="text-gray-600">Beginner to Intermediate</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-blue-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Prerequisites</h3>
              </div>
              <p className="text-gray-600">Basic computer skills</p>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Curriculum</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 1: Introduction to Version Control</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Understanding the need for version control</li>
                <li>Centralized vs. Distributed version control systems</li>
                <li>History and evolution of version control</li>
                <li>Setting up your development environment</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 2: Git Basics</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Creating and cloning repositories</li>
                <li>Basic Git commands (add, commit, status, log)</li>
                <li>Understanding the Git workflow</li>
                <li>Working with .gitignore files</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 3: Branching and Merging</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Creating and managing branches</li>
                <li>Merging branches and resolving conflicts</li>
                <li>Rebasing vs. merging</li>
                <li>Branch management strategies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 4: GitHub and Remote Repositories</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Setting up GitHub accounts and repositories</li>
                <li>Working with remote repositories</li>
                <li>Pull requests and code reviews</li>
                <li>GitHub issues and project management</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 5: Advanced Git Techniques</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Interactive rebasing</li>
                <li>Cherry-picking commits</li>
                <li>Git hooks and automation</li>
                <li>Reflog and recovering lost work</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 6: Team Collaboration Workflows</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>GitFlow workflow</li>
                <li>GitHub Flow workflow</li>
                <li>Trunk-based development</li>
                <li>Choosing the right workflow for your team</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 7: CI/CD Integration</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Integrating Git with CI/CD pipelines</li>
                <li>GitHub Actions basics</li>
                <li>Automated testing and deployment</li>
                <li>Best practices for version control in CI/CD</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 8: Final Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Collaborative team project using Git and GitHub</li>
                <li>Implementing a complete workflow</li>
                <li>Code reviews and pull request management</li>
                <li>Project presentation and review</li>
              </ul>
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Instructors</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Instructor"
                  className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
                  <p className="text-blue-600 mb-2">Senior DevOps Engineer</p>
                  <p className="text-gray-600">
                    Sarah has over 10 years of experience in software development and DevOps. She specializes in Git
                    workflows and has helped numerous teams implement effective version control strategies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Instructor"
                  className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
                  <p className="text-blue-600 mb-2">GitHub Certified Trainer</p>
                  <p className="text-gray-600">
                    Michael is a certified GitHub trainer with extensive experience in teaching version control systems.
                    He has trained developers at Fortune 500 companies and startups alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Related Courses You Might Like</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Web Development</h3>
                  <p className="text-gray-600 mb-4">Learn modern web development with HTML, CSS, and JavaScript.</p>
                  <Link
                    href="/education-program/courses/web-development"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Cloud Computing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Cloud Computing</h3>
                  <p className="text-gray-600 mb-4">Master cloud platforms and deployment strategies.</p>
                  <Link
                    href="/education-program/courses/cloud-computing"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Database Management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Database Management</h3>
                  <p className="text-gray-600 mb-4">Learn SQL and NoSQL database design and management.</p>
                  <Link
                    href="/education-program/courses/database-management"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Version Control?</h2>
            <p className="text-xl mb-6">
              Join our comprehensive course and take your development skills to the next level.
            </p>
            <Link
              href="/education-program/courses/version-control/register"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

