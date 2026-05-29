"use client";

import type { SkillGroup, SkillIcon } from "@/lib/portfolio-types";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe, FaShapes } from "react-icons/fa6";
import { Skills } from "./Skills";

const iconMap: Record<SkillIcon, React.ReactNode> = {
  globe: <FaGlobe className="text-3xl text-whitey" />,
  mobile: <FaMobileAlt className="text-3xl text-whitey" />,
  shapes: <FaShapes className="text-3xl text-whitey" />,
};

export function HomeSkills({ skills }: { skills: SkillGroup[] }) {
  return (
    <>
      {skills.map((skill) => (
        <Skills
          key={skill.text}
          icon={iconMap[skill.icon]}
          text={skill.text}
          tools={skill.tools}
        />
      ))}
    </>
  );
}
