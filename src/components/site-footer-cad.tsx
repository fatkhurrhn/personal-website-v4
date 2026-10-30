import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { DmcaIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

/** Footer sederhana dengan baris ikon sosial. */
export function SiteFooterCad() {
  const xLink = SOCIAL.x
  const githubLink = SOCIAL.github
  const linkedinLink = SOCIAL.linkedin

  return (
    <footer className="max-w-screen pb-10 overflow-x-clip px-2">
      <div className="mx-auto border-x border-x-line md:max-w-3xl">
        <div className="px-4 pt-4 text-center font-mono text-sm text-balance text-muted-foreground">
          <p className="mb-1">Owned by Fatkhurrhn</p>
          <p className="mb-1">
            Inspired by tailwindcss.com & ui.shadcn.com
          </p>
          <p className="mb-6">
            Special thanks to{" "}
            <a
              className="link-underline"
              href="https://x.com/iamncdai"
              target="_blank"
              rel="noopener"
            >
              ncdai
            </a>
            . The source code{" "}
            <a
              className="link-underline"
              href={SOURCE_CODE_GITHUB_URL}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="screen-line-top screen-line-bottom flex flex-wrap items-center justify-center gap-3 px-4 py-3 text-muted-foreground">
          {/* Sponsors & llms.txt */}
          <a
            className="font-mono text-xs font-medium transition-[color] hover:text-foreground"
            href="/sponsors"
          >
            Sponsors
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="font-mono text-xs font-medium transition-[color] hover:text-foreground"
            href="/llms.txt"
            target="_blank"
            rel="noopener"
          >
            llms.txt
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          {/* Ikon sosial */}
          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={xLink.href}
            target="_blank"
            rel="noopener"
            aria-label="X Profile"
          >
            <XIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={githubLink.href}
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={linkedinLink.href}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={
              process.env.NEXT_PUBLIC_DMCA_URL ||
              "https://www.dmca.com/ProtectionPro.aspx"
            }
            target="_blank"
            rel="noopener"
            aria-label="DMCA.com Protection Status"
          >
            <DmcaIcon className="h-4 w-auto" />
          </a>
        </div>

        {/* Jarak ke bawah */}
        <div className="h-10" />
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}