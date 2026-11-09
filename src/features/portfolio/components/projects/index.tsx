import Link from "next/link"
import {
  ArrowRightIcon,
  BoxIcon,
  InfinityIcon,
  LinkIcon,
} from "lucide-react"

import { addQueryParams } from "@/utils/url"
import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/collapsible-animated"
import { Markdown } from "@/components/markdown"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import type { Project } from "@/features/portfolio/types/projects"

const ID = "projects"

const FEATURED_PROJECTS: Project[] = [
  {
    id: "aethera-news",
    title: "Aethera News",
    period: {
      start: "09.2026",
      end: "10.2026",
    },
    link: "https://aetheranames.co.id",
    skills: ["Astro", "Tailwind CSS", "MySQL", "TypeScript"],
    description: `A modern news portal built with Astro — fast, SEO-friendly, and fully server-rendered.
- Server-side rendering with Astro + Node adapter for dynamic article routing
- Session-based admin dashboard with role protection via iron-session and bcrypt
- News management: CRUD articles, categories, tags, and featured thumbnails
- Public features: article pages, category/tag filtering, search API, sitemap, and RSS
- Maintenance mode toggle and file upload handling built in`,
    isExpanded: true,
  },
  {
    id: "aethera-marketplace",
    title: "Aethera Marketplace",
    period: {
      start: "08.2026",
      end: "10.2026",
    },
    link: "https://aetheranames.com",
    skills: ["Laravel", "Inertia.js", "React", "MySQL", "Tailwind CSS"],
    description: `A digital services marketplace for web, app, SEO, ads, and digital invitation products.
- Built with Laravel + Inertia.js + React for a seamless SPA-like experience
- Product catalog with services, sub-services, discounts, and active/inactive states
- Cart, checkout, wishlist, and order flow with WhatsApp order integration
- Customer area and admin dashboard: order management, reports, user management
- Rich text editor (TinyMCE), chart-based analytics, and maintenance mode settings`,
  },
  {
    id: "personal-website-v4",
    title: "personal-website-v4",
    period: {
      start: "10.2026",
    },
    link: "https://github.com/fatkhurrhn/personal-website-v4",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description: `My personal portfolio website, forked from chanhdai.com and fully customized with my own design, content, and features.
- Rebuilt the content layer with my own profile, experience, education, and social links
- Added a live projects section powered by the GitHub API
- Integrated a blog feed, a floating AI chat widget, and a responsive mobile sidebar
- Refined the UI with custom branding, dark/light logos, and smoother animations`,
  },
]

function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      {/* Only the title is the trigger (accordion pattern); its overlay keeps
          the whole row clickable, while the project link sits above it. */}
      <div className="relative flex items-center hover:bg-accent-muted">
        <IconTile className="mx-4">{project.icon ?? <BoxIcon />}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              <CollapsibleTrigger className="text-left">
                <span className="absolute inset-0" aria-hidden />
                {project.title}
              </CollapsibleTrigger>
            </h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <InfinityIcon
                        className="size-4.5 translate-y-[0.5px]"
                        aria-label="Present"
                      />
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>

          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                  aria-label="Open project"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                </a>
              }
            />
            <TooltipContent>
              <p>Open project</p>
            </TooltipContent>
          </Tooltip>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <div className="typeset typeset-description">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({FEATURED_PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div>
        {FEATURED_PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          All projects
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}