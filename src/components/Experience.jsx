"use client";
import React from "react";

const Experience = ({ years, position, organization }) => {
  return (
    <div className={"w-40 lg:w-60 mt-4 md:mt-0"}>
      <h3
        data-aos="fade-left"
        data-aos-duration="1500"
        className={"text-xs text-gray-400 lg:text-base"}
      >
        {years}
      </h3>
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className={"mt-4 text-sm lg:text-base"}
      >
        {position}
      </p>
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className={"text-xs text-gray-400 lg:text-sm"}
      >
        {organization}
      </p>
    </div>
  );
};

export default Experience;
