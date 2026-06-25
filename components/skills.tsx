import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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
  return (
    <section id="skills" className="bg-foreground">
      <div className="h-24 bg-black from-black bg-linear-to-b to-foreground"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-balance mb-2">Skills</h2>
          {/* <h3 className="md:text-lg text-xs text-muted-foreground max-w-2xl">
            Some of my skills to build modern web applications
          </h3> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2 relative z-10">
          {skills.map((skill, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow py-2">
              <CardContent className="md:p-2 p-4 h-full flex flex-col">
                <div className="mb-2">
                  <div className="w-16 h-16 relative">
                    <Image 
                      alt={skill.title} 
                      src={skill.icon} 
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-semibold md:text-lg text-sm mb-2">{skill.title}</h3>
                <p className="md:text-sm text-xs text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}