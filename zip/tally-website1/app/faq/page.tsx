import { SimpleFooter } from "@/components/simple-footer"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">What is Trusted Ally?</h3>
            <p>
              Trusted Ally is a non-profit organization dedicated to promoting equality, education, and cooperation. We
              work on various projects including Al-Quran Journey, TechAlly Ventures, and Ally Voyage to create positive
              change in communities around the world.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">How can I get involved with Trusted Ally?</h3>
            <p>There are several ways to get involved with Trusted Ally:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Volunteer for our projects and initiatives</li>
              <li>Donate to support our causes</li>
              <li>Invest in our sustainable development projects</li>
              <li>Participate in our educational programs</li>
              <li>Spread awareness about our mission</li>
            </ul>
            <p className="mt-2">
              Visit our{" "}
              <a href="/volunteer" className="text-blue-500 hover:underline">
                Volunteer
              </a>{" "}
              or
              <a href="/donate" className="text-blue-500 hover:underline">
                {" "}
                Donate
              </a>{" "}
              pages to learn more.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">What is the Al-Quran Journey project?</h3>
            <p>
              Al-Quran Journey is a project dedicated to the research, printing, and distribution of the Holy Quran. We
              focus on making the Quran accessible to people around the world through various initiatives including
              Quraner Fariwala, research, printing, and distribution programs.
            </p>
            <p className="mt-2">
              Learn more on our{" "}
              <a href="/projects/al-quran-journey" className="text-blue-500 hover:underline">
                Al-Quran Journey
              </a>{" "}
              page.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">What services does TechAlly Ventures offer?</h3>
            <p>TechAlly Ventures offers a range of technology services including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Web Development</li>
              <li>Payment Integration</li>
              <li>SEO Optimization</li>
              <li>E-commerce Solutions</li>
              <li>Technical Support</li>
              <li>Microsoft Solutions</li>
            </ul>
            <p className="mt-2">
              Visit our{" "}
              <a href="/projects/techally-ventures" className="text-blue-500 hover:underline">
                TechAlly Ventures
              </a>{" "}
              page for more details.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">What travel services does Ally Voyage provide?</h3>
            <p>Ally Voyage offers various travel packages and services including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Umrah Packages (Essential, Premium, and Luxury)</li>
              <li>Domestic Getaways</li>
              <li>European Adventures</li>
              <li>Tropical Escapes</li>
              <li>Custom travel arrangements</li>
            </ul>
            <p className="mt-2">
              Check out our{" "}
              <a href="/projects/ally-voyage" className="text-blue-500 hover:underline">
                Ally Voyage
              </a>{" "}
              page for more information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">How can I schedule a consultation?</h3>
            <p>
              You can schedule a consultation with our team by visiting our
              <a href="/schedule-consultation" className="text-blue-500 hover:underline">
                {" "}
                Schedule Consultation
              </a>{" "}
              page. Fill out the form with your details and preferred time, and we'll get back to you to confirm your
              appointment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">How can I contact Trusted Ally?</h3>
            <p>You can contact us through:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Email:{" "}
                <a href="mailto:t-ally@outlook.com" className="text-blue-500 hover:underline">
                  t-ally@outlook.com
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:mjahmad2024@outlook.com" className="text-blue-500 hover:underline">
                  mjahmad2024@outlook.com
                </a>
              </li>
              <li>
                Visit our{" "}
                <a href="/contact" className="text-blue-500 hover:underline">
                  Contact
                </a>{" "}
                page for more options
              </li>
            </ul>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  )
}

