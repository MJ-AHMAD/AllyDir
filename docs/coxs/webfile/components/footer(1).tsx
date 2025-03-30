import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Trusted Ally</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive management system for Cox's Bazar district, providing information and services across
              various sectors.
            </p>
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
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>District Administration Office</p>
              <p>Cox's Bazar, Bangladesh</p>
              <p className="mt-2">Email: t-ally@outlook.com</p>
              <p>Phone: +880 1336221217</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Trusted Ally - Cox's Bazar District Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

