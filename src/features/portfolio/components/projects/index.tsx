import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ChanhDaiMark } from "@/components/chanhdai-mark"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import type { Project } from "@/features/portfolio/types/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"

const FEATURED_PROJECTS: Project[] = [
  {
    id: "personal-website-v4",
    title: "personal-website-v4",
    period: {
      start: "2026",
    },
    link: "https://github.com/fatkhurrhn/personal-website-v4",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description: `My personal portfolio website, forked from chanhdai.com and fully customized with my own design, content, and features.
- Rebuilt the content layer with my own profile, experience, education, and social links
- Added a live projects section powered by the GitHub API
- Integrated a blog feed, a floating AI chat widget, and a responsive mobile sidebar
- Refined the UI with custom branding, dark/light logos, and smoother animations`,
    icon: <ChanhDaiMark />,
    isExpanded: true,
  },
  {
    id: "nekora",
    title: "Nekora",
    period: {
      start: "2026",
    },
    link: "https://github.com/fatkhurrhn/nekora-apk",
    skills: ["Flutter", "Firebase", "Mobile App", "Social Media"],
    description: `Nekora is a social media platform built for cat lovers — a cozy space to share photos, videos, and everyday moments of your furry friends.
- Feed, profiles, and interactions designed around a community of cat enthusiasts
- Photo and video sharing with a clean, playful mobile experience
- Built with Flutter and Firebase for real-time data and authentication
- Focused on discovery: find other cats, follow their humans, and grow your circle`,
  },
  {
    id: "myduit",
    title: "MyDuit",
    period: {
      start: "2026",
    },
    link: "https://github.com/fatkhurrhn/myDuit-app",
    skills: ["Flutter", "AI", "Mobile App", "Finance"],
    description: `MyDuit is a personal finance tracker that makes managing money feel effortless.
- Track income and expenses with a clean, modern interface
- AI-powered assistance to help categorize and understand your spending
- Built with Flutter for a smooth, consistent experience across devices
- Designed for clarity: simple insights, less friction, better habits`,
  },
]

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