import { getPortfolio } from "@/lib/portfolio-store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await getPortfolio();
  return NextResponse.json(content);
}
