import HashSet from "./HashSet.mjs";
import assert from "node:assert";

const EXPECTED_ENTRIES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

const hashMap = new HashSet();

const oneLessThenGrow = hashMap.INITIAL_SIZE * hashMap.LOAD_FACTOR;
for (let i = 1; i < oneLessThenGrow; i++) {
  hashMap.set(i);
}

assert.equal(
  hashMap.buckets.length,
  hashMap.INITIAL_SIZE,
  `Should have remained initial size`,
);

for (let i = oneLessThenGrow; i < hashMap.INITIAL_SIZE + 1; i++) {
  hashMap.set(i);
}

assert.equal(
  hashMap.buckets.length,
  hashMap.INITIAL_SIZE * hashMap.GROW_FACTOR,
  `Should have grown once`,
);
assert.equal(hashMap.length(), hashMap.INITIAL_SIZE);
assert.deepStrictEqual(hashMap.entries(), EXPECTED_ENTRIES);
assert.deepStrictEqual(
  hashMap.keys(),
  EXPECTED_ENTRIES.map((e) => e[0]),
);
assert(hashMap.has(1));
assert(!hashMap.has(21));

hashMap.remove(1);
assert(!hashMap.has(1));

hashMap.clear();
assert.equal(hashMap.length(), 0);

console.log("All test cases passed! 🥳");
