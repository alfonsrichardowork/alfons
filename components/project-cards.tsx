import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectCardProps } from '@/lib/allWebsite'

export function ProjectCard({ title, logo, description, url, status, image, tags }: ProjectCardProps) {
  const isLive = status === 'production'
  
  return (
    <div className="block">
      <div className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors shadow-xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-secondary/30 border-b">
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={logo || '/placeholder.svg'}
                alt={title}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <Badge className={`shrink-0 ${isLive ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
              {isLive ? 'Live' : 'Dev'}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Button */}
          <Button asChild className="w-full gap-2" variant="default">
            <Link href={url} target="_blank" rel="noopener noreferrer" >
              Visit Site
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
