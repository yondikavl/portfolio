"use client";

import React, { useState } from "react";

export const Experience = ({
  position,
  time,
  institution,
  description,
}: {
  position: string;
  time: string;
  institution: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine the image source
  const getImageSrc = (institution: string | undefined) => {
    if (institution) {
      return [`${institution}.png`, `${institution}.jpg`, `${institution}.jpeg`].find(
        (src) => {
          const img = new Image();
          img.src = src;
          return img.complete;
        }
      );
    }
    return "default.jpeg";
  };

  const imageSrc = getImageSrc(institution);

  return (
    <div
      className="mb-2 rounded-xl border border-[#3a3a3a] p-5 hover:bg-dark"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="cursor-pointer" onClick={toggleAccordion}>
        <div className="flex flex-row items-center gap-4">
          <div className="bg-white">
            <img
              src={imageSrc}
              alt={institution || "Default"}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between text-whitey">
            <div className="flex flex-row justify-between">
              <p className="text-sm md:text-base">{position}</p>
              <p className="text-sm md:text-base">{time}</p>
            </div>
            <p className="text-sm text-[#7c7c7c] md:text-base">{institution}</p>
          </div>
        </div>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-[#a0a0a0] md:text-base">
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};
