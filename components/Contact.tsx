"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"
import portfolioData from "@/data/portfolio.json"

export function Contact() {
    const { personal } = portfolioData

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-muted-foreground text-lg max-w-xl mx-auto"
                        >
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 bg-gradient-to-br from-primary to-accent text-white flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                                        <p className="text-white/80 mb-8">
                                            Fill up the form or contact me directly via email or social media.
                                        </p>

                                        <div className="space-y-4">
                                            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 hover:text-white/80 transition-colors">
                                                <Mail className="h-5 w-5" />
                                                <span>{personal.email}</span>
                                            </a>
                                            <div className="flex items-center gap-3">
                                                <MessageSquare className="h-5 w-5" />
                                                <span>Open for freelance</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        {/* Social icons could go here */}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                                <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                            <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Project Inquiry" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                                            <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y" placeholder="Tell me about your project..." />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Send Message <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
