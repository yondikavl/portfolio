"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const GithubLink = "https://github.com/yondikavl";
  const LinkedLink = "https://www.linkedin.com/in/yondika-vio-landa/";
  const InstagramLink = "https://instagram.com/yondikavl_";

  return (
    <div className="Footer">
      <div className="w-screen pb-8 px-4 lg:px-40 text-white">
        <div className="p-[0.025rem] bg-gray-600"></div>
        <div className="flex flex-row justify-between mt-12 flex-wrap text-left items-center">
          <div className="my-2 lg:my-0 w-80">
            <p className="">
              &copy;2023 <strong>Yondika.</strong> All Right Reserved.
            </p>
          </div>
          <div className="my-2 lg:text-center lg:my-0 w-80">
            <p className="">yondikaviolanda@gmail.com</p>
          </div>
          <div className="flex text-center lg:justify-end my-2 lg:my-0 w-80">
            <a
              href={GithubLink}
              target="_blank"
              className={
                "bg-white/[.09] p-[0.68rem] mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <GitHubIcon />
            </a>
            <a
              href={LinkedLink}
              target="_blank"
              className={
                "bg-white/[.09] p-[0.68rem] mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <LinkedInIcon />
            </a>
            <a
              href={InstagramLink}
              target="_blank"
              className={
                "bg-white/[.09] p-[0.68rem] rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
              }
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
