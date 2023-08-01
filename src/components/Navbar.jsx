"use client";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

const Navbar = ({ menu1, menu2 }) => {
  const GithubLink = "https://github.com/yondikavl";
  const LinkedLink = "https://www.linkedin.com/in/yondika-vio-landa/";
  const InstagramLink = "https://instagram.com/yondikavl_";

  const [isMenu1Active, setMenu1Active] = useState(false);
  const [isMenu2Active, setMenu2Active] = useState(false);
  const [isMenu3Active, setMenu3Active] = useState(true);

  return (
    <div className="Navbar">
      <nav className="pt-6 pb-4 px-6 md:px-40 fixed top-0 z-50 w-screen text-white backdrop-blur-sm shadow-lg">
        <div className="flex justify-between">
          <div className="flex lg:w-60 justify-start items-center">
            <Link
              href={menu1}
              onClick={() => {
                setMenu1Active(true);
                setMenu2Active(false);
                setMenu3Active(false);
              }}
              className={`text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] ${
                isMenu1Active ? "bg-white/[0.2]" : ""
              }`}
            >
              WORKS
            </Link>
            <Link
              href={menu2}
              onClick={() => {
                setMenu1Active(false);
                setMenu2Active(true);
                setMenu3Active(false);
              }}
              className={`text-sm bg-white/[.09] p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] ${
                isMenu2Active ? "bg-white/[0.2]" : ""
              }`}
            >
              CONTACT
            </Link>
          </div>
          <div className="flex justify-end lg:justify-center lg:w-60 items-center">
            <Link
              href="/"
              onClick={() => {
                setMenu1Active(false);
                setMenu2Active(false);
                setMenu3Active(true);
              }}
              className={`p-2 text-xl font-bold hover:text-amber-200 ${
                isMenu3Active ? "text-amber-200" : ""
              }`}
            >
              Yondika
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:w-60 justify-end">
            <Link
              href={GithubLink}
              target="_blank"
              className={
                "bg-white/[.09] p-2 mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <GitHubIcon />
            </Link>
            <Link
              href={LinkedLink}
              target="_blank"
              className={
                "bg-white/[.09] p-2 mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <LinkedInIcon />
            </Link>
            <Link
              href={InstagramLink}
              target="_blank"
              className={
                "bg-white/[.09] p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
