import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";

export const Maintenance = () => {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center bg-white">
        <FaScrewdriverWrench className="text-goldy h-24 w-24" />
        <div className="mx-auto max-w-screen-md px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="text-whitey mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:mb-6 xl:text-6xl">
            Under Maintenance
          </h1>
          <p className="text-whitey font-light md:text-lg xl:text-xl">
            Our Enterprise administrators are performing scheduled maintenance.
          </p>
        </div>
      </section>
    </>
  );
};
