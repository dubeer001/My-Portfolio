"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code, Bot, PenTool, Database, Bug, LayoutGrid, RefreshCw } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with the latest technologies to provide a seamless user experience.",
      icon: <Globe className="h-10 w-10" />,
      available: true,
    },
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces built with React, Next.js, and modern CSS frameworks.",
      icon: <Code className="h-10 w-10" />,
      available: true,
    },
    {
      title: "Backend Development",
      description: "Robust server-side applications with Node.js, Express, and MongoDB for efficient data management.",
      icon: <Database className="h-10 w-10" />,
      available: true,
    },
    {
      title: "AI Automation",
      description: "n8n workflows with local AI (Ollama) for email replies, inventory updates and other repetitive tasks.",
      icon: <Bot className="h-10 w-10" />,
      available: true,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create engaging digital experiences.",
      icon: <PenTool className="h-10 w-10" />,
      available: true,
    },
    {
      title: "Bug Fixing",
      description: "Identification and resolution of issues in existing web applications to improve performance.",
      icon: <Bug className="h-10 w-10" />,
      available: true,
    },
    {
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
      icon: <LayoutGrid className="h-10 w-10" />,
      available: true,
    },
    {
      title: "Website Redesign",
      description: "Modernization of outdated websites with fresh designs and improved functionality.",
      icon: <RefreshCw className="h-10 w-10" />,
      available: true,
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group">
                {service.available && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Available
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
