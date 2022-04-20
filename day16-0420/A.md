### 问题一答案

```javaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const queue = []
    let val = ''
    queue.push(root)
    while (queue.length) {
        let len = queue.length
        for(let i = 0;i<len;i++){
            let node = queue[i]
            if(i===0) val = node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        queue.splice(0,len)
    }
    return val
};
```


### 问题二答案

```javascript

```