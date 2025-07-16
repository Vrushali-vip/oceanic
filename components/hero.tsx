"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { Rocket, Stars } from "lucide-react"
import RealisticOceanBackground from "./realistic-ocean-background"
import ModernOverlay from "./modern-overlay"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if WebGL2 is supported
    const testCanvas = document.createElement('canvas');
    if (!testCanvas.getContext('webgl2')) {
      console.log("WebGL2 not supported, consider a fallback.");
    }

    // Animation setup
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })

      gsap.from(".hero-description", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out",
      })

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power4.out",
      })
    }, containerRef)

    setIsLoaded(true)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoaded && <RealisticOceanBackground />}

      {isLoaded && <ModernOverlay />}

      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center">
        <div ref={containerRef} className="max-w-3xl">

          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            <span className="inline-block text-foreground px-3 py-2 rounded mb-2 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.25)" }}>
              Navigate the Future
            </span>
            <br />
            <span className="inline-block text-foreground px-3 py-2 rounded backdrop-blur-md" style={{ background: "rgba(255,255,255,0.25)" }}>
              of Maritime Logistics
            </span>
          </h1>


          <p className="hero-description text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            End-to-end technical supervision, compliance, and operational support for ship owners and managers worldwide.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <Button

              className="btn-orange-cosmic"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button
              className="btn-outline-cosmic"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Stars className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
