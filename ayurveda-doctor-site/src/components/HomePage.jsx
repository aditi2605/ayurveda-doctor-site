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
import Link from "next/link";

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
      <main className="w-full min-h-screen text-[#2C2C2C] flex flex-col items-center justify-start">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen flex items-center justify-center bg-[url('/assets/images/mandala_text_even_darker.png')] bg-cover bg-center bg-no-repeat"
        >
          {/* Overlay*/}
          <div className="absolute inset-0 bg-[#fef9ee]/30 z-0"></div>

          {/* Hero Content */}
          <motion.div
          className="relative z-10 text-center px-6 md:px-12 max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* <span className="text-md md:text-lg mt-4 font-body text-gray-700"> Over 35 years of healing experience through authentic Ayurvedic principle,<br /> <span className="italic text-[#6B705C-700 text-lg font-bold">Now in your hometown.</span> </span> */}
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-gray-900 leading-tight">
              Maya&apos;s Ayurveda
            </h1>
            <h3 className="text-xl md:text-2xl mt-4 font-body text-gray-700">
              Creating A Disease Free Family Through <span className="italic text-[#6B705C-700 text-2xl font-bold">Ayurveda.</span>
            </h3>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push('/contact')}
                className="bg-[#6B705C] text-white px-6 py-3 rounded-full font-sans shadow-md hover:bg-[#5f6651] transition"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => router.push('/ourservices')}
                className="bg-[#6B705C] text-white px-6 py-3 rounded-full font-sans shadow-md hover:bg-[#5f6651] transition"
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>
          {/* Scroll Down Mouse Icon */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={() => {
                const el = document.getElementById('abt-intro-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Scroll to next section"
              className="w-7 h-12 border-2 border-gray-500 rounded-full flex items-start justify-center animate-bounce hover:border-[#6B705C] transition"
            >
              <div className="w-1 h-1 bg-gray-500 rounded-full mt-1" />
            </button>
          </div>
        </section>


        {/* About us Intro */}
        <section id="abt-intro-section" className="relative bg-[#EAE7DC] text-[#3E3E3E] w-full py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                35 Years of Dedicated Ayurvedic Practice
              </h2>

              <p className="text-md italic text-gray-600 mb-6">
                “Ayurvedic care that is gentle, grounded, and deeply rooted in nature’s rhythm—for those seeking not just healing, but a return to self.”
              </p>

              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  Dr. Maya Parikh is a qualified Ayurvedic Practitioner (B.A.M.S.) and an HCPC-registered Biomedical Scientist in the United Kingdom, offering a distinctive integration of classical Ayurvedic wisdom with modern biomedical expertise.
                </p>
                <p>
                  With over 35 years of clinical experience and knowledge inherited across two generations, Dr Parikh has supported the health and wellbeing of thousands of patients through tailored Ayurvedic care, grounded in time-honoured principles.
                </p>
                <p>
                  She has conducted successful consultations in both India and the UK for over two decades, while also serving as a Senior Biomedical Scientist in leading NHS hospitals—bringing scientific rigour and holistic insight together.
                </p>
                <p>
                  Your consultation begins with an in-depth discussion of your lifestyle, diet, and health concerns, followed by a clinical assessment. A personalised Ayurvedic plan is then crafted to restore balance, improve vitality, and support long-term healing.
                </p>
                <p>
                  Book your consultation today and take the first step towards holistic wellness.
                </p>
              </div>

              <button 
                onClick={() => router.push("/about")}
                className="mt-8 bg-[#6B705C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#5a604f] transition">
                Learn More About Us
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/images/Dr_Profile_img_2.jpeg"
                  alt="Healing hands with herbs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* DoshaBook section*/ }
        <section
          id="doshaBook-section"
          className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[100vw] overflow-x-hidden"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#6B705C] italic mb-10">
            Discover the Ancient Wisdom of <span className="not-italic font-bold text-emerald-900">Ayurveda</span>
          </h1>
          <DoshaBook />
        </section> 
      

        {/* Info Section */}
        {/* <section className='relative w-full min-h-[800px] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#F0EAD6] mt-28'>
          <Infosection />
        </section> */}

        {/* Testimonial Section */}
        <section className=' relative w-full min-h-[800px] text-center'>
          <Testimonial />
        </section>
  
    </main>
  )
}

export default HomePage
