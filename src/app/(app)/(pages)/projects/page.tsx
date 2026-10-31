// src/app/(app)/(pages)/projects/page.tsx

import type { Metadata } from "next"
import { ExternalLinkIcon, StarIcon } from "lucide-react"

import { X_HANDLE } from "@/config/site"
import { GitHubIcon } from "@/components/icons"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

const title = "Projects"
const description = "Open source projects and things I've built."

const ogImage = "/images/desktop-dark.png"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    type: "website",
    images: { url: ogImage, width: 1200, height: 630, alt: title },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

type GitHubRepo = {
  id: number
  name: string
  full_name: string
  html_url: string
  homepage: string | null
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  updated_at: string
  size: number
}

type RepoWithLanguages = GitHubRepo & {
  languages: Record<string, number>
}

async function getRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/fatkhurrhn/repos?per_page=100&sort=updated",
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    }
  )

  if (!res.ok) return []

  const repos = (await res.json()) as GitHubRepo[]

  return repos
    // .filter((repo) => !repo.fork)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
}

async function getLanguages(fullName: string): Promise<Record<string, number>> {
  const res = await fetch(
    `https://api.github.com/repos/${fullName}/languages`,
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    }
  )

  if (!res.ok) return {}
  return (await res.json()) as Record<string, number>
}

async function getReposWithLanguages(): Promise<RepoWithLanguages[]> {
  const repos = await getRepos()

  const results = await Promise.all(
    repos.map(async (repo) => {
      // Repo tanpa bahasa utama tidak perlu di-fetch /languages
      if (!repo.language) {
        return { ...repo, languages: {} }
      }

      const languages = await getLanguages(repo.full_name)

      // Fallback: kalau /languages kosong, pakai bahasa utama
      if (Object.keys(languages).length === 0) {
        return { ...repo, languages: { [repo.language]: 1 } }
      }

      return { ...repo, languages }
    })
  )

  return results
}

function formatSize(kb: number) {
  if (kb < 1024) return `${kb} KB`
  return `${(kb / 1024).toFixed(1)} MB`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  })
}

function languagePercentages(languages: Record<string, number>) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0)
  if (total === 0) return []
  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      percent: (bytes / total) * 100,
    }))
    .sort((a, b) => b.percent - a.percent)
}

function languageColor(name: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Dart: "#00B4AB",
    Kotlin: "#A97BFF",
    Swift: "#F05138",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#701516",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    Shell: "#89e051",
    Vue: "#41b883",
    Svelte: "#ff3e00",
    Astro: "#ff5a03",
  }
  return colors[name] ?? "#8b8b8b"
}

export default async function Page() {
  const repos = await getReposWithLanguages()

  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Projects</PageHeadingTagline>
        <PageHeadingTitle>{description}</PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      <div className="screen-line-top screen-line-bottom p-4">
        <ul className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => {
            const langs = languagePercentages(repo.languages)
            const primary = langs[0]

            return (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background p-5 transition-colors hover:border-foreground/20"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{
                      backgroundColor: primary
                        ? languageColor(primary.name)
                        : "transparent",
                    }}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GitHubIcon className="size-4 shrink-0 text-muted-foreground" />
                      <h3 className="font-semibold text-balance tracking-tight group-hover:underline">
                        {repo.name}
                      </h3>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 rounded-full border border-line px-2 py-0.5 text-xs text-muted-foreground">
                      <StarIcon className="size-3" />
                      {repo.stargazers_count}
                    </span>
                  </div>

                  {repo.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {repo.description}
                    </p>
                  )}

                  {langs.length > 0 && (
                    <div className="mt-4">
                      <div className="mb-1.5 flex flex-wrap gap-1.5">
                        {langs.slice(0, 4).map((lang) => (
                          <span
                            key={lang.name}
                            className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            <span
                              className="size-2 rounded-full"
                              style={{
                                backgroundColor: languageColor(lang.name),
                              }}
                            />
                            {lang.name}
                          </span>
                        ))}
                      </div>
                      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        {langs.map((lang) => (
                          <div
                            key={lang.name}
                            style={{
                              width: `${lang.percent}%`,
                              backgroundColor: languageColor(lang.name),
                            }}
                            className="h-full opacity-80"
                            title={lang.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3 text-xs text-muted-foreground">
                    <div>
                      <dt className="sr-only">Size</dt>
                      <dd>{formatSize(repo.size)}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Forks</dt>
                      <dd>{repo.forks_count} forks</dd>
                    </div>
                    <div className="text-right">
                      <dt className="sr-only">Updated</dt>
                      <dd>Updated {formatDate(repo.updated_at)}</dd>
                    </div>
                  </dl>
                </a>
              </li>
            )
          })}
        </ul>

        {repos.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No public repositories found.
          </p>
        )}
      </div>

      <div className="h-4" />
    </div>
  )
}