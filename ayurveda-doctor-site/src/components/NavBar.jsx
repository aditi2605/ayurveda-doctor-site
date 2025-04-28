// components/FloatingMenu.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, User, Leaf, Mail } from "lucide-react";

const routes = ["/", "/about", "/ourservices", "/contact"];
const menuItems = ["Home", "About", "Services", "Contact"];
const icons = [<Home size={16} />, <User size={16} />, <Leaf size={16} />, <Mail size={16} />];

export const NavBar = () => {
  // const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll to show/hide menu
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setVisible(window.scrollY > 100);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Highlight active route
  useEffect(() => {
    const index = routes.indexOf(pathname);
    setActiveIndex(index);
  }, [pathname]);

  const handleClick = (index) => {
    setActiveIndex(index);
    router.push(routes[index]);
  };

  return (
    <div
      className="fixed bottom-6 right-4 z-50 transition-all duration-500 opacity-100 translate-y-0">
      <div className="bg-[#6B705C] text-white shadow-xl rounded-full px-4 py-2 flex items-center gap-3 text-sm md:text-base">
        {menuItems.map((item, index) => (
          <button
            key={item}
            onClick={() => handleClick(index)}
            className={`relative flex items-center gap-1 hover:underline transition text-white ${
              index === activeIndex ? "font-semibold" : "opacity-80"
            }`}
          >
            {icons[index]}
            <span>{item}</span>

            {index === activeIndex && (
              <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
