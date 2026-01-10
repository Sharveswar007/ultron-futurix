"use client"

import { Trophy, Medal, Award, Gift, Briefcase, GraduationCap } from "lucide-react"
import ScrollReveal from "@/components/animation/scroll-reveal"
import SectionHeader from "@/components/ui/section-header"
import GlassCard from "@/components/ui/glass-card"
import AnimatedBackground from "@/components/ui/animated-background"

const mainPrizes = [
  {
    position: "1st",
    prize: "₹1,00,000",
    icon: Trophy,
    color: "#FFD700",
    gradient: "from-yellow-500 to-amber-600",
    extras: ["Trophy", "Certificates", "Goodies", "Internship Opportunity"],
  },
  {
    position: "2nd",
    prize: "₹50,000",
    icon: Medal,
    color: "#C0C0C0",
    gradient: "from-gray-300 to-gray-500",
    extras: ["Medal", "Certificates", "Goodies"],
  },
  {
    position: "3rd",
    prize: "₹25,000",
    icon: Award,
    color: "#CD7F32",
    gradient: "from-amber-600 to-amber-800",
    extras: ["Medal", "Certificates", "Goodies"],
  },
]

const additionalPrizes = [
  { icon: Gift, title: "Goodies Worth", value: "₹50,000+", description: "Swag bags for all participants" },
  { icon: Briefcase, title: "Internship", value: "Opportunities", description: "With partner companies" },
  { icon: GraduationCap, title: "Certificates", value: "For All", description: "Participation & Winner certificates" },
]

export default function Prizes() {
  return (
    <section className="py-18 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" />

      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Rewards"
          title="Prizes & Perks"
          description="Compete for exciting prizes, internships, and recognition from industry leaders."
        />

        {/* Main Prize Podium */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-16">
          {/* 2nd Place */}
          <ScrollReveal delay={0.2} className="order-2 md:order-1">
            <div className="relative">
              <GlassCard className="text-center w-60 pb-6">
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${mainPrizes[1].gradient}`}
                >
                  <Medal className="w-8 h-8 text-black" />
                </div>
                <span className="text-2xl font-bold text-white/50">{mainPrizes[1].position}</span>
                <div className="text-3xl font-bold gradient-text my-3">{mainPrizes[1].prize}</div>
                <ul className="space-y-2">
                  {mainPrizes[1].extras.map((extra) => (
                    <li key={extra} className="text-white/60 text-sm">
                      {extra}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <div className="absolute -bottom-4 left-0 right-0 h-20 bg-gradient-to-t from-gray-500/20 to-transparent rounded-b-xl" />
            </div>
          </ScrollReveal>

          {/* 1st Place */}
          <ScrollReveal delay={0.1} className="order-1 md:order-2">
            <div className="relative">
              <GlassCard className="text-center w-64 pb-6 border-yellow-500/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-black text-xs font-bold">
                  GRAND PRIZE
                </div>
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 mt-4 flex items-center justify-center bg-gradient-to-br ${mainPrizes[0].gradient}`}
                >
                  <Trophy className="w-10 h-10 text-black" />
                </div>
                <span className="text-3xl font-bold text-yellow-500">{mainPrizes[0].position}</span>
                <div className="text-4xl font-bold gradient-text my-3">{mainPrizes[0].prize}</div>
                <ul className="space-y-2">
                  {mainPrizes[0].extras.map((extra) => (
                    <li key={extra} className="text-white/60 text-sm">
                      {extra}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <div className="absolute -bottom-4 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-b-xl" />
            </div>
          </ScrollReveal>

          {/* 3rd Place */}
          <ScrollReveal delay={0.3} className="order-3">
            <div className="relative">
              <GlassCard className="text-center w-60 pb-6">
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${mainPrizes[2].gradient}`}
                >
                  <Award className="w-8 h-8 text-black" />
                </div>
                <span className="text-2xl font-bold text-amber-700">{mainPrizes[2].position}</span>
                <div className="text-3xl font-bold gradient-text my-3">{mainPrizes[2].prize}</div>
                <ul className="space-y-2">
                  {mainPrizes[2].extras.map((extra) => (
                    <li key={extra} className="text-white/60 text-sm">
                      {extra}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <div className="absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-amber-700/20 to-transparent rounded-b-xl" />
            </div>
          </ScrollReveal>
        </div>

        {/* Additional Prizes */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalPrizes.map((prize, index) => (
            <ScrollReveal key={prize.title} delay={index * 0.1}>
              <GlassCard className="text-center">
                <prize.icon className="w-12 h-12 text-[#00f0ff] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{prize.title}</h3>
                <div className="text-2xl font-bold gradient-text mb-2">{prize.value}</div>
                <p className="text-white/60 text-sm">{prize.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
