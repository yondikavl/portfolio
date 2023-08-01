import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Works | Yondika",
};

const Works = () => {
  return (
    <div>
      <section className="Porfolio">
        <div className="w-screen my-24 px-6 lg:px-40 text-white">
          <div className="pt-12 md:pt-20 flex justify-between">
            <h2 className="text-xl lg:text-2xl font-bold  text-white">
              My Projects
            </h2>
            <div>
              <Link
                href="/"
                className={
                  "text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
                }
              >
                All
              </Link>
              <Link
                href="/"
                className={
                  "text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
                }
              >
                Front-end
              </Link>
              <Link
                href="/"
                className={
                  "text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
                }
              >
                Back-end
              </Link>
              <Link
                href="/"
                className={
                  "text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] "
                }
              >
                UIUX
              </Link>
            </div>
          </div>
          <div className="flex flex-row lg:justify-between mt-12 lg:mt-24 flex-wrap text-left justify-center gap-20">
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
};

export default Works;
