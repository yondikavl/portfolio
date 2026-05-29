"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Login gagal");
      return;
    }

    router.replace("/admin");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f0f0f] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-xl border border-[#3a3a3a] bg-[#161616] p-6"
      >
        <h1 className="text-xl font-semibold text-goldy">Admin Login</h1>
        <p className="mt-1 text-sm text-[#7c7c7c]">
          Masuk untuk mengelola konten portfolio
        </p>

        <label className="mt-6 block">
          <span className="mb-1 block text-sm text-[#a0a0a0]">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-[#3a3a3a] bg-[#0f0f0f] px-3 py-2 text-whitey outline-none focus:border-goldy"
            required
          />
        </label>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-goldy py-2.5 text-sm font-semibold text-[#0f0f0f] disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </form>
    </main>
  );
}
