import type { Sponsor } from "./types"

export const SPONSORS: Sponsor[] = [
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            ChatGPT
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Claude
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "DeepSeek",
    url: "https://www.deepseek.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            DeepSeek
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            GitHub
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Vercel
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "Figma",
    url: "https://www.figma.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Figma
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "Google Cloud",
    url: "https://cloud.google.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Google Cloud
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" fill="currentColor" {...props}>
          <text
            x="160"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            VS Code
          </text>
        </svg>
      )
    },
    tier: "osp",
  },
]