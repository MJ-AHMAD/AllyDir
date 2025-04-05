import Link from "next/link"
import { FaDatabase, FaServer, FaLock, FaChartLine, FaUsers, FaCalendarAlt } from "react-icons/fa"

export default function DatabaseManagementCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Database Management Systems</h1>
            <p className="text-xl mb-8">
              Master the design, implementation, and management of SQL and NoSQL databases for modern applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/education-program/courses/database-management/register"
                className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md font-medium transition duration-300"
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
              This comprehensive database management course covers both relational (SQL) and non-relational (NoSQL)
              database systems. You'll learn database design principles, query optimization, data modeling, and
              administration techniques. By the end of this course, you'll have the skills to design efficient database
              schemas, write complex queries, and manage database systems in production environments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaDatabase className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">SQL Databases</h3>
                  <p className="text-gray-600">Master relational database concepts and SQL query language.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaServer className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">NoSQL Systems</h3>
                  <p className="text-gray-600">Learn document, key-value, column-family, and graph databases.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaLock className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Database Security</h3>
                  <p className="text-gray-600">Implement security best practices for database systems.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Performance Tuning</h3>
                  <p className="text-gray-600">Optimize database performance and query execution.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-green-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">10 weeks, 5 hours/week</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-green-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Skill Level</h3>
              </div>
              <p className="text-gray-600">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-green-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Prerequisites</h3>
              </div>
              <p className="text-gray-600">Basic programming knowledge</p>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Curriculum</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 1: Introduction to Database Systems</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Database concepts and terminology</li>
                <li>Types of database management systems</li>
                <li>Database architecture</li>
                <li>ACID properties and transactions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 2: Relational Database Design</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Entity-Relationship (ER) modeling</li>
                <li>Normalization and denormalization</li>
                <li>Database schema design</li>
                <li>Constraints and integrity rules</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 3: SQL Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SQL syntax and data types</li>
                <li>DDL (CREATE, ALTER, DROP)</li>
                <li>DML (SELECT, INSERT, UPDATE, DELETE)</li>
                <li>Filtering, sorting, and grouping data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 4: Advanced SQL</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Joins and subqueries</li>
                <li>Window functions</li>
                <li>Common Table Expressions (CTEs)</li>
                <li>Stored procedures and functions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 5: PostgreSQL</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>PostgreSQL architecture</li>
                <li>Advanced PostgreSQL features</li>
                <li>JSON and JSONB data types</li>
                <li>PostgreSQL administration</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 6: MySQL</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>MySQL architecture</li>
                <li>InnoDB and MyISAM storage engines</li>
                <li>MySQL performance optimization</li>
                <li>MySQL administration</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 7: NoSQL Databases</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>NoSQL database types and use cases</li>
                <li>CAP theorem and distributed databases</li>
                <li>Data modeling for NoSQL</li>
                <li>Choosing between SQL and NoSQL</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 8: MongoDB</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>MongoDB architecture</li>
                <li>CRUD operations in MongoDB</li>
                <li>Aggregation framework</li>
                <li>Indexing and performance optimization</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 9: Redis and Key-Value Stores</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Redis data structures</li>
                <li>Caching strategies</li>
                <li>Pub/Sub messaging</li>
                <li>Redis persistence and clustering</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 10: Database Security</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Authentication and authorization</li>
                <li>SQL injection prevention</li>
                <li>Data encryption</li>
                <li>Auditing and compliance</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 11: Database Performance</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Query optimization techniques</li>
                <li>Indexing strategies</li>
                <li>Execution plans and query analysis</li>
                <li>Database monitoring and tuning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 12: Final Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Design and implement a database system for a real-world scenario</li>
                <li>Optimize for performance and security</li>
                <li>Implement both SQL and NoSQL components</li>
                <li>Documentation and presentation</li>
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
                  <h3 className="text-xl font-semibold text-gray-800">Robert Chen</h3>
                  <p className="text-green-600 mb-2">Database Architect</p>
                  <p className="text-gray-600">
                    Robert has over 12 years of experience as a database architect and has worked with Fortune 500
                    companies to design and optimize their database systems. He specializes in PostgreSQL and MongoDB.
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
                  <h3 className="text-xl font-semibold text-gray-800">Aisha Johnson</h3>
                  <p className="text-green-600 mb-2">Data Engineer</p>
                  <p className="text-gray-600">
                    Aisha is a data engineer with expertise in both SQL and NoSQL databases. She has implemented
                    large-scale data solutions and has a background in performance optimization and database security.
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
                    alt="Data Science"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Data Science</h3>
                  <p className="text-gray-600 mb-4">Learn data analysis and machine learning techniques.</p>
                  <Link
                    href="/education-program/courses/data-science"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="API Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">API Development</h3>
                  <p className="text-gray-600 mb-4">Build robust APIs that interact with databases.</p>
                  <Link
                    href="/education-program/courses/api-development"
                    className="text-green-600 hover:text-green-800 font-medium"
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
                  <p className="text-gray-600 mb-4">Learn to deploy and manage databases in the cloud.</p>
                  <Link
                    href="/education-program/courses/cloud-computing"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-green-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Database Management?</h2>
            <p className="text-xl mb-6">Join our comprehensive course and become a database expert.</p>
            <Link
              href="/education-program/courses/database-management/register"
              className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

