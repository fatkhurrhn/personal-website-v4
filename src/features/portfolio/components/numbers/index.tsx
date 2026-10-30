import { Panel } from "@/features/portfolio/components/panel"

const ID = "numbers"

const SOCIAL_STATS = [
  {
    label: "Instagram",
    handle: "@storythur",
    value: "80K+ followers",
    href: "https://instagram.com/storythur",
  },
  {
    label: "Instagram",
    handle: "@fatkhurrhn",
    value: "6K+ followers",
    href: "https://instagram.com/fatkhurrhn",
  },
  {
    label: "TikTok",
    handle: "@dailyquotes318",
    value: "3K+ followers",
    href: "https://tiktok.com/@dailyquotes318",
  },
  {
    label: "LinkedIn",
    handle: "fatkhurrhn",
    value: "1K+ connections",
    href: "https://www.linkedin.com/in/fatkhurrhn",
  },
]

export function Numbers() {
  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <div className="h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px" />

      <div className="flex items-center justify-center py-4">
        <h2 className="text-center text-sm/none font-medium tracking-wide text-muted-foreground uppercase">
          Where you can find me
        </h2>
      </div>

      <div className="screen-line-bottom h-px" />

      <dl className="grid gap-4 p-4">
        {SOCIAL_STATS.map((stat) => (
          <Stat key={`${stat.label}-${stat.handle}`} {...stat} />
        ))}
      </dl>
    </Panel>
  )
}

function Stat({
  label,
  handle,
  value,
  href,
}: {
  label: string
  handle: string
  value: string
  href: string
}) {
  return (
    <div className="flex items-baseline gap-2">
      <dt className="flex flex-1 items-baseline gap-2 text-sm/4 after:flex-1 after:translate-y-0.75 after:border-b after:border-dashed after:border-line">
        <span>{label}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          {handle}
        </a>
      </dt>
      <dd className="text-sm/4 font-medium tabular-nums">{value}</dd>
    </div>
  )
}