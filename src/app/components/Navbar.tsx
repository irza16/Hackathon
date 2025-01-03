'use client'

import { useState } from "react";
import Image from "next/image";
import check1 from "../assets/check 1.png";
import Vector from "../assets/Vector.png";
import alertcircle1 from "../assets/alert-circle 1.png";
import LogoIcon from "../assets/Logo Icon.png";
import Link from "next/link";
import Group from "../assets/Group.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-9 md:px-16 lg:px-32 xl:px-56 2xl:px-[300px] py-[14px] bg-[#272343] ">

        <div className="flex items-center gap-2 opacity-70">
          <Image src={check1} alt="check 1" className="w-4 h-4" />
          <span className="text-xs sm:text-sm md:text-base text-white">
            Free Shipping on All Orders Over $50
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 opacity-70">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm md:text-base text-white">Eng</span>
            <Image src={Vector} alt="Vector" className="w-2 h-2" />
          </div>
          <span className="text-xs sm:text-sm md:text-base text-white">Faqs</span>
          <div className="flex items-center gap-2">
            <Image src={alertcircle1} alt="alert-circle 1" className="w-4 h-4" />
            <span className="text-xs sm:text-sm md:text-base text-white">Need Help</span>
          </div>
        </div>
      </div>

      
      <div className="flex justify-between items-center px-4 sm:px-9 md:px-16 lg:px-32 xl:px-56 2xl:px-[300px] py-4 bg-[#F0F2F3] ">
        <div className="flex items-center gap-2">
          <Image src={LogoIcon} alt="Logo Icon" className="w-10 h-10" />
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#272343]">
            Comforty
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Hamburger Menu for Mobile */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-[#272343] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#272343] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#272343]"></div>
          </button>

          
          <div className="hidden lg:flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
            <Link href="/Cart">
              <Image src={Group} alt="Group" className="w-5 h-5" />
            </Link>
            <Link href="/Cart">
              <span className="text-xs sm:text-sm md:text-base text-[#272343]">Cart</span>
            </Link>
            
              <div className="flex items-center justify-center w-5 h-5 bg-[#007580] rounded-full">
                <span className="text-[10px] sm:text-xs text-white">2</span>
              </div>
            
          </div>
        </div>
      </div>

      
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-md absolute w-full z-10`}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          <Link href="/" className="text-sm font-medium text-[#007580]">
            Home
          </Link>
          <Link href="/Shop" className="text-sm font-medium text-[#636270]">
            Shop
          </Link>
          <Link href="/Product" className="text-sm font-medium text-[#636270]">
            Product
          </Link>
          <Link href="/Pages" className="text-sm font-medium text-[#636270]">
            Pages
          </Link>
          <Link href="/About" className="text-sm font-medium text-[#636270]">
            About
          </Link>
        </nav>
      </div>

      
      <div className="hidden lg:flex h-[74px] justify-between items-center lg:px-32 xl:px-56 2xl:px-[300px] lg:py-[14px] bg-white shadow-md">

        <div className="flex gap-4">
          <Link href="/" className="text-sm font-medium leading-[15.4px] text-[#007580]">
            Home
          </Link>
          <Link href="/Shop" className="text-sm font-medium text-[#636270] leading-[15.4px]">
            Shop
          </Link>
          <Link href="/Product" className="text-sm font-medium text-[#636270] leading-[15.4px]">
            Product
          </Link>
          <Link href="/Pages" className="text-sm font-medium text-[#636270] leading-[15.4px]">
            Pages
          </Link>
          <Link href="/About" className="text-sm font-medium text-[#636270] leading-[15.4px]">
            About
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#636270]">Contact:</span>
          <span className="text-sm font-medium text-[#272343]">
            (808) 555-0111
          </span>
        </div>
      </div>
    </div>
  );
}
