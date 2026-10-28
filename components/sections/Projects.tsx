"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Loader2 } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    id: "1",
    title: "Edusity University Website",
    description:
      "A responsive university website with a sticky navbar, image gallery, testimonials slider, video section and a working contact form.",
    image: "/images/edusity.jpg",
    category: "frontend",
    technologies: ["React.js", "CSS3", "React Scroll", "Web3Forms"],
    githubUrl: "https://github.com/dubeer001/Edusity",
    liveUrl: "https://edusity-six-rust.vercel.app",
  },
  {
    id: "2",
    title: "Medical Billing Management Tool",
    description:
      "A full-stack billing app for clinics with role-based login, claims management, insurance tracking, invoices, document upload and a reports dashboard.",
    image: "/images/medical-billing.svg",
    category: "fullstack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/dubeer001/medical-billing-",
    liveUrl: "",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "This website: a responsive portfolio with smooth animations and a dark mode, built to present my skills and projects.",
    image: "/images/portfolio.jpg",
    category: "frontend",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/dubeer001/My-Portfolio",
    liveUrl: "https://my-portfolio-chi-ten-57.vercel.app",
  },
  {
    id: "4",
    title: "NewsMonkey News App",
    description:
      "A React news app that loads the latest headlines by category from NewsAPI, with infinite scrolling and a top loading bar.",
    image: "/images/newsmonkey.svg",
    category: "frontend",
    technologies: ["React.js", "React Router", "NewsAPI", "Infinite Scroll"],
    githubUrl: "https://github.com/dubeer001/newsMonkey",
    liveUrl: "",
  },
  {
    id: "5",
    title: "AI Email Support Agent",
    description:
      "An n8n workflow that reads new Gmail messages, sorts them with a local AI model, drafts accurate replies and sends them in the same thread.",
    image: "/images/email-agent.svg",
    category: "automation",
    technologies: ["n8n", "Ollama", "Gmail API"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "6",
    title: "AI Inventory Manager",
    description:
      "Update stock with a chat or voice command like \"Update Brown Rice to 30 kg\". Ollama understands it, n8n handles the logic and Airtable saves it.",
    image: "/images/inventory.svg",
    category: "automation",
    technologies: ["n8n", "Ollama", "Airtable"],
    githubUrl: "",
    liveUrl: "",
  },
]

export default function Projects() {
  const projects = projectsData
  const loading = false
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveTab("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveTab("fullstack")}>
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="automation" onClick={() => setActiveTab("automation")}>
                AI Automation
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="frontend" className="mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="automation" className="mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="fullstack" className="mt-8">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {(project.githubUrl || project.liveUrl) && (
          <CardFooter className="p-6 pt-0 flex gap-4">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </Link>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
