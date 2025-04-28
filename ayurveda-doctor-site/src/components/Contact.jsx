"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative bg-[#f9f7f3] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden mt-24">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 bg-[url('/assets/images/leaf-pattern.jpg')] opacity-10 bg-cover bg-no-repeat z-0"></div> */}

      <div className="relative z-10 max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 sm:p-10 lg:p-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-[#6B705C] mb-6 text-center italic"
        >
          Get In Touch
        </motion.h2>

        {/* Why Contact Section */}
        <ul className="text-center text-gray-600 mb-8 space-y-1 text-sm">
          <li>✔ Confidential Ayurvedic Consultations</li>
          <li>✔ 30+ Years of Healing Expertise</li>
          <li>✔ Personalised, Holistic Wellness</li>
        </ul>

        <form
          action=""
          method=""
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <select
            name="service"
            required
            defaultValue=""
            className="w-full text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Massage">Massage</option>
            <option value="Herbal Therapy">Herbal Therapy</option>
            <option value="Panchakarma">Panchakarma</option>
            <option value="Personal Wellness">Personal Wellness & Rejuvenation</option>
            <option value="Women's Health">Women’s Health & Fertility</option>
            <option value="Detox">Detox</option>
            <option value="Disease & Guts">Disease & Guts</option>
          </select>

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell us how we can help you..."
            className="w-full text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Send Message
          </motion.button>
        </form>

        {/* Quick Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xl font-semibold text-emerald-600">Location</p>
            <p className="text-gray-600 text-sm">Vadodara, Gujarat, India</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-emerald-600"> Phone</p>
            <p className="text-gray-600 text-sm">+91 6354388393</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-emerald-600">Email</p>
            <p className="text-gray-600 text-sm">info@ayurvedaheals.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-md mt-12">
          <iframe
            src=""
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
