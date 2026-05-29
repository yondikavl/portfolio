import { CertificateList } from "@/components/elements/CertificateList";
import { getPortfolio } from "@/lib/portfolio-store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Yondika's Portfolio",
};

export const dynamic = "force-dynamic";

export default async function CertifPage() {
  const { about, certificates } = await getPortfolio();

  return (
    <div className="mx-6 py-40 md:mx-96">
      <div className="flex w-full flex-col items-center justify-center gap-8 text-whitey md:flex-row">
        <div className="h-60 w-60 overflow-hidden rounded-full">
          <img
            src={about.image}
            alt={about.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center md:w-2/3 md:text-left">
          <h1
            className="text-5xl font-bold text-goldy"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {about.name}
          </h1>
          <p className="mt-8 text-justify">{about.bio}</p>
        </div>
      </div>
      <h2 className="pt-24 text-center text-4xl font-bold text-goldy">
        Courses
      </h2>

      <CertificateList
        title="Mobile Development"
        items={certificates.mobile}
      />
      <CertificateList title="Web Development" items={certificates.web} />
      <CertificateList
        title="Software Development"
        items={certificates.software}
      />
    </div>
  );
}
