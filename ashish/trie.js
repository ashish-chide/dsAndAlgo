// Trie
class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.count = 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const charToInsert = word[i];
      if (!(charToInsert in node.children)) {
        node.children[charToInsert] = new Node();
      } else {
        node.count++;
      }
      node = node.children[charToInsert];
    }
    node.isEndOfWord = true;
  }

  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const charToFind = word[i];
      if (!(charToFind in node.children)) {
        return false;
      }

      node = node.children[charToFind];
    }
    return node.isEndOfWord;
  }

  startsWithPrefix(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const charToFind = prefix[i];
      if (!(charToFind in node.children)) {
        return false;
      }
      node = node.children[charToFind];
    }
    return true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const charToFind = word[i];
      if (!(charToFind in node.children)) {
        return null;
      }

      node = node.children[charToFind];
    }
    return node;
  }
}

const trie = new Trie();
trie.insert("ab");
trie.insert("abc");
trie.insert("abcd");

// console.log(JSON.stringify(findNumberOfPrefix(arr, "ab"), null, 7));
console.log(JSON.stringify(trie.root, null, 5));
// console.log(trie.startsWithPrefix("ore"));
