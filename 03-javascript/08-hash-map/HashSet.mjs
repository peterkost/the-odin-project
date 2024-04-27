export class Node {
  constructor(key = null, next = null) {
    this.key = key;
    this.next = next;
  }
}

export default class HashSet {
  INITIAL_SIZE = 16;
  LOAD_FACTOR = 0.75;
  GROW_FACTOR = 2;

  constructor() {
    this.clear();
  }

  getBucket(key) {
    const i = this.hash(key);

    if (i < 0 || i >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.buckets[i];
    }
  }

  isOverLoaded() {
    return this.keys().length / this.buckets.length > this.LOAD_FACTOR;
  }

  grow() {
    const entries = this.entries();
    this.clear(this.buckets.length * this.GROW_FACTOR);
    entries.forEach((entry) => this.set(entry));
  }

  getNode(key) {
    let node = this.getBucket(key);
    node = node.next;
    while (node) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (prime * hashCode + key.charCodeAt(i)) % Number.MAX_SAFE_INTEGER;
    }
    return hashCode % this.buckets.length;
  }

  has(key) {
    return Boolean(this.getNode(key));
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }

    let nodeBefore = this.getBucket(key);
    while (nodeBefore.next.key !== key) {
      nodeBefore = nodeBefore.next;
    }
    nodeBefore.next = nodeBefore.next.next;
    return true;
  }

  length() {
    return this.keys().length;
  }

  clear(size = this.INITIAL_SIZE) {
    this.buckets = new Array(size);
    for (let i = 0; i < size; i++) {
      this.buckets[i] = new Node();
    }
  }

  keys() {
    return this.entries().map((entry) => entry[0]);
  }

  set(key) {
    if (this.isOverLoaded()) {
      this.grow();
    }

    if (!this.has(key)) {
      let bucketNode = this.getBucket(key);
      while (bucketNode.next) {
        bucketNode = bucketNode.next;
      }
      bucketNode.next = new Node(key);
    }
  }

  get(key) {
    return this.has(key) ? key : null;
  }

  entries() {
    return this.buckets.flatMap((node) => {
      const bucketEntries = [];
      node = node.next;
      while (node) {
        bucketEntries.push(node.key);
        node = node.next;
      }
      return bucketEntries;
    });
  }
}
