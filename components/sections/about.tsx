"use client"

import { useState, useEffect } from "react"
import { Code, Users, Trophy, Rocket, Target, Lightbulb, Heart, GraduationCap, Wrench, Sparkles, Megaphone, Handshake } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import ScrollReveal from "@/components/animation/scroll-reveal"
import SectionHeader from "@/components/ui/section-header"
import GlassCard from "@/components/ui/glass-card"
import AnimatedBackground from "@/components/ui/animated-background"

const stats = [
  { icon: Code, value: "50+", label: "Events" },
  { icon: Users, value: "5000+", label: "Participants" },
  { icon: Trophy, value: "₹5L+", label: "Prize Pool" },
  { icon: Rocket, value: "3", label: "Days" },
]

// Vision, Mission, Objectives data - Updated with new content
const visionMissionData = [
  {
    title: "Our Vision",
    icon: Target,
    color: "#00f0ff",
    content: "To inspire and empower every student with the mindset, skills, and confidence needed to shape a technology-driven future.",
  },
  {
    title: "Our Mission",
    icon: Lightbulb,
    color: "#ff0080",
    content: "To build a fun, inclusive, and collaborative ecosystem where students can explore emerging technologies, share knowledge and creativity, and transform ideas into meaningful innovations.",
  },
  {
    title: "Our Objectives",
    icon: Heart,
    color: "#8b5cf6",
    content: "Deliver hands-on workshops, ignite creativity through hackathons, connect students with industry via guest sessions, and work on projects that solve real-life problems.",
  },
]

// Domains data
const domainsData = [
  {
    title: "Technical",
    icon: Code,
    color: "#00f0ff",
    description: "Where logic meets innovation — coding, development, and emerging technologies.",
  },
  {
    title: "Creatives",
    icon: Sparkles,
    color: "#ff0080",
    description: "Designs that speak louder than words — visuals, content, and branding.",
  },
  {
    title: "Operations",
    icon: Wrench,
    color: "#8b5cf6",
    description: "Precision in planning, perfection in execution.",
  },
  {
    title: "Public Relations",
    icon: Megaphone,
    color: "#00f0ff",
    description: "Amplifying voices, building connections, and telling impactful stories.",
  },
  {
    title: "Sponsorship",
    icon: Handshake,
    color: "#ff0080",
    description: "Transforming partnerships into opportunities and possibilities.",
  },
]

// Fixed particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 15, top: 20 }, { left: 35, top: 45 }, { left: 55, top: 25 },
  { left: 75, top: 60 }, { left: 25, top: 75 }, { left: 65, top: 15 },
  { left: 45, top: 55 }, { left: 85, top: 40 }, { left: 20, top: 85 },
  { left: 70, top: 35 },
]

// Hero image placeholder with cyberpunk style
function CyberHeroImage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00f0ff]/10 via-[#0a0a0f] to-[#ff0080]/10">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Animated circles */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border-2 border-[#00f0ff]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00f0ff]" />
      </motion.div>

      <motion.div
        className="absolute w-64 h-64 rounded-full border border-[#ff0080]/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff0080]" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center p-8">
        <motion.div
          className="w-24 h-24 mx-auto mb-4 rounded-xl border-2 border-[#00f0ff] flex items-center justify-center"
          style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        >
          <Rocket className="w-12 h-12 text-[#00f0ff]" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">FUTURIX</h3>
        <p className="text-[#00f0ff] font-mono text-sm">PRESENTS ULTRON 9.0</p>
      </div>

      {/* Floating particles - only render after mount with fixed positions */}
      {
        mounted && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              background: i % 2 === 0 ? "#00f0ff" : "#ff0080",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              delay: i * 0.25,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            }}
          />
        ))
      }

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00f0ff]" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00f0ff]" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#ff0080]" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#ff0080]" />
    </div >
  )
}

// Interactive Card with hover flip effect
function VisionMissionCard({ item, index }: { item: typeof visionMissionData[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-72 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{
          duration: 0.7,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: `0 0 30px ${item.color}20`,
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
            style={{
              background: `linear-gradient(135deg, ${item.color}30, transparent)`,
              border: `1px solid ${item.color}50`,
            }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          >
            <item.icon className="w-8 h-8" style={{ color: item.color }} />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-white/50 text-sm">Hover to learn more</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: `0 0 30px ${item.color}30`,
          }}
        >
          <h3 className="text-lg font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
          <p className="text-white/80 text-center text-sm leading-relaxed">{item.content}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Domain Card Component
function DomainCard({ item, index }: { item: typeof domainsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard className="h-full group">
        <motion.div
          className="p-6 text-center"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
            style={{
              background: `linear-gradient(135deg, ${item.color}20, transparent)`,
              border: `1px solid ${item.color}40`,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 25px ${item.color}40`,
            }}
          >
            <item.icon className="w-7 h-7" style={{ color: item.color }} />
          </motion.div>
          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
            {item.title}
          </h4>
          <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      </GlassCard>
    </motion.div>
  )
}

// Convenor Section with real image
function ConvenorSection() {
  return (
    <ScrollReveal>
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 via-transparent to-[#ff0080]/5 rounded-3xl" />
        <GlassCard className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar with real image */}
            <motion.div
              className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#00f0ff]/50 flex-shrink-0"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 240, 255, 0.3)",
                  "0 0 40px rgba(0, 240, 255, 0.5)",
                  "0 0 20px rgba(0, 240, 255, 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image
                src="/images/convenor/kanisha.png"
                alt="Dr. Kanisha B - Convenor"
                fill
                className="object-cover"
                sizes="144px"
              />
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-[#00f0ff]/30 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00f0ff]" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Convenor&apos;s Message</h3>
              <h4 className="text-lg font-semibold text-[#00f0ff] mb-4">Dr. Kanisha B</h4>
              <p className="text-white/70 leading-relaxed text-lg italic">
                &quot;Futurix is a space where every student is encouraged to dream, experiment, and grow.
                We believe that every great journey begins with the courage to take the first step.&quot;
              </p>
              <p className="text-[#ff0080] text-sm mt-4 font-medium">
                Convenor, Futurix Association
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </ScrollReveal>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="grid" />

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="About Futurix"
          title="Student Technology Association"
          description="At Futurix, we believe the future isn't something you wait for — it's something you create."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-white/70 text-lg leading-relaxed">
                We are a vibrant student-powered tech community where imagination meets innovation.
                From brainstorming bold ideas to transforming them into impactful real-world solutions,
                Futurix encourages students to learn by doing, experiment without fear, and grow through collaboration.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Whether it&apos;s technology, creativity, or leadership, Futurix is the space where
                <span className="text-[#00f0ff] font-semibold"> ideas evolve into action</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Hackathons", "Workshops", "Competitions", "Guest Talks", "Real-World Projects"].map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-[#00f0ff]/30 text-[#00f0ff] bg-[#00f0ff]/5 cursor-default"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
                      borderColor: "rgba(0, 240, 255, 0.6)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-[#00f0ff]/20">
                <CyberHeroImage />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[#00f0ff]/20 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-[#ff0080]/10 rounded-2xl -z-20" />
            </div>
          </ScrollReveal>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Our <span className="text-[#00f0ff]">Foundation</span>
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {visionMissionData.map((item, index) => (
              <VisionMissionCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Tagline */}
        <ScrollReveal>
          <div className="text-center mb-16 py-8">
            <p className="text-xl md:text-2xl text-white/60 italic">
              At Futurix, we don&apos;t just talk about the future —
              <span className="text-[#00f0ff] font-semibold"> we build it</span>, one idea at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Our Domains */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Our <span className="text-[#ff0080]">Domains</span>
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domainsData.map((item, index) => (
              <DomainCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <GlassCard className="text-center py-8 hover-lift">
                <stat.icon className="w-10 h-10 text-[#00f0ff] mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Convenor Section */}
        <ConvenorSection />
      </div>
    </section>
  )
}
