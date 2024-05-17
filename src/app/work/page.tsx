import { Maintenance } from "@/components/ui/Maintenance";
import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/elements/Button";
import { CardWork } from "@/components/elements/CardWork";

export const metadata: Metadata = {
  title: "Work | Yondika's Portfolio",
};

const page = () => {
  return (
    <main>
      <img
        src="bg-ellips-2.svg"
        alt=""
        className="absolute left-0 w-1/4"
        style={{ zIndex: -1 }}
      />
      <img
        src="bg-ellips-1.svg"
        alt=""
        className="absolute right-0 top-0"
        style={{ zIndex: -1 }}
      />
      <div className="flex flex-wrap items-center justify-center gap-4 py-40 sm:mx-32 md:mx-96">
        <CardWork
          image="github-user-app-mobile.png"
          project="Github User App"
          category="Mobile Development"
          tools={["kotlin.svg"]}
          href={"https://github.com/yondikavl/Github-User-Mobile-App"}
        />
        <CardWork
          image="aritmateka.png"
          project="Aritmateka"
          category="Mobile Development"
          tools={["kotlin.svg"]}
          href={"https://github.com/yondikavl/Aritmateka-Mobile-App"}
        />
        <CardWork
          image="web-pemira.png"
          project="Website Pemira KM ITERA 2022"
          category="Web Development"
          tools={["html.svg", "css.svg", "tailwind.svg", "js.svg"]}
          href={"https://github.com/masqomar21/pemira-KM-ITERA-2022"}
        />
        <CardWork
          image="github-user-app-mobile.png"
          project="Website Desa Way Kalam"
          category="Web Development"
          tools={["html.svg", "css.svg", "tailwind.svg", "js.svg"]}
          href={"https://github.com/yondikavl/Website-Desa-WayKalam"}
        />
        <CardWork
          image="web-desa-sidorejo.png"
          project="Website Desa Sidorejo"
          category="Web Development"
          tools={["next.svg", "tailwind.svg", "js.svg"]}
          href={"https://github.com/yondikavl/ksi02-sidorejo"}
        />
        <CardWork
          image="github-user-app-mobile.png"
          project="ToDo Web App"
          category="Web Development"
          tools={["html.svg", "css.svg", "js.svg"]}
          href={"https://github.com/yondikavl/react-todo-app"}
        />
        <CardWork
          image="narasiqu.png"
          project="Narasiqu App"
          category="Mobile Development"
          tools={["kotlin.svg"]}
          href={"https://github.com/yondikavl/Narasiqu-Mobile-App-Awal"}
        />
        <CardWork
          image="personal-portfolio.png"
          project="Personal Portfolio"
          category="Web Development"
          tools={["next.svg", "tailwind.svg", "typescript.svg"]}
          href={"https://github.com/yondikavl/yondikas-portfolio"}
        />
      </div>
    </main>
  );
};

export default page;
