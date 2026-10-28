"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SZABIST Islamabad",
      duration: "2021 - 2025",
      description:
        "Completed a Bachelor's degree in Computer Science with a focus on web development. Final year project: an AI Video Creation System through Chat Interaction.",
    },
    {
      degree: "High School Diploma",
      institution: "Spring Field College",
      duration: "2018 - 2021",
      description: "Completed high school education with a focus on computer science and mathematics.",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Academic Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar size={16} />
                      <span>{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <h4 className="text-primary font-medium mb-3">{item.institution}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
