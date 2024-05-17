import React from "react";

export const Skills = ({
  icon,
  text,
  tools,
}: {
  icon: any;
  text: any;
  tools: string[];
}) => {
  return (
    <div
      className="flex min-h-80 w-full cursor-pointer flex-col items-center justify-start gap-4 rounded-xl border-2 border-[#5C5C5C] py-8 hover:bg-[#363636]"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="flex gap-4 py-4">
        {icon}
        <p className="text-2xl font-bold text-goldy">{text}</p>
      </div>
      <div className="flex w-4/5 flex-wrap justify-center gap-4">
        {tools.map((tool, index) => (
          <img key={index} src={tool} alt={`Tool ${index}`} />
        ))}
      </div>
    </div>
  );
};
