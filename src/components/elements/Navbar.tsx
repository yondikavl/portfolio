"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="fixed z-10 flex w-full items-center justify-between p-6 text-[#BCBCBC] backdrop-blur-md lg:px-72">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#AF9D55]">
            Yondika
          </Link>
        </div>
        <div className="hidden gap-4 md:flex">
          <Link
            href="/work"
            className="flex min-h-12 min-w-20 items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] px-4 py-2 hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f]"
          >
            Work
          </Link>
          <Link
            href="/certif"
            className="flex min-h-12 min-w-20 items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] px-4 py-2 hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f]"
          >
            Certificate
          </Link>
          <Link
            href="https://www.instagram.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.github.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yondika-vio-landa"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] p-2 text-2xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#0f0f0f] md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:text-white absolute right-8 top-8 text-3xl text-[#AF9D55]"
          >
            <FaTimes />
          </button>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-8">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-[#AF9D55]"
                onClick={toggleMenu}
              >
                Yondika
              </Link>
            </div>
            <Link
              href="/work"
              className="flex min-h-12 w-full items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] px-4 py-2 text-whitey hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f]"
              onClick={toggleMenu}
            >
              Work
            </Link>
            <Link
              href="/certif"
              className="flex min-h-12 w-full items-center justify-center rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] px-4 py-2 text-whitey hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f]"
              onClick={toggleMenu}
            >
              Certificate
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/yondikavl/"
                target="_blank"
                className="hover:text-white text-2xl text-[#AF9D55]"
                onClick={toggleMenu}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.github.com/yondikavl/"
                target="_blank"
                className="hover:text-white text-2xl text-[#AF9D55]"
                onClick={toggleMenu}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yondikavl"
                target="_blank"
                className="hover:text-white text-2xl text-[#AF9D55]"
                onClick={toggleMenu}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
