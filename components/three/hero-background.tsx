"use client"

import { Suspense, useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Spline to avoid SSR issues - only load on desktop
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
})

// Lightweight fallback background for mobile and loading state
function SplineFallback() {
  return (
    <div className="absolute inset-0 bg-[#0a0a0f] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a15] to-[#0a0a0f]" />
      
      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00f0ff" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ff0080]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
    </div>
  )
}

export default function HeroBackground() {
  const [isMobile, setIsMobile] = useState(true) // Default to mobile (lighter)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if device is mobile or has low performance
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 1024 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Always show fallback on mobile for performance
  if (!mounted || isMobile) {
    return <SplineFallback />
  }

  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<SplineFallback />}>
        <Spline scene="https://prod.spline.design/a38eafa0-2fa5-4630-983f-6940475adf5e/scene.splinecode" />
      </Suspense>
    </div>
  )
}
