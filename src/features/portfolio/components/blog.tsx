import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "blog"

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

async function getArticles(): Promise<DevToArticle[]> {
  const res = await fetch("https://dev.to/api/articles?per_page=100&top=365", {
    next: { revalidate: 3600 },
  })

  if (!res.ok) return []

  const data = (await res.json()) as DevToArticle[]

  return data.sort(() => Math.random() - 0.5).slice(0, 4)
}

export async function Blog() {
  const articles = await getArticles()

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blog</a>
          <PanelTitleSup>({articles.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <li
              key={article.id}
              className={cn(
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-colors hover:border-foreground/20"
              >
                {article.cover_image && (
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
                )}

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tag_list.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-2 line-clamp-2 font-semibold text-balance tracking-tight">
                    {article.title}
                  </h3>

                  {article.description && (
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {article.description}
                    </p>
                  )}

                  {!article.cover_image && (
                    <div className="mt-auto pt-3 text-xs text-muted-foreground">
                      {article.user.name}
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>

        {articles.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No articles found.
          </p>
        )}
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          All posts
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}