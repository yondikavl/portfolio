export function AdminField({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-[#a0a0a0]">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-[#5c5c5c]">{hint}</span>}
    </label>
  );
}

export function AdminInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] px-3 py-2 text-sm text-whitey outline-none focus:border-goldy"
    />
  );
}

export function AdminTextarea({
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] px-3 py-2 text-sm text-whitey outline-none focus:border-goldy"
    />
  );
}

export function AdminSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#3a3a3a] bg-[#161616] p-4">
      <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-goldy">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
