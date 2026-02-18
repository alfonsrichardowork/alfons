"use client"

import { ArrowDown, File } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Meteors } from "./ui/meteors"
import { smoothScrollToElement } from "@/lib/scrollUtils"
import { useRef, useState } from "react"
import { ShimmerButton } from "./ui/shimmer-button"
import { AuroraText } from "./ui/aurora-text"

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })
    
    const headingY = useTransform(scrollYProgress, [0, 1], [300, -300])
    const descY = useTransform(scrollYProgress, [0, 1], [200, -200])
    const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50])

    
    const getExperienceLabel = () => {
        const start = new Date("2023-11-06");
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();

        const hasReachedAnniversary =
            now.getMonth() > start.getMonth() ||
            (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

        if (!hasReachedAnniversary) {
            years -= 1;
        }

        if (years <= 0) return "less than 1 year";

        const isExactAnniversary =
            now.getMonth() === start.getMonth() && now.getDate() === start.getDate();

        return isExactAnniversary ? `${years} years` : `${years}+ years`;
    };

    const [experienceyear] = useState<string>(getExperienceLabel())
    return (
<section id="about">
<div ref={containerRef} className="bg-foreground relative min-h-screen w-full overflow-hidden">
  <Meteors number={30} />
  {/* TEXT CONTENT */}
  <div className="inset-x-4 relative z-10 flex min-h-screen items-center">
    {/* <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto"> */}
        <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-52 text-white"
            style={{ y: headingY }}
        >
            {`Hi, I’m`} <AuroraText>Alfons</AuroraText>
        </motion.h1>

      {/* </div>
    </div> */}
  </div>



  {/* FRONT IMAGE (overlay) */}
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-20 bg-[url('/images/bg-hero-front.png')] bg-cover bg-center pointer-events-none" />
     
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-0 right-0 left-0 flex flex-wrap items-center justify-center gap-4 mb-12 mr-12 z-50 w-full"
        >
            <ShimmerButton className="shadow-2xl" onClick={() => smoothScrollToElement("work")}>
                <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10 flex gap-1 items-center justify-center">
                    View My Work
                    <ArrowDown className="w-5 h-5" />
                </span>
            </ShimmerButton>
            {/* </Button> */}

            <ShimmerButton 
                className="shadow-2xl"
                onClick={() => window.open('/pdf/Resume-Alfons.pdf', '_blank')}
                >
                <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10 flex gap-1 items-center justify-center">
                    Download Resume <File className="w-4 h-4" />
                </span>
            </ShimmerButton>
        </motion.div>

    {/* <div className="w-full px-4 sm:px-6 lg:px-8"> */}
      {/* <div>      */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ y: descY }}
                className="absolute top-1/2 z-50 md:w-1/2 inset-x-4 bg-foreground/60 p-2 rounded-md"
            >
                {"I’m a mid-level full-stack web engineer with "}
                <span className="text-secondary font-semibold">
                    {experienceyear!= '' && `${experienceyear} of hands-on `}
                </span>
                {"experience building and shipping production-ready web applications. I specialize in creating responsive, high-performance, and user-focused websites using "}
                <span className="text-secondary font-semibold">Next.js</span>
                {", "}
                <span className="text-secondary font-semibold">React</span>
                {", "}
                <span className="text-accent font-semibold">TypeScript</span>
                {" and "}
                <span className="text-accent font-semibold">Prisma</span>
                {"."}
            </motion.p>
        {/* </div> */}
      {/* </div> */}
    </div>
</section>
  )
}
