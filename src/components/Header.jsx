import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigationLinks = [
    { href: "https://ronakhingonia.vercel.app/#about", label: "About" },
    { href: "https://ronakhingonia.vercel.app/#projects", label: "Projects" },
    {
      href: "/daily-tweets",
      label: "Daily Tweets",
      needsCustomNavigation: true, // Add this flag for Daily Tweets
    },
    {
      href: "https://drive.google.com/file/d/1P6YLzrkxh0dVn11orE5vc1QGbXq2vbmt/view?usp=sharing",
      label: "My CV",
      target: "_blank",
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto md:mt-0 -mt-4">
        <a
          href="https://drive.google.com/file/d/1P6YLzrkxh0dVn11orE5vc1QGbXq2vbmt/view?usp=sharing"
          target="_blank"
          className="md:flex hidden items-center h-full px-4 py-2 bg-black text-white text-base leading-normal font-normal rounded-md hover:bg-gray-800 transition-colors duration-300 ml-6"
        >
          My CV
        </a>
        <ul className="md:flex hidden gap-x-8 ml-auto">
          <li>
            <a
              href="https://ronakhingonia.vercel.app/#about"
              className="text-base leading-normal font-normal text-black relative transition-all duration-300 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://ronakhingonia.vercel.app/#projects"
              className="text-base leading-normal font-normal text-black relative transition-all duration-300 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("isNavigating", "true");
                window.location.href = "/daily-tweets";
              }}
              href="/daily-tweets"
              className="text-base leading-normal font-normal text-black relative transition-all duration-300 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full"
            >
              Daily Tweets
            </a>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 z-50"
            onClick={toggleMenu} // Close menu when clicking outside links
          >
            <div
              className="flex flex-col items-center space-y-6"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on menu items
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  target={link.target}
                  className="text-base leading-normal font-normal text-black hover:text-gray-600"
                  onClick={(e) => {
                    if (link.needsCustomNavigation) {
                      e.preventDefault();
                      localStorage.setItem("isNavigating", "true");
                      window.location.href = link.href;
                    }
                    toggleMenu();
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <div className="md:hidden h-[20vh]"></div>
    </>
  );
};

export default Header;
