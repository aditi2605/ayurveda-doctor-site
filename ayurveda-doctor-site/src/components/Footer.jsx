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
          <h2 className="text-lg font-bold text-[#4B3425] mb-2">Dr. Maya Parikh</h2>
          <p className="text-sm text-gray-600">
            Specialist in women’s health, chronic conditions, and personalised holistic care.
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
            <li className="flex items-center gap-2"><Phone size={16} /> +91 6354388393</li>
            <li className="flex items-center gap-2"><Mail size={16} /> drmaya@example.com</li>
            <li className="flex items-center gap-2">
              <Facebook size={16} className="text-[#3B5998]" />
              <Instagram size={16} className="text-[#E1306C]" />
              <Facebook size={16} className="text-[#3B5998]" />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-[#888]">
        © {new Date().getFullYear()} Dr. Maya Ayurveda. All rights reserved.
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
