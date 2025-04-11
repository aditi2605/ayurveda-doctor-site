'use client'
import React from 'react'
import { motion } from "framer-motion";

import { useInView } from "framer-motion";

const timeline = [
  {
    stage: "🌱",
    title: "Seed Planted",
    text: "My journey began during a personal health crisis. I turned to Ayurveda not as a trend, but a last hope — and it changed everything.",
  },
  {
    stage: "☀️",
    title: "Growth Stage",
    text: "I studied under traditional Vaidyas and modern healers, merging science and soul. The rituals, herbs, and lifestyle became part of me.",
  },
  {
    stage: "🌼",
    title: "Blossoming",
    text: "I earned certifications, held space for clients, and watched real transformation happen. Healing went beyond symptom relief — it became sacred.",
  },
  {
    stage: "🌾",
    title: "Harvest",
    text: "Today I guide others toward balance, clarity, and peace — rooted in nature’s rhythm, and the timeless wisdom of Ayurveda.",
  },
];

const About = () => {
  return (
    <section className="bg-[#f9f7f4] py-20 px-6 mt-18">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B705C] mb-4 font-serif">From Root to Remedy</h2>
        <p className="text-gray-600 text-md max-w-xl mx-auto">
          A personal evolution from seeker to healer — told through the rhythm of the Earth.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col md:border-l-4 border-[#6B705C]/20 pl-6 md:pl-10 space-y-16">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:pl-4"
          >
            {/* Icon circle */}
            <div className="absolute -left-[2.2rem] top-0 w-10 h-10 bg-[#6B705C] text-white flex items-center justify-center rounded-full shadow-md">
              <span className="text-xl">{item.stage}</span>
            </div>

            {/* Text block */}
            <h3 className="text-lg md:text-xl font-semibold text-[#6B705C]">{item.title}</h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
