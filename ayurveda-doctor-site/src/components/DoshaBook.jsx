'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import "../styles/bookFlip.css";

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
      className="bg-white p-6 rounded-xl shadow-2xl flex flex-col justify-center items-center text-center"
    >
      {title && <h2 className="text-2xl font-bold text-center mb-4 text-[#6B705C] italic mt-28">{title}</h2>}
      {content && <p className="text-md font-bold text-center text-[#2C2C2C] mb-4">{content}</p>}

      {image && (
        <div className="relative w-full h-64 mt-18">
          <Image
            src={image}
            alt={title || 'Dosha Image'}
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
    </div>
    );
  });
  Page.displayName = 'Page';
const DoshaBook = () => {
   

  
  return (
    <div className="flex justify-center items-center bg-grey" >
      <HTMLFlipBook
        width={800}
        height={800}
        size="stretch"
        minWidth={300}
        maxWidth={800}
        minHeight={400}
        maxHeight={1000}
        drawShadow={true}
        flippingTime={1000}
        useMouseEvents={true}
        className="shadow-2xl rounded-2xl tilted-book"  
        style={{
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}
        startPage={0}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
      >
        {pages.map((page, index) => (
          <Page key={index} title={page.title} content={page.content} image={page.image}  />
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default DoshaBook
