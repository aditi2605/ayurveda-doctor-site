"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Massage Therapy",
    slug: "massage",
    image: "/assets/images/Ayurvedic-Massage.jpg",
    description: "A deeply relaxing treatment using warm herbal oils tailored to your dosha.",
    process: [
      "Personal dosha assessment & oil selection",
      "Full body Abhyanga massage to increase circulation",
      "Optional steam (Swedana) for deeper detoxification"
    ],
    benefits: [
      "Relieves stress & tension",
      "Improves lymphatic flow",
      "Supports better sleep & nervous system balance"
    ]
  },
  {
    title: "Herbal Treatments",
    slug: "herbal",
    image: "/assets/images/herbal.jpg",
    description: "Ayurvedic herbs prescribed in teas, powders or capsules to balance internal systems.",
    process: [
      "Initial Ayurvedic consultation & pulse diagnosis",
      "Personalised herbal formula prescription",
      "Guidance on diet, sleep & routine to support herbs"
    ],
    benefits: [
      "Improves digestion & elimination",
      "Restores hormonal and mental balance",
      "Gentle, long-term healing without side effects"
    ]
  },
  {
    title: "Panchakarma Detox",
    slug: "panchakarma",
    image: "/assets/images/panchkarma-service.jpg",
    description: "The gold standard of Ayurvedic cleansing, guided by your constitution & imbalances.",
    process: [
      "Pre-cleanse: diet & ghee therapy",
      "Main therapies: Vamana, Virechana or Basti",
      "Rejuvenation phase with Rasayanas & rituals"
    ],
    benefits: [
      "Removes deep-rooted toxins",
      "Balances all three doshas",
      "Boosts immunity & clarity of mind"
    ]
  },
  {
    title: "Women's Health & Fertility",
    image: "/assets/images/Women_Health .jpg",
    shortDesc: "Support for every life stage.",
    process: [
      "Cycle and hormone assessment",
      "Uterine tonics & lifestyle plan",
      "Herbs for fertility or menopause"
    ],
    benefits: [
      "Balances hormones",
      "Supports fertility",
      "Eases transitions like menopause"
    ]
  },
  {
    title: "Detox",
    image: "/assets/images/detox-food.jpeg",
    shortDesc: "Cleanse body and mind holistically.",
    process: [
      "Digestive reset",
      "Light mono-diet plan",
      "Gentle purgation or steam therapy"
    ],
    benefits: [
      "Improves metabolism",
      "Boosts energy",
      "Removes toxic residue (Ama)"
    ]
  },
  {
    title: "Disease & Gut Health",
    image: "/assets/images/detox.jpg",
    shortDesc: "Address root causes, not symptoms.",
    process: [
      "Detailed case history",
      "Ayurvedic digestion correction",
      "Lifestyle + herbs"
    ],
    benefits: [
      "Treats IBS, inflammation, allergies",
      "Reduces recurrence",
      "Strengthens gut immunity"
    ]
  },
  {
    title: "Personal Wellness & Rejuvenation",
    image: "/assets/images/personal_health_care.jpg",
    shortDesc: "Restore vitality, glow and calm.",
    process: [
      "Customised Rasayana protocol",
      "Mind-body alignment practices",
      "Ongoing nourishment & rituals"
    ],
    benefits: [
      "Boosts vitality and immunity",
      "Promotes graceful aging",
      "Elevates mood and sleep"
    ]
  }
];

const Ourservices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-[#f9f7f3] py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#6B705C] italic mb-4">
          Explore Our Ayurvedic Services
        </h2>
        <span className="text-md text-gray-500 tracking-wide block mb-12">
          Empowering wellness through ancient wisdom and personalised care.
        </span>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelected(service)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover w-full h-48"
              />
              <h3 className="text-lg font-semibold text-[#6B705C] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-lg overflow-hidden max-w-2xl w-full relative z-50 shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-[#6B705C] mb-2">
                    {selected.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {selected.description}
                  </p>

                  <h4 className="text-md font-semibold text-emerald-700 mb-1">
                    How it works
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                    {selected.process.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>

                  <h4 className="text-md font-semibold text-emerald-700 mb-1">
                    Benefits
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 mb-6">
                    {selected.benefits.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Ourservices;
