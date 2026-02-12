export interface ProjectCardProps {
  title: string
  logo: string
  description: string
  url: string
  status: 'production' | 'development'
  image: string
  tags: string[]
}


export const allBrands : ProjectCardProps[] = [
  {
    title: "SB Acoustics",
    logo: "/images/logo-sba.png",
    description: "",
    url: "https://webdemosbe.xyz",
    status: "development",
    image: "/images/placeholder-sba.png",
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  },
  {
    title: "ACR Speaker",
    logo: "/images/favicon-acr.ico",
    description: "",
    url: "https://acrspeaker.com",
    status: "production",
    image: "/images/placeholder-acr.png",
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  },
  {
    title: "Legacy Speaker",
    logo: "/images/favicon-legacy.ico",
    description: "",
    url: "https://legacy.us.com",
    status: "production",
    image: "/images/placeholder-legacy.png",
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  },
  {
    title: "Roadmaster",
    logo: "/images/favicon-roadmaster.ico",
    description: "",
    url: "https://roadmaster.webdemosbe.xyz",
    status: "development",
    image: "/images/placeholder-roadmaster.png",
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  }
]
