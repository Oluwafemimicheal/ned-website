import React, { useEffect } from 'react'
import { Button } from './button';
import logo from "../../assets/Background_Imgs/adjustedLogo.png"

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Listings", href: "#listings" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "fixed bg-white/20 backdrop-blur-2xl text-black w-full top-0 left-0 z-99 shadow" : "fixed top-0 left-0 w-full z-50"}`}>
      {/* "sticky top-0 left-0 w-full z-50" */}
      {/* bg-white/80 backdrop-blur-md */}
      <div className="max-w-7xl  mx-auto px-6">
        <div className="flex items-center justify-between h-20 overflow-hidden">
          
          {/* <Logo /> */}
          <div className='w-25 h-25 flex items-center'>
            <img src={logo} alt="" />
            <div>

            </div>
          </div>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${scrolled ? "text-black hover:text-primary" : "text-white hover:text-primary transition-colors"} font-semibold transition-colors`} >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button>Schedule Appointment</Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          >
            <span
              className={`block h-0.5 w-6 lg:bg-black bg-white transition-all duration-300 
              ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 lg:bg-black bg-white my-1 transition-all duration-300 
              ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 lg:bg-black bg-white transition-all duration-300 
              ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {/* I improved the mobile view for the menu button*/}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col space-y-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 text-lg hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button className="w-full">
              Schedule Appointment
            </Button>
          </ul>
        </div>

      </div>
    </nav>
  );
};


export default Navbar
