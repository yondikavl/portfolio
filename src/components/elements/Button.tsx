import Link from "next/link";
import React from "react";

export const Button = ({ name, href }: { name: any; href: any }) => {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className="hidden min-h-12 min-w-20 items-center justify-center rounded-lg bg-[#0f0f0f] px-4 py-2 text-whitey hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f] md:flex"
      >
        {name}
      </Link>
    </>
  );
};
