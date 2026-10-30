"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon, MenuIcon, SparklesIcon, XIcon } from "lucide-react"

import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"



const CommandMenu = dynamic(() => import("@/components/command-menu"))

const SIDEBAR_DURATION = 400

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (mobileOpen) {
      setMounted(true)
    } else {
      const t = setTimeout(() => setMounted(false), SIDEBAR_DURATION)
      return () => clearTimeout(t)
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Kunci scroll body saat sidebar terbuka
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 h-(--header-height) max-w-screen overflow-x-clip bg-background px-2 pt-1">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-full items-center gap-2 border-x border-x-line pr-2 pl-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 md:max-w-3xl">
          <Link href="/" aria-label="Home">
            {/* Light modes */}
            <img
              src="/images/logo-light.png"
              alt="Brand"
              className="h-6 w-auto shrink-0 dark:hidden"
            />
            {/* Dark mode */}
            <img
              src="/images/logo-dark.png"
              alt="Brand"
              className="hidden h-6 w-auto shrink-0 dark:block"
            />
          </Link>

        <div className="flex-1" />

        <nav className="hidden items-center gap-1 sm:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.href && "text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center max-sm:hidden"
          />
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon-sm"
            className="sm:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="size-5" />
          </Button>
        </div>
      </div>

      {mounted && (
        <div
          className={cn(
            "fixed inset-0 z-50 sm:hidden",
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            style={{
              transitionDuration: `${SIDEBAR_DURATION}ms`,
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
            className={cn(
              "absolute inset-0 bg-black/40 transition-opacity",
              mobileOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />

          {/* Sidebar slide dari kiri */}
          <aside
            style={{
              transitionDuration: `${SIDEBAR_DURATION}ms`,
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
            className={cn(
              "absolute inset-y-0 left-0 flex w-64 max-w-[82%] flex-col border-r border-line bg-background shadow-xl transition-transform will-change-transform",
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex h-(--header-height) items-center justify-between border-b border-line px-4">
              <span className="text-sm font-medium">Menu</span>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <XIcon className="size-4.5" />
              </Button>
            </div>

            <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3">
              <Link
                href="/"
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent-muted hover:text-foreground",
                  pathname === "/" && "bg-accent-muted text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {MAIN_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent-muted hover:text-foreground",
                    pathname === item.href && "bg-accent-muted text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="border-t border-line p-3">
              <div className="relative overflow-hidden rounded-xl border border-line bg-accent-muted p-3.5">
                <div className="pointer-events-none absolute -top-6 -right-6 size-16 rounded-full bg-foreground/5" />
                <div className="pointer-events-none absolute -bottom-8 -left-4 size-20 rounded-full bg-foreground/5" />

                <div className="relative">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <SparklesIcon className="size-4" />
                    Let's work together
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Open for freelance and full-time opportunities.
                  </p>
                  <Link
                    href="mailto:fatkhurrhnn@gmail.com"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get in touch
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}