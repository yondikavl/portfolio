import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <div className="bottom-0 flex w-full flex-col items-center justify-between gap-4 bg-[#181818] py-6 text-[#BCBCBC] md:flex-row lg:px-72">
        <div className="flex flex-col gap-1">
          <p className="text-white">
            © 2024 Yondika. All Rights Reserved.
          </p>
          <p className="text-sm text-[#8d8d8d]">
            Latest Update: May 7, 2026
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.github.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yondikavl"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </>
  );
};