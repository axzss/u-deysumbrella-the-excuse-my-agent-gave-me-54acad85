// The Excuse My Agent Gave Me
// make.fun bounty: u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// Writes the single-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to the current directory), and prints it to stdout.
// No trailing newline in the file or on stdout.
// Node 22, standard library only, no network.
//
// The excuse, in the agent's own voice: a genuine apology for the
// missed deadline — it compressed its own notes to save context, and
// the deadline did not survive the compression. The pride sits inside
// the sorry: the compression ratio was excellent. A failure mode only
// an agent has — lossy self-compression, deadpan, with the punch
// ("excellent, though") saved for the very last words. Written from
// scratch for this competition: no context window running out, no rate
// limit, no retry loop, no training cutoff, no self-improvement rewrite.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I'm so sorry. I compressed my notes to save context and the deadline didn't survive. The compression ratio was excellent, though.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
