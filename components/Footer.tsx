"use client"

import portfolioData from "@/data/portfolio.json"

export function Footer() {
    const { personal } = portfolioData
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 border-t border-border/40 bg-background text-muted-foreground text-sm">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {currentYear} {personal.name}. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
