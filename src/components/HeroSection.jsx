"use client";
import React from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "UIUX Designer"],
      typeSpeed: 150,
      backSpeed: 150,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="Hero bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="w-screen h-screen relative px-6 md:px-40 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <h1
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="text-4xl md:text-8xl font-bold text-amber-200"
          >
            Yondika Vio Landa
          </h1>
          <h1
            data-aos="zoom-out"
            data-aos-duration="2500"
            className="text-4xl md:text-8xl font-bold text-amber-200"
          >
            <span className="typing-text" ref={el}></span>
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="text-4xl md:text-8xl font-bold text-amber-200"
          >
            Based in Indonesia
          </h1>
        </div>
        <div className="w-screen px-6 md:px-40 text-left absolute bottom-0 md:bottom-8 flex justify-between items-center flex-wrap">
          <div className="my-4 md:my-0 w-32 md:w-fit">
            <h3 className="text-xs md:text-sm md:mb-2 text-gray-400">
              BIOGRAPHY
            </h3>
            <p className="text-xs md:text-base">
              Work for money and Develop for love
            </p>
          </div>
          <div className="my-4 md:my-0 w-32 md:w-fit">
            <h3 className="text-xs md:text-sm md:mb-2 text-gray-400">
              SERVICES
            </h3>
            <p className="text-xs md:text-base">
              Web Development and UIUX Design
            </p>
          </div>
          <div className="my-4 md:my-0 w-32 md:w-fit">
            <h3 className="text-xs md:text-sm md:mb-2 text-gray-400">
              CONTACT
            </h3>
            <p className="text-xs md:text-base">yondikaviolanda@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
