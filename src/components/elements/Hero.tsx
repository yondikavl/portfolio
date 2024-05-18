"use client";

import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFile, FaGlobe, FaShapes } from "react-icons/fa6";
import { Card } from "./Card";

export const Hero = () => {
  const onClick = () => {
    window.open("/about", "_blank");
  };

  return (
    <>
      <main className="mt-12 flex min-h-screen flex-col items-stretch justify-center text-whitey md:mt-24">
        <img
          src="bg-ellips-1.svg"
          alt=""
          className="absolute right-0 top-0"
          style={{ zIndex: -1 }}
        />
        <div className="text-center ">
          <h1 className="mb-4 text-2xl text-[#af9d55] md:text-7xl">Hi, Iam</h1>
          <h1
            className="text-6xl font-bold text-goldy md:text-9xl"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Yondika Vio Landa
          </h1>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onClick}
            className="flex min-h-12 min-w-20 items-center justify-center gap-4 rounded-lg border border-[#5C5C5C] bg-[#0f0f0f] px-4 py-2 hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f] md:text-xl"
          >
            <FaFile className="md:text-xl" />
            View Resume
          </button>
        </div>
        <div className="mt-8">
          <p className="text-justify text-sm md:text-base">
            An{" "}
            <span className="font-bold">
              undergraduate Informatics Engineering
            </span>{" "}
            program at the Sumatera Institute of Technology, passionate about
            pursuing a career in development. Skilled in{" "}
            <span className="font-bold">mobile development</span>
            tools such as <span className="font-bold">Kotlin</span> and{" "}
            <span className="font-bold">React Native</span>, as well as
            <span className="font-bold">web development</span> using{" "}
            <span className="font-bold">HTML, CSS and JavaScript</span>. A
            detail-oriented individual with a successful track record of
            managing several projects fueled by a strong interest in mobile and
            web development.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <Card
            icon={<FaGlobe className="md:text-3xl" />}
            text="Web Development"
          />
          <Card
            icon={<FaMobileAlt className="md:text-3xl" />}
            text="Mobile Development"
          />
          <Card
            icon={<FaShapes className="md:text-3xl" />}
            text="UIUX Design"
          />
        </div>
      </main>
    </>
  );
};
