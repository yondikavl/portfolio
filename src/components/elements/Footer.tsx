import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <div className="bottom-0 flex w-full flex-col items-center justify-around gap-4 bg-[#181818] py-6 text-[#BCBCBC] md:flex-row">
        <div className="flex gap-4">
          <p className=" text-whitey">2024 Yondika. All Right Reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border-2 border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.github.com/yondikavl/"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border-2 border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yondikavl"
            target="_blank"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-lg border-2 border-[#5C5C5C] bg-[#0f0f0f] p-2 text-xl hover:bg-[#af9d55] hover:text-[#0f0f0f]"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </>
  );
};
