"use client"

import { useState } from "react"
import { MessageCircleIcon, SendIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ChatMessage = {
  id: number
  role: "user" | "assistant"
  content: string
}

export function SiteBottomNav() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi! Ask me anything about my work, projects, or experience.",
    },
  ])

  async function handleSend() {
    const text = input.trim()
    if (!text) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Placeholder: sambungkan ke AI/API kamu di sini.
    // Contoh:
    // const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: text }) })
    // const data = await res.json()
    // setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content: data.reply }])

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "This is a placeholder response. Connect your AI here.",
        },
      ])
    }, 400)
  }

  return (
    <>
      {/* Tombol chat floating di kanan bawah (mobile + desktop) */}
      <Button
        size="icon"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0))] z-50 size-12 rounded-full shadow-lg"
      >
        {open ? (
          <XIcon className="size-5" />
        ) : (
          <MessageCircleIcon className="size-5" />
        )}
      </Button>

      {/* Panel chat di kanan bawah */}
      {open && (
        <div className="fixed right-4 bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0)+3.5rem)] z-50 flex h-[min(70svh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="text-sm font-medium">Chat</span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <XIcon className="size-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-foreground text-background"
                    : "bg-accent-muted text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-line p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend()
              }}
              placeholder="Type a message…"
              className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground dark:bg-input/30"
            />
            <Button
              size="icon-sm"
              aria-label="Send"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <SendIcon className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}