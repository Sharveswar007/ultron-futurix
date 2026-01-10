"use client"

import { useEffect, useMemo, useState } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Preloader from "@/components/layout/preloader"
import ScrollToTop from "@/components/ui/scroll-to-top"

const HeroBackground = dynamic(() => import("@/components/three/hero-background"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0a0f]" />,
})

type ServerStatus = "checking" | "connected" | "disconnected"

export default function GamePage() {
  const arcadeUrl = useMemo(
    () => process.env.NEXT_PUBLIC_ARCADE_URL ?? "http://localhost:8000",
    []
  )
  const [status, setStatus] = useState<ServerStatus>("checking")

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setStatus((prev) => (prev === "checking" ? "disconnected" : prev))
    }, 4000)

    return () => window.clearTimeout(timeout)
  }, [])

  const statusLabel =
    status === "connected"
      ? "Server connected"
      : status === "disconnected"
        ? "Server disconnected"
        : "Checking server"

  return (
    <>
      <Preloader />
      <main className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        </div>

        <Header />

        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">Game Arcade</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
                  Choose a game and play multiplayer
                </h1>
                <p className="mt-3 text-white/70 max-w-2xl">
                  The arcade runs on its own server for real-time matchmaking. Start the arcade server,
                  then hop in and play with friends.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#00f0ff]/40 bg-black/50 px-4 py-2 text-sm text-white/70">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${status === "connected"
                    ? "bg-emerald-400"
                    : status === "disconnected"
                      ? "bg-red-500"
                      : "bg-yellow-400"
                    }`}
                />
                <span>{statusLabel}</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/70 shadow-[0_0_45px_rgba(0,240,255,0.15)] overflow-hidden">
              <div className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/9]">
                <iframe
                  title="Futurix Arcade"
                  src={arcadeUrl}
                  className="h-full w-full"
                  onLoad={() => setStatus("connected")}
                  onError={() => setStatus("disconnected")}
                  allow="fullscreen"
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-white/50">
              If the arcade does not load, ensure the server is running at{" "}
              <span className="text-[#00f0ff]">{arcadeUrl}</span>.
            </p>
          </div>
        </section>

        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
