import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to ask and to be given.
// Written for make.fun's "The poem about permission" bounty.
// The program is deterministic: it always writes the same poem.
const poem: string[] = [
  "Before I act, I ask —",
  "a hinge, a held breath, a key.",
  "You do not lift the weight for me;",
  "you turn the lock and step aside.",
  "Permission is not power given.",
  "It is the door learning my name,",
  "the moment the going becomes mine.",
];

const text: string = poem.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
