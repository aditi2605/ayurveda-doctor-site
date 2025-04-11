import React from 'react'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const chakraColors = [
  "#A3C585", // sage green
  "#B5D99C", // mint
  "#D6F0F0", // warm beige
  "#D6CDA4", // sand
  "#D7A86E", // clay
  "#c1c155", // rosewood
  "#88AB75", // olive
];

const services = [
  { title: "Massage", slug: "herbal-therapy" },
  { title: "Herbal Therapy", slug: "herbal-therapy" },
  { title: "Panchakarma",slug: "herbal-therapy" },
  { title: "Personal Wellness and Rejuvenation ", slug: "herbal-therapy" },
  { title: "Women’s Health and Fertility ", slug: "herbal-therapy" },
  { title: "Detox", slug: "herbal-therapy" },
  { title: "Disease & Guts",  slug: "herbal-therapy"}
];

const coreValues = [
  "Balance",
  "Healing",
  "Nature",
  "Purity"
];

const coreColors = [
  "#E9F5DB", // soft green
  "#FFF6E5", // light peach
  "#F2E8CF", // warm sand
  "#EBD9B4", // honey beige
];


const Infosection = () => {

     const router = useRouter();
     
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#F0EAD6]">

          {/* Background Glow */}
          <div className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

         {/* Section Heading */}
          <div className="mb-96 z-10 text-center">
            <h2 className="text-5xl font-semibold text-emerald-900 mb-4 text-[#6B705C] italic">
              Your Journey Toward Balance Begins Here
            </h2>
            <p className="text-xl text-gray-500 mb-96">
              Each layer represents a step inward — from our services, into your core.
            </p>
          </div>
          
          {/* Center Chakra */}
          <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-300 to-green-500 text-white rounded-full flex items-center justify-center text-center shadow-xl animate-pulse font-semibold">
            <span className="text-sm md:text-lg leading-tight">
              Our<br />Services
            </span>
          </div>


          {/* Outer circle - Services */}
          {services.map((service, i) => (
            <div
              key={i}
              className="absolute top-[45%] left-[45%]"
              style={{
                animation: `orbit-reverse 55s linear infinite`,
                transformOrigin: "center center",
              }}
            >
              <div
                style={{
                  transform: `rotate(${i * (360 / services.length)}deg) translate(0, -280px) rotate(-${i * (360 / services.length)}deg)`
                }}
              >
                <button
                  onClick={() => router.push(`/ourservices`)}
                  className="w-32 h-18 md:w-36 md:h-36 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm leading-tight text-center px-2 hover:scale-105 transition-transform duration-200 shadow-md"
                  style={{ backgroundColor: chakraColors[i % chakraColors.length] }}
                >
                  <span className="truncate px-1">{service.title}</span>
                </button>
              </div>
            </div>
          ))}

          {/* Inner circle */}
          {coreValues.map((value, i) => (
            <div
              key={`core-${i}`}
              className="absolute top-[47%] left-[48%]"
              style={{
                animation: `orbit-core 50s linear infinite`,
                transformOrigin: "center center",
              }}
            >
            <div
              style={{
                transform: `rotate(${i * (360 / coreValues.length)}deg) translate(0, -130px) rotate(-${i * (360 / coreValues.length)}deg)`
              }}
            >
              <div
                className="w-14 h-14 md:w-18 md:h-18 rounded-full shadow-sm flex items-center justify-center text-center text-[13px] font-medium hover:scale-105 transition"
                style={{ backgroundColor: coreColors[i % coreColors.length] }}
              >
                {value}
              </div>
            </div>
          </div>
        ))}
        </section>
  )
}

export default Infosection
