// MeowTranslate: a cat-meow translator app that confidently translates every meow as "I'm bored" — the worst app idea ever pitched.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "MeowTranslate uses AI to translate your cat's meows into English with 97% accuracy, and every translation is 'I'm bored' — because radical honesty is the feature, not the bug, and Premium unlocks the same answer in 40 languages.";

// Runtime validation: one sentence, at most 240 characters, never empty.
if (ENTRY.length === 0) {
  throw new Error("Entry text must not be empty.");
}
if (ENTRY.length > 240) {
  throw new Error(
    `Entry text is ${ENTRY.length} characters, over the 240-character limit.`,
  );
}
const body = ENTRY.slice(0, -1);
if (!ENTRY.endsWith(".") || /[.!?]/.test(body)) {
  throw new Error("Entry text must be a single sentence.");
}

// Write the entry with no trailing newline to the absolute /output mount
// point the grader reads from. The directory is created if missing and is
// never deleted.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`Wrote entry (${ENTRY.length} characters) to /output/entry.txt`);
