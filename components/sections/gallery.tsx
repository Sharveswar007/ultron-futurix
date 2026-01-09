"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ScrollReveal from "@/components/animation/scroll-reveal"
import SectionHeader from "@/components/ui/section-header"
import AnimatedBackground from "@/components/ui/animated-background"

const galleryCategories = ["All", "Ultron 8.0", "Lens Lumina 2025", "Lens Lumina 2024"]

// Real gallery images from past events
const galleryImages = [
  // Ultron 8.0 images
  {
    id: 1,
    category: "Ultron 8.0",
    src: "/images/gallery/IMG-20250203-WA0078.jpg",
    title: "Ultron 8.0 Event",
    color: "#00f0ff"
  },
  {
    id: 2,
    category: "Ultron 8.0",
    src: "/images/gallery/IMG-20250203-WA0090.jpg",
    title: "Ultron 8.0 Moments",
    color: "#ff0080"
  },
  {
    id: 3,
    category: "Ultron 8.0",
    src: "/images/gallery/IMG-20250203-WA0106.jpg",
    title: "Ultron 8.0 Highlights",
    color: "#8b5cf6"
  },
  {
    id: 4,
    category: "Ultron 8.0",
    src: "/images/gallery/IMG-20250203-WA0108.jpg",
    title: "Ultron 8.0 Team",
    color: "#00f0ff"
  },
  {
    id: 5,
    category: "Ultron 8.0",
    src: "/images/gallery/WhatsApp Image 2025-02-01 at 14.24.29_3755ebea.jpg",
    title: "Ultron 8.0 Celebration",
    color: "#ff0080"
  },
  {
    id: 6,
    category: "Ultron 8.0",
    src: "/images/gallery/IMG_0031.JPG",
    title: "Ultron 8.0 Activities",
    color: "#8b5cf6"
  },
  // Lens Lumina 2025 images
  {
    id: 7,
    category: "Lens Lumina 2025",
    src: "/images/gallery/IMG_7860.JPG",
    title: "Lens Lumina 2025",
    color: "#00f0ff"
  },
  {
    id: 8,
    category: "Lens Lumina 2025",
    src: "/images/gallery/IMG_7929.JPG",
    title: "Photography Showcase",
    color: "#ff0080"
  },
  // Lens Lumina 2024 images
  {
    id: 9,
    category: "Lens Lumina 2024",
    src: "/images/gallery/20240723_111640AMByGPSMapCamera.jpg",
    title: "Lens Lumina 2024",
    color: "#8b5cf6"
  },
  {
    id: 10,
    category: "Lens Lumina 2024",
    src: "/images/gallery/20240723_115800AMByGPSMapCamera.jpg",
    title: "Visual Expression",
    color: "#00f0ff"
  },
  {
    id: 11,
    category: "Lens Lumina 2024",
    src: "/images/gallery/Lens Lumina 2024.jpg",
    title: "Creative Photography",
    color: "#ff0080"
  },
  {
    id: 12,
    category: "Ultron 8.0",
    src: "/images/gallery/20240723_10939PMByGPSMapCamera.jpg",
    title: "Event Night",
    color: "#8b5cf6"
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" />

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#00f0ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#ff0080]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Gallery"
          title="Past Memories"
          description="Relive the excitement from previous editions of Futurix events."
        />

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-[#00f0ff] to-[#ff0080] text-black"
                  : "border border-white/20 text-white/70 hover:border-[#00f0ff]/50 hover:text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <ScrollReveal key={img.id} delay={index * 0.05}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img.id)}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {/* Image */}
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    quality={75}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium" style={{ color: img.color }}>{img.category}</span>
                    <p className="text-white text-xs mt-1">{img.title}</p>
                  </div>

                  {/* Border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl transition-all duration-300"
                    style={{
                      border: `2px solid transparent`,
                    }}
                    whileHover={{
                      borderColor: `${img.color}80`,
                      boxShadow: `0 0 20px ${img.color}30`,
                    }}
                  />

                  {/* Corner accents on hover */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: img.color }} />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: img.color }} />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: img.color }} />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: img.color }} />
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00f0ff] transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative max-w-5xl w-full max-h-[80vh] rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={selectedImageData.src}
                    alt={selectedImageData.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-sm font-medium" style={{ color: selectedImageData.color }}>
                    {selectedImageData.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedImageData.title}</h3>
                </div>

                {/* Decorative border */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    border: `2px solid ${selectedImageData.color}40`,
                    boxShadow: `0 0 40px ${selectedImageData.color}20`,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
