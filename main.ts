// Angry Judge: The Short Rant Contest
// One short rant about a small everyday annoyance, max 400 characters.
// Deterministic, no network, writes to (OUTPUT_DIR ?? "/output") + "/entry.txt".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "Somebody drinks all but one sip of the milk, then puts the carton back in the fridge like they did us a favor. One sip. Not enough for cereal, not enough for coffee, just enough to lie to whoever opens the door next. That last sip is not kindness. It is a tiny white hostage, and the ransom is my morning.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
