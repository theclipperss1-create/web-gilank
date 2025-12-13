"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import portfolioData from "@/data/portfolio.json"

export function Projects() {
    const { projects } = portfolioData

    return (
        <section id="projects" className="py-24 relative bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-muted-foreground text-lg"
                        >
                            A selection of my best work.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Button variant="outline" asChild>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                View All Projects <Github className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                                <div className="h-48 bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-500">
                                    {/* Abstract pattern placeholder for project image */}
                                    <div className="absolute inset-0 opacity-20 flex items-center justify-center text-9xl font-bold text-muted-foreground select-none group-hover:scale-110 transition-transform duration-500">
                                        {index + 1}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="gap-4">
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                    <Button variant="default" size="sm" className="w-full" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
