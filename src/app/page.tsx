import { Experience } from "@/components/elements/Experience";
import { Hero } from "@/components/elements/Hero";
import { HomeSkills } from "@/components/elements/HomeSkills";
import { getPortfolio } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getPortfolio();

  return (
    <main className="mx-6 flex flex-col items-center justify-between pt-12 sm:mx-20 md:pt-0 lg:mx-80">
      <Hero hero={content.hero} />
      <div className="mt-8 flex justify-center md:mt-0">
        <p
          className="italic text-whitey md:text-xl"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          &ldquo;{content.quote}&rdquo;
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
        <HomeSkills skills={content.skills} />
      </div>

      <h2 className="pb-8 pt-24 text-center text-4xl font-bold text-goldy">
        Experience
      </h2>
      {content.experiences.map((experience, index) => (
        <div key={index} className="w-full gap-4 md:py-4">
          <h3 className="py-4 text-xl font-bold text-goldy">
            {experience.category}
          </h3>
          {experience.items.map((item, idx) => (
            <Experience
              key={idx}
              imageSrc={item.imageSrc ?? "default.png"}
              position={item.position}
              time={item.time}
              institution={item.institution}
              description={item.description}
              detailHref={item.detailHref}
            />
          ))}
        </div>
      ))}

      <h2 className="pb-8 pt-24 text-center text-4xl font-bold text-goldy">
        Achievement
      </h2>
      {content.achievements.map((achievement, index) => (
        <div
          key={index}
          className="w-full py-2 md:py-8"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="flex flex-col justify-between text-whitey md:flex-row">
            <p className="text-sm md:text-base">{achievement.title}</p>
            <p className="text-sm md:text-base">{achievement.date}</p>
          </div>
          <p className="text-sm text-[#7c7c7c] md:text-base">
            {achievement.institution}
          </p>
        </div>
      ))}

      <img
        src={content.homeImage}
        alt="Foto Yondika"
        className="w-full py-8"
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
    </main>
  );
}
