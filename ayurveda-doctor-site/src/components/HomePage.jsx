'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Flower, Droplet, Sparkle, Sprout, Leaf} from "lucide-react";
import { motion } from "framer-motion";
// import HeroImg from "../../public/assets/images/hero_img.jpg";
// import HeroVideo from "../../public/assets/images/hero_video.mp4";
import DoshaBook from './DoshaBook';
import Infosection from './Infosection';
import Testimonial from './Testimonial';

const icons = [
  { icon: Droplet, color: '#86BBD8' },
  { icon: Flower, color: '#ECA1A6' },
  { icon: Sprout, color: '#6B705C' },
  { icon: Sparkle, color: '#BFA66B' },
]

//generate random positions for icons
const generatePositions = () => icons.map(() => ({
  top: `${Math.random() * 90}%`,
  right: `${Math.random() * 90}%`,
}))


const HomePage = () => {

  const router = useRouter();
  const [positions, setPositions] = useState(
    icons.map(() => ({ top: '50%', left: '50%' }))
  )

  useEffect(() => {
    setPositions(generatePositions())
  }, [])


  return (
    <main className="w-full min-h-screen bg-[#F8F5F0] text-[#2C2C2C] px-6 py-10 flex flex-col gap-16 items-center justify-center mt-8">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f9f7f4]">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
          >
            <source src="assets/images/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Feel better <span className="italic text-[#6B705C]">Naturally.</span><br />
              Guided by the science of <span className="italic text-[#6B705C]">Ayurveda.</span>
            </h1>
            <p className="mt-6 text-gray-700 text-md md:text-lg">
              Personalized Ayurvedic care, healing rituals, and remedies rooted in ancient wisdom.
            </p>

            <div className="mt-8">
              <button className="bg-[#6B705C] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#5f6651] transition">
                Book a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* About us Intro */}

        <section className="bg-[#f9f7f4] px-6 py-20">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B705C] mb-6">
                Rooted in Tradition, Guided by Nature
              </h2>
              <span className='text-sm font-style:italic text-gray-500'>“We offer Ayurvedic care that is gentle, grounded, and deeply rooted in nature’s rhythm — for those seeking not just healing, but homecoming.”</span>
              <p className="text-gray-700 text-md leading-relaxed mt-4 mb-4">
                We believe that healing is not a cure — but a quiet return. A gentle remembering of the body’s innate rhythm.
                At the heart of our practice lies Ayurveda — a time-honoured science of balance, deeply entwined with nature’s wisdom.
              </p>
              <p className="text-gray-700 text-md">
                With reverence for ancient tradition and compassion at our core, we offer an oasis of calm in a hurried world.
                Whether you seek clarity, vitality, or stillness, our space is yours to come home to.
              </p>
              <button 
                onClick={() => router.push("/about")}
                className="mt-6 bg-[#6B705C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#5a604f] transition">
                Learn More About Us
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/images/about-ayurveda.jpg"
                  alt="Healing hands with herbs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>



        {/* DoshaBook section*/ }
        <section id="doshaBook-section" className="mt-10 ">
          <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#6B705C] italic mb-10">
            Discover the Ancient Wisdom of <span className="not-italic font-bold text-emerald-900">Ayurveda</span>
          </h1>
          <DoshaBook />
        </section>  

        {/* Info Section */}
        <section className='relative w-full min-h-[800px] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#F0EAD6] mt-28'>
          <Infosection />
        </section>

        {/* Testimonial Section */}
        <section className=' relative w-full min-h-[800px] text-center'>
          <Testimonial />
        </section>

        
    </main>
  )
}

export default HomePage
