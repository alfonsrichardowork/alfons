"use client"

import { Briefcase, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { smoothScrollToElement } from "@/lib/scrollUtils"
import { AuroraText } from "./ui/aurora-text"
import { useEffect, useState } from "react"

export function Header() {
  const [navbarBg, setNavbarBg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
        };
        
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
    >
        <header
        className={`fixed top-0 left-0 right-0 z-100 rounded-b-3xl overflow-hidden transition-colors duration-200
        ${navbarBg ? 'text-foreground shadow-lg' : 'text-background'}`}
        >
        {/* Animated background */}
        <div
            className={`
            absolute inset-0 bg-background transition-transform duration-300 ease-out min-w-[150px]
            ${navbarBg
                ? 'scale-y-100 origin-top'
                : 'scale-y-0 origin-top'}
            `}
        />
    
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 hover:cursor-pointer hover:scale-110 ease-in-out duration-200 transition-all" onClick={() => smoothScrollToElement("about")}>
                <Briefcase className={`w-6 h-6 ${navbarBg ? 'text-foreground' : 'text-background hover:text-background'}`} />
                <span className="font-semibold text-lg"><AuroraText colors={["#C40062", "#5B21B6", "#1E40AF", "#0369A1"]}>Alfons</AuroraText> Portofolio</span>
            </div>
            <nav className={`hidden md:flex items-center gap-8`}>
                <Button
                onClick={() => smoothScrollToElement("skills")}
                variant={"ghost"}
                className={`text-sm hover:bg-transparent hover:cursor-pointer hover:scale-110 ease-in-out duration-200 transition-all ${navbarBg ? 'text-foreground' : 'text-background hover:text-background'}`}
                >
                Skills  
                </Button>
                <Button
                onClick={() => smoothScrollToElement("work")}
                variant={"ghost"}
                className={`text-sm hover:bg-transparent hover:cursor-pointer hover:scale-110 ease-in-out duration-200 transition-all ${navbarBg ? 'text-foreground' : 'text-background hover:text-background'}`}
                >
                Projects
                </Button>
            </nav>
            <Button variant={navbarBg ? 'default' : 'secondary'} size="sm" className={`min-w-[150px] hover:cursor-pointer ease-in-out duration-200 transition-all hover:scale-110`}  onClick={() => smoothScrollToElement("contact")}>
                Get in Touch
            </Button>
            </div>
        </div>
        </header>
    </motion.div>
  )
}
