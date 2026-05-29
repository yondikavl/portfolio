import { isAdminAuthenticated } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const authenticated = await isAdminAuthenticated();
  return NextResponse.json({ authenticated });
}
