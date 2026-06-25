import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { AllWorks } from "@/components/work"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import Chat from "@/components/chatbot";
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotPattern
          className={cn(
            "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      {/* <ScrollProgress className="h-1.5 z-100" /> */}
      <Header />
      {/* <Chat/> */}
      <main className="text-background">
        <Hero />
        <Skills />
        <AllWorks />
        <div className="relative z-10">
          <Contact />
        </div>
      </main>
    </div>
  )
}
