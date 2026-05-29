import {
  Activity,
  BarChart3,
  Bug,
  GitBranch,
  Layout,
  Smartphone,
} from "lucide-react";
import { FaAndroid } from "react-icons/fa";
import type {
  GerakAchievementIcon,
  GerakRecap as GerakRecapData,
} from "@/lib/portfolio-types";

const achievementIcons: Record<GerakAchievementIcon, typeof Activity> = {
  heart: Activity,
  mobile: Smartphone,
  layout: Layout,
  branch: GitBranch,
  bug: Bug,
  chart: BarChart3,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#7c7c7c]">
      {children}
      <span className="h-px flex-1 bg-[#3a3a3a]" />
    </h2>
  );
}

function ReleaseTag({ tag }: { tag: "released" | "whitelabel" }) {
  if (tag === "whitelabel") {
    return (
      <span className="shrink-0 rounded-md bg-blue-500/15 px-2 py-0.5 text-[11px] font-medium text-blue-400">
        whitelabel
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
      released
    </span>
  );
}

export function GerakRecap({ gerak }: { gerak: GerakRecapData }) {
  return (
    <div className="py-6">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-medium text-whitey md:text-[22px]">
            {gerak.meta.title}
          </h1>
          <p className="mt-1 text-sm text-[#7c7c7c]">
            {gerak.meta.period} · {gerak.meta.duration}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-400">
          <FaAndroid aria-hidden />
          {gerak.meta.badge}
        </span>
      </div>

      <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5">
        {gerak.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-dark p-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <p className="text-xs text-[#7c7c7c]">{stat.label}</p>
            <p className="mt-1.5 text-[22px] font-medium text-whitey">
              {stat.value}
            </p>
            <p className="mt-0.5 text-[11px] text-[#5c5c5c]">{stat.sub}</p>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <SectionTitle>Phase timeline</SectionTitle>
        <div className="flex flex-col">
          {gerak.timeline.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-3.5 pb-5 last:pb-0"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 50}
            >
              <div className="flex w-7 shrink-0 flex-col items-center">
                <div
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: item.dotColor }}
                />
                {index < gerak.timeline.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-[#3a3a3a]" />
                )}
              </div>
              <div className="flex-1 pb-1">
                <p className="text-[11px] text-[#5c5c5c]">{item.date}</p>
                <p className="mt-0.5 text-[13px] font-medium text-whitey">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#a0a0a0]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionTitle>Key technical achievements</SectionTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2.5">
          {gerak.achievements.map((card) => {
            const Icon = achievementIcons[card.icon];
            return (
              <div
                key={card.title}
                className="rounded-xl border border-[#3a3a3a] bg-[#0f0f0f] p-4 px-5"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Icon
                  className="mb-2 h-[18px] w-[18px] text-goldy"
                  aria-hidden
                />
                <p className="text-sm font-medium text-whitey">{card.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#a0a0a0]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-8">
        <SectionTitle>App releases</SectionTitle>
        <div className="rounded-xl border border-[#3a3a3a] bg-[#0f0f0f] px-5 py-3">
          {gerak.releases.map((release) => (
            <div
              key={release.version}
              className="flex flex-wrap items-center gap-2 border-b border-[#3a3a3a] py-2.5 last:border-b-0 sm:flex-nowrap sm:gap-3"
            >
              <span className="min-w-[90px] shrink-0 text-[13px] font-medium text-whitey">
                {release.version}
              </span>
              <span className="flex-1 text-xs leading-relaxed text-[#a0a0a0]">
                {release.description}
              </span>
              <ReleaseTag tag={release.tag} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Technologies & tools used</SectionTitle>
        <div className="flex flex-wrap gap-1 pt-0.5">
          {gerak.technologies.map((tech, i) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-full border border-[#3a3a3a] px-2.5 py-1 text-[11px] text-[#a0a0a0]"
            >
              {i === 0 && <FaAndroid className="text-xs" aria-hidden />}
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
