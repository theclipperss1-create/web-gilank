"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Globe, Zap } from "lucide-react"

export function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    }

    const stats = [
        { icon: <Code className="h-5 w-5" />, label: "Years Experience", value: "2+" },
        { icon: <Zap className="h-5 w-5" />, label: "Projects Completed", value: "17+" },
        { icon: <Coffee className="h-5 w-5" />, label: "Coffee Consumed", value: "∞" },
        { icon: <Globe className="h-5 w-5" />, label: "Happy Clients", value: "10+" },
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight">
                            Crafting Digital Experiences <br />
                            <span className="text-primary">With Passion & Precision</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                            I'm a passionate Full Stack Developer with a keen eye for design and a love for clean code.
                            My journey started 3 years ago when I built my first website, and I haven't stopped learning since.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                            I specialize in building scalable web applications using the latest technologies like Next.js, React, and Node.js.
                            I believe that a great product is not just about the code, but also about the user experience and the value it brings to the users.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                                    <div className="text-primary bg-primary/10 p-2 rounded-md">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl rotate-6 opacity-30 blur-lg" />
                            <div className="absolute inset-0 bg-card border border-border rounded-2xl flex items-center justify-center p-8 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="relative z-10 text-center">
                                    <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Code className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
                                    <p className="text-muted-foreground">Always exploring the latest tools and frameworks to deliver the best solutions.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
