import { experiences } from "@/components/data/experience";
import { Experience } from "@/components/elements/Experience";
import { Hero } from "@/components/elements/Hero";
import { Skills } from "@/components/elements/Skills";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe, FaShapes } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mx-6 flex flex-col items-center justify-between pt-12 sm:mx-32 md:pt-0 lg:mx-96">
      <Hero />
      <div className="flex justify-center">
        <p
          className="italic text-whitey md:text-xl"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          “Work for money, Develop for love”
        </p>
      </div>

      <img
        src="bg-ellips-2.svg"
        alt=""
        className="absolute left-0 top-96"
        style={{ zIndex: -1 }}
      />

      <h2 className="py-8 pt-24 text-center text-4xl font-bold text-goldy">
        Skills
      </h2>
      <div className="flex w-full flex-col justify-center gap-4 md:flex-row md:py-12">
        <Skills
          icon={<FaGlobe className="text-3xl text-whitey" />}
          text="Web Development"
          tools={[
            "html.svg",
            "css.svg",
            "javascript.svg",
            "typescript.svg",
            "next.svg",
            "react.svg",
            "tailwind.svg",
            "bootstrap.svg",
          ]}
        />
        <Skills
          icon={<FaMobileAlt className="text-3xl text-whitey" />}
          text="Mobile Development"
          tools={["kotlin.svg", "android studio.svg", "flutter.svg"]}
        />
        <Skills
          icon={<FaShapes className="text-3xl text-whitey" />}
          text="UIUX Design"
          tools={["figma.svg"]}
        />
      </div>

      <h2 className="pt-24 text-center text-4xl font-bold text-goldy">
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <div key={index} className="w-full gap-4 md:py-4">
          <h3 className="py-4 text-xl font-bold text-goldy">
            {experience.category}
          </h3>
          {experience.items.map((item, idx) => (
            <Experience
              key={idx}
              position={item.position}
              time={item.time}
              institution={item.institution}
              description={item.description}
            />
          ))}
        </div>
      ))}

      <h2 className="pt-24 text-center text-4xl font-bold text-goldy">
        Achievement
      </h2>
      <div
        className="w-full py-2 md:py-8"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="flex flex-col justify-between text-whitey md:flex-row">
          <p className="text-sm md:text-base">
            Finalist in the User Experience Design division GEMASTIK XVI 2023
          </p>
          <p className="text-sm md:text-base">September 2023</p>
        </div>
        <p className="text-sm text-[#7c7c7c] md:text-base">
          Pusat Prestasi Nasional, Kementerian Pendidikan, Kebudayaan, Riset,
          dan Teknologi
        </p>
      </div>

      <img
        src="my-pic.png"
        alt="Foto Yondika"
        className="w-full py-8"
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
    </main>
  );
}
