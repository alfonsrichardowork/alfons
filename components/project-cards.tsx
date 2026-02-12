'use client'

import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ProjectCardProps } from '@/lib/allWebsite'
import Link from 'next/link'
import { InteractiveHoverButton } from './ui/interactive-hover-button'



export function ProjectCard({ title, logo, description, url, status, image, tags }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border shadow-[#7928ca] bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-[#0070f3] hover:-translate-y-1">
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="relative h-56 overflow-hidden bg-secondary/50">
                <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={500}
                height={500}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="space-y-5 p-7">
                <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center justify-center gap-4">
                        <Image
                            src={logo || "/placeholder.svg"}
                            alt={title}
                            width={500}
                            height={500}
                            className="max-h-12 w-fit object-contain transition-transform duration-300"
                        />
                        <div className='text-foreground font-bold'>{title}</div>
                    </div>
                    <Badge
                    variant={status === 'production' ? 'default' : 'secondary'}
                    className={`font-semibold text-xs px-3 py-1 ${status === 'production' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-blue-500/20 text-blue-700 dark:text-blue-400'}`}
                    >
                    {status === 'production' ? '✓ Live' : '◉ Dev'}
                    </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="border-border/70 text-xs font-medium bg-secondary/40 hover:bg-secondary/60 transition-colors">
                    {tag}
                    </Badge>
                ))}
                </div>

                <InteractiveHoverButton>
                    <div 
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-foreground group-hover:text-background">
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                    </div>
                </InteractiveHoverButton>
            </div>
        </Link>
    </div>
  )
}
