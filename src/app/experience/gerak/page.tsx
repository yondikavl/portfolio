import { GerakRecap } from "@/components/elements/GerakRecap";
import { getPortfolio } from "@/lib/portfolio-store";
import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gerak Android Recap | Yondika's Portfolio",
  description:
    "Android developer work recap at PT. Gerak Bersama Kita — Gerak Pro, whitelabel, and major feature delivery.",
};

export const dynamic = "force-dynamic";

export default async function GerakExperiencePage() {
  const { gerakRecap } = await getPortfolio();

  return (
    <main className="relative mx-6 py-32 sm:mx-20 lg:mx-auto lg:max-w-3xl lg:px-4">
      <img
        src="bg-ellips-2.svg"
        alt=""
        className="pointer-events-none absolute left-0 top-24 w-1/4 opacity-60"
        style={{ zIndex: -1 }}
      />
      <img
        src="bg-ellips-1.svg"
        alt=""
        className="pointer-events-none absolute right-0 top-0 opacity-60"
        style={{ zIndex: -1 }}
      />

      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-[#7c7c7c] transition-colors hover:text-goldy"
      >
        <FaArrowLeft aria-hidden />
        Kembali ke beranda
      </Link>

      <div className="mb-4 flex items-center gap-3">
        <div className="overflow-hidden rounded-xl bg-white">
          <img
            src={gerakRecap.meta.logo}
            alt={gerakRecap.meta.company}
            className="h-12 w-12 object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-[#7c7c7c]">{gerakRecap.meta.company}</p>
          <p className="font-medium text-goldy">{gerakRecap.meta.role}</p>
        </div>
      </div>

      <GerakRecap gerak={gerakRecap} />
    </main>
  );
}
