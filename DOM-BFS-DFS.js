const BFSTraverse = (rootNodes, rootLayer) => {
      const roots = Array.from(rootNodes)
      const rootsLayer = [] // Store the hierarchy of each node in a single array
      // Initialization
      for (let i = 0; i < roots.length; i++) {
        rootsLayer.push(rootLayer)
      }
      var rootIdx = 0 // Record the number of nodes in the current processing roots to facilitate finding the corresponding levels in rootsLayer
      while (roots.length) {
        const root = roots.shift() // Team out
        printInfo(root, rootsLayer[rootIdx])
        // If there are children, place them in the roots queue
        if (root.children.length) {
          Array.prototype.push.apply(roots, Array.from(root.children))
          // Add the current level to 1 to get the level of the child node
          rootLayer = rootsLayer[rootIdx] + 1
          for (let i = 0; i < root.children.length; i++) {
            rootsLayer.push(rootLayer)
          }
        }
        // Processing the next root node
        rootIdx++
      }
    }
    
    
    const DFSTraverse = (rootNodes, rootLayer) => {
      const roots = Array.from(rootNodes)
      while (roots.length) {
        const root = roots.shift()
        printInfo(root, rootLayer)
        // If there are child nodes, traverse them directly and add the hierarchy to 1
        if (root.children.length) {
          DFSTraverse(root.children, rootLayer + 1)
        }
      }
    }
    
    
    
    const printInfo = (node, layer) => {
      var str = ''
      for (let i = 1; i < layer; i++) {
        str += ' '
      }
      console.log(`${layer}:${str}${node.tagName} .${node.className}`);
    }
