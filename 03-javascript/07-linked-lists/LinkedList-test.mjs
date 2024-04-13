import LinkedList from "./LinkedList.mjs";
import assert from "node:assert";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(0);

const size = linkedList.size();
assert.equal(size, 4, `Size should have been 1, got ${size}`);

const head = linkedList.head().value;
assert.equal(head, 0, `Head should have a value of 4, got ${head}`);

const tail = linkedList.tail().value;
assert.equal(tail, 3, `Tail should have been 3, got ${tail}`);

const at = linkedList.at(2).value;
assert.equal(at, 2, `Value 2 should have been at index 2, got ${at}`);

linkedList.pop();
const tailAfterPop = linkedList.tail().value;
assert.equal(
  tailAfterPop,
  2,
  `Tail value should have been 2 after pop, got ${tailAfterPop}`,
);

const contains = linkedList.contains(1);
assert(contains, `Should have contained 1`);
const doesNotContain = linkedList.contains(16);
assert(!doesNotContain, `Should not have contained 16`);

const find = linkedList.contains(1);
assert.equal(find, 1, `1 should have been found at index 1, got ${1}`);
const notFind = linkedList.find(16);
assert.equal(
  notFind,
  null,
  `Find 16 should have returned null, got ${notFind}`,
);

const str = linkedList.toString();
const expectedStr = "( 0 ) -> ( 1 ) -> ( 2 ) -> null";
assert.equal(
  str,
  expectedStr,
  `To string does not match (expected, actual)\n'${expectedStr}'\n'${str}'`,
);

const sizeBeforeInsertAt = linkedList.size();
linkedList.insertAt(16, 1);
assert.equal(linkedList.size(), sizeBeforeInsertAt + 1);
assert.equal(linkedList.find(16), 1);

assert(linkedList.find(16));
linkedList.removeAt(1);
assert(!linkedList.find(16));

console.log("All test cases passed! 🥳");
