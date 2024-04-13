class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class MyLinkedList {
  constructor() {
    this.h = new Node();
    this.length = 0;
  }

  append(val) {
    const tail = this.at(this.length - 1);
    tail.next = new Node(val);

    this.length += 1;
  }

  prepend(val) {
    this.h.next = new Node(val, this.h.next);

    this.length += 1;
  }

  size() {
    return this.length;
  }

  head() {
    return this.h.next;
  }

  tail() {
    return this.at(this.length - 1);
  }

  at(index) {
    if (index > this.length) return -1;

    let i = -1;
    let cur = this.h;
    while (i !== index) {
      cur = cur.next;
      i += 1;
    }
    return cur;
  }

  pop() {
    this.removeAt(this.length - 1);
  }

  contains(value) {
    let cur = this.h.next;
    while (cur) {
      if (cur.value === value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  find(value) {
    let cur = this.h.next;
    let i = 0;
    while (cur) {
      if (cur.value === value) {
        return i;
      }
      i += 1;
      cur = cur.next;
    }
    return null;
  }

  toString() {
    let res = "";
    let cur = this.h;
    while (cur != null) {
      if (cur.next) {
        res += `( ${cur.next.value} ) -> `;
      } else {
        res += "null";
      }
      cur = cur.next;
    }
    return res;
  }

  insertAt(val, index) {
    if (index > this.length) return;

    const nodeBefore = this.at(index - 1);
    nodeBefore.next = new Node(val, nodeBefore.next);

    this.length += 1;
  }

  removeAt(index) {
    if (index >= this.length) return;

    const oneBefore = this.at(index - 1);
    oneBefore.next = oneBefore.next ? oneBefore.next.next : null;

    this.length -= 1;
  }
}
