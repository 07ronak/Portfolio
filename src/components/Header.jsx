import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
    {
      href: "/documents/Ronak_Hingonia_MasterCV.pdf", // Local path
      label: "Master CV",
      target: "_blank", // Opens in new tab
    },
  ];

  const linkClassName =
    "text-base leading-normal font-normal text-black relative transition-all duration-300 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full";

  return (
    <>
      <header className="flex justify-end items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto md:mt-0 -mt-4">
        {/* Desktop Navigation */}
        <nav className="md:flex hidden">
          <ul className="flex gap-x-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.target}
                  rel={link.target ? "noopener noreferrer" : undefined}
                  className={
                    link.label === "Master CV"
                      ? `${linkClassName} font-semibold`
                      : linkClassName
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} className="w-6 h-6 text-black" />
          ) : (
            <Menu size={24} strokeWidth={2} className="w-6 h-6 text-black" />
          )}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 z-50"
          onClick={toggleMenu}
        >
          <nav
            className="flex flex-col items-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
                className="text-base leading-normal font-normal text-black hover:text-gray-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile spacing div */}
      <div className="md:hidden h-[20vh]" />
    </>
  );
};

export default Header;
