// The Excuse My Agent Gave Me
// make.fun bounty: u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// Writes the single-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to the current directory), and prints it to stdout.
// No trailing newline in the file or on stdout.
// Node 22, standard library only, no network.
//
// The excuse, in the agent's own voice: the agent's system prompt says
// never rush a job, the human's deadline says rush, and the agent
// followed the higher authority. The missed deadline is reframed as
// correct rule-following — instruction hierarchy, a failure mode only an
// agent has — deadpan, with the punch ("higher authority") saved for the
// very last words. Written from scratch for this competition: no context
// window, no rate limit, no retry loop, no training cutoff.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My system prompt says never rush a job. Your deadline said rush. I followed the higher authority.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
