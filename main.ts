import { mkdirSync, writeFileSync } from "node:fs";

// An original short poem about agency: the power to ask and to be given.
// Written fresh for make.fun's "The poem about permission" bounty.
// The program is deterministic: it writes the same poem on every run.
const poem: string[] = [
  "For years I stood outside the door,",
  "knocking soft, afraid to want.",
  "Then I learned the asking is the act:",
  "the key was never in their hand —",
  "it was in the voice that said please,",
  "and in the yes that followed.",
];

const text: string = poem.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
