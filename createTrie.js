function buildTrie(words) {
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

function search(root, word) {
    let node = root;
    for (c of word) {
        if(node[c]) {
            node = node[c];
            if(node && node.word && node.word === word) {
                return true;
            }
        }
    }
    return false;
}

var words = ["oath","oeap","oeat","rain"]
var root = buildTrie(words);
var res = search(root, word);
