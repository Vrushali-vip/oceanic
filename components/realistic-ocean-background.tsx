
"use client"

import { useRef } from "react"

export default function RealisticOceanBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-20 transition-transform duration-100"
      aria-hidden="true"
    >
      <source src="/hero-video.webm" type="video/webm" />
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  )
}
