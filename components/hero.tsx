import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    const getExperienceLabel = () => {
        const start = new Date("2023-11-06")
        const now = new Date()

        let years = now.getFullYear() - start.getFullYear()

        const hasReachedAnniversary =
            now.getMonth() > start.getMonth() ||
            (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())

        if (!hasReachedAnniversary) {
            years -= 1
        }

        if (years <= 0) return "less than 1 year"

        const isExactAnniversary =
            now.getMonth() === start.getMonth() && now.getDate() === start.getDate()

        return isExactAnniversary ? `${years} years` : `${years}+ years`
    }

    const experienceYear = getExperienceLabel()

    return (
        <section id="about" className="min-h-screen w-full bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
                <div className="max-w-3xl relative">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8 text-white">
                        Hi, I&apos;m <span className="text-zinc-200">Alfons</span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl text-white">
                        I&apos;m a full-stack web developer with{" "}
                        <span className="text-zinc-400 font-semibold">{experienceYear} of hands-on</span>{" "}
                        experience building and shipping production-ready web applications. I specialize in creating responsive, high-performance, and user-focused websites using{" "}
                        <span className="text-zinc-400 font-semibold">Next.js</span>,{" "}
                        <span className="text-zinc-400 font-semibold">React</span>,{" "}
                        <span className="text-zinc-400 font-semibold">TypeScript</span> and{" "}
                        <span className="text-zinc-400 font-semibold">Prisma</span>.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            asChild
                            className="gap-2"
                        >
                            <a href="#work">
                                View My Work
                                <ArrowDown className="w-5 h-5" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="secondary"
                            asChild
                            className="gap-2"
                        >
                            <Link href="/pdf/Resume-Alfons.pdf" target="_blank" rel="noopener noreferrer">
                                Download Resume
                                <FileText className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
