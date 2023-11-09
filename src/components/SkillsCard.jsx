"use client";
import React from "react";

const SkillsCard = ({ image, text }) => {
  return (
    <div className="mx-2 my-4 lg:my-0">
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={image}
        alt="Skill"
        className="w-24 p-4 rounded-xl"
      />
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="mt-4 text-sm text-white"
      >
        {text}
      </p>
    </div>
  );
};

export default SkillsCard;
