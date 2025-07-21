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
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50">
      <div className="bg-[#6B705C] rounded-full py-4 px-2 flex flex-col gap-4 items-center shadow-lg">
        {menuItems.map((item, index) => (
          <button
            key={item}
            onClick={() => handleClick(index)}
            className={`group relative flex items-center justify-center text-white transition hover:scale-110 ${
              index === activeIndex ? "text-green-400" : "opacity-80"
            }`}
          >
            <div className="p-2 rounded-full hover:bg-gray-700 transition">
              {icons[index]}
            </div>

            {/* Label shown on hover */}
            <span className="absolute right-full ml-3 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
