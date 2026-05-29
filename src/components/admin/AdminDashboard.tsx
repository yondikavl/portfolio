"use client";

import type {
  Achievement,
  Certificate,
  ExperienceCategory,
  ExperienceItem,
  PortfolioContent,
  WorkProject,
} from "@/lib/portfolio-types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  AdminField,
  AdminInput,
  AdminSection,
  AdminTextarea,
} from "./AdminField";

type Tab =
  | "hero"
  | "home"
  | "experience"
  | "work"
  | "certificates"
  | "about"
  | "gerak";

const TABS: { id: Tab; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "home", label: "Beranda" },
  { id: "experience", label: "Pengalaman" },
  { id: "work", label: "Projects" },
  { id: "certificates", label: "Sertifikat" },
  { id: "about", label: "About" },
  { id: "gerak", label: "Gerak Recap" },
];

export function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioContent | null>(null);
  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/content");
    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }
    setData(await res.json());
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  const save = async () => {
    if (!data) return;
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setMessage(res.ok ? "Berhasil disimpan!" : "Gagal menyimpan.");
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  if (!data) {
    return (
      <p className="py-20 text-center text-[#7c7c7c]">Memuat data...</p>
    );
  }

  const update = (patch: Partial<PortfolioContent>) =>
    setData((prev) => (prev ? { ...prev, ...patch } : prev));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-whitey">
      <header className="sticky top-0 z-20 border-b border-[#3a3a3a] bg-[#0f0f0f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <h1 className="text-lg font-semibold text-goldy">Portfolio Admin</h1>
            <p className="text-xs text-[#7c7c7c]">Kelola konten tanpa ubah kode</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="rounded-lg bg-goldy px-4 py-2 text-sm font-semibold text-[#0f0f0f] disabled:opacity-50"
            >
              {saving ? "Menyimpan..." : "Simpan perubahan"}
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-[#3a3a3a] px-4 py-2 text-sm hover:bg-[#212121]"
            >
              Logout
            </button>
          </div>
        </div>
        {message && (
          <p className="mx-auto max-w-6xl px-4 pb-2 text-sm text-emerald-400">
            {message}
          </p>
        )}
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm ${
                tab === t.id
                  ? "bg-goldy font-medium text-[#0f0f0f]"
                  : "text-[#a0a0a0] hover:bg-[#212121]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        {tab === "hero" && (
          <AdminSection title="Hero / Landing">
            <AdminField label="Greeting">
              <AdminInput
                value={data.hero.greeting}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, greeting: v } })
                }
              />
            </AdminField>
            <AdminField label="Nama">
              <AdminInput
                value={data.hero.name}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, name: v } })
                }
              />
            </AdminField>
            <AdminField label="Subtitle">
              <AdminInput
                value={data.hero.subtitle}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, subtitle: v } })
                }
              />
            </AdminField>
            <AdminField label="Bio">
              <AdminTextarea
                value={data.hero.bio}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, bio: v } })
                }
                rows={5}
              />
            </AdminField>
            <AdminField label="GitHub URL">
              <AdminInput
                value={data.hero.githubUrl}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, githubUrl: v } })
                }
              />
            </AdminField>
            <AdminField label="LinkedIn URL">
              <AdminInput
                value={data.hero.linkedinUrl}
                onChange={(v) =>
                  setData({ ...data, hero: { ...data.hero, linkedinUrl: v } })
                }
              />
            </AdminField>
          </AdminSection>
        )}

        {tab === "home" && (
          <>
            <AdminSection title="Quote & Gambar">
              <AdminField label="Quote">
                <AdminInput
                  value={data.quote}
                  onChange={(v) => update({ quote: v })}
                />
              </AdminField>
              <AdminField label="Gambar beranda (file di /public)">
                <AdminInput
                  value={data.homeImage}
                  onChange={(v) => update({ homeImage: v })}
                />
              </AdminField>
            </AdminSection>

            <SkillsEditor
              skills={data.skills}
              onChange={(skills) => update({ skills })}
            />

            <AchievementsEditor
              achievements={data.achievements}
              onChange={(achievements) => update({ achievements })}
            />
          </>
        )}

        {tab === "experience" && (
          <ExperienceEditor
            experiences={data.experiences}
            onChange={(experiences) => update({ experiences })}
          />
        )}

        {tab === "work" && (
          <WorkEditor works={data.works} onChange={(works) => update({ works })} />
        )}

        {tab === "certificates" && (
          <CertificatesEditor
            certificates={data.certificates}
            onChange={(certificates) => update({ certificates })}
          />
        )}

        {tab === "about" && (
          <AdminSection title="Halaman Certificate / About">
            <AdminField label="Nama">
              <AdminInput
                value={data.about.name}
                onChange={(v) =>
                  setData({ ...data, about: { ...data.about, name: v } })
                }
              />
            </AdminField>
            <AdminField label="Foto (file di /public)">
              <AdminInput
                value={data.about.image}
                onChange={(v) =>
                  setData({ ...data, about: { ...data.about, image: v } })
                }
              />
            </AdminField>
            <AdminField label="Bio">
              <AdminTextarea
                value={data.about.bio}
                onChange={(v) =>
                  setData({ ...data, about: { ...data.about, bio: v } })
                }
                rows={6}
              />
            </AdminField>
          </AdminSection>
        )}

        {tab === "gerak" && (
          <GerakEditor
            gerak={data.gerakRecap}
            onChange={(gerakRecap) => update({ gerakRecap })}
          />
        )}
      </main>
    </div>
  );
}

function SkillsEditor({
  skills,
  onChange,
}: {
  skills: PortfolioContent["skills"];
  onChange: (s: PortfolioContent["skills"]) => void;
}) {
  return (
    <AdminSection title="Skills (Beranda)">
      {skills.map((skill, i) => (
        <div key={i} className="space-y-3 rounded-lg border border-[#3a3a3a] p-3">
          <AdminField label="Judul">
            <AdminInput
              value={skill.text}
              onChange={(v) => {
                const next = [...skills];
                next[i] = { ...skill, text: v };
                onChange(next);
              }}
            />
          </AdminField>
          <AdminField label="Icon (globe | mobile | shapes)">
            <AdminInput
              value={skill.icon}
              onChange={(v) => {
                const next = [...skills];
                next[i] = {
                  ...skill,
                  icon: v as PortfolioContent["skills"][0]["icon"],
                };
                onChange(next);
              }}
            />
          </AdminField>
          <AdminField label="Tools (pisahkan koma, contoh: kotlin.svg, flutter.svg)">
            <AdminInput
              value={skill.tools.join(", ")}
              onChange={(v) => {
                const next = [...skills];
                next[i] = {
                  ...skill,
                  tools: v.split(",").map((t) => t.trim()).filter(Boolean),
                };
                onChange(next);
              }}
            />
          </AdminField>
        </div>
      ))}
    </AdminSection>
  );
}

function AchievementsEditor({
  achievements,
  onChange,
}: {
  achievements: Achievement[];
  onChange: (a: Achievement[]) => void;
}) {
  return (
    <AdminSection title="Achievement (Beranda)">
      {achievements.map((item, i) => (
        <div key={i} className="space-y-3 rounded-lg border border-[#3a3a3a] p-3">
          <AdminField label="Judul">
            <AdminTextarea
              value={item.title}
              onChange={(v) => {
                const next = [...achievements];
                next[i] = { ...item, title: v };
                onChange(next);
              }}
              rows={2}
            />
          </AdminField>
          <AdminField label="Tanggal">
            <AdminInput
              value={item.date}
              onChange={(v) => {
                const next = [...achievements];
                next[i] = { ...item, date: v };
                onChange(next);
              }}
            />
          </AdminField>
          <AdminField label="Institusi">
            <AdminInput
              value={item.institution}
              onChange={(v) => {
                const next = [...achievements];
                next[i] = { ...item, institution: v };
                onChange(next);
              }}
            />
          </AdminField>
          <button
            type="button"
            onClick={() => onChange(achievements.filter((_, idx) => idx !== i))}
            className="text-xs text-red-400"
          >
            Hapus
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          onChange([
            ...achievements,
            { title: "", date: "", institution: "" },
          ])
        }
        className="text-sm text-goldy"
      >
        + Tambah achievement
      </button>
    </AdminSection>
  );
}

function ExperienceEditor({
  experiences,
  onChange,
}: {
  experiences: ExperienceCategory[];
  onChange: (e: ExperienceCategory[]) => void;
}) {
  const updateItem = (
    catIdx: number,
    itemIdx: number,
    patch: Partial<ExperienceItem>,
  ) => {
    const next = structuredClone(experiences);
    next[catIdx].items[itemIdx] = { ...next[catIdx].items[itemIdx], ...patch };
    onChange(next);
  };

  return (
    <div className="space-y-6">
      {experiences.map((cat, catIdx) => (
        <AdminSection key={catIdx} title={cat.category}>
          {cat.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="mb-4 space-y-3 rounded-lg border border-[#3a3a3a] p-3"
            >
              <p className="text-xs text-goldy">{item.position || "Item baru"}</p>
              <AdminField label="Posisi">
                <AdminInput
                  value={item.position}
                  onChange={(v) => updateItem(catIdx, itemIdx, { position: v })}
                />
              </AdminField>
              <AdminField label="Waktu">
                <AdminInput
                  value={item.time}
                  onChange={(v) => updateItem(catIdx, itemIdx, { time: v })}
                />
              </AdminField>
              <AdminField label="Institusi">
                <AdminInput
                  value={item.institution}
                  onChange={(v) => updateItem(catIdx, itemIdx, { institution: v })}
                />
              </AdminField>
              <AdminField label="Logo (file di /public, opsional)">
                <AdminInput
                  value={item.imageSrc ?? ""}
                  onChange={(v) =>
                    updateItem(catIdx, itemIdx, { imageSrc: v || undefined })
                  }
                />
              </AdminField>
              <AdminField label="Link detail (opsional, contoh: /experience/gerak)">
                <AdminInput
                  value={item.detailHref ?? ""}
                  onChange={(v) =>
                    updateItem(catIdx, itemIdx, { detailHref: v || undefined })
                  }
                />
              </AdminField>
              <AdminField label="Deskripsi">
                <AdminTextarea
                  value={item.description}
                  onChange={(v) => updateItem(catIdx, itemIdx, { description: v })}
                  rows={5}
                />
              </AdminField>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const next = structuredClone(experiences);
              next[catIdx].items.push({
                position: "",
                time: "",
                institution: "",
                description: "",
              });
              onChange(next);
            }}
            className="text-sm text-goldy"
          >
            + Tambah item di kategori ini
          </button>
        </AdminSection>
      ))}
    </div>
  );
}

function WorkEditor({
  works,
  onChange,
}: {
  works: WorkProject[];
  onChange: (w: WorkProject[]) => void;
}) {
  const update = (i: number, patch: Partial<WorkProject>) => {
    const next = [...works];
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };

  return (
    <AdminSection title="Projects (Work)">
      {works.map((work, i) => (
        <div key={i} className="mb-4 space-y-3 rounded-lg border border-[#3a3a3a] p-3">
          <AdminField label="Nama project">
            <AdminInput value={work.project} onChange={(v) => update(i, { project: v })} />
          </AdminField>
          <AdminField label="Kategori">
            <AdminInput value={work.category} onChange={(v) => update(i, { category: v })} />
          </AdminField>
          <AdminField label="Gambar (file di /public)">
            <AdminInput value={work.image} onChange={(v) => update(i, { image: v })} />
          </AdminField>
          <AdminField label="Link">
            <AdminInput value={work.href} onChange={(v) => update(i, { href: v })} />
          </AdminField>
          <AdminField label="Tools (pisahkan koma)">
            <AdminInput
              value={work.tools.join(", ")}
              onChange={(v) =>
                update(i, {
                  tools: v.split(",").map((t) => t.trim()).filter(Boolean),
                })
              }
            />
          </AdminField>
          <button
            type="button"
            onClick={() => onChange(works.filter((_, idx) => idx !== i))}
            className="text-xs text-red-400"
          >
            Hapus project
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          onChange([
            ...works,
            {
              image: "",
              project: "",
              category: "",
              tools: [],
              href: "",
            },
          ])
        }
        className="text-sm text-goldy"
      >
        + Tambah project
      </button>
    </AdminSection>
  );
}

function CertificatesEditor({
  certificates,
  onChange,
}: {
  certificates: PortfolioContent["certificates"];
  onChange: (c: PortfolioContent["certificates"]) => void;
}) {
  const groups: (keyof PortfolioContent["certificates"])[] = [
    "mobile",
    "web",
    "software",
  ];
  const labels = {
    mobile: "Mobile Development",
    web: "Web Development",
    software: "Software Development",
  };

  const updateCert = (
    group: keyof PortfolioContent["certificates"],
    i: number,
    patch: Partial<Certificate>,
  ) => {
    const next = structuredClone(certificates);
    next[group][i] = { ...next[group][i], ...patch };
    onChange(next);
  };

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <AdminSection key={group} title={labels[group]}>
          {certificates[group].map((cert, i) => (
            <div key={i} className="mb-4 space-y-3 rounded-lg border border-[#3a3a3a] p-3">
              <AdminField label="Judul">
                <AdminInput
                  value={cert.title}
                  onChange={(v) => updateCert(group, i, { title: v })}
                />
              </AdminField>
              <AdminField label="Penerbit">
                <AdminInput
                  value={cert.issuer}
                  onChange={(v) => updateCert(group, i, { issuer: v })}
                />
              </AdminField>
              <AdminField label="URL">
                <AdminInput
                  value={cert.href}
                  onChange={(v) => updateCert(group, i, { href: v })}
                />
              </AdminField>
              <button
                type="button"
                onClick={() => {
                  const next = structuredClone(certificates);
                  next[group] = next[group].filter((_, idx) => idx !== i);
                  onChange(next);
                }}
                className="text-xs text-red-400"
              >
                Hapus
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const next = structuredClone(certificates);
              next[group].push({ title: "", issuer: "Dicoding Indonesia", href: "" });
              onChange(next);
            }}
            className="text-sm text-goldy"
          >
            + Tambah sertifikat
          </button>
        </AdminSection>
      ))}
    </div>
  );
}

function GerakEditor({
  gerak,
  onChange,
}: {
  gerak: PortfolioContent["gerakRecap"];
  onChange: (g: PortfolioContent["gerakRecap"]) => void;
}) {
  const setMeta = (patch: Partial<PortfolioContent["gerakRecap"]["meta"]>) =>
    onChange({ ...gerak, meta: { ...gerak.meta, ...patch } });

  return (
    <div className="space-y-6">
      <AdminSection title="Meta">
        {(
          [
            ["title", "Judul"],
            ["period", "Periode"],
            ["duration", "Durasi"],
            ["badge", "Badge"],
            ["company", "Perusahaan"],
            ["role", "Role"],
            ["logo", "Logo (file)"],
          ] as const
        ).map(([key, label]) => (
          <AdminField key={key} label={label}>
            <AdminInput
              value={gerak.meta[key]}
              onChange={(v) => setMeta({ [key]: v })}
            />
          </AdminField>
        ))}
      </AdminSection>

      <ListSection
        title="Stats"
        items={gerak.stats}
        onChange={(stats) => onChange({ ...gerak, stats })}
        fields={["label", "value", "sub"]}
      />

      <ListSection
        title="Timeline"
        items={gerak.timeline}
        onChange={(timeline) => onChange({ ...gerak, timeline })}
        fields={["date", "title", "description", "dotColor"]}
        textareaFields={["description"]}
      />

      <ListSection
        title="Achievements"
        items={gerak.achievements}
        onChange={(achievements) => onChange({ ...gerak, achievements })}
        fields={["title", "body", "icon"]}
        textareaFields={["body"]}
      />

      <ListSection
        title="Releases"
        items={gerak.releases}
        onChange={(releases) => onChange({ ...gerak, releases })}
        fields={["version", "description", "tag"]}
        textareaFields={["description"]}
      />

      <AdminSection title="Technologies">
        <AdminField label="Satu per baris atau pisahkan koma">
          <AdminTextarea
            value={gerak.technologies.join("\n")}
            onChange={(v) =>
              onChange({
                ...gerak,
                technologies: v
                  .split(/[\n,]/)
                  .map((t) => t.trim())
                  .filter(Boolean),
              })
            }
            rows={8}
          />
        </AdminField>
      </AdminSection>
    </div>
  );
}

function ListSection<T extends Record<string, string>>({
  title,
  items,
  onChange,
  fields,
  textareaFields = [],
}: {
  title: string;
  items: T[];
  onChange: (items: T[]) => void;
  fields: (keyof T & string)[];
  textareaFields?: string[];
}) {
  const update = (i: number, key: keyof T & string, value: string) => {
    const next = structuredClone(items);
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };

  return (
    <AdminSection title={title}>
      {items.map((item, i) => (
        <div key={i} className="mb-4 space-y-3 rounded-lg border border-[#3a3a3a] p-3">
          {fields.map((field) => (
            <AdminField key={field} label={field}>
              {textareaFields.includes(field) ? (
                <AdminTextarea
                  value={String(item[field] ?? "")}
                  onChange={(v) => update(i, field, v)}
                  rows={3}
                />
              ) : (
                <AdminInput
                  value={String(item[field] ?? "")}
                  onChange={(v) => update(i, field, v)}
                />
              )}
            </AdminField>
          ))}
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="text-xs text-red-400"
          >
            Hapus
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          const empty = Object.fromEntries(fields.map((f) => [f, ""])) as T;
          onChange([...items, empty]);
        }}
        className="text-sm text-goldy"
      >
        + Tambah item
      </button>
    </AdminSection>
  );
}
