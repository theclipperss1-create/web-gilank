"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/micro-interactions";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send to your backend or email service
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (_error) {
      toast.error("Failed to send message", {
        description: "Please try again later or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn className={cn("w-full max-w-2xl", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/70 text-sm">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={cn(
                "bg-white/[0.02] border-white/10",
                "text-white placeholder:text-white/30",
                "focus:border-white/20 focus:ring-1 focus:ring-white/20"
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/70 text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={cn(
                "bg-white/[0.02] border-white/10",
                "text-white placeholder:text-white/30",
                "focus:border-white/20 focus:ring-1 focus:ring-white/20"
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-white/70 text-sm">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            required
            className={cn(
              "bg-white/[0.02] border-white/10",
              "text-white placeholder:text-white/30",
              "focus:border-white/20 focus:ring-1 focus:ring-white/20"
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white/70 text-sm">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            required
            className={cn(
              "bg-white/[0.02] border-white/10",
              "text-white placeholder:text-white/30",
              "focus:border-white/20 focus:ring-1 focus:ring-white/20",
              "resize-none"
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full sm:w-auto px-8 py-6 rounded-full",
            "bg-white text-black font-medium",
            "transition-all duration-300",
            "hover:bg-white/90 hover:scale-105",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </FadeIn>
  );
}
