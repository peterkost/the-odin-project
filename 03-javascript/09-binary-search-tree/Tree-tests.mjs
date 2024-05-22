import { randomInt } from "node:crypto";
import BST from "./Tree.mjs";
import assert from "node:assert";

const ARRAY_LEN = 16;
const INITIAL_ARRAY_MAX_EL = 100;

const array = [];
for (let i = 0; i < ARRAY_LEN; i++) {
  array.push(randomInt(INITIAL_ARRAY_MAX_EL));
}
const bst = new BST(array);
const printTree = () => {
  bst.prettyPrint();
  console.log("In order:\n", bst.inOrder());
  console.log("Pre order:\n", bst.preOrder());
  console.log("Post order:\n", bst.postOrder());
  console.log("Level order:\n", bst.levelOrder());
};

assert.equal(bst.find(-1), null);
assert.equal(bst.find(array[3]).val, array[3]);
bst.remove(array[3]);
assert.equal(bst.find(array[3]), null);
bst.insert(array[3]);
assert.equal(bst.find(array[3]).val, array[3]);
assert.equal(bst.depth(bst.root), 0);
assert.equal(bst.depth(bst.root.left.left), 2);

assert(bst.isBalanced());

const newArray = [];
for (let i = 0; i < ARRAY_LEN; i++) {
  newArray.push(randomInt(INITIAL_ARRAY_MAX_EL + 1, INITIAL_ARRAY_MAX_EL * 2));
}
newArray.forEach((n) => bst.insert(n));
assert.equal(bst.isBalanced(), false);
bst.rebalance();
assert(bst.isBalanced());
printTree();

console.log("All test cases passed! 🥳");
