"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { sendEmail } from "@/lib/utils"
export type FormData = {
  name: string
  email: string
  message: string
}
import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"

export function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const sectionY = useTransform(scrollYProgress, [0, 1], [600, -600])

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
      toast.success("Thank you for reaching out. I'll get back to you soon.",
      )
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0 bg-[url('/images/bg-footer.png')] bg-cover bg-top-left pointer-events-none" 
            style={{ y: sectionY }}/>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            {`Let's connect`}
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-xl mx-auto">
            {`Have a question or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="bg-secondary/50 border-border hover:border-muted-foreground focus:border-primary transition-colors"
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
                    className="bg-secondary/50 border-border hover:border-muted-foreground focus:border-primary transition-colors"
                  />
                </div>
              </div>

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
                  className="bg-secondary/50 border-border hover:border-muted-foreground focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-8"
              >
                {loading ? (
                  <>
                    <div className="animate-spin">
                      <Send className="w-4 h-4" />
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
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-8 mt-16"
        >
          <Link
            href="https://www.linkedin.com/in/alfonsrichardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary bg-secondary hover:bg-secondary transition-all duration-200 group"
            aria-label="LinkedIn"
          >
            <Image
              src={'/images/linkedin-black-icon.png'}
              alt="LinkedIn Icon"
              width={24}
              height={24}
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
