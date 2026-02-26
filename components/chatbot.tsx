"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function Chat() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    setLoading(true)

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    })

    const data = await res.json()
    setOutput(data.message)
    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 z-50"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 z-50">

          {/* Header */}
          <div className="bg-black text-white p-3 font-medium">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {output ? (
              <div className="bg-gray-100 p-2 rounded-lg">
                {output}
              </div>
            ) : (
              <div className="text-gray-400">Ask me something...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-black text-white px-3 py-1 rounded-lg text-sm hover:opacity-80 transition"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}