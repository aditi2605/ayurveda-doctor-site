'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import "../styles/bookFlip.css";
import "../styles/globals.css";
import DoshaBookMobile from './DoshaBookMobile';

const pages = [

    {
      title: 'Ancient Wisdom',
      content: 'Ayurveda, the science of life, is over 5,000 years old. It teaches us that health is not just the absence of disease, but a state of balance between body, mind, and spirit.',
    },
    {
        image:'/assets/images/heroImg.jpg'
    },

    {
      title: "Did You Know?",
      content: "According to Ayurveda, every individual has a unique mind-body constitution — called a Dosha — which affects everything from your digestion to your mood. 🌿"
    },
    {
        image:'/assets/images/herbal.jpg'
    },
    {
      title: "What Are Doshas?",
      content: "Doshas are the three vital energies — Vata (air/space), Pitta (fire/water), and Kapha (earth/water) — that shape your body, emotions, and personality."
    },
    {
      image:'/assets/images/ayurveda_doshas.png'
    },
    {
      title: "Why Doshas Matter",
      content: "Your dominant Dosha influences how you think, feel, eat, sleep, and respond to stress. When it's in balance, you feel your best — when it's out, you might feel 'off.'"
    },
    {
      image:'/assets/images/why_dosha_matters.jpg'
    },
    {
      title: "Discover Your Dosha",
      content: "Ready to explore what makes you *you*? Flip through the pages to learn the traits of each Dosha — you might just recognize yourself!"
    },
    {
      image:'/assets/images/what_is_your_dosha.jpeg'
    },
    {
      title: 'Vata',
      content:
        'Vata is air and space. Individuals with Vata are energetic and creative, but can be anxious or forgetful when imbalanced.',
    },
    {
        image: '/assets/images/vata-dosha.jpg',
    },
    {
      title: 'Pitta',
      content:
        'Pitta is fire and water. Pitta types are focused and driven but may become irritable or overheated when out of balance.',
    },
    {
        image:'/assets/images/pitta-dosha.jpg'
    },
    {
      title: 'Kapha',
      content:
        'Kapha is earth and water. Kapha individuals are nurturing and calm, but imbalances can lead to sluggishness or attachment.',
    },
    {
        image:'/assets/images/kapha-dosha.jpg'
    },
  ];

  const Page = React.forwardRef(({ title, content, image }, ref) => {

    return (
      <div
      ref={ref}
      className="bg-[url('/assets/images/parchment-texture.jpg')] bg-cover bg-no-repeat bg-[#fefaf3]relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#fff5] before:to-transparent h-full px-6 sm:px-8 py-10 rounded-2xl shadow-2xl flex flex-col"
    >
      <div className="w-full max-w-[85%] mx-auto flex flex-col items-center space-y-4 text-center">
        {title && (
          <h2 className="text-xl md:text-2xl font-serif font-bold italic text-[#344439] leading-snug">
            {title}
          </h2>
        )}
        {content && (
          <p className="text-base md:text-lg text-[#1F1F1F] font-normal leading-relaxed tracking-wide">
            {content}
          </p>
        )}
    
        {image && (
          <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 mt-4 flex justify-center items-center">
            <Image
              src={image}
              alt={title || 'Dosha Image'}
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 700px"
            />
          </div>
        )}
      </div>
    </div>
    

    );
  });
  Page.displayName = 'Page';
const DoshaBook = () => {
  
  const [dimensions, setDimensions] = useState({ width: 600, height: 700 });
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const updateSize = () => {
    const screenIsMobile = window.innerWidth <= 768;
    setIsMobile(screenIsMobile);

    const pageWidth = screenIsMobile ? window.innerWidth * 0.45 : 300;
    const pageHeight = screenIsMobile ? window.innerHeight * 0.6 : 700;

    setDimensions({
      width: pageWidth * 2,
      height: pageHeight,
    });
  };

  updateSize(); // Run on mount
  window.addEventListener('resize', updateSize);
  return () => window.removeEventListener('resize', updateSize);
}, []);
   
  
  return (
    <div className="relative w-full max-w-full overflow-x-hidden flex justify-center items-center py-10 px-2 book-v-shape">
      {isMobile ? (
        <DoshaBookMobile />
      ) : (
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={300}
          maxWidth={700}
          minHeight={400}
          maxHeight={1000}
          drawShadow
          flippingTime={1000}
          useMouseEvents
          className="shadow-2xl rounded-2xl tilted-book"
          startPage={0}
          usePortrait={false}
          startZIndex={0}
          autoSize
          clickEventForward
        >
          {pages.map((page, index) => (
            <Page key={index} title={page.title} content={page.content} image={page.image} />
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
  
}

export default DoshaBook
