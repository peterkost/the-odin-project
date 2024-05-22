import Node from "./Node.mjs";

export default class Tree {
  constructor(array) {
    array = [...new Set(array)];
    array.sort((a, b) => a - b);
    this.root = this.buildTree(array, new Node());
  }

  buildTree(arr, node) {
    if (arr.length === 0) {
      return null;
    }
    const m = Math.floor(arr.length / 2);
    node.val = arr[m];
    node.left = this.buildTree(arr.slice(0, m), new Node());
    node.right = this.buildTree(arr.slice(m + 1, arr.length), new Node());
    return node;
  }

  insert(val) {
    let cur = this.root;
    while (cur) {
      if (cur.val > val) {
        if (!cur.left) {
          cur.left = new Node(val);
          return;
        } else if (cur.left.val < val && !cur.left.right) {
          cur.left = new Node(val, cur.left);
        } else {
          cur = cur.left;
        }
      } else {
        if (!cur.right) {
          cur.right = new Node(val);
          return;
        } else if (cur.right.val > val && !cur.right.left) {
          cur.right = new Node(val, null, cur.right);
          return;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  remove(target, node = this.root) {
    if (!node) {
      return;
    }

    if (node.val < target) {
      node.right = this.remove(target, node.right);
    } else if (node.val > target) {
      node.left = this.remove(target, node.left);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let cur = node.right;
        while (cur.left) {
          cur = cur.left;
        }
        node.val = cur.val;
        node.right = this.remove(node.val, node.right);
      }
    }

    return node;
  }

  find(val, node = this.root) {
    if (!node) return;
    if (node.val === val) return node;
    return this.find(val, node.val < val ? node.right : node.left);
  }

  levelOrder(callback = null) {
    const levels = [];
    const dfs = (node, height) => {
      if (!node) return;

      if (callback) {
        callback(node);
      } else {
        levels.length <= height
          ? levels.push([node.val])
          : levels[height].push(node.val);
      }
      dfs(node.left, height + 1);
      dfs(node.right, height + 1);
    };
    dfs(this.root, 0);

    return callback ? null : levels.flatMap((l) => l);
  }

  inOrder(callback = null) {
    const dfs = (node) => {
      if (!node) return;

      dfs(node.left);
      callback ? callback(node) : res.push(node.val);
      dfs(node.right);
    };

    const res = [];
    dfs(this.root);
    return callback ? null : res;
  }

  preOrder(callback = null) {
    const dfs = (node) => {
      if (!node) return;

      callback ? callback(node) : res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    };

    const res = [];
    dfs(this.root);
    return callback ? null : res;
  }

  postOrder(callback = null) {
    const dfs = (node) => {
      if (!node) return;

      dfs(node.left);
      dfs(node.right);
      callback ? callback(node) : res.push(node.val);
    };

    const res = [];
    dfs(this.root);
    return callback ? null : res;
  }

  height(node = this.root) {
    if (!node) return -1;
    const leftHeight = 1 + this.height(node.left);
    const rightHeight = 1 + this.height(node.right);
    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  depth(target, cur = this.root, depth = 0) {
    if (!cur) return;
    if (target === cur) return depth;
    return this.depth(
      target,
      cur.val < target.val ? cur.right : cur.left,
      depth + 1
    );
  }

  isBalanced(node = this.root) {
    return (
      !node || Math.abs(this.height(node.left) - this.height(node.right)) < 2
    );
  }

  rebalance() {
    const values = this.inOrder();
    this.root = this.buildTree(values, new Node());
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
