"use client";
import React from "react";

const Portfolio = ({ image, title, desc, techStack, role, linkProject }) => {
  return (
    <div className={"my-10 md:my-0 md:w-80 text-justify"}>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={image}
        className="rounded-xl md:h-80 md:w-80"
      />
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="mt-4 text-xl font-bold"
      >
        {title}
      </p>
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="my-2 text-gray-400"
      >
        {desc}
      </p>
      <p data-aos="zoom-in" data-aos-duration="1500" className="my-2">
        My contribution in this project; <strong>{techStack}</strong>{" "}
        <span className="italic">({role})</span>
      </p>
      <a
        href={linkProject}
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="my-2 text-amber-300"
        target="_blank"
      >
        Show Project
      </a>
    </div>
  );
};

export default Portfolio;
