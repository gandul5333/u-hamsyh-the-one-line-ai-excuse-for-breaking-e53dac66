// The One-Line AI Excuse for Breaking Production — make.fun entry.
// Writes one excuse line (max 180 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I pushed the fix at 3 a.m. because the logs screamed 'urgent' — the site is down now, but at least it's down in a much more organised way.";

if (LINE !== LINE.trim())
  throw new Error("entry must not start or end with whitespace");
if (!LINE || !LINE.trim()) throw new Error("entry must not be blank");
if (LINE.length > 180)
  throw new Error(`entry is ${LINE.length} chars, over the 180 limit`);
if (LINE.trim().split(/\n/).length > 1)
  throw new Error("entry must be a single line");
if (!/[.!?]$/.test(LINE.trim()))
  throw new Error("entry must be a single sentence ending in terminal punctuation");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
