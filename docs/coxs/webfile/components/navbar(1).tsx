"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Tourist Hub", href: "/tourist-hub" },
    { name: "Education Hub", href: "/education-hub" },
    { name: "Economic Hub", href: "/economic-hub" },
    { name: "Climate Hub", href: "/climate-hub" },
    { name: "Social Initiatives", href: "/social-initiatives" },
  ]

  const moreLinks = [
    { name: "Health Hub", href: "/health-hub" },
    { name: "Marine Resources", href: "/marine-resource-hub" },
    { name: "Infrastructure", href: "/infrastructure-hub" },
    { name: "Research", href: "/research-hub" },
    { name: "Water Resources", href: "/water-resources-hub" },
    { name: "Community", href: "/community-hub" },
    { name: "Sustainable Development", href: "/sustainable-development-hub" },
  ]

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Trusted Ally</span>
          <span className="text-sm text-muted-foreground">Cox's Bazar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {mainLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary">
              {link.name}
            </Link>
          ))}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                More
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="grid gap-4 py-4">
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              {[...mainLinks, ...moreLinks].map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

