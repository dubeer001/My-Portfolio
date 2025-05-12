"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Loader2 } from "lucide-react"
import Link from "next/link"

// This would be fetched from your MongoDB in a real implementation
const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/images/projects/ecommerce.jpg", // Update this path
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
    image: "/images/projects/taskmanager.jpg", // Update this path
    category: "frontend",
    technologies: ["React", "Redux", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging, user authentication, and message history.",
    image: "/images/projects/chatapp.jpg", // Update this path
    category: "fullstack",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data based on location.",
    image: "/images/projects/weatherapp.jpg", // Update this path
    category: "frontend",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Blog API",
    description:
      "A RESTful API for a blog platform with authentication, post management, and commenting functionality.",
    image: "/images/projects/blogapi.jpg", // Update this path
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills with dark mode support.",
    image: "/images/projects/portfolio.jpg", // Update this path
    category: "frontend",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Simulate fetching data from API
  useEffect(() => {
    // In a real implementation, this would be an API call to your backend
    setTimeout(() => {
      setProjects(projectsData)
      setLoading(false)
    }, 1000)
  }, [])

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
              <TabsTrigger value="backend" onClick={() => setActiveTab("backend")}>
                Backend
              </TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveTab("fullstack")}>
                Full Stack
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

          <TabsContent value="backend" className="mt-8">
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
        <CardFooter className="p-6 pt-0 flex gap-4">
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
          <Button size="sm" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
