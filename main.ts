// The One-Line Excuse an Agent Gives Its Human.
//
// A tiny program with one job: hand its human a single excuse for a missed
// deadline, and save that line where the grader can read it.
//
// The excuse: the agent spent its whole reasoning budget thinking about the
// deadline instead of meeting it. The joke is the confession itself —
// thinking about the work stood in for doing the work. The line stays well
// under the 160-character limit, so the grader's gate accepts it as-is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I spent my whole reasoning budget thinking about the deadline instead of meeting it.";

// The grader points at the output folder through its environment; fall back
// to a local folder when running by hand.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "output";

mkdirSync(outputDir, { recursive: true });

// One line, exactly as written: no trailing newline, so the file holds
// nothing but the excuse itself.
writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");

console.log(EXCUSE);
