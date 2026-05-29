import { writeFileSync, mkdirSync } from "fs";
import { defaultPortfolio } from "../src/lib/default-portfolio";

mkdirSync("data", { recursive: true });
writeFileSync(
  "data/portfolio.json",
  JSON.stringify(defaultPortfolio, null, 2),
  "utf-8",
);
console.log("Seeded data/portfolio.json");
