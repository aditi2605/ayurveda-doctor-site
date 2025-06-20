"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      // const phone = form.phone.value;
      const email = form.email.value;
      const service = form.service.value;
      const message = form.message.value;

      const fullMessage = `Hello, my name is ${name}. I'm interested in the service: ${service}. Here's my message:\n${message}\nYou can reach me at ${email} or ${phone}.`;

      const whatsappURL = `https://wa.me/918780493489?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappURL, "_blank");

      // FormSubmit setup
      form.action = "https://formsubmit.co/c5f83eb6b4bb5ed9f02abd0c8a3cd195";
      form.method = "POST";

      // Submit the form and show thank-you
      setTimeout(() => {
        form.submit();
        setSubmitted(true);
      }, 500);
    };
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
          <li>✔ 35+ Years of Healing Expertise</li>
          <li>✔ Personalised, Holistic Wellness</li>
        </ul>

       <div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="sm:col-span-2">
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                containerClass="!w-full !rounded-lg !border !border-gray-300 !focus-within:ring-2 !focus-within:ring-emerald-400"
                inputClass="!w-full !h-[52px] !pl-16 !text-black !bg-white !border-none !focus:outline-none"
                buttonClass="!bg-white !border-r !border-gray-300 !px-3"
              />
            </div>
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
            <option value="Women's Health">Women’s Health & Fertility</option>
            <option value="Child Health & Development">Child Health & Development</option>
            <option value="Digestive & Intestinal Health">Digestive & Intestinal Health</option>
            <option value="Bones & Skeleton Health">Bones & Skeleton Health</option>
            <option value="Holistic Chronic Care & Wellness">Holistic Chronic Care & Wellness</option>
            <option value="Personal Wellness & Rejuvenation">Personal Wellness & Rejuvenation</option>
            <option value="Basti Therapy (Oil Retention & Medicinal Enema)">Basti Therapy (Oil Retention & Medicinal Enema)</option>
            <option value="Shirodhara Therapy">Shirodhara Therapy</option>
            <option value="Massage Therapy">Massage Therapy</option>
            <option value="Nasya (Nasal Drops)">Nasya (Nasal Drops)</option>
            <option value="Herbal Treatments">Herbal Treatments</option>
            <option value="Herbal Treatments">other</option>
          </select>

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell us how we can help you..."
            className="w-full text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>

           {/* Hidden inputs for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}


          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full mt-6 bg-[#6B705C] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#5a604f] transition"
          >
            Send Message
          </motion.button>
        </form>
      ) : (
        <div className="text-center p-6 bg-emerald-50 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-emerald-700">Thank you!</h2>
          <p className="text-emerald-600 mt-2">
            Your message has been sent. We will get back to you shortly.
          </p>
        </div>
      )}
    </div>

        {/* Quick Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xl font-semibold text-[#6B705C]">Location</p>
            <p className="text-gray-600 text-sm">104,
                Darshanam Capital,
                Near Waves Club,
                Vasna-Bhayli Road,
                Vadodara, Gujarat, India - 391410.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[#6B705C]"> Phone</p>
            <p className="text-gray-600 text-sm">+91 8780493489 </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[#6B705C]">Email</p>
            <p className="text-gray-600 text-sm">mayasayurveda@outlook.com</p>
          </div>
        </div>

        {/* Map */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Maya%27s+Ayurveda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-72 rounded-xl overflow-hidden shadow-md mt-12">
            {/* <Image
              src="/assets/images/clinic_img.png"
              alt="Maya's Ayurveda Map"
              width={800}
              height={300}
              className="object-cover w-full h-full"
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.219923648406!2d73.12974950948933!3d22.28821177961055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7f65fdb263b%3A0xaaeeb14147c94cd4!2sDarshanam%20Capital%20-%20Shops%2C%20Offices%20%26%20Showrooms%20for%20Sale%20in%20Vadodara!5e1!3m2!1sen!2suk!4v1748353671947!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
