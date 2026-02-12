export const dynamic = "force-dynamic";

import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { AllWorks } from "@/components/work"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress className="h-1.5 z-100" />
      <Header />
      <main className="text-background">
        <Hero />
        <Skills />
        <AllWorks />
        <Contact />
      </main>
    </div>
  )
}
