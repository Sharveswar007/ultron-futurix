"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  Mic,
  Flag,
  Code,
  Rocket,
  Coffee,
  Trophy,
  Presentation,
  Award,
} from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import AnimatedBackground from "@/components/ui/animated-background"

/* =======================
   Timeline Data
======================= */

interface TimelineEvent {
  day: string
  date: string
  time: string
  title: string
  description: string
  icon: React.ElementType
}

const timelineEvents: TimelineEvent[] = [
  {
    day: "Pre-Event",
    date: "Jan 23, 2026",
    time: "11:59 PM",
    title: "Online Idea Shortlisting Deadline",
    description:
      "Submit your idea proposal using the standardized PPT template. Top 50 teams will be shortlisted for offline rounds.",
    icon: FileText,
  },
  {
    day: "Day 1",
    date: "Jan 28, 2026",
    time: "8:00 AM",
    title: "Reporting & Registration",
    description:
      "Shortlisted teams report to the venue for registration and verification.",
    icon: MapPin,
  },
  {
    day: "Day 1",
    date: "Jan 28, 2026",
    time: "9:00 AM – 5:00 PM",
    title: "Offline Idea Pitching Round",
    description:
      "Teams present their ideas in a 3-minute pitch format. Judges evaluate using a transparent marking scheme.",
    icon: Mic,
  },
  {
    day: "Day 1",
    date: "Jan 28, 2026",
    time: "Around 8:00 PM",
    title: "Shortlisted Teams Announcement",
    description:
      "Between 25 and 30 teams are shortlisted to proceed to the development phase.",
    icon: Flag,
  },
  {
    day: "Day 1–2",
    date: "Jan 28–29, 2026",
    time: "Post Announcement",
    title: "Hackathon Development Begins",
    description:
      "Shortlisted teams begin coding and building their solutions. Mentors available for guidance.",
    icon: Code,
  },
  {
    day: "Day 2",
    date: "Jan 29, 2026",
    time: "8:00 AM – 1:00 PM",
    title: "Development & Implementation Phase",
    description:
      "Teams finalize implementation. Submit working prototype, GitHub repository link, and documentation.",
    icon: Rocket,
  },
  {
    day: "Day 2",
    date: "Jan 29, 2026",
    time: "1:00 PM – 2:00 PM",
    title: "Lunch Break & Evaluation",
    description:
      "Judges evaluate submitted solutions and prepare for final shortlisting.",
    icon: Coffee,
  },
  {
    day: "Day 2",
    date: "Jan 29, 2026",
    time: "Post Lunch",
    title: "Top 10 Teams Announcement",
    description:
      "Top 10 teams shortlisted based on technical strength, innovation, and impact.",
    icon: Trophy,
  },
  {
    day: "Day 2",
    date: "Jan 29, 2026",
    time: "2:00 PM – 5:00 PM",
    title: "Final Demonstration & Presentation",
    description:
      "Top 10 teams present and demonstrate their solutions live.",
    icon: Presentation,
  },
  {
    day: "Day 3",
    date: "Jan 30, 2026",
    time: "Afternoon",
    title: "Valedictory Ceremony & Results",
    description:
      "Final results announced. Winners receive awards and certificates.",
    icon: Award,
  },
]

/* =======================
   Timeline Card
======================= */

function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#0a0a0f] border-2 border-[#00f0ff] rounded-full flex items-center justify-center -translate-x-1/2 z-10">
        <event.icon className="w-4 h-4 text-[#00f0ff]" />
      </div>

      {/* Card */}
      <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
        <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-bold bg-[#00f0ff]/20 text-[#00f0ff] rounded-full">
              {event.day}
            </span>
            <span className="text-white/50 text-sm">{event.date}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            {event.title}
          </h3>

          <p className="text-white/60 text-sm flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4" />
            {event.time}
          </p>

          <p className="text-white/70 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* =======================
   Main Component
======================= */

export default function Events() {
  return (
    <section id="timeline" className="py-18 px-4 relative overflow-hidden">
      <AnimatedBackground variant="grid" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          subtitle="ULTRON 9.0"
          title="Flow of Ultron"
          description="From idea submission to final victory — a structured three-day innovation journey."
        />

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/60 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
