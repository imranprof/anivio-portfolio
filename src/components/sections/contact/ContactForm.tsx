"use client"

import type React from "react"

import { useState } from "react"
import { FaLinkedin, FaGithub, FaXTwitter, FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Contact Form Section */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to collaborate?</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows={6}
                className="bg-background border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={submitted}
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Other ways to reach us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CiMail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:hello@studio.com" className="text-accent hover:underline">
                    hello@studio.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <FaLinkedin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a href="#" className="text-accent hover:underline">
                    linkedin.com/company/studio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Follow us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
