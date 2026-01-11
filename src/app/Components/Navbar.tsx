"use client";
import { useState } from "react";
import Image from "next/image";
import "../globals.css";

import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar w-full bg-[#011518] backdrop-blur-md sticky top-0 z-50 shadow-2xl p-3 navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo  */}
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/images/3 1.png"
                  height={200}
                  width={200}
                  alt="logo"
                  className="object-contain"
                />

                {/* <h1 className="ml-2 text-xl font-semibold text-white">Vizentoo</h1> */}
              </div>
            </Link>

            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <Link href="/">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Home
                  </li>
                </Link>
                <Link href="/Price">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Pricing
                  </li>
                </Link>
                <Link href="/Services">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Services
                  </li>
                </Link>
                <Link href="/About">
                  {" "}
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    About us
                  </li>
                </Link>
                <Link href="/Blog">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Blog
                  </li></Link>
                <Link href="/Portfolio">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors ">
                    Portfolio
                  </li>
                </Link>
              </ul>
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block md:pl-5">
              <button className="text-white bg-green-600 hover:bg-green-700 px-10 py-2  rounded-full font-medium transition-colors">
                <Link href="/Contact">Contact</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent backdrop-blur-md sticky top-0 z-50 shadow-2xl">
              <ul className="flex flex-col space-y-4 p-4">
                <Link href="/Price">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Pricing
                  </li>
                </Link>
                <Link href="/Services">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Services
                  </li>
                </Link>
                <Link href="/About">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    About us
                  </li>
                </Link>
                <Link href="/Blog">
                  <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                    Blog
                  </li></Link>
                <li className="text-white hover:text-green-600 cursor-pointer transition-colors">
                  Portfolio
                </li>
                <li>
                  <button className="w-full h-10 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full font-medium transition-colors">
                    <Link href="/Contact">Contact</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
