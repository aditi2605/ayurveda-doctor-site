'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const pages = [
  {
    title: 'Ancient Wisdom',
    image: '/assets/images/heroImg.jpg',
    content:
      'Ayurveda, the science of life, is over 5,000 years old. It teaches us that health is not just the absence of disease, but a state of balance between body, mind, and spirit.',
  },
  
  {
    title: 'Did You Know?',
    image: '/assets/images/herbal.jpg',
    content:
      'According to Ayurveda, every individual has a unique mind-body constitution — called a Dosha — which affects everything from your digestion to your mood. 🌿',
  },
  {
    title: 'What Are Doshas?',
    image: '/assets/images/ayurveda_doshas.png',
    content:
      'Doshas are the three vital energies — Vata (air/space), Pitta (fire/water), and Kapha (earth/water) — that shape your body, emotions, and personality.',
  },
  {
    title: 'Why Doshas Matter',
    image: '/assets/images/why_dosha_matters.jpg',
    content:
      "Your dominant Dosha influences how you think, feel, eat, sleep, and respond to stress. When it's in balance, you feel your best — when it's out, you might feel 'off.'",
  },
  {
    title: 'Discover Your Dosha',
    image: '/assets/images/what_is_your_dosha.jpeg',
    content:
      'Ready to explore what makes you *you*? Flip through the pages to learn the traits of each Dosha — you might just recognize yourself!',
  },
  {
    title: 'Vata',
    image: '/assets/images/vata-dosha.jpg',
    content:
      'Vata is air and space. Individuals with Vata are energetic and creative, but can be anxious or forgetful when imbalanced.',
  },
  {
    title: 'Pitta',
    image: '/assets/images/pitta-dosha.jpg',
    content:
      'Pitta is fire and water. Pitta types are focused and driven but may become irritable or overheated when out of balance.',
  },
  {
    title: 'Kapha',
    image: '/assets/images/kapha-dosha.jpg',
    content:
      'Kapha is earth and water. Kapha individuals are nurturing and calm, but imbalances can lead to sluggishness or attachment.',
  },
];

const swipeVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const DoshaBookMobile = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % pages.length);
  };

  const page = pages[index];

  return (
   <div className="relative w-full min-h-[50vh] flex justify-center items-start px-4 py-8 bg-[#fefaf3]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="w-full max-w-[400px] bg-white shadow-xl rounded-xl px-4 py-6 flex flex-col items-center text-center space-y-4"
          variants={swipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(e, info) => {
            if (Math.abs(info.offset.x) > 80) goNext();
          }}
          onClick={goNext}
        >
          {page.title && (
            <h2 className="text-lg font-serif font-semibold italic text-emerald-900">
              {page.title}
            </h2>
          )}
          {page.image && (
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <Image
                src={page.image}
                alt={page.title || 'Dosha Image'}
                fill
                className="object-contain"
              />
            </div>
          )}
          {page.content && (
            <p className="text-sm text-[#3C3C3C] font-medium leading-relaxed">
              {page.content}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DoshaBookMobile;
