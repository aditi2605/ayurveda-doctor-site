"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Timeline journey
const timeline = [
  { year: "Graduated BMS", detail: "Formal academic grounding in Ayurvedic medicine commenced." },
  { year: "Joined NHS", detail: "HCPC-registered Biomedical Scientist within London’s Stem Cell Laboratory." },
  { year: "Clinic Established", detail: "Founded a dedicated Ayurvedic clinic — where diagnostics meet tradition." },
  { year: "100,000+ Treated", detail: "Four decades of compassionate care, guided by trust and results." },
];

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

const About = () => {
  const years = useCounter(40, 3000);
  const patients = useCounter(100000, 3500);
  const nhsYears = useCounter(5, 3000);

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
          Bridging over 40 decades of Ayurvedic mastery with biomedical precision to restore well-being in over 100,000 lives.
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
      <div className="max-w-4xl mx-auto relative border-l-4 border-emerald-200 pl-6 space-y-16">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[34px] w-6 h-6 bg-emerald-400 rounded-full shadow-md border-4 border-white"></div>
            <h3 className="text-lg font-semibold text-[#6B705C]">{item.year}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto items-center">
        {certifications.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <Image src={src} alt="cert" width={80} height={80} className="object-contain" />
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
          <p className="text-4xl font-bold text-emerald-700">{years}+</p>
          <p className="text-gray-600">Years in Practice</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-emerald-700">{patients.toLocaleString()}+</p>
          <p className="text-gray-600">Patients Treated</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-emerald-700">{nhsYears}+</p>
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
              className="text-md font-medium text-gray-700 border-l-4 border-emerald-300 pl-4"
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
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition"
        >
           Book a Private Consultation
        </Link>
      </div>
    </section>
  );
};

export default About;
