import React from 'react'
import Image from 'next/image';
import Logo from "../../public/assets/images/heroImg_2.png";

const testimonials = [
    {
        name: "Aanya Kapoor",
        handle: "@aanyak",
        quote:
          "I arrived tense and disconnected… I left feeling like I was floating. Their work balances the physical and energetic beautifully.",
        avatar: Logo,
      },
      {
        name: "Michael Patel",
        handle: "@mikepatel",
        quote:
          "The herbal treatments were curated just for me — gentle, earthy, and surprisingly effective. I felt truly listened to.",
        avatar: Logo,
      },
      {
        name: "Sophie Tran",
        handle: "@sophietranquil",
        quote:
          "It wasn’t just a cleanse — it was a reset. Physically lighter, mentally sharper, and spiritually aligned.",
        avatar: Logo,
      },
      {
        name: "Devika Nair",
        handle: "@devina.nair",
        quote:
          "There was such sacred respect for my journey. The way they support women’s health is rooted in wisdom and care.",
        avatar: Logo,
      },
      {
        name: "Elisa Romero",
        handle: "@elisaromind",
        quote:
          "The space itself heals you. Every corner smells of flowers and herbs, and the silence feels intentional — like the earth is exhaling.",
        avatar: Logo,
      },
      {
        name: "James Crawford",
        handle: "@jcrawwellness",
        quote:
          "It’s rare to feel held in a space. The Panchakarma here felt more like a rite of passage than a treatment.",
        avatar: Logo,
      },
      {
        name: "Tara Leone",
        handle: "@taraheals",
        quote:
          "This wasn’t just bodywork — it was soul work. The care, the patience, the energy… it softened something deep inside me.",
        avatar: Logo,
      },
      {
        name: "Raj Malhotra",
        handle: "@raj.mindful",
        quote:
          "It’s like a temple of calm. Soft light, earthy textures, and the faint scent of sandalwood — it all creates a perfect healing cocoon.",
        avatar: Logo,
      },
      {
        name: "Amira Sheikh",
        handle: "@amirawellness",
        quote:
          "They took time to understand my constitution, my story. I’ve never felt so seen and supported in any healing space before.",
        avatar: Logo,
      },
      {
        name: "Lucas Bell",
        handle: "@lucaszenflow",
        quote:
          "Each visit felt like re-alignment — of body, mind, and spirit. It's not just a treatment center, it's a sanctuary.",
        avatar: Logo,
      },
];

const Testimonial = () => {
  return (
    <section className=" py-20 px-4">
        <div className='max-w-6xl mx-auto text-center mb-16 '>
            <h1 className='text-5xl font-semibold text-emerald-900 mb-4 text-[#6B705C] italic'>Testimonial</h1>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-2">
                We have worked with<br />thousands of amazing people
            </h2>
        </div>
        {/* card section */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="break-inside-avoid bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
                    <p className="text-gray-700 mb-4">“{testimonial.quote}”</p>
                    <div className="flex items-center gap-3 mt-4">
                        <Image 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div className="text-left">
                            <p className="font-semibold text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-500">{testimonial.handle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </section>

   
  )
}

export default Testimonial
