'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Flower, Droplet, Sparkle, Sprout, Leaf} from "lucide-react";
import { motion } from "framer-motion";
import HeroImg from "../../public/assets/images/hero_img.jpg";
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


        {/* DoshaBook section*/ }
        <section id="doshaBook-section" className="pt-20">
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
