import React from "react";
import { Button } from "./Button";

export const CardWork = ({
  image,
  project,
  tools,
  href,
  category,
}: {
  image: any;
  project: any;
  tools: string[];
  href: any;
  category: any;
}) => {
  return (
    <>
      <div
        className="flex w-96 flex-col justify-center gap-4 rounded-xl bg-[#232323] p-4"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img src={image} alt="" className="w-96 rounded-lg" />
        <p className="text-whitey md:text-2xl">{project}</p>
        <p className="-mt-4 text-[#7c7c7c]">{category}</p>
        <div className="flex gap-4">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool}
              alt={`Tool ${index}`}
              className="h-8 w-8"
            />
          ))}
        </div>
        <Button href={href} name="Lihat Project" />
      </div>
    </>
  );
};
