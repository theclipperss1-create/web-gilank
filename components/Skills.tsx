"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Server, Database, Cloud, Terminal, Smartphone } from "lucide-react"
import portfolioData from "@/data/portfolio.json"

const iconMap: Record<string, React.ReactNode> = {
    "Frontend": <Layout className="h-6 w-6" />,
    "Backend": <Server className="h-6 w-6" />,
    "DevOps": <Cloud className="h-6 w-6" />,
    "Mobile": <Smartphone className="h-6 w-6" />,
    "Database": <Database className="h-6 w-6" />,
    "Tools": <Terminal className="h-6 w-6" />,
}

export function Skills() {
    const { skills } = portfolioData

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    }

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Proficiency</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        A comprehensive overview of the technologies and tools I use to bring ideas to life.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        {iconMap[skillGroup.name] || <Terminal className="h-6 w-6" />}
                                    </div>
                                    <CardTitle className="text-xl">{skillGroup.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-md text-sm font-medium bg-secondary text-secondary-foreground border border-transparent hover:border-primary/20 hover:text-primary transition-colors cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
