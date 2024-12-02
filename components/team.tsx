"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Github, Twitter, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Space_Mono, IBM_Plex_Sans } from "next/font/google"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A40] text-[#F5F1E6] font-mono">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-[100] shadow-lg after:absolute after:inset-0 after:shadow-[0_4px_12px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC700] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFC700]/5 to-transparent pointer-events-none" />
        <nav className="bg-[#F5F1E6] px-2 py-3 flex flex-row items-center justify-between w-full relative min-h-[48px] z-50">
          <div className="flex items-center">
            <Link href="https://collab.land" className="transform transition-transform hover:scale-105">
              {/* Desktop logo */}
              <Image
                src="/Logo-Color.png"
                alt="Collab.Land"
                width={180}
                height={36}
                className="h-8 w-auto hover:brightness-110 transition-all hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/LogoIconColor.svg"
                alt="Collab.Land"
                width={32}
                height={32}
                className="h-8 w-auto hover:brightness-110 transition-all md:hidden"
                priority
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  About <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://collab.land/overview", label: "Overview" },
                    { href: "https://collab.land/team", label: "Team" },
                    { href: "https://docs.collab.land/dao/token/token_overview", label: "$COLLAB" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Admins <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Resources <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collab.land/security", label: "Security" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Socials <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-16 mt-[calc(48px)]">
        <div className="max-w-7xl mx-auto">
          {/* Core Team Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className={`text-2xl font-bold mb-8 text-[#FFC700] text-center tracking-tight ${ibmPlexSans.className}`}>
              Our Core Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { 
                  src: "/James.png", 
                  alt: "James",
                  name: "James Young",
                  title: "Founder, CEO",
                  href: "https://x.com/jamesyoung" 
                },
                { 
                  src: "/Anjali.png", 
                  alt: "Anjali",
                  name: "Anjali Young",
                  title: "Co-Founder, CCO",
                  href: "https://www.linkedin.com/in/anjaliyoung/" 
                },
                { 
                  src: "/Alok.png", 
                  alt: "Core Team Member",
                  name: "Alok Tiwari",
                  title: "COO"
                },
                { 
                  src: "/Tom.png", 
                  alt: "Tom",
                  name: "Tom Effertz",
                  title: "Fractional CFO",
                  href: "https://www.linkedin.com/in/effertz-tom-3aa413a5/" 
                },
                { 
                  src: "/Gita.png", 
                  alt: "Gita",
                  name: "Gita Alekhya Paul",
                  title: "Senior Developer",
                  href: "https://www.linkedin.com/in/gitaalekhyapaul/" 
                },
                { 
                  src: "/Chibi.png", 
                  alt: "Chibi",
                  name: "Chibi",
                  title: "Product and Community Lead",
                  href: "https://twitter.com/cwispychibi" 
                },
                { 
                  src: "/Candi.png", 
                  alt: "Core Team Member",
                  name: "Candi/Rudem00se",
                  title: "Comms Team",
                  href: "https://x.com/rudem00se" 
                },
                { 
                  src: "/ACE.png", 
                  alt: "ACE",
                  name: "ACE",
                  title: "The Big Boss",
                  href: "https://twitter.com/collab_land_" 
                }
              ].map((member, i) => (
                member.href ? (
                  <Link 
                    key={i}
                    href={member.href}
                    target="_blank"
                    className="block"
                  >
                    <motion.div
                      className="aspect-square rounded-lg border-2 border-[#3A3A80] overflow-hidden relative group cursor-pointer"
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    >
                      <Image
                        src={member.src}
                        alt={member.alt}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                        <span className="text-[#F5F1E6] text-xl font-bold">{member.name}</span>
                        <span className="text-[#F5F1E6]/80 text-sm mt-1">{member.title}</span>
                      </div>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    key={i}
                    className="aspect-square rounded-lg border-2 border-[#3A3A80] overflow-hidden relative group"
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={240}
                      height={240}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                      <span className="text-[#F5F1E6] text-xl font-bold">{member.name}</span>
                      <span className="text-[#F5F1E6]/80 text-sm mt-1">{member.title}</span>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.section>

          {/* Partners Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className={`text-2xl font-bold mb-8 text-[#FFC700] text-center tracking-tight ${ibmPlexSans.className}`}>
              Our Partners
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {[
                  { src: "/MetaMask.png", alt: "MetaMask" },
                  { src: "/Lit.png", alt: "Lit" },
                  { src: "/pimlico.png", alt: "Pimlico" },
                  { src: "/axie.png", alt: "Axie Infinity" },
                  { src: "/topshot.png", alt: "NBA Top Shot" },
                  { text: "and more" }
                ].map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <motion.div
                        className="aspect-square bg-gradient-to-br from-[#2A2A60] to-[#3A3A80] rounded-xl flex items-center justify-center p-8 shadow-lg group"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        {partner.text ? (
                          <span className="text-[#F5F1E6] text-2xl font-bold text-center transition-colors duration-200 group-hover:text-[#FFC700]">
                            {partner.text}
                          </span>
                        ) : (
                          <Image
                            src={partner.src!}
                            alt={partner.alt!}
                            width={200}
                            height={200}
                            className="object-contain transition-all duration-200 group-hover:scale-110"
                          />
                        )}
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.section>

          {/* Investors Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className={`text-2xl font-bold mb-8 text-[#FFC700] text-center tracking-tight ${ibmPlexSans.className}`}>
              Backed by the Best
            </h2>
            <div className="flex flex-row justify-center items-center gap-16 max-w-7xl mx-auto px-4">
              {[
                { src: "/Distributed-Global.png", alt: "Distributed Global" },
                { src: "/Lemniscap.png", alt: "Lemniscap" },
                { src: "/Road-Capital.svg", alt: "Road Capital" },
                { src: "/Superscrypt.png", alt: "Superscrypt" }
              ].map((investor, i) => (
                <motion.div
                  key={i}
                  className="h-32 w-56 flex items-center justify-center"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <Image 
                    src={investor.src}
                    alt={investor.alt}
                    width={224}
                    height={128}
                    className="object-contain h-full"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-6 text-lg text-[#F5F1E6]/80">
              along with a distinguished list of angels
            </p>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFC700] py-2">
        <div className="w-full px-4">
          <div className="flex flex-row justify-between items-center max-w-[1920px] mx-auto">
            <nav className="flex space-x-4">
              <Link 
                href="https://www.collab.land/privacy-policy" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.collab.land/terms-of-service" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Terms
              </Link>
            </nav>
            
            <div className="flex items-center space-x-3">
              <Link href="https://linktr.ee/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/LinktreeIcon.svg" 
                    alt="Linktree" 
                    width={20} 
                    height={20} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
              <Link href="https://discord.gg/collabland" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/DiscordIcon.svg" 
                    alt="Discord" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75" 
                  />
                </Button>
              </Link>
              <Link href="https://x.com/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/XIcon.svg" 
                    alt="X (formerly Twitter)" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
            </div>

            <p className={`text-sm font-bold flex items-center gap-1.5 text-[#1A1A40] ${spaceMono.className}`}>
              <Image 
                src="/LogoIcon.svg" 
                alt="Collab.Land Logo" 
                width={18} 
                height={18} 
                className="inline-block"
              />
              Collab.Land® 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

