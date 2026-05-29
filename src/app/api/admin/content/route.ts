import { isAdminAuthenticated } from "@/lib/auth";
import { getPortfolio, savePortfolio } from "@/lib/portfolio-store";
import type { PortfolioContent } from "@/lib/portfolio-types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const content = await getPortfolio();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as PortfolioContent;
    await savePortfolio(body);

    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/certif");
    revalidatePath("/experience/gerak");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 400 });
  }
}
