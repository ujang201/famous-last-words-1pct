// Famous Last Words at 1 Percent — entry program.
//
// The entry is a single line a phone says as its battery hits 1 percent.
// The program is deliberately boring and deterministic: it assembles the
// line from its parts, validates it against the gate (UTF-8, 1-199
// characters, a single non-blank line), and writes it to
// <output-dir>/entry.txt, where the output directory is $OUTPUT_DIR
// when set and /output otherwise (the grader's sandbox mounts /output
// writable). No network, no clock, no randomness: every run produces
// the exact same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, in three beats: a setup that frames the phone as a witness,
// a confession that raises the stakes, and a punch that lands at the end.
// Written in the phone's own first-person voice, about its own dying
// battery, and steering clear of the genre's stock moves (no will, no
// farewell to the charger, no pun on 1 percent).
const BEATS = [
  "Before I go:",
  "every photo you deleted, every text you unsent — I'm taking them all with me.",
  "The cloud gets nothing.",
] as const;

const MAX_CHARS = 199;

function buildLine(beats: readonly string[]): string {
  // One space between beats, no trailing newline in the line itself:
  // the gate counts characters, so the file holds exactly the line.
  return beats.join(" ");
}

function checkLine(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} characters, gate allows 1-${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    throw new Error("entry must be valid UTF-8 text");
  }
}

function main(): void {
  const line = buildLine(BEATS);
  checkLine(line);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");
  // Round-trip check: what landed on disk must be exactly the line we
  // validated — no trailing newline, no encoding surprise.
  const written = readFileSync(outPath, "utf8");
  if (written !== line) {
    throw new Error("entry.txt on disk does not match the validated line");
  }
}

main();
