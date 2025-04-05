import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function DeveloperProgramPage() {
  return (
    <div className="container mx-auto py-10">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Developer Program</h1>
        <p className="text-gray-600">Join our developer program and contribute to the future of Islamic technology.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Contribute to Open Source Projects</h2>
        <p className="text-gray-600 mb-4">
          Explore our open-source projects and find opportunities to contribute your skills.
        </p>
        <Button asChild>
          <Link href="/open-source">View Open Source Projects</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">AlQuranJourney</h2>
        <p className="text-gray-600 mb-4">Learn about our AlQuranJourney initiative and how you can get involved.</p>
        <Button asChild className="mt-4">
          <Link href="/al-quran-journey">Learn About Our Printing Standards</Link>
        </Button>
        <Button asChild className="mt-4">
          <Link href="/al-quran-journey">Join Our Research Network</Link>
        </Button>
        <Button asChild className="mt-4">
          <Link href="/al-quran-journey">Begin Your Scholarly Journey</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Access Developer Resources</h2>
        <p className="text-gray-600 mb-4">Get access to our developer API, documentation, and other resources.</p>
        <Button asChild>
          <Link href="/developer-resources">View Developer Resources</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-4">
          Subscribe to our newsletter to receive updates about the developer program.
        </p>
        <form className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  )
}

