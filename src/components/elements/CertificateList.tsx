import type { Certificate } from "@/lib/portfolio-types";
import Link from "next/link";

export function CertificateList({
  title,
  items,
}: {
  title: string;
  items: Certificate[];
}) {
  return (
    <>
      <h3 className="pt-24 text-2xl text-whitey">{title}</h3>
      <div className="mt-12 flex flex-wrap gap-4">
        {items.map((cert) => (
          <Link
            key={cert.href}
            href={cert.href}
            className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <p className="text-goldy md:text-xl">{cert.title}</p>
            <p className="text-whitey">{cert.issuer}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
