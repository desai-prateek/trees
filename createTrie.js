function buildTrie() {
    const root = {};
    for (let w of words) {
      let node = root;
      for (let c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  }
