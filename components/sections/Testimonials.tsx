"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "John delivered an exceptional website for our company. His attention to detail and ability to translate our vision into a functional website was impressive. He was communicative throughout the process and delivered on time.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Startup Founder",
      company: "InnovateLab",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Working with John was a pleasure. He understood our startup's needs and created a website that perfectly represents our brand. His technical skills and design sense are top-notch.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "StyleShop",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "John revamped our online store and the results have been fantastic. Our sales increased by 30% since the redesign. He's responsive, professional, and delivers quality work.",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Non-profit Director",
      company: "Community First",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "John created a beautiful website for our non-profit organization within our limited budget. He was patient with our requests and provided excellent guidance throughout the process.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()

  const itemsPerView = isMobile ? 1 : 2
  const totalSlides = Math.ceil(testimonials.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView,
  )

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-primary">
                        <Quote size={24} />
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
