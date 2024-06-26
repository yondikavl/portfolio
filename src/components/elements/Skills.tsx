import React from "react";
import { FaGlobe } from "react-icons/fa";

export const Skills = ({
  icon,
  text,
  tools,
}: {
  icon: any;
  text: any;
  tools: string[];
}) => {
  const generateLabel = (path: string) => {
    const fileName = path.split("/").pop()?.split(".")[0];
    return fileName ? fileName.toUpperCase() : "Unknown Tool";
  };

  return (
    <div
      className="flex min-h-80 w-full cursor-pointer flex-col items-center justify-start gap-4 rounded-xl border-2 border-[#5C5C5C] p-8 hover:bg-[#363636]"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="flex gap-4 py-4">
        {icon}
        <p className="font-bold text-goldy md:text-2xl">{text}</p>
      </div>
      <div className="flex w-4/5 flex-wrap justify-center gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tool} alt={`Tool ${index}`} className="h-12 w-12" />
            <p className="lowercase text-whitey">{generateLabel(tool)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
