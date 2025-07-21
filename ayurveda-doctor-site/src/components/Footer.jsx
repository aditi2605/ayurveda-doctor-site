'use client'
import React from 'react';
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
     <footer className="bg-[#EAE7DC] text-[#3E3E3E] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-bold text-[#4B3425] mb-2">Maya's Ayurveda</h2>
          <p className="text-sm text-gray-600">
            Maya’s Ayurveda is a holistic wellness centre in Vadodara, Gujarat, offering authentic Ayurvedic therapies, personalised consultations, and natural treatments for women's health, joint pain, stress, and lifestyle imbalances. We specialise in treatments like Shirodhara, Janu Basti, Nasya, and hormone-balancing therapies. Our mission is to help you restore balance, vitality, and peace using time-tested Ayurvedic principles tailored for modern life.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/book" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 8780493489 </li>
            <li className="flex items-center gap-2"><Mail size={16} /> drmayasayurveda@gmail.com</li>
            <li className="flex items-center gap-2">
              <Facebook size={16} className="text-[#3B5998]" />
              <Instagram size={16} className="text-[#E1306C]" />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-[#888]">
        © {new Date().getFullYear()} Maya's Ayurveda. All rights reserved.
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
