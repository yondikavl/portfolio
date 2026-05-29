export type SkillIcon = "globe" | "mobile" | "shapes";

export interface SkillGroup {
  text: string;
  icon: SkillIcon;
  tools: string[];
}

export interface ExperienceItem {
  imageSrc?: string;
  position: string;
  time: string;
  institution: string;
  description: string;
  detailHref?: string;
}

export interface ExperienceCategory {
  category: string;
  items: ExperienceItem[];
}

export interface Achievement {
  title: string;
  date: string;
  institution: string;
}

export interface WorkProject {
  image: string;
  project: string;
  category: string;
  tools: string[];
  href: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  href: string;
}

export interface CertificateGroups {
  mobile: Certificate[];
  web: Certificate[];
  software: Certificate[];
}

export type GerakAchievementIcon =
  | "heart"
  | "mobile"
  | "layout"
  | "branch"
  | "bug"
  | "chart";

export interface GerakRecap {
  meta: {
    title: string;
    period: string;
    duration: string;
    badge: string;
    company: string;
    role: string;
    logo: string;
  };
  stats: { label: string; value: string; sub: string }[];
  timeline: {
    date: string;
    title: string;
    description: string;
    dotColor: string;
  }[];
  achievements: {
    title: string;
    body: string;
    icon: GerakAchievementIcon;
  }[];
  releases: {
    version: string;
    description: string;
    tag: "released" | "whitelabel";
  }[];
  technologies: string[];
}

export interface PortfolioContent {
  hero: {
    greeting: string;
    name: string;
    subtitle: string;
    bio: string;
    githubUrl: string;
    linkedinUrl: string;
    cards: { text: string; icon: SkillIcon }[];
  };
  quote: string;
  skills: SkillGroup[];
  experiences: ExperienceCategory[];
  achievements: Achievement[];
  homeImage: string;
  works: WorkProject[];
  about: {
    name: string;
    image: string;
    bio: string;
  };
  certificates: CertificateGroups;
  gerakRecap: GerakRecap;
}
