import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export type SocialProfile = {
  title: string
  handle: string
  href: string
  sameAs?: boolean
  icon: React.JSX.Element
}

export const SOCIAL = {
     cv: {
    title: "CV",
    handle: "Google Drive",
    href: "https://drive.google.com/", // ganti dengan link CV kamu
    sameAs: false,
    icon: <CvIcon />,
  },
   linkedin: {
    title: "LinkedIn",
    handle: "fatkhurrhn",
    href: "https://www.linkedin.com/in/fatkhurrhn",
    sameAs: true,
    icon: <LinkedInIcon />,
  },
    github: {
    title: "GitHub",
    handle: "fatkhurrhn",
    href: "https://github.com/fatkhurrhn",
    sameAs: true,
    icon: <GitHubIcon />,
  },
  instagram: {
    title: "Instagram",
    handle: "@storythur",
    href: "https://instagram.com/storythur",
    sameAs: true,
    icon: <InstagramIcon />,
  },

  tiktok: {
    title: "TikTok",
    handle: "@storythur",
    href: "https://tiktok.com/@storythur",
    sameAs: true,
    icon: <TikTokIcon />,
  },
  x: {
    title: "𝕏",
    handle: "@fatkhurrhn",
    href: "https://x.com/fatkhurrhn",
    sameAs: true,
    icon: <XIcon />,
  },
    threads: {
    title: "Website",
    handle: "fatkhurrhn.dev",
    href: "https://fatkhurrhn.dev",
    sameAs: true,
    icon: <ThreadsIcon />,
  },
 

} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 2C6.7 2 3 5.6 3 12s3.7 10 9.5 10c4.6 0 7.7-2.2 7.7-5.6 0-2.3-1.5-3.8-3.6-4.2.1-.7.1-1.4 0-2.1-.4-2.2-2.2-3.6-4.6-3.6-2 0-3.5 1-4.1 2.5l2 1c.3-.9 1.1-1.4 2.1-1.4 1.1 0 1.9.6 2.1 1.6.1.5.1 1 .1 1.5-2.8.2-4.9 1.5-4.9 3.8 0 2 1.6 3.3 3.9 3.3 2 0 3.6-1 4.2-2.6.4.3.7.7.9 1.2.2.6.2 1.4 0 2.1-.3 1-1.1 1.8-2.3 2.2-1 .3-2.1.5-3.3.5-4.4 0-7-2.7-7-7.9 0-5.2 2.6-7.9 7-7.9 3.7 0 6 1.7 6.6 4.8l2.1-.4C17.9 4.2 15 2 12.5 2zm-.7 13.5c-1.2 0-2-.6-2-1.5 0-1 1-1.6 2.6-1.8h.6c0 .3 0 .6-.1.9-.2 1.5-1.1 2.4-2.1 2.4z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3 0-2.5-.4-3.5-1.1v6.4c0 3.6-2.9 6.2-6.2 6.2S4 18.4 4 14.8c0-3.4 2.6-6 6-6 .3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.9 0-3.3 1.5-3.3 3.4s1.4 3.4 3.3 3.4 3.3-1.5 3.3-3.4V3h3.2z" />
    </svg>
  )
}

function CvIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </svg>
  )
}