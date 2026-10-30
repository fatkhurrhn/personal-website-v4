// src/app/(app)/(pages)/blog/page.tsx
"use client"

import { useEffect, useMemo, useState } from "react"
import { SearchIcon, XIcon } from "lucide-react"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

type DevToArticle = {
  id: number
  title: string
  description: string
  url: string
  cover_image: string | null
  tag_list: string[]
  user: {
    name: string
  }
}

const description =
"Notes from building things."
async function getArticles(): Promise<DevToArticle[]> {
  const res = await fetch("https://dev.to/api/articles?per_page=100&top=365")

  if (!res.ok) return []

  const data = (await res.json()) as DevToArticle[]

  return data.sort(() => Math.random() - 0.5).slice(0, 20)
}

export default function Page() {
  const [articles, setArticles] = useState<DevToArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data)
      setLoading(false)
    })
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return articles

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.description?.toLowerCase().includes(q) ||
        article.tag_list.some((tag) => tag.toLowerCase().includes(q)) ||
        article.user.name.toLowerCase().includes(q)
      )
    })
  }, [articles, query])

  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Blog</PageHeadingTagline>
        <PageHeadingTitle>{description}</PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      {/* Search bar */}
      <div className="screen-line-top screen-line-bottom p-2">
        <div className="flex items-center gap-2 rounded-lg border border-input px-3 py-1.5 dark:bg-input/30">
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <XIcon className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom p-4">
        {loading && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Loading articles…
          </p>
        )}

        {!loading && (
          <ul className="grid gap-4 sm:grid-cols-2">
            {filtered.map((article) => (
              <li key={article.id}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-colors hover:border-foreground/20"
                >
                  {article.cover_image ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.cover_image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
                        {article.user.name}
                      </span>
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-3 font-semibold text-balance tracking-tight">
                      {article.title}
                    </h3>

                    {article.description && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {article.description}
                      </p>
                    )}

                    {!article.cover_image && (
                      <div className="mt-auto flex items-center gap-2 pt-4 text-xs text-muted-foreground">
                        <span>{article.user.name}</span>
                      </div>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        {!loading && filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No articles found.
          </p>
        )}
      </div>

      <div className="h-4" />
    </div>
  )
}