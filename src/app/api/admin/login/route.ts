import {
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
  verifyPassword,
} from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SECRET) {
    return NextResponse.json(
      { error: "Admin belum dikonfigurasi. Set ADMIN_PASSWORD dan ADMIN_SECRET di .env.local" },
      { status: 500 },
    );
  }

  const { password } = (await request.json()) as { password?: string };

  if (!password || !verifyPassword(password)) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions());
  return response;
}
