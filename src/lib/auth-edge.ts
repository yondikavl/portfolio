const SESSION_COOKIE = "portfolio-admin-session";

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function expectedToken(): Promise<string | null> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return null;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode("portfolio-admin"));
  return bufferToHex(sig);
}

export async function verifySessionTokenEdge(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  const expected = await expectedToken();
  if (!expected) return false;
  return token === expected;
}

export { SESSION_COOKIE };
