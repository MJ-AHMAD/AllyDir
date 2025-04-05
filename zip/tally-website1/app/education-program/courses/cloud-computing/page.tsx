import Link from "next/link"
import { FaCloud, FaServer, FaLock, FaNetworkWired, FaUsers, FaCalendarAlt } from "react-icons/fa"

export default function CloudComputingCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Computing Essentials</h1>
            <p className="text-xl mb-8">
              Master cloud technologies and learn to design, deploy, and manage cloud infrastructure for modern
              applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/education-program/courses/cloud-computing/register"
                className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-md font-medium transition duration-300"
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
              This comprehensive cloud computing course covers the fundamental concepts, architectures, and services of
              major cloud platforms. You'll gain hands-on experience with AWS, Azure, and Google Cloud, learning to
              deploy applications, manage infrastructure, and implement cloud security best practices. By the end of
              this course, you'll be prepared to design and implement cloud solutions for various business needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaCloud className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Cloud Platforms</h3>
                  <p className="text-gray-600">Learn the core services and features of AWS, Azure, and Google Cloud.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaServer className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Infrastructure as Code</h3>
                  <p className="text-gray-600">
                    Master infrastructure automation using tools like Terraform and CloudFormation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaLock className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Cloud Security</h3>
                  <p className="text-gray-600">Implement security best practices for cloud environments.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaNetworkWired className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Cloud Architecture</h3>
                  <p className="text-gray-600">Design scalable, resilient, and cost-effective cloud solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-teal-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">10 weeks, 5 hours/week</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCloud className="text-teal-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Skill Level</h3>
              </div>
              <p className="text-gray-600">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-teal-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Prerequisites</h3>
              </div>
              <p className="text-gray-600">Basic networking and Linux knowledge</p>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Curriculum</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 1: Introduction to Cloud Computing</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cloud computing concepts and terminology</li>
                <li>Cloud service models (IaaS, PaaS, SaaS)</li>
                <li>Cloud deployment models (public, private, hybrid)</li>
                <li>Benefits and challenges of cloud computing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Module 2: Amazon Web Services (AWS) Fundamentals
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>AWS account setup and management</li>
                <li>Core AWS services (EC2, S3, RDS, VPC)</li>
                <li>AWS Identity and Access Management (IAM)</li>
                <li>AWS CLI and SDK usage</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 3: Microsoft Azure Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Azure account setup and management</li>
                <li>Core Azure services (Virtual Machines, Storage, SQL Database)</li>
                <li>Azure Active Directory and access control</li>
                <li>Azure CLI and PowerShell</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Module 4: Google Cloud Platform (GCP) Fundamentals
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>GCP account setup and management</li>
                <li>Core GCP services (Compute Engine, Cloud Storage, Cloud SQL)</li>
                <li>GCP Identity and Access Management</li>
                <li>Google Cloud SDK and gcloud CLI</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 5: Cloud Networking</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Virtual networks and subnets</li>
                <li>Network security groups and firewalls</li>
                <li>Load balancing and traffic management</li>
                <li>VPN and direct connect options</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 6: Cloud Storage Solutions</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Object storage (S3, Blob Storage, Cloud Storage)</li>
                <li>Block storage (EBS, Azure Disk, Persistent Disk)</li>
                <li>File storage services</li>
                <li>Data migration strategies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 7: Cloud Databases</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Relational databases in the cloud</li>
                <li>NoSQL database options</li>
                <li>Database migration and replication</li>
                <li>Database performance optimization</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 8: Infrastructure as Code</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Introduction to Infrastructure as Code (IaC)</li>
                <li>AWS CloudFormation</li>
                <li>Azure Resource Manager templates</li>
                <li>Terraform for multi-cloud deployments</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 9: Containerization and Orchestration</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Docker containers in the cloud</li>
                <li>Kubernetes fundamentals</li>
                <li>Managed Kubernetes services (EKS, AKS, GKE)</li>
                <li>Container deployment strategies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 10: Cloud Security and Compliance</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cloud security best practices</li>
                <li>Identity and access management</li>
                <li>Encryption and key management</li>
                <li>Compliance frameworks in the cloud</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 11: Final Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Design and implement a multi-tier application in the cloud</li>
                <li>Infrastructure as Code deployment</li>
                <li>Security implementation and testing</li>
                <li>Performance optimization and cost management</li>
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
                  <h3 className="text-xl font-semibold text-gray-800">James Rodriguez</h3>
                  <p className="text-teal-600 mb-2">AWS Solutions Architect</p>
                  <p className="text-gray-600">
                    James is an AWS Certified Solutions Architect with over 8 years of experience designing and
                    implementing cloud solutions for enterprises. He specializes in serverless architectures and cloud
                    security.
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
                  <h3 className="text-xl font-semibold text-gray-800">Sophia Kim</h3>
                  <p className="text-teal-600 mb-2">Multi-Cloud Specialist</p>
                  <p className="text-gray-600">
                    Sophia holds certifications in AWS, Azure, and GCP. She has helped numerous organizations implement
                    multi-cloud strategies and has a background in cloud architecture and DevOps.
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
                    alt="DevOps Engineering"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">DevOps Engineering</h3>
                  <p className="text-gray-600 mb-4">Learn CI/CD pipelines and DevOps practices.</p>
                  <Link
                    href="/education-program/courses/devops-engineering"
                    className="text-teal-600 hover:text-teal-800 font-medium"
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
                  <p className="text-gray-600 mb-4">Master SQL and NoSQL database systems.</p>
                  <Link
                    href="/education-program/courses/database-management"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Cybersecurity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Cybersecurity</h3>
                  <p className="text-gray-600 mb-4">Learn to secure systems and networks.</p>
                  <Link
                    href="/education-program/courses/cybersecurity"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-teal-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Cloud Computing?</h2>
            <p className="text-xl mb-6">Join our comprehensive course and take your career to new heights.</p>
            <Link
              href="/education-program/courses/cloud-computing/register"
              className="inline-block bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

