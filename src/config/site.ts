import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://fatkhurrhn.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/fatkhurrhn/personal-website-v4/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

// Thanks @shadcn-ui, @tailwindcss
export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Education",
    href: "/#education",
  },
  {
    title: "Experiences",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Certificates",
    href: "/#certificates-and-badges",
  },
   {
    title: "Timeline",
    href: "/timeline",
  },
  {
    title: "Blog",
    href: "/blog",
  },
 
  
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "fatkhurrhn/personal-website-v4"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/fatkhurrhn/personal-website-v4"

export const SPONSORSHIP_URL = "https://github.com/sponsors/fatkhurrhn"

export const UTM_PARAMS = {
  utm_source: "fatkhurrhn.dev",
}
