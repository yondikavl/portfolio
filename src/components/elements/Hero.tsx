"use client";

import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFile, FaGlobe, FaShapes, FaGithub } from "react-icons/fa6";
import { Card } from "./Card";

export const Hero = () => {
  const onClick = () => {
    window.open("https://github.com/yondikavl/", "_blank");
  };

  const onClickPdf = () => {
    window.open(
      "https://drive.google.com/file/d/15C-qK55wYyewtwggDuL-7ngaRxWlshyW/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <>
      <main className="mt-20 flex min-h-screen flex-col items-stretch justify-center text-whitey md:mt-8">
        <img
          src="bg-ellips-1.svg"
          alt=""
          className="absolute right-0 top-0"
          style={{ zIndex: -1 }}
        />
        <div className="relative flex flex-col items-center justify-center md:flex-row">
          <div className="relative md:m-12 md:h-96 md:w-96">
            <img src="./yondii.png" alt="yondika" />
            <img
              src="./typescript.svg"
              alt="typescript"
              className="animate-moving-image absolute left-0 top-0"
            />
            <img
              src="./flutter.svg"
              alt="flutter"
              className="animate-moving-image2 absolute bottom-0 right-0"
            />
            <img
              src="./kotlin.svg"
              alt="kotlin"
              className="animate-moving-image3 absolute bottom-0 left-0"
            />
            <img
              src="./javascript.svg"
              alt="javascript"
              className="animate-moving-image4 absolute right-0 top-0"
            />
          </div>
          <div>
            <div className="text-center">
              <h1 className="mb-4 text-xl text-[#af9d55] md:text-5xl">
                Hi, Iam
              </h1>
              <h1
                className="text-7xl font-bold text-goldy md:text-9xl"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                Yondika
              </h1>
              <h1 className="mb-4 text-xl text-[#af9d55] md:text-5xl">
                Vio Landa
              </h1>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={onClick}
                className="flex min-h-12 min-w-20 items-center justify-center gap-4 rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] px-4 py-2 hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f] md:text-xl"
              >
                <FaGithub className="md:text-xl" />
                View Github
              </button>
              <button
                onClick={onClickPdf}
                className="flex min-h-12 min-w-20 items-center justify-center gap-4 rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] px-4 py-2 hover:bg-[#af9d55] hover:font-bold hover:text-[#0f0f0f] md:text-xl"
              >
                <FaFile className="md:text-xl" />
                Portfolio PDF
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-justify text-sm md:text-lg">
            An{" "}
            <span className="font-bold">
              undergraduate Informatics Engineering
            </span>{" "}
            program at the Sumatera Institute of Technology, passionate about
            pursuing a career in development. Skilled in{" "}
            <span className="font-bold">mobile development </span>
            tools such as <span className="font-bold">Kotlin</span> and{" "}
            <span className="font-bold">Flutter</span>, as well as
            <span className="font-bold"> web development</span> using{" "}
            <span className="font-bold"> React.js</span>. A detail-oriented
            individual with a successful track record of managing several
            projects fueled by a strong interest in mobile and web development.
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

      <style jsx>{`
        /* Animasi JavaScript logo dari kiri atas */
        @keyframes moveUpDown {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Animasi Flutter logo dari kanan bawah */
        @keyframes moveBottomRight {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Animasi Kotlin logo dari kiri bawah */
        @keyframes moveBottomLeft {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Animasi Figma logo dari kanan atas */
        @keyframes moveTopRight {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Aplikasikan animasi ke elemen */
        .animate-moving-image {
          animation: moveUpDown 3s infinite ease-in-out;
          width: 40px;
          height: auto;
        }

        .animate-moving-image2 {
          animation: moveBottomRight 3s infinite ease-in-out;
          width: 40px;
          height: auto;
        }

        .animate-moving-image3 {
          animation: moveBottomLeft 3s infinite ease-in-out;
          width: 40px;
          height: auto;
        }

        .animate-moving-image4 {
          animation: moveTopRight 3s infinite ease-in-out;
          width: 40px;
          height: auto;
        }
      `}</style>
    </>
  );
};
