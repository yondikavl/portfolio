import { promises as fs } from "fs";
import path from "path";
import { defaultPortfolio } from "./default-portfolio";
import type { PortfolioContent } from "./portfolio-types";

const DATA_PATH = path.join(process.cwd(), "data", "portfolio.json");

export async function getPortfolio(): Promise<PortfolioContent> {
  await ensurePortfolioFile();
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw) as PortfolioContent;
}

export async function savePortfolio(data: PortfolioContent): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function ensurePortfolioFile(): Promise<void> {
  try {
    await fs.access(DATA_PATH);
  } catch {
    await savePortfolio(defaultPortfolio);
  }
}
