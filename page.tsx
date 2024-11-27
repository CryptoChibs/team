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

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A40] text-[#F5F1E6] font-mono">
      {/* Navigation */}
      <motion.nav 
        className="w-full py-6 px-6 bg-black/20 backdrop-blur-md sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/placeholder.svg"
                alt="Collab.Land Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight">Collab.Land</span>
          </Link>
          
          <div className="flex items-center gap-8">
            {['Admins', 'Resources', 'Socials'].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-1 cursor-pointer hover:text-[#FFC700] transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-lg">{item}</span>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Core Team Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-[#FFC700] text-center tracking-tight">Our Core Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-xl border-2 border-[#3A3A80] overflow-hidden relative group"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Image
                    src="/placeholder.svg"
                    alt={`Core Team Member ${i + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <span className="text-[#F5F1E6] text-xl font-semibold">Core Team Member {i + 1}</span>
                  </div>
                </motion.div>
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
            <h2 className="text-5xl font-bold mb-12 text-[#FFC700] text-center tracking-tight">Our Partners</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {[
                  "MetaMask",
                  "Lit",
                  "Pimlico",
                  "Axie Infinity",
                  "NBA Top Shot",
                  "and more",
                ].map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <motion.div
                        className="aspect-square bg-gradient-to-br from-[#2A2A60] to-[#3A3A80] rounded-xl flex items-center justify-center p-6 shadow-lg group"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <span className="text-[#F5F1E6] text-2xl font-bold text-center transition-colors duration-200 group-hover:text-[#FFC700]">{partner}</span>
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
            <h2 className="text-5xl font-bold mb-12 text-[#FFC700] text-center tracking-tight">
              Backed by the best
            </h2>
            <div className="flex flex-col items-center gap-15">
              {["Superscrypt", "DISTRIBUTED GLOBAL", "Road Capital", "Lemniscap"].map(
                (investor, i) => (
                  <motion.div
                    key={i}
                    className="h-20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <span className="text-[2.5rem] font-bold text-[#F5F1E6]">
                      {investor}
                    </span>
                  </motion.div>
                )
              )}
            </div>
            <p className="text-center mt-8 text-lg text-[#F5F1E6]/80">
              along with a distinguished list of angels
            </p>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex gap-8 mb-4 md:mb-0">
            <Link href="/privacy" className="text-[#F5F1E6] hover:text-[#FFC700] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#F5F1E6] hover:text-[#FFC700] transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <motion.a href="#" whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} className="text-[#F5F1E6] hover:text-[#FFC700] transition-colors">
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} className="text-[#F5F1E6] hover:text-[#FFC700] transition-colors">
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} className="text-[#F5F1E6] hover:text-[#FFC700] transition-colors">
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </div>
          <div className="text-[#F5F1E6] text-sm">
            © 2024 Collab.Land. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

