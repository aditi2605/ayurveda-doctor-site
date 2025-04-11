"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";
import Logo from "../../public/assets/images/heroImg_2.png";

const routes = ["/", "/about", "/ourservices", "/contact"];
const menuItems = ["Home", "About", "Services", "Contact"];

export const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentIndex = routes.indexOf(pathname);
    setActiveIndex(currentIndex);
  }, [pathname]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false); 
    router.push(routes[index]);
  };

  return (
    // <nav className="w-full bg-[#EAE7DC] text-[#1B1B1B] shadow-md px-6 py-4 fixed top-0 z-50">
    //   <div className="max-w-7xl mx-auto flex justify-between items-center">
    //     <h1 className="text-2xl font-bold tracking-tight text-[#4B3425]">Dr. Maya Parikh</h1>

    //     {/* Desktop Menu */}
    //     <div className="hidden md:flex gap-8">
    //       {menuItems.map((item, index) => (
    //         <button
    //           key={item}
    //           onClick={() => handleClick(index)}
    //           className={`text-md font-medium transition-all hover:text-[#B36A5E] ${
    //             index === activeIndex ? "text-[#B36A5E] underline" : "text-[#3E3E3E]"
    //           }`}
    //         >
    //           {item}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Mobile Burger Icon */}
    //     <div className="md:hidden">
    //       <button onClick={() => setMenuOpen(!menuOpen)}>
    //         {menuOpen ? <X size={24} /> : <Menu size={24} />}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Dropdown Menu */}
    //   {menuOpen && (
    //     <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
    //       {menuItems.map((item, index) => (
    //         <button
    //           key={item}
    //           onClick={() => handleClick(index)}
    //           className={`text-base py-1 font-medium transition-all border-b ${
    //             index === activeIndex ? "text-[#B36A5E]" : "text-[#3E3E3E]"
    //           }`}
    //         >
    //           {item}
    //         </button>
    //       ))}
    //     </div>
    //   )}
    // </nav>
    <nav className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex shrink-0">
            <Image
               src={Logo}
               alt="Logo"
               width={40}
               height={40}
               className="object-cover"
            />
            <h1 className="text-lg font-bold tracking-tight text-[#4B3425] mt-2">Dr. Maya Parikh</h1>
        </div>
  
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {menuItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleClick(index)}
              className={`inline-block rounded-lg px-2 py-1 text-md font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                index === activeIndex ? "text-[#B36A5E] underline" : "text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
  
        {/* Search Box */}
        <div className="hidden sm:flex items-center justify-end gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-xl border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-[#B36A5E]"
            />
            <div className="absolute right-2 top-1.5 text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
  
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
          {menuItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleClick(index)}
              className={`text-base py-1 font-medium transition-all border-b ${
                index === activeIndex ? "text-[#B36A5E]" : "text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
  
          {/* Mobile Search */}
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-[#B36A5E]"
            />
            <div className="absolute right-2 top-1.5 text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
  
  );
};


export default NavBar
