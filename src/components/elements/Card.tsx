import React from "react";

export const Card = ({ icon, text }: { icon: any; text: any }) => {
  return (
    <div
      className="flex h-12 w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#3a3a3a] px-4 py-2 hover:bg-dark md:h-20"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      {icon}
      <p className="font-bold text-goldy md:text-2xl">{text}</p>
    </div>
  );
};
