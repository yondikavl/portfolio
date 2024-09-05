import React from "react";

export const Card = ({ icon, text }: { icon: any; text: any }) => {
  return (
    <div
      className="hover:bg-dark flex h-12 w-full cursor-pointer items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] px-4 py-2 md:h-20"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      {icon}
      <p className="font-bold text-goldy md:text-2xl">{text}</p>
    </div>
  );
};
