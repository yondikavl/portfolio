"use client";
import React from "react";
import Typed from "typed.js";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const HeroSection = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Mobile Developer", "UIUX Designer"],
      typeSpeed: 150,
      backSpeed: 150,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const setOnClick = () => {
    window.open(
      "https://drive.google.com/file/d/1UemeDGuX9XThRV--CzUG8fcWrYqHn88D/view?usp=sharing",
      "_blank"
    );
  };

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
          <button
            onClick={setOnClick}
            className="bg-white/[.09] mt-8 p-2 mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2]"
          >
            <span className="flex items-center">
              <InsertDriveFileIcon />
              <span className="ps-2">Download Resume</span>
            </span>
          </button>
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
            <p className="text-xs md:text-base">Web and Mobile Development</p>
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
