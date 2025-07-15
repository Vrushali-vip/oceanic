"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Anchor, Users, LifeBuoy, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About us", href: "#aboutus", icon: <Anchor className="h-4 w-4 mr-2" /> },
    { name: "Why choose us", href: "#why-us", icon: <LifeBuoy className="h-4 w-4 mr-2" /> },
    { name: "Services", href: "#services", icon: <Globe className="h-4 w-4 mr-2" /> },
    { name: "Team", href: "#team", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-white/95 dark:bg-black-950/95 backdrop-blur-md shadow-lg border-b border-orange-500/20"
        : "bg-black-900/20 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4  flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-32 w-32">
            <Image
              src="/2.png"
              alt="Oceanic Advisors Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center text-sm font-medium transition-colors ${isScrolled
                ? "text-slate-700 hover:text-orange-600 dark:text-slate-200 dark:hover:text-orange-400"
                : "text-white/90 hover:text-orange-400"
                }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          <Button
            className={`rounded-full px-6 ${isScrolled
              ? "bg-orange-600 hover:bg-orange-700 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
              }`}
          >
            Request Advisory
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className={isScrolled ? "" : "text-white hover:bg-white/10"}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`mr-2 ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button  className={isScrolled ? "" : "text-white hover:bg-white/10"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-black-950">
              {/* <div className="flex items-center mb-8 mt-4">
                <Anchor className="h-8 w-8 text-orange-500 mr-2" />
                <span className="font-bold text-xl">Oceanic Advisors</span>
              </div> */}
              <div className="flex items-center mb-8 mt-4">
                <Image src="/small2.png" alt="Oceanic Advisors" width={32} height={32} className="mr-2 ml-0" />
                <span className="font-bold text-xl">Oceanic Advisors</span>
              </div>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  Request Advisory
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
