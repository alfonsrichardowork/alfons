"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon, Send } from "lucide-react"
import { sendEmail } from "@/lib/utils"
import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"

export type FormData = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendEmail(formData)
      toast.success("Thank you for reaching out. I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let&apos;s connect
          </h2>
          <p className="md:text-lg text-sm text-muted-foreground text-balance">
            Have a question or want to collaborate? Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-xl p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Your name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={loading}
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={loading}
                  className="text-black"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or inquiry..."
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                disabled={loading}
                className="text-black"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full hover:cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="animate-spin">
                    <Loader2Icon className="w-4 h-4" />
                  </div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <Link
            href="https://www.linkedin.com/in/alfonsrichardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer p-3 rounded-full border border-border hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Image
              src="/images/linkedin-black-icon.png"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
