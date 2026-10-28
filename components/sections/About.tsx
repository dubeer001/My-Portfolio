"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Me Better</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about.jpg"
              alt="Dubeer ul Hassan"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Dubeer ul Hassan</span>, a MERN Stack Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I have a Bachelor's degree in Computer Science from SZABIST Islamabad (2025) and worked as a MERN Stack
              Developer at Diligent Technologies, Islamabad. I build responsive websites and full-stack web apps with
              React.js, Node.js, Express.js and MongoDB.
            </p>
            <p className="text-muted-foreground mb-6">
              I also build AI automation workflows with n8n and locally run Ollama models, such as an email support
              agent and a chat-based inventory manager, to help small businesses save time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Dubeer ul Hassan</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">hdubeer@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">Satellite Town, Rawalpindi, Pakistan</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Freelance Available</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
