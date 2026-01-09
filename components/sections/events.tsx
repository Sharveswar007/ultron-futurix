"use client"

import { useRef } from "react"
import { Calendar, ExternalLink, Camera, Code, Rocket, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import ScrollReveal from "@/components/animation/scroll-reveal"
import SectionHeader from "@/components/ui/section-header"
import AnimatedBackground from "@/components/ui/animated-background"

type EventStatus = "past" | "upcoming"

interface Event {
    id: string
    title: string
    description: string
    status: EventStatus
    date: string
    year: string
    icon: React.ElementType
    color: string
    registerLink?: string
    image?: string
}

// Official Futurix Events in chronological order
const events: Event[] = [
    {
        id: "lens-lumina-2024",
        title: "Lens Lumina",
        description: "A creative, non-technical event celebrating photography, storytelling, and visual expression.",
        status: "past",
        date: "July 2024",
        year: "2024",
        icon: Camera,
        color: "#ff0080",
        image: "/images/gallery/Lens Lumina 2024.jpg",
    },
    {
        id: "tech-mesh",
        title: "Tech Mesh",
        description: "A technical battlefield where innovation met problem-solving. Participants tackled coding challenges and explored emerging technologies.",
        status: "past",
        date: "August 2024",
        year: "2024",
        icon: Code,
        color: "#00f0ff",
    },
    {
        id: "ultron-8",
        title: "Ultron 8.0",
        description: "The flagship event of Futurix — a grand fusion of technical and non-technical competitions, workshops, and engaging activities.",
        status: "past",
        date: "February 2024",
        year: "2024",
        icon: Rocket,
        color: "#8b5cf6",
        image: "/images/events/ultron-8-poster.jpg",
    },
    {
        id: "lens-lumina-2025",
        title: "Lens Lumina",
        description: "The photography event returned with more creative challenges and opportunities for visual storytelling.",
        status: "past",
        date: "January 2025",
        year: "2025",
        icon: Camera,
        color: "#ff0080",
        image: "/images/events/lens-lumina-2025-poster.jpg",
    },
    {
        id: "ultron-9",
        title: "Ultron 9.0",
        description: "The flagship event of Futurix returns bigger and better! A grand festival of technology featuring hackathons, workshops, competitions, and more.",
        status: "upcoming",
        date: "January 28-30, 2025",
        year: "2025",
        icon: Sparkles,
        color: "#00f0ff",
        registerLink: "#register",
    },
]

// Timeline Event Card Component with enhanced scroll animations
function TimelineEventCard({ event, index, isLeft }: { event: Event; index: number; isLeft: boolean }) {
    const isPast = event.status === "past"
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: "-100px" })

    // Scroll-based parallax for the card
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95])
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5])

    // Smooth spring animations
    const smoothY = useSpring(y, { stiffness: 80, damping: 25 })
    const smoothScale = useSpring(scale, { stiffness: 80, damping: 25 })

    return (
        <motion.div
            ref={cardRef}
            style={{
                opacity,
                scale: smoothScale,
                y: smoothY,
            }}
            className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
        >
            {/* Timeline dot with pulse animation */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.5 }}
                >
                    {/* Outer pulse ring */}
                    <motion.div
                        className="absolute inset-0 w-6 h-6 rounded-full"
                        style={{ backgroundColor: event.color }}
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Inner dot */}
                    <div
                        className="w-6 h-6 rounded-full border-4 border-[#0a0a0f] relative z-10"
                        style={{
                            backgroundColor: event.color,
                            boxShadow: `0 0 20px ${event.color}80`,
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Content card with 3D effect */}
            <motion.div
                className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                initial={{
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    rotateY: isLeft ? -15 : 15,
                }}
                animate={isInView ? {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                } : {}}
                transition={{
                    duration: 0.9,
                    delay: index * 0.12,
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                }}
                style={{
                    perspective: 1000,
                    rotateX,
                }}
            >
                <motion.div
                    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group"
                    whileHover={{
                        borderColor: `${event.color}50`,
                        boxShadow: `0 0 40px ${event.color}30`,
                        y: -10,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Animated gradient border */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            background: `linear-gradient(45deg, ${event.color}30, transparent, ${event.color}30)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at ${isLeft ? 'right' : 'left'} center, ${event.color}20 0%, transparent 70%)`,
                        }}
                    />

                    {/* Event Image if available */}
                    {event.image && (
                        <motion.div
                            className="relative h-48 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                initial={{ scale: 1.2 }}
                                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                                transition={{ duration: 1.2 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />

                            {/* Scan line effect on image */}
                            <motion.div
                                className="absolute inset-0 overflow-hidden pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                    animate={{ top: ["-10%", "110%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Status Badge on image */}
                            <motion.div
                                className={`absolute top-3 ${isLeft ? 'right-3' : 'left-3'}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.span
                                    className={`px-3 py-1 rounded-full text-xs font-bold ${isPast
                                        ? 'bg-black/60 text-white/80 backdrop-blur-sm'
                                        : 'bg-gradient-to-r from-[#00f0ff] to-[#ff0080] text-black'
                                        }`}
                                    animate={!isPast ? {
                                        boxShadow: [
                                            "0 0 10px rgba(0, 240, 255, 0.3)",
                                            "0 0 25px rgba(255, 0, 128, 0.5)",
                                            "0 0 10px rgba(0, 240, 255, 0.3)",
                                        ]
                                    } : {}}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                                >
                                    {isPast ? 'PAST' : 'UPCOMING'}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    )}

                    <div className="p-6 relative z-10">
                        {/* Year badge with slide-in animation */}
                        <motion.div
                            className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
                            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.div
                                className="px-3 py-1 rounded-full text-xs font-mono"
                                style={{
                                    backgroundColor: `${event.color}20`,
                                    color: event.color,
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {event.year}
                            </motion.div>
                            {!event.image && (
                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${isPast ? 'bg-white/10 text-white/60' : 'bg-gradient-to-r from-[#00f0ff] to-[#ff0080] text-black'
                                    }`}>
                                    {isPast ? 'PAST' : 'UPCOMING'}
                                </span>
                            )}
                        </motion.div>

                        {/* Icon and Title with stagger animation */}
                        <motion.div
                            className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: `linear-gradient(135deg, ${event.color}30, transparent)`,
                                    border: `1px solid ${event.color}50`,
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    boxShadow: `0 0 30px ${event.color}50`,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <event.icon className="w-6 h-6" style={{ color: event.color }} />
                            </motion.div>
                            <div className={isLeft ? 'md:text-right' : ''}>
                                <motion.h3
                                    className="text-xl font-bold text-white"
                                    whileHover={{ color: event.color }}
                                >
                                    {event.title}
                                </motion.h3>
                                <div className="flex items-center gap-2 text-white/50 text-sm">
                                    <Calendar size={14} />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Description with fade-in */}
                        <motion.p
                            className={`text-white/60 text-sm leading-relaxed mb-4 ${isLeft ? 'md:text-right' : ''}`}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            {event.description}
                        </motion.p>

                        {/* Register Button for Upcoming Events */}
                        {!isPast && event.registerLink && (
                            <motion.div
                                className={`flex ${isLeft ? 'md:justify-end' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.a
                                    href={event.registerLink}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${event.color}, ${event.color}80)`,
                                        color: '#000',
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: `0 0 40px ${event.color}60`,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Register Now
                                    <ExternalLink size={14} />
                                </motion.a>
                            </motion.div>
                        )}
                    </div>

                    {/* Bottom accent line with animation */}
                    <motion.div
                        className="h-1 w-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    />
                </motion.div>
            </motion.div>

            {/* Empty space for the other side */}
            <div className="hidden md:block w-[calc(50%-2rem)]" />
        </motion.div>
    )
}

export default function Events() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Timeline line progress
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <section id="timeline" ref={containerRef} className="py-24 px-4 relative overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground variant="grid" />

            {/* Background decoration with parallax */}
            <motion.div
                className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            />
            <motion.div
                className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
                <SectionHeader
                    subtitle="Our Journey"
                    title="Futurix Events Timeline"
                    description="From technical showdowns to creative showcases, explore our journey through the years."
                />

                {/* Timeline */}
                <div className="relative mt-16">
                    {/* Static background line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    {/* Animated progress line */}
                    <motion.div
                        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-[#00f0ff] via-[#ff0080] to-[#8b5cf6] hidden md:block origin-top"
                        style={{
                            height: lineHeight,
                            opacity: lineOpacity,
                        }}
                    />

                    {/* Glowing orb moving along the line */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white hidden md:block"
                        style={{
                            top: lineHeight,
                            boxShadow: "0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 60px #00f0ff",
                        }}
                    />

                    {/* Mobile line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/50 via-[#ff0080]/50 to-[#8b5cf6]/50 md:hidden" />

                    {/* Events */}
                    <div className="space-y-16 md:space-y-24">
                        {events.map((event, index) => (
                            <TimelineEventCard
                                key={event.id}
                                event={event}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>

                    {/* Timeline end marker */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden md:flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#ff0080]"
                            animate={{
                                boxShadow: [
                                    "0 0 10px rgba(0, 240, 255, 0.5)",
                                    "0 0 25px rgba(255, 0, 128, 0.7)",
                                    "0 0 10px rgba(0, 240, 255, 0.5)",
                                ],
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                        />
                        <motion.span
                            className="text-xs text-white/50 mt-3 font-mono tracking-wider"
                            animate={{ opacity: [0.5, 0.85, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                        >
                            PRESENT
                        </motion.span>
                    </motion.div>
                </div>

                {/* Coming Soon Teaser */}
                <ScrollReveal>
                    <motion.div
                        className="mt-24 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#ff0080]/10 border border-[#00f0ff]/20"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)",
                            }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-5 h-5 text-[#00f0ff]" />
                            </motion.div>
                            <span className="text-white/70">More exciting events coming soon!</span>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-5 h-5 text-[#ff0080]" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    )
}
