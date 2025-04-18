'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import "../styles/bookFlip.css";
import "../styles/globals.css";

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
      className="bg-[url('/assets/images/parchment-texture.jpg')] bg-cover bg-no-repeat bg-[#fefaf3]relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#fff5] before:to-transparent h-full px-6 sm:px-8 py-10 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center"
    >
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
        {title && (
          <h2 className="text-2xl mt-10 md:text-3xl lg:text-4xl font-serif font-semibold italic text-[#5A6650] mb-6 drop-shadow-sm">
          {title}
        </h2>
        )}
    
        {content && (
          <p className="text-base sm:text-lg leading-relaxed text-[#3C3C3C]  tracking-wide font-bold ">
            {content}
          </p>
        )}
    
        {image && (
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 mt-6">
            <Image
              src={image}
              alt={title || 'Dosha Image'}
              fill
              className="object-contain rounded-xl mt-2  md:mt-5 lg:mt-10 xl:mt-10"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}
      </div>
    </div>
    

    );
  });
  Page.displayName = 'Page';
const DoshaBook = () => {

  const [dimensions, setDimensions] = useState({ width: 300, height: 400 });

    useEffect(() => {
      const updateSize = () => {
        const isMobile = window.innerWidth <= 768;
        setDimensions({
          width: isMobile ? 300 : 600,
          height: isMobile ? 400 : 700,
        });
      };
    
      updateSize(); // call once on mount
      window.addEventListener("resize", updateSize);
    
      return () => window.removeEventListener("resize", updateSize);
    }, []);
   
  
  return (
    <div className="relative flex justify-center items-center py-12 book-v-shape">
    {/* <div className="mx-auto max-w-full md:max-w-[90%] lg:max-w-[850px]"> */}

      <HTMLFlipBook
        width={600}
        height={700}
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
    {/* </div> */}
    
  </div>
  
  )
}

export default DoshaBook
