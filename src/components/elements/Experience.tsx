"use client";

import React, { useState } from "react";

export const Experience = ({
  imageSrc,
  position,
  time,
  institution,
  description,
}: {
  imageSrc: string;
  position: string;
  time: string;
  institution: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  console.log("imageSrc", imageSrc);

  return (
    <div
      className="mb-2 rounded-xl border border-[#3a3a3a] p-5 hover:bg-dark"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="cursor-pointer" onClick={toggleAccordion}>
        <div className="flex flex-row items-center gap-4">
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              alt={institution || "Default"}
              className="h-12 w-12 object-cover"
            />
          </div>
          <div className="flex flex-col justify-between text-whitey w-full">
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
