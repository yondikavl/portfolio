import { CardWork } from "@/components/elements/CardWork";
import { getPortfolio } from "@/lib/portfolio-store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Yondika's Portfolio",
};

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const { works } = await getPortfolio();

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
      <div className="mx-6 flex flex-wrap items-center justify-center gap-4 py-40 sm:mx-32 md:mx-96">
        {works.map((work) => (
          <CardWork
            key={work.project + work.href}
            image={work.image}
            project={work.project}
            category={work.category}
            tools={work.tools}
            href={work.href}
          />
        ))}
      </div>
    </main>
  );
}
