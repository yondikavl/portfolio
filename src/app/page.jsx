import HeroSection from "@/components/HeroSection";
import SkillsCard from "@/components/SkillsCard";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="scroll-smooth w-screen overflow-x-hidden">
      <HeroSection />
      <section className="Skills">
        <div className="w-screen my-24 md:mt-0 px-6 lg:px-40 text-white">
          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="p-[0.025rem] bg-gray-600"
          ></div>
          <h2 className="text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white">
            My Advantage
          </h2>
          <div className="flex flex-row justify-around mt-12 lg:my-24 flex-wrap text-center">
            <SkillsCard
              text="BootstrapCSS"
              children="../assets/images/bootstrap-logo.svg"
            />
            <SkillsCard
              text="TailwindCSS"
              children="../assets/images/tailwindcss-logo.svg"
            />
            <SkillsCard
              text="JavaScript"
              children="../assets/images/javascript-logo.svg"
            />
            <SkillsCard
              text="ReactJS"
              children="../assets/images/react-logo.svg"
            />
            <SkillsCard
              text="Next.js"
              children="../assets/images/next-logo.svg"
            />
            <SkillsCard
              text="Figma"
              children="../assets/images/figma-logo.svg"
            />
          </div>
        </div>
      </section>
      <section className="Experience">
        <div className="w-screen my-24 px-6 lg:px-40 text-white">
          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="p-[0.025rem] bg-gray-600"
          ></div>
          <h2 className="text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white">
            Experience
          </h2>
          <div className="flex flex-row justify-between mt-12 lg:mt-24 text-left flex-wrap">
            <div>
              <Experience
                years="2018"
                position="Vocational High Scholl Computer and Network Engineering"
                organization="SMK Swadhipa 2 Natar"
              />
            </div>
            <div>
              <Experience
                years="2021"
                position="Bachelor Degree of Informatics Engineering"
                organization="Institut Teknologi Sumatera"
              />
            </div>
            <div>
              <Experience
                years="2022"
                position="Front-End Developer Staff"
                organization="PPLK Itera 2022"
              />
              <Experience
                position="Voting Staff"
                organization="PEMIRA KM Itera 2022"
              />
            </div>
            <div>
              <Experience
                years="2023"
                position="Staff at Ministry of Information Technology"
                organization="Kabinet KM Itera 2023/2024"
              />
              <Experience
                position="Staff at Technopreneur"
                organization="HMIF Itera 2023/2024"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="Porfolio">
        <div className="w-screen my-24 px-6 lg:px-40 text-white">
          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="p-[0.025rem] bg-gray-600"
          ></div>
          <h2 className="text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white">
            My Best Projects
          </h2>
          <div className="flex flex-row lg:justify-between mt-12 lg:mt-24 flex-wrap text-left justify-center">
            <Portfolio
              image="../assets/images/project-pplk-itera-2022.png"
              title="Web. PPLK Itera 2022"
              desc="Website used as an information system in PPLK ITERA 2022 activities. An event welcoming new students at Institut Teknologi Sumatera."
              techStack="Develop project with Vanilla JavaScript and Bootstrap."
              linkProject="https://yondikavl.github.io/react-todo-app/"
              role="Front-end"
            />
            <Portfolio
              image="../assets/images/project-voting-web.png"
              title="Web. Voting PEMIRA"
              desc="Website activated to vote on PEMIRA. This website is a dummy project which can be used for further web development templates."
              techStack="Develop project with HTML, CSS and Vanilla JavaScript."
              role="Front-end"
            />
            <Portfolio
              image="../assets/images/project-pemira-22.png"
              title="Web. Pemira Itera 2022"
              desc="Website used as an information and voting system in PEMIRA KM Itera 2022. PEMIRA KM Itera is a general election event held to elect a student president at Institut Teknologi Sumatera."
              techStack="Develop project with TailwindCSS"
              role="Front-end"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
