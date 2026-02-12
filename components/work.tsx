'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { allBrands } from '@/lib/allWebsite'
import { ProjectCard } from './project-cards'

export function AllWorks() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const sectionY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const headingY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const gridY = useTransform(scrollYProgress, [0, 1], [200, 0])

  return (
    <div className="bg-foreground from-foreground bg-linear-to-b to-background">
      <motion.section
        ref={containerRef}
        id="work"
        className="relative py-4 sm:py-6 lg:py-8 container mx-auto"
        style={{ y: gridY }}
      >
        <div className=" overflow-hidden rounded-t-3xl bg-background space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <motion.h2
              style={{ y: headingY }}
              className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground text-center"
            >
              Projects
            </motion.h2>
          </div>

          <motion.div
            style={{ y: sectionY }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {allBrands.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>
    </motion.section>
      </div>
  )
}