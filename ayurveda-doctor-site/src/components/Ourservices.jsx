"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Women's Health & Fertility",
    image: "/assets/images/Women_Health.jpg",
    description: "Holistic Ayurvedic care for menstrual health, fertility, and hormonal balance at every stage of life.",
    process: [
      "Comprehensive hormone and menstrual cycle assessment",
      "Personalized lifestyle and dietary recommendations",
      "Uterine tonics and detox therapies",
      "Targeted herbal support for fertility, PMS, or menopause",
      "Therapies for leucorrhoea, cervicitis, and related conditions"
    ],
    benefits: [
      "Regulates menstrual cycles and relieves PMS symptoms",
      "Promotes fertility and reproductive health",
      "Manages menopause naturally and gently",
      "Treats conditions like leucorrhoea, cervicitis, and fibroids",
      "Supports weight management and hormonal detox"
    ]
  },
  {
    "title": "Child Health & Development",
    "image": "/assets/images/child-health.jpg",
    "description": "Gentle Ayurvedic support for children's immunity, growth, and mental wellness.",
    "process": [
      "Comprehensive developmental and health evaluation",
      "Immune-boosting herbal and dietary plans",
      "Therapies for respiratory, digestive, and neurological issues",
      "Customized growth and cognitive enhancement programs"
    ],
    "benefits": [
      "Treats cough, cold, and bronchitis",
      "Supports growth in height and weight",
      "Manages epilepsy, stammering, and weak memory",
      "Improves general vitality and respiratory strength"
    ]
  },
  {
    title: "Digestive & Intestinal Health",
    image: "/assets/images/detox.jpg",
    description: "Heal the gut, enhance digestion, and restore vitality with Ayurvedic wisdom.",
    process: [
      "Thorough digestive health assessment",
      "Detox and Panchakarma therapies for gut reset",
      "Personalized diet, herbal formulations, and lifestyle plan",
      "Targeted treatment for chronic bowel issues"
    ],
    benefits: [
      "Relieves acidity, constipation, and indigestion",
      "Treats IBS, colitis, dysentery, and gastritis",
      "Improves appetite and bowel regularity",
      "Reduces inflammation and gut sensitivity",
      "Manages piles and promotes intestinal balance"
    ]
  },
  {
    "title": "Bones & Skeleton Health",
    "image": "/assets/images/joint-pain.png",
    "description": "Comprehensive Ayurvedic care for joint, bone, and spine health.",
    "process": [
      "Holistic assessment of skeletal and joint conditions",
      "Restorative massages, Basti, and external therapies",
      "Dietary and herbal plans for bone nourishment",
      "Therapies for osteoarthritis, osteoporosis, and back care"
    ],
    "benefits": [
      "Strengthens bones and improves joint function",
      "Eases sciatica, arthritis, and lower back pain",
      "Manages osteoporosis and osteomalacia",
      "Addresses gout, cervical issues, and injuries"
    ]
  },
  {
    "title": "Holistic Chronic Care & Wellness",
    "image": "/assets/images/general-diseases.png",
    "description": "Ayurvedic solutions for modern lifestyle disorders and chronic health issues.",
    "process": [
      "Detailed consultation to identify root imbalances",
      "Herbal, detox, and dietary therapy plans",
      "Nervous system calming techniques",
      "Regular follow-up and preventive guidance"
    ],
    "benefits": [
      "Manages asthma, diabetes, and sinusitis",
      "Reduces migraine, anxiety, and stress",
      "Improves urinary health and addresses stones",
      "Enhances emotional balance and sleep"
    ]
  },
  {
    title: "Personal Wellness & Rejuvenation",
    image: "/assets/images/personal_health_care.jpg",
    description: "Holistic Ayurvedic therapies for natural beauty, rejuvenation, and inner harmony.",
    process: [
      "Customized Rasayana and detox protocols",
      "Skin and hair analysis with Ayurvedic solutions",
      "Herbal and oil-based treatments for face and body",
      "Mind-body therapies for radiance and balance",
      "Rituals for nourishment, beautification, and anti-aging"
    ],
    benefits: [
      "Treats acne, pimples, and under-eye dark circles",
      "Reduces wrinkles, ageing signs, and skin cracks",
      "Improves hair health and addresses alopecia",
      "Supports weight balance and breast toning",
      "Enhances natural glow, mood, and restful sleep"
    ]
  },
  {
    "title": "Basti Therapy (Oil Retention & Medicinal Enema)",
    "slug": "basti",
    "image": "/assets/images/kneeBasti.png",
    "description": "Basti is a powerful Ayurvedic therapy that includes two main types: localized oil retention therapy and medicated enemas. Localized basti involves retaining warm herbal oil over specific areas of the body using a dough ring, while medicated enemas (Niruha and Anuvasana) deliver herbal decoctions, oils, or milk through the rectum to detoxify and nourish the body. It is especially effective for balancing Vata dosha.",
    "process": [
      "For localized Basti: Dough ring is placed on the body area and filled with warm herbal oil",
      "For medicated Basti: Herbal decoctions, oils or milk are administered rectally under supervision",
      "Therapy duration and ingredients are tailored based on individual needs"
    ],
    "benefits": [
      "Relieves joint pain, sciatica, lower back and knee pain",
      "Alleviates Vata-related conditions like insomnia, anxiety, Parkinsonism, and facial palsy",
      "Improves spinal and nervous system health",
      "Eliminates accumulated toxins (mala) and balances vitiated Vata"
    ],
    "types": [
      "Kati Basti (Lower Back Therapy)",
      "Knee Basti (Joint Care)",
      "Heart Care Basti (Cardiac Support)",
      "Shiro Basti (Scalp and Mind Balance)",
      "Medicated Enema (Irrigation with herbal decoctions, oils, or milk)"
    ]
  },
  {
    title: "Shirodhara Therapy",
    image: "/assets/images/sirodhara-therapy.png",
    description: "A tranquil Ayurvedic therapy where warm herbal oil flows rhythmically onto the forehead to calm the mind and soothe the senses.",
    process: [
      "Client lies comfortably on a massage table with eyes gently covered",
      "Warm, medicated oil flows in a steady stream onto the third eye (forehead)",
      "Therapy continues for 30–45 minutes with optional head and shoulder massage",
      "Followed by post-treatment rest and gentle cleansing"
    ],
    benefits: [
      "Reduces anxiety, stress, and mental fatigue",
      "Promotes deep relaxation and better sleep",
      "Alleviates headaches and migraines",
      "Enhances clarity, focus, and emotional balance",
      "Supports nervous system balance and Vata pacification"
    ],
    types: [
      "Oil Shirodhara – Classic warm oil flow for relaxation",
      "Buttermilk Shirodhara – Cooling therapy for headaches and pitta imbalance",
      "Milk Shirodhara – Nourishing for dryness and insomnia",
      "Herbal Decoction Shirodhara – Targeted for conditions like sinusitis and hair care",
      "Stress Relief Dhara – Special formulation for mental exhaustion",
      "Silent Sleep Dhara – Calming oils to support insomnia and restlessness",
      "Hypertension Balance Dhara – Designed to regulate blood pressure and calm the nerves",
      "Migraine Relief Dhara – Formulation focused on reducing chronic migraines",
      "Hair Care Dhara – Enhances scalp health and supports hair rejuvenation"
    ]
  },     
  {
    title: "Massage Therapy",
    slug: "massage",
    image: "/assets/images/Ayurvedic-Massage.jpg",
    description: "A deeply relaxing treatment using warm herbal oils tailored to your dosha.",
    process: [
      "Personal dosha assessment & oil selection",
      "Full body Abhyanga massage to increase circulation",
      "Optional steam (Swedana) for deeper detoxification"
    ],
    benefits: [
      "Relieves stress & tension",
      "Improves lymphatic flow",
      "Supports better sleep & nervous system balance"
    ]
  },
  {
    "title": "Nasya (Nasal Drops)",
    "slug": "nasya",
    "image": "/assets/images/nasal-detox.jpeg",
    "description": "A special Ayurvedic nasal cleansing therapy using herbal oils to relieve sinus, migraine, and stress-related issues.",
    "process": [
      "Application of warm herbal oil over the sinuses",
      "Steam or gentle massage to prepare the area",
      "Administration of medicated drops into nasal passages"
    ],
    "benefits": [
      "Helps relieve chronic allergic sinusitis",
      "Reduces sinus headaches and migraines",
      "Improves hair health and memory balance"
    ],
    "types": [
      "Stress relief",
      "Hair Care",
      "Sinus Care",
      "Migraine relief",
      "Memory balance"
    ]
  },
  {
    "title": "Herbal Treatments",
    "slug": "herbal",
    "image": "/assets/images/herbal.jpg",
    "description": "Ayurvedic herbal treatments involve the use of natural medicines such as kadhas (herbal decoctions), churnas (powders), lehyas (herbal jams), and capsules made from traditional plant-based formulations. These remedies are prescribed based on your dosha constitution and health concerns, aiming to detoxify the body, strengthen immunity, and restore internal balance without side effects.",
    "process": [
      "Detailed Ayurvedic consultation with pulse, tongue, and lifestyle analysis",
      "Prescription of customized herbal formulations suited to your unique dosha and condition",
      "Dietary, sleep, and routine recommendations to complement and enhance herbal action"
    ],
    "benefits": [
      "Supports healthy digestion, detoxification, and gut flora",
      "Balances hormones, emotions, and mental clarity",
      "Strengthens immunity and promotes long-term vitality",
      "Gentle, holistic healing with minimal or no side effects"
    ]
  },  
  
  
  
  
];

const Ourservices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-[#f9f7f3] py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#6B705C] italic mb-4">
          Explore Our Ayurvedic Services
        </h2>
        <span className="text-md text-gray-500 tracking-wide block mb-12">
          Empowering wellness through ancient wisdom and personalised care.
        </span>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelected(service)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover w-full h-48"
              />
              <h3 className="text-lg font-semibold text-[#6B705C] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-black-900 text-4xl z-10"
                  aria-label="Close"
                >
                  &times;
                </button>

                {/* Image */}
                <div className="w-full h-48 md:h-64 overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Scrollable content */}
                <div className="p-6 overflow-y-auto text-left">
                  <h3 className="text-2xl font-bold text-[#6B705C] mb-2">
                    {selected.title}
                  </h3>
                  <p className="text-gray-700 text-md mb-4">{selected.description}</p>

                  <h4 className="text-[#6B705C] text-lg font-semibold mb-1">
                    How it works
                  </h4>
                  <ul className="list-disc list-inside text-md text-gray-600 mb-4">
                    {selected.process.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>

                  <h4 className="text-[#6B705C] text-lg font-semibold mb-1">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside text-md text-gray-600 mb-4">
                    {selected.benefits.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block mt-6 bg-[#6B705C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#5a604f] transition"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Ourservices;
