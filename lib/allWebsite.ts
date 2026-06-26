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
    image: "/images/placeholder-sba.webp",
    tags: ['Next.js', 'Node.js', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  },
  {
    title: "ACR Speaker",
    logo: "/images/favicon-acr.ico",
    description: "",
    url: "https://acrspeaker.com",
    status: "production",
    image: "/images/placeholder-acr.webp",
    tags: ['Next.js', 'Node.js', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL', 'Internationalization']
  },
  {
    title: "Legacy Speaker",
    logo: "/images/favicon-legacy.ico",
    description: "",
    url: "https://legacy.us.com",
    status: "production",
    image: "/images/placeholder-legacy.webp",
    tags: ['Next.js', 'Node.js', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL']
  },
  {
    title: "Roadmaster Speaker",
    logo: "/images/logo_only_roadmaster_black.webp",
    description: "",
    url: "https://roadmasterspeakers.com",
    status: "production",
    image: "/images/placeholder-roadmaster-new.webp",
    tags: ['Next.js', 'Node.js', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL', 'Internationalization']
  },
  {
    title: "Fidelity Pro Audio",
    logo: "/images/logo_fidelity_black.webp",
    description: "",
    url: "https://fidelity.webdemosbe.xyz/",
    status: "development",
    image: "/images/placeholder-fidelity.webp",
    tags: ['Next.js', 'Node.js', 'Tailwind', 'Typescript', 'Express', 'Prisma', 'MySQL', 'Internationalization']
  },
]
