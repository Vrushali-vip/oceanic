
"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="contact"
    style={{
        background: "rgba(30,41,59,0.5)", // darker translucent background for light mode
      }} className="py-24  dark:bg-black-950 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-white dark:text-white mb-8">
              We're here to answer your questions and discuss your maritime needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start card-prominent dark:card-prominent-dark p-4">
                <Mail className="h-6 w-6 mr-4 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">admin@oceanicadvisors.org</p>
                </div>
              </div>

              <div className="flex items-start card-prominent dark:card-prominent-dark p-4">
                <Phone className="h-6 w-6 mr-4 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+97 1507502353</p>
                </div>
              </div>

              <div className="flex items-start card-prominent dark:card-prominent-dark p-4">
                <MapPin className="h-6 w-6 mr-4 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">Westbury Tower 1, Businessbay,<br />Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit}>
              <div className="bg-white dark:bg-black-800 rounded-2xl shadow-xl p-8 border-l-8 border-orange-500">
                <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">We'll get back to you as soon as possible.</p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-black-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-black-900"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-black-900"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "success" && <p className="text-green-500 mt-2">Message sent!</p>}
                  {status === "error" && <p className="text-red-500 mt-2">Something went wrong.</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
