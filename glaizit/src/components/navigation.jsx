"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-700 h-[100px] flex items-center justify-between px-4 md:px-8 lg:px-16 ">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Glaizit Logo"
            priority
            height={70}
            width={70}
            className="cursor-pointer"
          />
        </Link>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-[#A76D09]">
            Home
          </Link>
          <Link href="/glaizes" className="hover:text-[#A76D09]">
            Glaizes
          </Link>
          <Link href="/videos" className="hover:text-[#A76D09]">
            Videos
          </Link>
          <Link href="/blogs" className="hover:text-[#A76D09]">
            Blogs
          </Link>
          <Link href="/forums" className="hover:text-[#A76D09]">
            Forums
          </Link>
          <Link href="/about" className="hover:text-[#A76D09]">
            About
          </Link>
        </div>
      </div>
      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-[#A76D09] text-white rounded-[24px] px-6 py-2 w-[100.59px] h-[48px] hover:bg-opacity-90 transition duration-300 ease-out">
          Signup
        </button>
        <button className="border-2 border-[#A76D09] text-[#A76D09] rounded-[24px] w-[100.59px] h-[48px] hover:bg-[#A76D09] hover:text-white transition duration-300 ease-out">
          Register
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <HiOutlineX className="w-8 h-8 text-[#A76D09]" />
          ) : (
            <HiOutlineMenu className="w-8 h-8 text-[#A76D09]" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 p-6 md:hidden"
      >
        <div className="flex flex-col gap-6">
          <Link href="/" onClick={toggleMenu} className="hover:text-[#A76D09]">
            Home
          </Link>
          <Link
            href="/glaizes"
            onClick={toggleMenu}
            className="hover:text-[#A76D09]"
          >
            Glaizes
          </Link>
          <Link
            href="/videos"
            onClick={toggleMenu}
            className="hover:text-[#A76D09]"
          >
            Videos
          </Link>
          <Link
            href="/blogs"
            onClick={toggleMenu}
            className="hover:text-[#A76D09]"
          >
            Blogs
          </Link>
          <Link
            href="/forums"
            onClick={toggleMenu}
            className="hover:text-[#A76D09]"
          >
            Forums
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-[#A76D09]"
          >
            About
          </Link>
          <button className="bg-[#A76D09] text-white rounded-[24px] px-6 py-2 w-full hover:bg-opacity-90 transition duration-300 ease-out">
            Signup
          </button>
          <button className="border-2 border-[#A76D09] text-[#A76D09] rounded-[24px] px-6 py-2 w-full hover:bg-[#A76D09] hover:text-white transition duration-300 ease-out">
            Register
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
