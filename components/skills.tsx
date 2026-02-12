"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity"
import { DotPattern } from "./ui/dot-pattern"
import { cn } from "@/lib/utils"
import { useRef } from "react"

const skills = [
  {
    icon: '/images/nodejs-icon.png',
    title: "Node.js",
    description: "Building backend systems with Node.js, including REST APIs, authentication, business logic, and database integrations.",
  },
  {
    icon: '/images/nextjs-icon.png',
    title: "Next.js",
    description: "Developing full-stack applications using the App Router, Server Components, and Server Actions.",
  },
  {
    icon: '/images/react-icon.png',
    title: "React",
    description: "Creating reusable components, using hooks, and managing state in real-world applications.",
  },
  {
    icon: '/images/tailwind-icon.png',
    title: "Tailwind",
    description: "Styling responsive and consistent user interfaces with a utility-first CSS approach.",
  },
  {
    icon: '/images/typescript-icon.png',
    title: "TypeScript",
    description: "Writing type-safe code with interfaces, generics, and strong typing across the stack.",
  },
  {
    icon: '/images/prisma-icon.png',
    title: "Prisma",
    description: "Managing database schemas, migrations, and type-safe queries using Prisma ORM.",
  },
  // {
  //   icon: '/images/mysql-icon.png',
  //   title: "MySQL",
  //   description: "Designing relational schemas, writing optimized queries, and handling structured data.",
  // },
  // {
  //   icon: '/images/backend-icon.png',
  //   title: "Backend",
  //   description: "Building APIs, handling authentication, and integrating databases and services.",
  // },
  {
    icon: '/images/performance-icon.png',
    title: "Performance",
    description: "Improving speed and Core Web Vitals using SSR, SSG, ISR, and optimized images with next/image and modern image format.",
  },
  {
    icon: '/images/seo-icon.png',
    title: "SEO",
    description: "Implementing technical SEO with generateMetadata, JSON-LD, sitemap, robots, and App Router best practices.",
  },
  {
    icon: '/images/responsive-icon.png',
    title: "Responsive Design",
    description: "Creating mobile-first, accessible, and responsive layouts for all devices.",
  },
]

export function Skills() {
  
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const mobileSkillsY = useTransform(scrollYProgress, [0, 1], [500, -500])
  const desktopSkillsY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const titleY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="skills" className="pt-20 bg-foreground" ref={containerRef}>
      <div className="px-0 sm:px-6 lg:px-8">
      <div className="bg-foreground relative flex w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern
          className={cn(
            "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ y: titleY }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Skills</h2>
          {/* <p className="text-lg text-muted-foreground text-balance">
            {"A comprehensive toolkit for building modern web applications"}
          </p> */}
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ y: desktopSkillsY }}
          className="relative  w-full flex-col items-center justify-center overflow-hidden py-8 md:flex hidden"
        >
          <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
              {skills.slice(0, 4).map((skill, idx) => (
                <div key={idx} className="px-4">
                <Card className="h-full md:py-4 py-2">
                  <CardContent className="p-4 h-full flex items-center">
                    <div className="flex items-center gap-4">
                      <div className="md:w-24 w-20">
                      <Image alt={`icon ${skill.title}`} src={skill.icon} width={100} height={100} className="w-full h-full" />
                      </div>
                      <div className="block">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{skill.title}</h3>
                        </div>
                        <div className="block max-w-2xs whitespace-normal">
                          <p className="block w-full text-sm line-clamp-3 whitespace-normal wrap-break-word">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </div>
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
              {skills.slice(5, skills.length).map((skill, idx) => (
                <div key={idx} className="px-4">
                <Card className="h-full md:py-4 py-2" key={idx}>
                  <CardContent className="p-4 h-full flex items-center">
                    <div className="flex items-center gap-4">
                      <div className="md:w-24 w-20">
                      <Image alt={`icon ${skill.title}`} src={skill.icon} width={100} height={100} className="w-full h-full" />
                      </div>
                      <div className="block">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{skill.title}</h3>
                        </div>
                        <div className="block max-w-2xs whitespace-normal">
                          <p className="block w-full text-sm line-clamp-3 whitespace-normal wrap-break-word">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </motion.div>
          <div className="from-foreground pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r md:block hidden"></div>
          <div className="from-foreground pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l md:block hidden"></div>


          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4" style={{ y: mobileSkillsY }}>
            {skills.map((skill, index) => (
              <div key={index} className="sm:px-0 px-4">
                <Card className="h-full py-2">
                  <CardContent className="p-4 h-full flex items-center">
                    <div className="flex items-center gap-4">
                      <div className="md:w-24 w-20">
                      <Image alt={`icon ${skill.title}`} src={skill.icon} width={100} height={100} className="w-full h-full" />
                      </div>
                      <div className="block">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{skill.title}</h3>
                        </div>
                        <div className="block max-w-2xs whitespace-normal">
                          <p className="block w-full text-sm line-clamp-3 whitespace-normal wrap-break-word">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
        </motion.div>
      </div>
      </div>
    </section>
  )
}
