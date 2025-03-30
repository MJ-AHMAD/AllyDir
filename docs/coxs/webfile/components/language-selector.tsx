"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Link from "next/link"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { name: "English", code: "en", href: "/english" },
    { name: "বাংলা", code: "bn", href: "/bangla" },
    { name: "العربية", code: "ar", href: "/arabic" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12 shadow-lg bg-white">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Select language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {languages.map((language) => (
            <DropdownMenuItem key={language.code} asChild>
              <Link href={language.href} className="cursor-pointer">
                {language.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

