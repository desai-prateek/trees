Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true


/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.root = new Node();
    }
}

class Node {
  constructor(ch) {
    this.val = ch;
    this.children = new Map();
    this.isEnd = false;
  }
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let index = this.root;
    for (let ch of word) {
      const node = index.children.get(ch) || new Node(ch);
      index.children.set(ch, node);
      index = node;
    }
    index.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let index = this.root;
    for (let ch of word) {
        index = index.children.get(ch);
        if(!index) return false
    }
    
    return index.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let index = this.root;
    for (let ch of prefix) {
        index = index.children.get(ch);
        if(!index) return false
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
