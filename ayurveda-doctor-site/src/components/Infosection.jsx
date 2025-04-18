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
    <section className="relative w-full flex flex-col items-center justify-center px-4 py-20 bg-[#F0EAD6] mb-96">

      {/* Soft radial background glow */}
      <div className="absolute w-[100px] h-[100px] rounded-full bg-gradient-radial from-[#e0f2f1] to-transparent blur-3xl opacity-20 z-0" />

      {/* Section Heading */}
      <div className="z-10 text-center mb-32 sm:mb-80 md:mb-75 lg:mb-85 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-emerald-900 text-[#6B705C] italic mb-4">
          Your Journey Toward Balance Begins Here
        </h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-xl mx-auto">
          Each layer represents a step inward — from our services, into your core.
        </p>
      </div>

      {/* All chakra section */}
      <div className="relative w-full flex justify-center items-center py-12">
        
      {/* Center Chakra */}
      <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/4 -translate-y-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-300 to-green-500 text-white rounded-full flex items-center justify-center text-center shadow-xl animate-pulse font-semibold">
        <span className="text-sm md:text-lg leading-tight">
          Our<br />Services
        </span>
      </div>

      {/* Outer Orbit: Services */}
      <div className="relative -translate-y-8 -translate-x-8">
        {services.map((service, i) => {
          // Responsive orbit radius (tighter on small screens)
          const orbitRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 250;
          const angle = i * (360 / services.length);
          const rotate = `rotate(${angle}deg)`;
          const translate = `translate(0, -${orbitRadius}px)`;
          const reverseRotate = `rotate(-${angle}deg)`;

          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                animation: `orbit-reverse 70s linear infinite`,
                transformOrigin: "center center",
              }}
            >
              <div
                style={{
                  transform: `${rotate} ${translate} ${reverseRotate}`,
                }}
              >
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full blur-2xl bg-blue-200 opacity-10 z-0" />
                  <button
                    onClick={() => router.push(`/ourservices`)}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                              rounded-full flex items-center justify-center
                              text-white font-semibold text-xs sm:text-sm md:text-base text-center px-2
                              hover:scale-105 transition-transform duration-200 shadow-lg relative z-10"
                    aria-label={service.title}
                    style={{
                      backgroundImage: `url('/assets/images/info-ayurveda.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: "multiply",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                    }}
                  >
                    <span className="bg-glass text-white text-center px-3 py-1 rounded-full text-sm font-medium">
                      {service.title}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Inner circle: Core Values */}
      {/* {coreValues.map((value, i) => (
        <div
          key={`core-${i}`}
          className="absolute top-[60%] left-[50%]"
          style={{
            animation: `orbit-core 50s linear infinite`,
            transformOrigin: "center center",
          }}
        >
          <div
            style={{
              transform: `rotate(${i * (360 / coreValues.length)}deg) translate(0, -140px) rotate(-${i * (360 / coreValues.length)}deg)`
            }}
          >
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-md flex items-center justify-center text-center text-xs font-medium hover:scale-105 transition"
              style={{
                backgroundColor: coreColors[i % coreColors.length],
                color: "#333"
              }}
            >
              {value}
            </div>
          </div>
        </div>
      ))} */}
      </div>


    </section>
  )
}

export default Infosection
