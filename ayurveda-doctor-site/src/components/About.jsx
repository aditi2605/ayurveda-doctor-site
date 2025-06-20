"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Timeline journey
// const timeline = [
//   { year: "Graduated BAMS", detail: "Formal academic grounding in Ayurvedic medicine commenced." },
//   { year: "Joined NHS", detail: "HCPC-registered Biomedical Scientist within London’s Stem Cell Laboratory." },
//   { year: "Clinic Established", detail: "Founded a dedicated Ayurvedic clinic — where diagnostics meet tradition." },
//   { year: "30,000+ Results", detail: "Four decades of compassionate care, guided by trust and results." },
// ];

// Core philosophy
const values = [
  "Balance before Band-Aids",
  "Empathy above Prescriptions",
  "Nature as our First Healer",
];

const certifications = [
  "/assets/images/bms-logo.jpeg",
  "/assets/images/hcpc-logo.jpg",
  "/assets/images/nhs-logo.jpeg",
];

const useCounter = (targetNumber, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber);
    if (start === end) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (current < end) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return count;
};

const sections = [
  {
    title: "परंपरा की विरासत",
    subtitle: "Legacy of Rajvaidhyas",
    quote: "\"जहाँ परंपरा और सेवा एक होती है, वहाँ आरोग्य जन्म लेता है।\"",
    content:
      "My grandfather and father served as royal physicians — Rajvaidhyas — in the court of the king. Watching my father heal with dedication inspired my desire to follow in his footsteps and dedicate my life to the science of Ayurveda.",
    image: "/assets/images/Traditional Indian healer painting.jpg",
  },
  {
    title: "आरोग्य शिक्षा",
    subtitle: "Formal Education in Ayurveda",
    quote: "\"शिक्षा आरोग्य की आधारशिला है।\"",
    content:
      "In 1990, I graduated with a Bachelor’s degree in Ayurvedic Medical Sciences (B.A.M.S.) a qualified Ayurvedic Practitioner. Soon after, I completed a two-year internship, gaining hands-on experience in classical diagnostic and treatment practices.",
    image: "/assets/images/Sanskrit student with books.jpg",
  },
  {
    title: "Suvarna Prashan Awareness",
    subtitle: "Reviving an Ancient Ayurvedic Practice",
    quote: "\"The golden elixir for childhood well-being.\"",
    content:
      "Rooted in ancient Ayurvedic wisdom, Suvarna Prashan is a traditional formulation prepared with purified gold (suvarna bhasma), ghee, honey, and select herbs. Recognising its timeless value for children's health, I have worked extensively to promote its awareness through community campaigns and educational workshops. Over the years, this initiative has supported the well-being of more than 25,000 children — enhancing their immunity, memory, and vitality through this sacred Ayurvedic practice.",
    image: "/assets/images/GoldashAyurveda.png",
  },
  {
    title: "प्रथम चिकित्सालय",
    subtitle: "The Healing Hut",
    quote: "\"करुणा ही सच्ची औषधि है।\"",
    content:
      "After my internship, I opened my own Ayurvedic clinic — a humble space devoted to healing. For two decades, I served my community through natural treatments rooted in traditional wisdom.",
    image: "/assets/images/Traditional Ayurvedic treatment room.jpg",
  },
  {
    title: "वैश्विक चिकित्सा यात्रा",
    subtitle: "New Horizons in the UK",
    quote: "\"ज्ञान सीमाओं से परे है।\"",
    content:
      "Seeking to expand my perspective, I moved to the UK. Alongside continuing my Ayurveda practice, I worked as a Biomedical Scientist in Haematology, Genetic and Sickle cells lab  in the NHS, specifically in the Stem Cell Laboratory and ATMP tranplant research Lab. This 15-year journey deepened my understanding of human biology and complemented my Ayurvedic roots.",
    image: "/assets/images/Biomedical scientist in lab.jpg",
  },
  {
    title: "सेवा का पुनारारंभ",
    subtitle: "Return to My Roots",
    quote: "\"तीन दशकों का ज्ञान अब फिर सेवा में।\"",
    content:
      "Today, I have returned to my homeland — to once again serve my community. With over 30 years of experience across Ayurveda and biomedical science, I offer a unique, natural path to healing, transformation, and holistic well-being.",
    image: "/assets/images/backtoroots.jpg",
  }
];
const About = () => {
  const years = useCounter(35, 3000);
  const patients = useCounter(45000, 3000);
  const nhsYears = useCounter(15, 3000);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <section className="w-full bg-[#f9f7f3] py-16 px-4 sm:px-6 lg:px-12 mt-24">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#6B705C] italic"
        >
          Healing Rooted in Wisdom, Guided by Science
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600"
        >
          Bridging over 3 decades of Ayurvedic mastery with biomedical precision to restore well-being in over 45,000 lives.
        </motion.p>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/images/Dr_Profile_img.jpeg"
            alt="Dr. Ayurvedic Practitioner"
            width={140}
            height={140}
            className="rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Vision & Motto */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-[#6B705C] mb-4"
        >
          My Vision
        </motion.h2>
        <p className="text-gray-600 text-md sm:text-lg">
          To inspire a reconnection with nature — honouring the essence of Ayurveda, while embracing the rigour of modern science — in pursuit of vitality, resilience, and enduring calm.
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 italic text-[#6B705C] font-medium"
        >
          “Restore. Rebalance. Reawaken.”
        </motion.p>
      </div>

      {/* Timeline */}
<div className="text-center py-20 bg-[#E9E7DC]">
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
    A Healer’s Journey Through Time
  </h2>
  <p className="mt-2 font-md text-gray-600 max-w-xl mx-auto">
    Each phase of my journey reflects the merging of tradition, wisdom, and personal evolution — guided by the principles of Ayurveda.
  </p>

  {/* Timeline Content */}
  <div className="relative w-full max-w-4xl mx-auto mt-16 text-[#3a3a3a] font-serif">
    <motion.div
      key={currentIndex}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <Image
        src={sections[currentIndex].image}
        alt={sections[currentIndex].title}
        width={100}
        height={100}
        className="mb-6 opacity-90"
      />
      <h3 className="text-2xl md:text-4xl font-bold text-amber-800 tracking-wide">
        {sections[currentIndex].title}
      </h3>
      <p className="text-lg md:text-xl italic mt-2 text-[#7b4f21]">
        {sections[currentIndex].subtitle}
      </p>
      <blockquote className="mt-4 italic text-md md:text-lg text-[#444] max-w-xl">
        {sections[currentIndex].quote}
      </blockquote>
      <p className="mt-4 max-w-2xl text-md md:text-lg leading-relaxed">
        {sections[currentIndex].content}
      </p>
    </motion.div>

    {/* Navigation Arrows */}
    <div className="flex justify-between mt-10">
      <button
        onClick={prevSlide}
        className="text-2xl text-[#6B705C] hover:text-amber-700"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="text-2xl text-[#6B705C] hover:text-amber-700"
      >
        ▶
      </button>
    </div>
  </div>
</div>

     

      {/* Certifications */}
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto items-center">
        {certifications.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <Image src={src} alt="cert" width={110} height={110} className="object-contain" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-16 max-w-3xl mx-auto text-center italic text-[#444] text-lg px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “Healing is not a prescription, it’s a partnership. Together, we listen, balance, and transform.”
        </motion.p>
      </div>

      {/* Animated Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mt-20">
        <div>
          <p className="text-4xl font-bold text-[#6B705C]">{years}+</p>
          <p className="text-gray-600">Years in Practice</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#6B705C]">{patients.toLocaleString()}+</p>
          <p className="text-gray-600">Patients Treated</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#6B705C]">{nhsYears}+</p>
          <p className="text-gray-600">Years in NHS London</p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-24 bg-white rounded-xl shadow-md py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#6B705C] mb-6">Our Philosophy</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.2 }}
              className="text-md font-medium text-gray-700 border-l-4 border-[#6B705C] pl-4"
            >
              {val}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <p className="text-xl text-gray-700 font-medium mb-4">
          Ready to embark on a personalised journey of healing?
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 bg-[#6B705C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#5a604f] transition"
        >
           Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default About;
