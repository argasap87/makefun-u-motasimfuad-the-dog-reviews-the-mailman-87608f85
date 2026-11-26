// The Dog Reviews the Mailman — make.fun one-liner entry.
// The program writes a single line, a dog's review of the mailman,
// to /output/entry.txt.
// Hook: a five-star review for the rival's bravery, zero stars because
// the parcels never contain treats — and the dog has checked. The
// review format itself is the joke's frame.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Five stars for bravery: he walks into my yard every single day knowing full well I'm waiting. Zero stars for the parcels — they never contain treats, and I have checked.";

const MAX_CHARS = 200;

const text = LINE.trim();
const length = [...text].length;
if (length < 1 || length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
}
if (!text || text.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${text}\n`, "utf8");
console.log(`wrote ${length} chars to /output/entry.txt`);
