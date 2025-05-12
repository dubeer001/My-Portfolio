"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Dubeer ul Hassan</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Web Developer | BCS Student | Freelancer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I am a passionate BCS student and aspiring web developer focused on building user-friendly and responsive
              web applications. I am committed to continuous learning and growth in the field of software development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download size={18} />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="#contact">
                  <Send size={18} />
                  Hire Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <div className="w-full h-full rounded-full overflow-hidden p-2">
                <Image
                  src="/images/profile.jpg"
                  alt="Dubeer ul Hassan"
                  width={400}
                  height={400}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
