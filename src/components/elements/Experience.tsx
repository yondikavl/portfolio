import React from "react";

export const Experience = ({
  position,
  time,
  institution,
}: {
  position: any;
  time: any;
  institution: any;
}) => {
  return (
    <>
      <div className="py-2" data-aos="zoom-in" data-aos-duration="1500">
        <div className="flex flex-col justify-between text-whitey sm:flex-row">
          <p>{position}</p>
          <p>{time}</p>
        </div>
        <p className="text-[#7c7c7c]">{institution}</p>
      </div>
    </>
  );
};
