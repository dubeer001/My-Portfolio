"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Server, Globe, Bot, GitBranch } from "lucide-react"

export default function Skills() {
  const technicalSkills = [
    { name: "HTML/CSS", progress: 95 },
    { name: "JavaScript", progress: 90 },
    { name: "React.js", progress: 85 },
    { name: "Node.js", progress: 80 },
    { name: "MongoDB", progress: 75 },
    { name: "Express.js", progress: 80 },
    { name: "TypeScript", progress: 70 },
    { name: "Next.js", progress: 75 },
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Database",
      icon: <Database />,
      skills: ["MongoDB", "Airtable"],
    },
    {
      title: "AI & Automation",
      icon: <Bot />,
      skills: ["n8n Workflows", "Ollama (Local LLMs)", "Gmail API", "Airtable API"],
    },
    {
      title: "Web Technologies",
      icon: <Globe />,
      skills: ["Responsive Design", "Mobile-First Layouts", "Basic SEO", "Web3Forms"],
    },
    {
      title: "Tools & Deployment",
      icon: <GitBranch />,
      skills: ["Git", "GitHub", "Vercel", "Photoshop", "Illustrator"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-2 flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
