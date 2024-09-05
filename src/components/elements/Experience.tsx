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

  return (
    <div
      className="hover:bg-dark mb-2 rounded-xl border-2 border-[#5C5C5C] p-3"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="cursor-pointer" onClick={toggleAccordion}>
        <div className="flex flex-col justify-between text-whitey sm:flex-row">
          <p className="text-sm md:text-base">{position}</p>
          <p className="text-sm md:text-base">{time}</p>
        </div>
        <p className="text-sm text-[#7c7c7c] md:text-base">{institution}</p>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-[#a0a0a0] md:text-base">{description}</p>
        </div>
      )}
    </div>
  );
};
