import { allBrands } from '@/lib/allWebsite'
import { ProjectCard } from './project-cards'

export function AllWorks() {
  return (
    <div className="bg-gradient-to-b from-foreground to-background pt-6">
      <section
        id="work"
        className="relative pt-12 sm:pt-16 lg:pt-20 container mx-auto"
      >
        <div className="overflow-hidden rounded-t-3xl bg-background space-y-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl  font-bold tracking-tight text-foreground text-center">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allBrands.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}